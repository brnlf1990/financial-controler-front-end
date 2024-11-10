import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import CurrentCard from "./CurrentCard";
function CurrentBalance() {
    return ( 
    <CurrentCard
    type="current_balance"
    title="Valor positivo no mês"
    value="1200"
    />        
     );
}

export default CurrentBalance;