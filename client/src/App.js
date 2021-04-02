//Component Imports
import Layout from './components/Layout/Layout';

//Package Imports
import { useState, useEffect } from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

//Functional Imports 
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';

//CSS Imports
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

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


  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='login' handleLogin={ handleLogin}/>
        </Switch>
      </Layout>

      </div>
  );
}

export default App;
