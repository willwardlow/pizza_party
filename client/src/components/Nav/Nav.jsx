import { NavLink } from 'react-router-dom'
// import './Nav.css'

function Nav(props) {
  const { currentUser, handleLogout } = props

  return (
    <div className='nav-bar'>
      <NavLink to='/'>Pizza Party</NavLink>

      {currentUser ?
        <>
          <NavLink to='/pizzas'>
            All Pizzas
          </NavLink>

          <NavLink to='/pizzas/new'>
            Create A Pizza
          </NavLink>

          <NavLink to='/' onClick={handleLogout}>
            Logout
          </NavLink>
        </>
        :
        <>
        <NavLink to='/login'>
        Login
      </NavLink>
      <NavLink to='/register'>
            Register
      </NavLink>
        </>
      }
      
    </div>
  )
}

export default Nav
