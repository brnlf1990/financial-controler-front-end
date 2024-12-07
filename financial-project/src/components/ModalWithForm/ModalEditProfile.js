import React, { useContext } from 'react';
import ModalWithForm from './ModalWithForm';
import { CurrentUserContext } from '../context/Usercontext';

function ModalEditProfile({isOpen, onRequestClose}) {
    const { currentUser} = useContext(CurrentUserContext);
    


    const handleSubmit = () => {

    }


  return (
    <div>
      <ModalWithForm
        name="edit-profile"
        title="Edit Profile"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          placeholder="Insira nome"
          className="modal-edit__name--input-activity"
          type="text"
          id="modal__list__input-activity"
          required
        />
         <input
          name="about"
          placeholder="Insira sua profissão"
          className="modal-edit__about--input-activity"
          type="text"
          id="modal__list__input-activity"
          required
        />
         <input
          name="avatar"
          placeholder="Insira um link"
          className="modal-edit__avatar--input-activity"
          type="text"
          id="modal__list__input-activity"
          required
        />
      </ModalWithForm>
    </div>
  );
}

export default ModalEditProfile;