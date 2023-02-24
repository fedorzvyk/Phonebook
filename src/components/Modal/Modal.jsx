import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  });

  const handleClose = e => {
    // console.log('keydown event: ', e);
    if (e.code === 'Escape') {
      onClose();
    }
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleClose}>
      <ModalWrapper>{children}</ModalWrapper>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
