import { useState, useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom';

import { getAllPizzas } from '../services/pizzas'

import Pizzas from '../screens/Pizzas'

function MainContainer(props) {

  const [pizzas, setPizzas] = useState([]);
  const history = useHistory();

  // const { currentUser } = props;

  useEffect(() => {
    const getPizzas = async () => {
      const pizzaList = await getAllPizzas();
      setPizzas(pizzaList);
    }
    getPizzas();
  }, [])

  return (
    <Switch>
      <Route path='/pizzas'>
        <Pizzas pizzas={pizzas} />
      </Route>
      <Route path='/pizzas/:id'>

      </Route>
    </Switch>
  )
}

export default MainContainer
