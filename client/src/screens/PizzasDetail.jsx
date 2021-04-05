import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import { getOnePizza } from '../services/pizzas';


export default function PizzasDetail(props) {

  const [pizza, setPizza] = useState(null);
  const{handleDelete} = props
  const { id } = useParams();

  useEffect(() => {
    const getAPizza = async () => {
      const pizzaInfo = await getOnePizza(id);
      setPizza(pizzaInfo)
    }
    getAPizza()
  }, [id])
  

  return (
    <div>
      <h3>{pizza?.restaurant_name}</h3>
      <img src={pizza?.image_url} alt={pizza?.restaurant_name} />
      <h3>Restaurant Name: {`${pizza?.restaurant_name}`}</h3>
      <h4>Neighborhood: {`${pizza?.neighborhood.name}`}</h4>
      <h4>City Area: {`${pizza?.neighborhood.city_area}`}</h4>
      <h5>Submitted By: { `${pizza?.user.username}`}</h5>
      <p>Description: {`${pizza?.description}`}</p>
      {/* { currentUser?.id === pizza?.user.id ?  */}
        <>
          <Link to={`/pizzas/${pizza?.id}/edit`}>
            <button>Update</button>
        </Link>
        <button onClick={handleDelete}> Delete</button>
        </> 

           
    </div>
  )
}
