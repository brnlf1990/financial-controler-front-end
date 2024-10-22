import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate  } from "react-router-dom";
import "./Header.css"
function Header() {
    return ( 
        <header className="header">
            <div className="header__container">
            <h1 className="header__title">Welcome back, Fulano</h1>
            <img className="header__current_user_avatar"/>
            <div className="header__text_container">

            <p className="header__current_user">Teste</p>
            <p className="header__current_about">Teste</p>
            </div>
            </div>
        </header>
     );
}

export default Header;