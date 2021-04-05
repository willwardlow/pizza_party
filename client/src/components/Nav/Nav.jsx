import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <h3>Pizza Party </h3>
      <NavLink to='/login'>
        Login
      </NavLink>

      <NavLink to='/register'>
        Register
      </NavLink>
    </div>
  )
}

export default Nav
