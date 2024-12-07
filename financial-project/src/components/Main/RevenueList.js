import React, { useContext } from 'react';
import { ListRevenueContext } from '../context/ListRevenueContext';
import './RevenueList.css';
function RevenueList() {
  const { revenueList } = useContext(ListRevenueContext);

  const titles = ['Data', 'Descrição', 'Categoria', 'Valor'];
  const getColumnData = (item, title) => {
    switch (title) {
      case 'Data':
        return item.date;
      case 'Descrição':
        return item.description;
      case 'Categoria':
        return item.category;
      case 'Valor':
        return item.value;
      default:
        return '';
    }
  };

  return (
    <div className="revenue-list__container">
      <h3 className="revenue-title">Lista de Entrada</h3>
      {titles.map((title) => (
        <div className="revenue-list__column" key={title}>
          <h3 className="revenue-list__title">{title}</h3>
          <ul className="revenue-list__items">
            {Array.isArray(revenueList) && revenueList.length > 0 ? (
              revenueList.map((item, index) => (
                <li key={index} className="revenue-list__item">
                  {getColumnData(item, title)}
                </li>
              ))
            ) : (
              <p>Sem valores</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RevenueList;
