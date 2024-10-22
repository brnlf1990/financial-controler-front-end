import React from "react";

import "./ModalWithForm.css"
const closeButton = "X"
function ModalWithForm({ name, title, isOpen, onRequestClose, onSubmit, children }) {
  return (
    <div className={"modal"}>
      <div className={`modal__image-fade ${isOpen ? "active" : ""}`}></div>
      <div className={`modal ${name} ${isOpen ? "modal__opened" : ""}`}>
        <span className="modal__close-button" onClick={onRequestClose}>
          <img src={closeButton} className="modal__close-image" alt="close" />
        </span>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
