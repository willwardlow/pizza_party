import { useState } from 'react';
import { Link } from 'react-router-dom'

import './Login.css'

function Login(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  return (
    <div className='login-form'>
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
        <h3>Login</h3>
        <div className='username'>
      <label htmlFor='username'> Username:</label>
        <input type='text' name='username' placeholder='Enter Username' value={username} onChange={handleChange} />
        </div>

      <div className='password'>
        <label htmlFor='password'> Password: </label>
        <input type='password' name='password' placeholder='Enter Password' value={password} onChange={handleChange} />
      </div>
      
      <button> Submit</button><br/>
      New To Chicago? <Link to='/register'>Register Here <br/></Link>
      
      </form>
      </div>
  )
}
export default Login;