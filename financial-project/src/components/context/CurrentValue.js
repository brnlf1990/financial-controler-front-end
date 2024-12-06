import React, {
    useState,
    useEffect,
    createContext,
    useContext,
  } from 'react';
  import { getTotalRevenueValue } from '../../utils/revenueApi';
  import { CurrentUserContext } from './Usercontext';
  
  export const CurrentValueContext = createContext();
  
  export const CurrentValueContextProvider = ({ children }) => {
    const [totalBalance, setTotalBalance] = useState([]);
    const currentUser = useContext(CurrentUserContext);
  
    useEffect(() => {
        getTotalRevenueValue(currentUser.currentUser._id)
        .then((data) => {
            
            setTotalBalance(data.totalRevenueValue);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [currentUser]);
  
    return (
      <CurrentValueContext.Provider value={totalBalance}>
        {children}
      </CurrentValueContext.Provider>
    );
  };
  