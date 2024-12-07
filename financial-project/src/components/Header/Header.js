import React, {  useContext } from 'react';
import { CurrentUserContext } from '../context/Usercontext';
import './Header.css';
function Header() {

  const currentUser = useContext(CurrentUserContext);
    
  if (!currentUser){
    return <div>Loading...</div>;
  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Welcome back, {currentUser.currentUser.name}</h1>
        <img className="header__current_user_avatar" src={currentUser.currentUser.avatar} alt='user avatar'/>
        <div className="header__text_container">
          <p className="header__current_user">{currentUser.currentUser.name}</p>
          <p className="header__current_about">{currentUser.currentUser.about}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
