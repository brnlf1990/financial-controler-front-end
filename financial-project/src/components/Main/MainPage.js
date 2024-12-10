import '../App/App.css';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Calendar from './Calendar';
import Navigation from '../Navigation/Navigation';
import CostList from '../Main/CostList';
import CurrentCost from './CurrentCost';
import RevenueList from './RevenueList';
import CurrentBalance from './CurrentBalance';
import NewsList from './NewsList';
import Footer from '../Navigation/Footer';
import ModalListBalance from '../ModalWithForm/ModalListBalance';
import './MainPage.css';

function MainPage({ handleLogOut }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [activities, setActivities] = useState({});

  const openModal = (day) => {
    setSelectedDay(day);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedDay(null);
  };
  return (
    <div className="MainPage">
      <Header className="header" />
      <Navigation className="navitagion" handleLogOut={handleLogOut} />
      <CurrentBalance className="current_balance" />
      <CurrentCost className="current_cost" />
      <RevenueList className="revenue_list" />
      <NewsList className="news" />
      <Calendar className="calendar" openModal={openModal} />

      {selectedDay && (
        <ModalListBalance
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          day={selectedDay}
          activities={activities}
          setActivities={setActivities}
        />
      )}

      <CostList className="cost_list" />
      <footer className="footer__mobile">© 2024 Bruno Lopes Furuya </footer>
    </div>
  );
}

export default MainPage;
