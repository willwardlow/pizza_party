import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import { getOnePizza } from '../../services/pizzas';
import './PizzaDetails.css'

export default function PizzasDetail(props) {

  const [pizza, setPizza] = useState(null);
  const{currentUser, handleDelete} = props
  const { id } = useParams();

  useEffect(() => {
    const getAPizza = async () => {
      const pizzaInfo = await getOnePizza(id);
      setPizza(pizzaInfo)
    }
    getAPizza();
  }, [id])
  

  return (
    <div className='pizza-details'>
      <img src={pizza?.image_url} alt={pizza?.restaurant_name} />
      <div className='details-text'>
      <div className='label'>Restaurant Name: {`${pizza?.restaurant_name}`} </div>
      <div className='label'>Neighborhood: {`${pizza?.neighborhood.name}`} </div>
      <div className='label'>City Area: {`${pizza?.neighborhood.city_area}`}</div> 
      <div className='label'>Submitted By: { `${pizza?.user.username}`}</div>
      <div className='label'>Description: {`${pizza?.description}`}</div>
        
      { currentUser?.id === pizza?.user.id &&
        <div className='details-buttons'>
          <Link to={`/pizzas/${pizza?.id}/edit`}>
            <button className='update'>Update</button>
          </Link>
          <button className='delete' onClick={() => handleDelete(id)}> Delete</button>
          </div>
        }
        </div>

    </div>
  )
}
