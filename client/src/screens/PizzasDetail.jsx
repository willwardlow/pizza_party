import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { getOnePizza } from '../services/pizzas';


export default function PizzasDetail() {

  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAPizza = async () => {
      const pizzaInfo = await getOnePizza(id);
      setPizza(pizzaInfo)
    }
  }, [])
  
  const handleChange = (e) => {
    const { value } = e.target
  }
  return (
    <div>
      
    </div>
  )
}
