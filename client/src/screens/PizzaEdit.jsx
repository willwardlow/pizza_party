import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

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
        cityArea: pizzaItem.cityArea,
        neighborhood_id: pizzaItem.neighborhood.id
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
     <form onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData)
    }}>

      <h3> Add a Pizza to the Party!</h3>

      <label> Restaurant Name:</label>
      <input type='text'
        name='restaurant_name'
        placeholder='Enter name of restaurant'
        value={restaurant_name}
        onChange={handleChange}
        required />
      
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

      <label htmlFor='neighborhood_id'></label>
      Select neighborhood:
      <select name='neighborhood_id' defaultValue='default' onChange={handleChange}>
        <option value='default' disabled> -- Select A Neighborhood --</option>
        {filterNeighborhoods().map((neighborhood, index) => (
          <option key={index} value={neighborhood.id}>{neighborhood.name}</option>
        )
        )}
      </select>
      
      <label htmlFor='pizza_type'> Type of Pizza:</label>
      <select name='pizza_type' defaultValue='default' onChange={handleChange} required>
        <option value='default' disabled> -- Select Pizza Type--</option>
        <option value='Thin Crust'>Thin Crust</option>
        <option value='Deep Dish'>Deep Dish</option>
        </select >

      <label htmlFor='image_url'> Enter a link to this pizza's image </label>
      <input type='text'
        name='image_url'
        placeholder='www.imagelink.com'
        value={image_url}
        required
        onChange={handleChange}/>
      
      <label htmlFor='description'> Enter a description:</label>
      <textarea
        rows='20'
        cols='10'
        required
        name='description'
        value={description}
        placeholder='Mountains of cheese and toppings'
        onChange={ handleChange}/>
      
      <button>Submit Pizza</button>
    </form>
  )
}
