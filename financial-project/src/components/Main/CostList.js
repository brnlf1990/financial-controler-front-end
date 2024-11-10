import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './CostList.css';
import costsApi from "../../utils/costsApi"
function CostList({type, day, activity, value}) {

    
  return (
    <div className="cost-list__container">
      <div className="cost-list__column">
        <h3 className="cost-list__title"></h3>

        <ul className="cost-list__date">
          <li className="cost-list__items"></li>
        </ul>
      </div>
      <div className="cost-list__column">
        <h3 className="cost-list__title">Descrição</h3>
        <ul className="cost-list__description">
          <li className="cost-list__items">Mercaaaaaaaaaaaaaaaaaaado</li>
        </ul>
      </div>
      <div className="cost-list__column">
        <h3 className="cost-list__title">Categoria</h3>
        <ul className="cost-list__type">
          <li className="cost-list__items">{type || 'Sem categoria'}</li>
        </ul>
      </div>
      <div className="cost-list__column">
        <h3 className="cost-list__title">Valor</h3>
        <ul className="cost-list__value">
          <li className="cost-list__items">{value || '0,00'}</li>
        </ul>
      </div>
    </div>
  );
}

export default CostList;
