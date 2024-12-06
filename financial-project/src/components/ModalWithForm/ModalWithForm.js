import React from "react";

import "./ModalWithForm.css"
function ModalWithForm({ name, title, isOpen, onRequestClose, onSubmit, children }) {

    React.useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'Escape') {
            onRequestClose(); 
          }
        };
    
        if (isOpen) {
          document.addEventListener('keydown', handleKeyDown); 
        }
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [isOpen, onRequestClose]);

  return (
    <div className={"modal"}>
      
      <div onClick={onRequestClose} className={`modal__image-fade ${isOpen ? "active" : ""}`}></div>
      
      <div className={`modal ${name} ${isOpen ? "modal__opened" : ""}`}>
      <span className="modal__close-button" onClick={onRequestClose}>
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
