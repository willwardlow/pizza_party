import { useState } from 'react';

import './Register.css'

function Register(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    neighborhood_id: '',
  })

  const [cityArea, setCityArea] = useState('')


  const { username, email, password, neighborhood_id } = formData
  const { handleRegister, neighborhoods } = props;


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
    <div className='register-container'>
      <div className='register-form'>
        <p className='form-text'> New to the site? <br/> Register below</p>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData)
      }}>

      <div className='new-username' >
      <label htmlFor='username'>
        Create Username:
        </label>
      <input
        type='text'
        name='username'
        placeholder='Enter Username'
        value={username}
        onChange={handleChange}
            required />
      </div>
      
      <div className='new-email'>
      <label htmlFor='email'>
        Email:
      </label>
      <input
        type='text'
        name='email'
        placeholder='you@example.com'
        value={email}
        onChange={handleChange}
        required />
          </div>
      
      <div className='new-password'>
      <label htmlFor='password'>
        Enter Password:
      </label>
      <input
        type='password'
        name='password'
        placeholder='Min 6 Characters'
        value={password}
        onChange={handleChange}
          required />
      </div>
      
      <div className='city-area'>
      <label htmlFor='city-area'>
        Part of Chicago?
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

      <div className='new-neighborhood'>
      <label htmlFor='neighborhood_id'>
        Neighborhood?
      </label>
      <select name='neighborhood_id' defaultValue='default' onChange={handleChange}>
        <option value='default' disabled> -- Select A Neighborhood --</option>
        {filterNeighborhoods().map((neighborhood, index) => (
          <option key={index} value={neighborhood.id}>{neighborhood.name}</option>
        )
        )}
      </select>
      </div>

      <button>Submit</button>
      </form>
      </div>
      <img className='map' src='https://i.imgur.com/hwotu30.png' alt='chicago-map' />
      </div>
  );

}
  export default Register;
