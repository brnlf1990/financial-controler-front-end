import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from '../Main/MainPage';
import Activities from '../Main/Activities';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute.js/ProtectedRoute';
import { checkToken } from '../../utils/auth';
import { CostActivitiesContextProvider } from '../context/CostContext';
import { ListCostContextProvider } from '../context/ListCostContext';
import { ListRevenueContextProvider } from '../context/ListRevenueContext';
import { CurrentValueContextProvider } from '../context/CurrentValue';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          if (res) {
            handleLoggedIn();
            navigate('/main');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleLoggedIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setLoggedIn(false);
  };

  return (
    <CurrentValueContextProvider>
      <CostActivitiesContextProvider>
        <ListCostContextProvider>
          <ListRevenueContextProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Login handleLoggedIn={handleLoggedIn}/>}></Route>
                <Route
                  path="/signin"
                  element={<Login handleLoggedIn={handleLoggedIn} />}
                ></Route>
                <Route path="/signup" element={<Register />}></Route>
                <Route
                  path="/main"
                  element={
                    <ProtectedRoute loggedIn={loggedIn}>
                      <MainPage handleLogOut={handleLogOut} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/activities"
                  element={
                    <ProtectedRoute loggedIn={loggedIn}>
                      <Activities />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </ListRevenueContextProvider>
        </ListCostContextProvider>
      </CostActivitiesContextProvider>
    </CurrentValueContextProvider>
  );
}

export default App;
