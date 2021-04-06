import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import { destroyPizza, getAllPizzas, postAPizza, putAPizza } from '../services/pizzas'

import Pizzas from '../screens/Pizzas/Pizzas'
import PizzasDetail from '../screens/PizzaDetails/PizzasDetail'
import PizzaCreate from '../screens/PizzaCreate/PizzaCreate'
import PizzaEdit from '../screens/PizzaEdit/PizzaEdit';

function MainContainer(props) {

  const [pizzas, setPizzas] = useState([]);
  const history = useHistory();

  const { currentUser, neighborhoods } = props;

  useEffect(() => {
    const getPizzas = async () => {
      const pizzaList = await getAllPizzas();
      setPizzas(pizzaList);
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
        <Pizzas pizzas={pizzas} />
      </Route>
      
    </Switch>
  )
}

export default MainContainer
