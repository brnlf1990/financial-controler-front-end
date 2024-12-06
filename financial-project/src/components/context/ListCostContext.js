import React, {
    useState,
    useEffect,
    createContext,
    useContext,
  } from 'react';
  import { getAllCosts } from '../../utils/costsApi';
  import { CurrentUserContext } from './Usercontext';
  
  export const ListCostContext = createContext();
  
  export const ListCostContextProvider = ({ children }) => {
    const [costList, setCostList] = useState([]);
    const currentUser = useContext(CurrentUserContext);
  
    useEffect(() => {
        getAllCosts(currentUser.currentUser._id)
        .then((data) => {
  
          setCostList(data.data);
        })
        .catch((error) => {
          return error;
        });
    }, [currentUser]);
  
    return (
      <ListCostContext.Provider value={{costList, setCostList}}>
        {children}
      </ListCostContext.Provider>
    );
  };
  