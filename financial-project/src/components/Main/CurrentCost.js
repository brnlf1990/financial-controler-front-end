import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import CurrentCard from "./CurrentCard";
function CurrentCost() {
    return ( 
    <CurrentCard
    type="current_cost"
    title="Valor gasto"
    value="1200"
    />        
     );
}

export default CurrentCost;
