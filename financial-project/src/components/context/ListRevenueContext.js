import React, {
    useState,
    useEffect,
    createContext,
    useContext,
  } from 'react';
  import { getAllRevenue } from '../../utils/revenueApi';
  import { CurrentUserContext } from './Usercontext';
  
  export const ListRevenueContext = createContext();
  
  export const ListRevenueContextProvider = ({ children }) => {
    const [revenueList, setRevenueList] = useState([]);
    const currentUser = useContext(CurrentUserContext);
  
    useEffect(() => {
        getAllRevenue(currentUser.currentUser._id)
        .then((data) => {
          
          setRevenueList(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [currentUser]);
  
    return (
      <ListRevenueContext.Provider value={{revenueList, setRevenueList}}>
        {children}
      </ListRevenueContext.Provider>
    );
  };
  