import React, { useState, useEffect } from 'react';
import './Month.css';
import DayCard from './DayCard';
function MonthCard({ month, currentYear, prevMonth, nextMonth, openModal }) {
  const [calendar, setCalendar] = useState([]);
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  useEffect(() => {
    const startDay = month.clone().startOf('month').startOf('week');
    const endDay = month.clone().endOf('month').endOf('week');
    const day = startDay.clone().subtract(1, 'day');
    const tempCalendar = [];

    while (day.isBefore(endDay, 'day')) {
      tempCalendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, 'day').clone())
      );
    }
    setCalendar(tempCalendar);
  }, [month, currentYear]);

  return (
    <div className="month-card">
      <div className="month-card__header-container">
        <button className="month-card__prev-button" onClick={prevMonth}>
          Anterior{' '}
        </button>
        <div className="month-card__title">{month.format('MMMM YYYY')}</div>

        <button className="month-card__next-button" onClick={nextMonth}>
          Próximo
        </button>
      </div>
      <div className="month-card__week-days">
        {weekDays.map((week, index) => (
          <div key={index} className="week_day">{week} </div>
        ))}
      </div>
      {calendar.map((week, weekIndex) => (
        <div className="week" key={weekIndex}>
          {week.map((day) => (
            <DayCard
              key={day.format('DD-MM-YYYY')}
              day={day}
              month={month}
              year={currentYear}
              openModal={openModal}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default MonthCard;
