import React, { useContext } from 'react';
import ModalWithForm from './ModalWithForm';
import './ModalListBalance';
import { addCostValue } from '../../utils/costsApi';
import { addRevenueValue } from '../../utils/revenueApi';
import { ListCostContext } from '../context/ListCostContext';
import { ListRevenueContext } from '../context/ListRevenueContext';

function ModalListBalance({ isOpen, onRequestClose, day }) {
  const [formData, setFormData] = React.useState({
    description: '',
    value: '',
    category: 'Entrada',
  });
  const { costList, setCostList } = useContext(ListCostContext);
  const { revenueList, setRevenueList } = useContext(ListRevenueContext);

  const categories = ['Entrada', 'Gasto'];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const data = {
      date: day.format('YYYY-MM-DD'),
      description: formData.description,
      value: parseFloat(formData.value),
      category: formData.category,
    };

    const apiCall =
      formData.category === 'Entrada'
        ? addRevenueValue(data)
        : addCostValue(data);

    apiCall
      .then((newItem) => {

        if (formData.category === 'Entrada') {

          setRevenueList((prevList) => [
            ...prevList,
            { ...newItem.data, date: newItem.data.date },
          ]);
        } else {
          setCostList((prevList) => [
            ...prevList,
            { ...newItem.data, date: newItem.data.date },
          ]);
        }

        setFormData({
          description: '',
          value: '',
          category: '',
        });
        onRequestClose();
      })
      .catch((error) => {
        console.error('Erro ao adicionar item:', error);
      });
  };
 

  return (
    <div>
      <ModalWithForm
        name="modal__list"
        title={day.format('DD-MM-YYYY')}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        onSubmit={handleSubmit}
      >
        <input
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Add new activity"
          className="modal__list__input-activity"
          type="text"
          id="modal__list__input-activity"
          required
        />
        <span className="modal__list__input-activity__error"></span>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          placeholder="Escolha se é gasto ou entrada"
          className="modal__list__select"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="modal__list__input-type__error"></span>
        <input
          name="value"
          value={formData.value}
          onChange={handleInputChange}
          placeholder="Add value"
          className="modal__list__input-value"
          required
        />
        <span className="modal__list__input-value__error"></span>
        <button className="modal__list__submit-button">Salvar Atividade</button>
        <ul className="modal__list__container">
          {[...costList, ...revenueList]
            .filter(
              (item) => item.date.slice(0, 10) === day.format('YYYY-MM-DD')
            )
            .map((list, index) => (
              <li
                key={index}
                className={`modal__list__items ${
                  list.category === 'Entrada' ? 'revenue-item' : 'cost-item'
                }`}
              >
                <span className="modal__list__item">{list.description}</span>
                <span className="modal__list__item">
                  Categoria: {list.category}
                </span>
                <span
                  className={`modal__list__item ${
                    list.category === 'Entrada'
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {list.category === 'Entrada' ? '+' : '-'} {list.value}
                </span>
              </li>
            ))}
        </ul>
      </ModalWithForm>
    </div>
  );
}

export default ModalListBalance;
