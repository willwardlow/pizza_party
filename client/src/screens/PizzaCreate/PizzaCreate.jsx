import { useState } from 'react'
import './PizzaCreate.css'

export default function PizzaCreate(props) {

  const [formData, setFormData] = useState({
    restaurant_name: '',
    description: '',
    neighborhood_id: '',
    pizza_type: '',
    image_url: ''
  })
  const {restaurant_name, description, neighborhood_id, pizza_type, image_url} = formData
  const [cityArea, setCityArea] = useState('')

  const { handleCreate, neighborhoods } = props

  const filterNeighborhoods = () => {
    return neighborhoods.filter((neighborhood) => {
       return neighborhood.city_area === cityArea
     })
   }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
    
  }

  return (
    <div className='create-container' >
    <form onSubmit={(e) => {
      e.preventDefault();
      handleCreate(formData)
    }}>

        <h3> Add a Pizza to the Party!</h3>
        
      <div className='create-restaurant'>
      <label> Restaurant Name:</label>
      <input type='text'
        name='restaurant_name'
        placeholder='Restaurant'
        value={restaurant_name}
        onChange={handleChange}
            required />
        </div>
        
        <div className='create-city-area'>
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

      <div className='create-neighborhood'>
      <label htmlFor='neighborhood_id'></label>
      Neighborhood:
      <select name='neighborhood_id' defaultValue='default' onChange={handleChange}>
        <option value='default' disabled> -- Select A Neighborhood --</option>
        {filterNeighborhoods().map((neighborhood, index) => (
          <option key={index} value={neighborhood.id}>{neighborhood.name}</option>
        )
        )}
          </select>
        </div>
        
      <div className='create-pizza-type'>
      <label htmlFor='pizza_type'> Type of Pizza:</label>
      <select name='pizza_type' defaultValue='default' onChange={handleChange} required>
        <option value='default' disabled> -- Select Pizza Type--</option>
        <option value='Thin Crust'>Thin Crust</option>
        <option value='Deep Dish'>Deep Dish</option>
          </select >
      </div>

        <div className='create-image'>
      <label htmlFor='image_url'> Pizza Link Image:</label>
      <input type='text'
        name='image_url'
        placeholder='www.imagelink.com'
        value={image_url}
        required
            onChange={handleChange} />
          </div>
      
        <div className='create-description'>
      <label htmlFor='description'> Enter a description:</label>
      <textarea
        rows='10'
        cols='40'
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
