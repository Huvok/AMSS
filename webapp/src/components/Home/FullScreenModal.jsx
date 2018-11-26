import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

function ReactModalAdapter({ className, modalClassName, ...props }) {
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
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
    background: rgba(0, 0, 0, 0.5);
  }

  .Modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: ${props => props.theme.white};
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em;
`

const FullScreenModal = ({ isOpen, children }) => (
  <StyledModal isOpen={isOpen}>
    <Container>
      {children}
    </Container>
  </StyledModal>
);

export default FullScreenModal;
