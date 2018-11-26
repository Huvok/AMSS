import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

function ReactModalAdapter({ className, modalClassName, closeModal, ...props }) {
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      {...props}
    />
  );
}

const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal'
})`
  /* Portal styles here (though usually you will have none) */

  .Overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .Modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    background: ${props => props.theme.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &.fullscreen .Modal {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    transform: none;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em 2em;

  .fullscreen & {
    padding: 1em;
  }
`

const Modal = ({ fullscreen, isOpen, closeModal, children }) => (
  <StyledModal className={fullscreen ? 'fullscreen' : ''} isOpen={isOpen} closeModal={closeModal}>
    <Container>
      {children}
    </Container>
  </StyledModal>
);

export default Modal;
