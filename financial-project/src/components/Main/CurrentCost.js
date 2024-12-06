import React, {  useContext } from 'react';
import { CostActivitiesContext } from '../context/CostContext';
import CurrentCard from './CurrentCard';
function CurrentCost() {
  const totalCost = useContext(CostActivitiesContext);
  return (
    <CurrentCard
      type="current_cost"
      title="Valor gasto no mês atual"
      value={totalCost}
    />
  );
}

export default CurrentCost;
