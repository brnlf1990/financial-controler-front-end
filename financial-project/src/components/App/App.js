import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from '../Main/MainPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute.js/ProtectedRoute';
import {checkToken} from '../../utils/auth'
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate()

  useEffect(()=> {
    const jwt = localStorage.getItem("token");

    if (jwt){
      checkToken(jwt)
      .then((res) => {
          if (res){
            handleLoggedIn();
            navigate('/main');            
          }
      })
      .catch((error) => {
        console.log(error);
        
      })
    }
  },[])



  const handleLoggedIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Login  />}
        ></Route>
        <Route path="/signin" element={<Login handleLoggedIn={handleLoggedIn}/>}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route
          path="/main"
          element={
            <ProtectedRoute loggedIn={loggedIn}>
              <MainPage handleLogOut={handleLogOut} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
