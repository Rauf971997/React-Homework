import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../Modal/modal.css';

const modalRoot = document.getElementById('modals');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    console.log('Модальное окно создано');
    return () => {
      console.log('Модальное окно удалено');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
