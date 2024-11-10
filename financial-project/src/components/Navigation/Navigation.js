import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import ebBucket from '../../images/eb.jpg'
import './Navigation.css';
import Footer from './Footer';
function Navigation({handleLogOut}) {
  const navigate = useNavigate();
  function signOut(){
    handleLogOut();
    localStorage.removeItem('jwt');
    navigate('/signin');
  }



  return (
    <div className="navigation">
      <img className='navigation__logo' src={ebBucket}/>

      <nav className="navigation__container">
        <p className="navigation__general">Menu</p>
        <a className="navitation__dashboard">Dashboard</a>
        <a className="navitation__tracking_list">Atividades</a>
        <a className="navitation__logout" onClick={signOut}>Sair</a>
        <Footer className="footer"/>
      </nav>
    </div>
  );
}

export default Navigation;
