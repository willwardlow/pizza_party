import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav(props) {
  const { currentUser, handleLogout } = props

  return (
    <div className='nav-bar'>
      <NavLink className='title' to='/'>Pizza Party</NavLink>

      {currentUser ?
        <>
          <NavLink className='index'to='/pizzas'>
            All Pizzas
          </NavLink>

          <NavLink className='create' to='/pizzas/new'>
            Create A Pizza
          </NavLink>

          <NavLink className='logout' to='/' onClick={handleLogout}>
            Logout
          </NavLink>
        </>
        :
        <>
        <NavLink className='login' to='/login'>
        Login
      </NavLink>
      <NavLink className='register' to='/register'>
            Register
      </NavLink>
          
      <img className='chicago-stars' src='https://i.imgur.com/JzSWVAL.png' alt='chicago-stars' />
        </>
      }
      
    </div>
  )
}

export default Nav
