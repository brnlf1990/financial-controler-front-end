import React, { useEffect } from 'react';
import moment from 'moment';
import MonthCard from './Month';
import './Calendar.css';
function Calendar({ openModal }) {
  const [currentYear, setCurrentYear] = React.useState(2024);
  const [currentMonth, setCurrentMonth] = React.useState(moment());

  moment.updateLocale('pt', {
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  });

  useEffect(() => {}, []);
  const nextMonth = () => {
    const next = currentMonth.clone().add(1, 'month');
    setCurrentMonth(next);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
  };

  const prevMonth = () => {
    const prev = currentMonth.clone().subtract(1, 'month');
    setCurrentMonth(prev);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
  };

  return (
    <div className="calendar">
      <h1 className="calendar__title">Calendario de contas</h1>
      <div className="calendar__container">
        <MonthCard
          key={currentMonth.format('YYYY-MM')}
          month={currentMonth}
          currentYear={currentYear}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          openModal={openModal}
        />
      </div>
    </div>
  );
}

export default Calendar;
