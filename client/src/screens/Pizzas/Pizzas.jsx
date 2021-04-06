import { Link } from 'react-router-dom'
import './Pizzas.css'

function Pizzas(props) {
  
  const { pizzas } = props;
  
  return (
    <div className='pizzas-container'> 
    {pizzas.map((pizza, index) => (
      <div className='pizza' key={index}>
        <Link to={`/pizzas/${pizza.id}`}>
          <img src={pizza.image_url} alt={pizza.name} />
          <p> {pizza.restaurant_name}</p>
          <p>{pizza.neighborhood.name}</p>
        </Link>
      </div>
    ))}
  </div>
  );

}

export default Pizzas;
