import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import "./Navigation.css"
function Navigation() {
    return ( 
        <div className="navigation">
            <img className="navitation__header_image" />

            < nav className="navigation__container">
                <p className="navigation__general">Menu</p>
                <a className="navitation__dashboard">Dashboard</a>
                <a className="navitation__tracking_list">Atividades</a>
                <a className="navitation__logout">Sair</a>
            
            </nav>
        </div>
     );
}

export default Navigation;