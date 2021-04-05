import { useState } from 'react';

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData)
    }}>
      <label htmlFor='username'>
        Username:
        </label>
      <input
        type='text'
        name='username'
        placeholder='Enter Username'
        value={username}
        onChange={handleChange}
        required />
      
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
      
      <label htmlFor='password'>
        Password:
      </label>
      <input
        type='password'
        name='password'
        placeholder='Enter Password'
        value={password}
        onChange={handleChange}
        required />
      
      <label htmlFor='city-area'>
        What part of Chicago are you from?
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

      <label htmlFor='neighborhood_id'>
        What neighborhood you reside in?
      </label>
      <select name='neighborhood_id' defaultValue='default' onChange={handleChange}>
        <option value='default' disabled> -- Select A Neighborhood --</option>
        {filterNeighborhoods().map((neighborhood, index) => (
          <option key={index} value={neighborhood.id}>{neighborhood.name}</option>
        )
        )}
      </select>

      <button>Submit</button>
    </form>
  );

}
  export default Register;
