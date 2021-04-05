import Nav from '../Nav/Nav'

function Layout(props) {

  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
      </div>
  )
}

export default Layout
