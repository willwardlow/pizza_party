//Component Imports
import Layout from './components/Layout/Layout';
import Login from './screens/Login';
import Register from './screens/Register';
import MainContainer from './containers/MainContainer'

//Package Imports
import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

//Functional Imports 
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import {getAllNeighborhoods} from './services/neighborhoods'

//CSS Imports
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      const neighborhoodInfo = await getAllNeighborhoods();
      setNeighborhoods(neighborhoodInfo)
    }
    fetchNeighborhoods();
  }, [])

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  }

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/')

  }


  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <Login handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} neighborhoods={neighborhoods} />
          </Route>
          <Route path='/'>
            <MainContainer />
          </Route>
        </Switch>
      </Layout>

      </div>
  );
}

export default App;
