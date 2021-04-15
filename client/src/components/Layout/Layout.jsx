import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav'

function Layout(props) {

  const { currentUser, handleLogout, changeMode } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
      <Footer changeMode={changeMode} />
      </div>
  )
}

export default Layout
