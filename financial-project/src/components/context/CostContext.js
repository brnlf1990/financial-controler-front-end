import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { getTotalCostValue } from '../../utils/costsApi';
import { CurrentUserContext } from './Usercontext';

export const CostActivitiesContext = createContext();

export const CostActivitiesContextProvider = ({ children }) => {
  const [totalCost, setTotalCost] = useState([]);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    getTotalCostValue(currentUser.currentUser._id)
      .then((data) => {

        setTotalCost(data.totalCostValue);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  return (
    <CostActivitiesContext.Provider value={totalCost}>
      {children}
    </CostActivitiesContext.Provider>
  );
};
