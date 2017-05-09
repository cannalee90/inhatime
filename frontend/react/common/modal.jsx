import React from 'react';
import { Modal } from 'react-bootstrap';
import Btn from './btn';

export default (props) => {
  const {
    showModal,
    toggleModal,
    modalTitle,
    headerComponent,
    footerComponent,
    bodyComponent,
  } = props;


  return (
    <Modal show={showModal} onHide={this.toggleModal}>
      <Modal.Header >
        {
          !headerComponent &&
          <Modal.Title >{modalTitle}</Modal.Title>
        }
        {
          headerComponent &&
          headerComponent
        }
      </Modal.Header>
      <Modal.Body>
        {
          bodyComponent &&
          bodyComponent
        }
      </Modal.Body>

      <Modal.Footer>
        {
          footerComponent &&
          footerComponent
        }
      </Modal.Footer>

    </Modal>
  );
};
