import React from "react";
import ModalWithForm from "./ModalWithForm";

function ModalListBalance({
  isOpen,
  onRequestClose,
  day,
  activities,
  setActivities,
}) {
  const [activity, setActivity] = React.useState("");
    
  const handleSave = () => {
    if (day) {
      const newActivities = {
        ...activities,
        [day.format("YYYY-MM-DD")]: [
          ...(activities[day.format("YYYY-MM-DD")] || []),
          activity,
        ],
      };
      setActivities(newActivities);
      setActivity("");
      onRequestClose();
    }
  };
  return (
    <ModalWithForm
      name="modal__list"
      title={day.format("DD-MM-YYYY")}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className="modal__container">
        <input
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Add new activity"
        />
        <button onClick={handleSave}>Salvar Atividade</button>
        <button onClick={onRequestClose}>Fechar</button>
        <ul>
          {(activities[day.format("YYYY-MM-DD")] || []).map((act, index) => (
            <li key={index}>{act}</li>
          ))}
        </ul>
      </div>
    </ModalWithForm>
  );
}

export default ModalListBalance;
