import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ebBucket from '../../images/eblogo.png';
import './Navigation.css';
import Footer from './Footer';
function Navigation({ handleLogOut }) {
  const navigate = useNavigate();
  const location = useLocation();
  function signOut() {
    localStorage.removeItem('token');
    handleLogOut();
    navigate('/signin');
  }

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navigation">
      <img className="navigation__logo" src={ebBucket} alt='navigation logo' />

      <nav className="navigation__container">
        <p className="navigation__general">Menu</p>
        <a href='####'
          className={`navigation__dashboard ${
            isActive('/main') ? 'navigation__dashboard--featured' : ''
          }`}
          onClick={() => navigate('/main')}
        >
          Home
        </a>
        <a href="####"
          className={`navigation__tracking_list ${
            isActive('/activities') ? 'navigation__activities_list--featured' : ''
          }`}
          onClick={() => navigate('/activities')}
        >
          Atividades
        </a>
        <a href="####" className="navitation__logout" onClick={signOut}>
          Sair
        </a>
        <Footer className="footer" />
      </nav>
    </div>
  );
}

export default Navigation;
