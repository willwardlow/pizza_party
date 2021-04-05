import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import { destroyPizza, getAllPizzas, postAPizza } from '../services/pizzas'

import Pizzas from '../screens/Pizzas'
import PizzasDetail from '../screens/PizzasDetail'
import PizzaCreate from '../screens/PizzaCreate'

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
    setPizzas(prevState => prevState.filter(food =>food.id !== id))
  }

  const handleCreate = async (pizzaData) => {
    const newPizza = await postAPizza(pizzaData);
    setPizzas(prevState => [...prevState, newPizza]);
    history.push('/pizzas')
  }
  return (
    <Switch>
      <Route path='/pizzas/new'>
        <PizzaCreate handleCreate={handleCreate} neighborhoods={neighborhoods} />
      </Route>

      <Route path='/pizzas/:id/edit'>

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
