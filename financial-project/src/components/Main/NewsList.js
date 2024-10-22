import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import CurrentCard from "./CurrentCard";
import "./NewsList.css"
function NewsList() {
    return ( 
    <CurrentCard
    type="news"
    title="Noticías"
    >
        <ul className="news__list">
        <li className="news__listed">aaaaaaaaaaaaaaaaaaaaaaaaa</li>
        <li className="news__listed">b</li>
        <li className="news__listed">c</li>
        <li className="news__listed">d</li>

        </ul>
    </CurrentCard>        
     );
}

export default NewsList;
