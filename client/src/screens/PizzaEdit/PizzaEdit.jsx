import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './PizzaEdit.css'

export default function PizzaEdit(props) {
  const [formData, setFormData] = useState({
    restaurant_name: '',
    neighborhood_id: '',
    description: '',
    pizza_type: '',
    image_url: '',
  })

  const [cityArea, setCityArea] = useState('')

  const { restaurant_name, neighborhood_id, description, pizza_type, image_url } = formData
  const { id } = useParams();

  const { pizzas, handleUpdate, neighborhoods} = props;

  useEffect(() => {
    const prefillFormData = () => {
      const pizzaItem = pizzas.find(pizza => pizza.id === Number(id));
      setFormData({
        restaurant_name: pizzaItem.restaurant_name,
        description: pizzaItem.description,
        image_url: pizzaItem.image_url,
        pizza_type: pizzaItem.pizza_type,
        cityArea: neighborhoods.find(neighborhood => neighborhood.cityArea === pizzaItem.neighborhood.cityArea),
        neighborhood_id: neighborhoods.find(neighborhood => neighborhood.id === pizzaItem.neighborhood_id)
      })
    }
    if (pizzas.length) {
      prefillFormData();
    }
  }, [pizzas, id])

  const filterNeighborhoods = () => {
    return neighborhoods.filter((neighborhood) => {
       return neighborhood.city_area === cityArea
     })
   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  
  return (
    <div className='edit-container' >
      <h3> Update A Pizza</h3> 
     <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData)
      }}>
      
        <div className='edit-restaurant'>
      <label> Restaurant Name:</label>
      <input type='text'
        name='restaurant_name'
        placeholder='Enter name of restaurant'
        value={restaurant_name}
        onChange={handleChange}
            required />
          </div>
      
        <div className='edit-area'>
      <label htmlFor='city-area'>
            City Area:
      </label>
        
        
      <select name='city_area' defaultValue='default' required onChange={(e) => setCityArea(e.target.value)}>
        <option value='default' disabled> -- City Area -- </option>
        <option value='C'>Central</option>
        <option value='NW'>Northwest</option>
        <option value='N'>North</option>
        <option value='S'>South</option>
        <option value='SW'>Southwest</option>
        <option value='W'>West</option>
          </select>
        </div>
        
        <div className='edit.neighborhood'>
      <label htmlFor='neighborhood_id'></label>
      Select neighborhood:
      <select name='neighborhood_id' defaultValue='default' onChange={handleChange}>
        <option value='default' disabled> -- Select A Neighborhood --</option>
        {filterNeighborhoods().map((neighborhood, index) => (
          <option key={index} value={neighborhood.id}>{neighborhood.name}</option>
        )
        )}
          </select>
          </div>
      
        <div className='edit-pizza-type'>
      <label htmlFor='pizza_type'> Type of Pizza:</label>
      <select name='pizza_type' defaultValue='default' onChange={handleChange} required>
        <option value='default' disabled> -- Select Pizza Type--</option>
        <option value='Thin Crust'>Thin Crust</option>
        <option value='Deep Dish'>Deep Dish</option>
          </select >
          </div>

        <div className='edit-image'>

      <label htmlFor='image_url'> Enter a link to this pizza's image </label>
      <input type='text'
        name='image_url'
        placeholder='www.imagelink.com'
        value={image_url}
        required
            onChange={handleChange} />
        </div>
        
        <div className='edit-description'>
      <label htmlFor='description'> Enter a description:</label>
      <textarea
        rows='10'
        cols='30'
        required
        name='description'
        value={description}
        placeholder='Mountains of cheese and toppings'
            onChange={handleChange} />
      </div>
      
      <button>Submit Pizza</button>
      </form>
      </div>
  )
}
