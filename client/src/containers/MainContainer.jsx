import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import { destroyPizza, getAllPizzas, postAPizza, putAPizza } from '../services/pizzas'
import { restaurantAZ, restaurantZA, neighborhoodAZ, neighborhoodZA } from '../utils/sort'

import Pizzas from '../screens/Pizzas/Pizzas'
import PizzasDetail from '../screens/PizzaDetails/PizzasDetail'
import PizzaCreate from '../screens/PizzaCreate/PizzaCreate'
import PizzaEdit from '../screens/PizzaEdit/PizzaEdit';
import Landing from '../screens/Landing/Landing';

function MainContainer(props) {

  const [pizzas, setPizzas] = useState([]);
  const [queriedPizzas, setQueriedPizzas] = useState([])
  const [sortType, setSortType] = useState([])
  const history = useHistory();

  const { currentUser, neighborhoods } = props;

  useEffect(() => {
    const getPizzas = async () => {
      const pizzaList = await getAllPizzas();
      setPizzas(pizzaList);
      setQueriedPizzas(pizzaList);
    }
    getPizzas();
  }, [])

  const handleDelete = async (id) => {
    await destroyPizza(id);
    setPizzas(prevState => prevState.filter(pizza => pizza.id !== Number(id)))
    history.push('/pizzas')
  }

  const handleCreate = async (pizzaData) => {
    const newPizza = await postAPizza(pizzaData);
    setPizzas(prevState => [...prevState, newPizza]);
    history.push('/pizzas')
  }

  const handleUpdate = async (id, pizzaData) => {
    const updatedPizza = await putAPizza(id, pizzaData);
    setPizzas(prevState => prevState.map(pizza => {
      return pizza.id === Number(id) ? updatedPizza : pizza
    }))
    history.push('/pizzas')
  }

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "restaurant-ascending":
        setQueriedPizzas(restaurantAZ(queriedPizzas))
        break
      case "restaurant-descending":
        setQueriedPizzas(restaurantZA(queriedPizzas))
        break
      case "neighborhood-ascending":
        setQueriedPizzas(neighborhoodAZ(queriedPizzas))
        break
      case "neighborhood-descending":
        setQueriedPizzas(neighborhoodZA(queriedPizzas))
        break
      default:
        break
    }
  }

  const handleFilter = (e) => {
    const newQueriedPizzas = pizzas.filter(pizza => pizza.restaurant_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pizza.neighborhood.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
      pizza.neighborhood.city_area.toLowerCase().includes(e.target.value.toLowerCase()))
    setQueriedPizzas(newQueriedPizzas, () => handleSort(sortType))
  } 
  return (
    <Switch>
      <Route path='/pizzas/new'>
        <PizzaCreate handleCreate={handleCreate} neighborhoods={neighborhoods} />
      </Route>
      <Route path='/pizzas/:id/edit'>
        <PizzaEdit pizzas={pizzas} handleUpdate={handleUpdate} neighborhoods={neighborhoods}/>
      </Route>
      <Route path='/pizzas/:id'>
        <PizzasDetail currentUser={currentUser} handleDelete={handleDelete}/>
      </Route>
      <Route path='/pizzas'>
        <Pizzas queriedPizzas={queriedPizzas} handleFilter={handleFilter} handleSort={handleSort}/>
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
      
    </Switch>
  )
}

export default MainContainer
