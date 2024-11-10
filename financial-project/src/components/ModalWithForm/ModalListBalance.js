import React from 'react';
import ModalWithForm from './ModalWithForm';
import './ModalListBalance';
import CostList from '../Main/CostList';

export const ModalContext = React.createContext();

function ModalListBalance({
  isOpen,
  onRequestClose,
  day,
  activities,
  setActivities,
  children,
}) {
  const [activity, setActivity] = React.useState('');
  const [value, setValue] = React.useState(0);
  const [category, setCategory] = React.useState('');
  const categories = ['Entrada', 'Gasto'];

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSave = () => {
    if (day) {
      const newActivity = {
        name: activity,

        value: parseFloat(value),
      };

      const newActivities = {
        ...activities,
        [day.format('YYYY-MM-DD')]: [
          ...(activities[day.format('YYYY-MM-DD')] || []),
          newActivity,
        ],
      };
      handleCategoryChange()
      setActivities(newActivities);
      setActivity(newActivities);
      onRequestClose();
    }
  };
 
  return (
    <div>
      <ModalWithForm
        name="modal__list"
        title={day.format('DD-MM-YYYY')}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <input
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Add new activity"
          className="modal__list__input-activity"
          type="text"
          id="modal__list__input-activity"
          required
        />
        <span className="modal__list__input-activity__error"></span>
        <select
          value={category}
          onChange={handleCategoryChange}
          placeholder="Escolha se é gasto ou entrada"
          className="modal__list__select"
          required
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="modal__list__input-type__error"></span>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add value"
          className="modal__list__input-value"
          required
        />
        <span className="modal__list__input-value__error"></span>
        <button onClick={handleSave} className="modal__list__submit-button">
          Salvar Atividade
        </button>
        <ul className="modal__list__container">
          {(activities[day.format('YYYY-MM-DD')] || []).map((act, index) => (
            <li key={index} className="modal__list__items">
              <span className="modal__list__item ">{act.name}</span>
              <span className="modal__list__item">Categoria:{act.type}</span>
              <span className="modal__list__item"> Valor: {act.value}</span>
            </li>
          ))}
        </ul>
      </ModalWithForm>
    </div>
  );
}

export default ModalListBalance;
