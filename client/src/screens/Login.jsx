import { useState } from 'react';
import { Link } from 'react-router-dom'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(formData);
    }}>
      <h3>Login</h3>
      <label htmlFor='username'> Username:</label>
      <input type='text' name='username' value={username} />

      <label htmlFor='password'> Password: </label>
      <input type='password' name='password' value={password} />
      
      <Link to='/register'>New To Chicago? Register Here</Link>
      <button> Submit</button>
    </form>
  )
}
export default Login;