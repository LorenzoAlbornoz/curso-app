import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FormCreacion from './FormCreacion';

const ModalCreacion = ({show, handleClose, getCourses}) => {

  return (
    <>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un Curso</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <FormCreacion getCourses={getCourses}/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalCreacion