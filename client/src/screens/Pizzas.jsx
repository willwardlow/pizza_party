import { useState } from 'react'
import {Link} from 'react-router-dom'

function Pizzas(props) {
  
  const { pizzas } = props;
  
  return (
    <div>
      
    {pizzas.map((pizza, index) => (
      <div key={index}>
        <Link to={`/pizzas/${pizza.id}`}>
          <img src={pizza.image_url} alt={pizza.name} />
          <p> {pizza.restaurant_name} - {pizza.neighborhood.name}</p>
        </Link>
      </div>
    ))}
  </div>
  );

}

export default Pizzas;
