import React, {  useContext } from "react";
import { CurrentValueContext } from "../context/CurrentValue";
import { CostActivitiesContext } from "../context/CostContext";
import CurrentCard from "./CurrentCard";
function CurrentBalance() {
    const totalCost = useContext(CostActivitiesContext);
    const totalBalance = useContext(CurrentValueContext);
    
    return ( 
    <CurrentCard
    type="current_balance"
    title="Valor atual"
    value={totalBalance- totalCost}
    />        
     );
}

export default CurrentBalance;