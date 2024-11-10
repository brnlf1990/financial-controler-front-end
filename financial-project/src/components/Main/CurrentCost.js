import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import CurrentCard from "./CurrentCard";
function CurrentCost() {
        // const [totalCostValue, setTotalCostValue] = useState(0);
        // useEffect(() => {
        // costsApi.getTotalCostValue()
        // .then((data) => {
        //     setTotalCostValue(data)
        // })
        // .catch((error) => {
        //     return error;
        // });
        // },[])
    return ( 
    <CurrentCard
    type="current_cost" 
    title="Valor gasto no mês atual"
    value="1200"   
    />        
     );
}

export default CurrentCost;
