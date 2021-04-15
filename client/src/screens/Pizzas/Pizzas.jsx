import { Link } from 'react-router-dom'
import Filter from '../../components/Filter/Filter';
import Sort from '../../components/Sort/Sort';
import './Pizzas.css'

function Pizzas(props) {
  
  const { queriedPizzas, handleFilter, handleSort } = props;

  
  return (
    <>
      <div className='filter-and-sort'>
        <Filter onChange={handleFilter} />
        <Sort onChange={handleSort} />
      </div>
    <div className='pizzas-container'>
    {queriedPizzas.map((pizza, index) => (
      <div className='pizza' key={index}>
        <Link to={`/pizzas/${pizza.id}`}>
          <img src={pizza.image_url} alt={pizza.name} />
          <p> {pizza.restaurant_name}</p>
          <p>{pizza.neighborhood.name}</p>
        </Link>
      </div>
    ))}
      </div>
  </>
  );

}

export default Pizzas;
