import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

const ViewContact = ({contact, show, handleClose}) => {
    const [showModal, setShowModal] = useState(show);

    const handleCloseModal = ()=>{
        setShowModal(false);
        handleClose();
    }
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>First Name:</Form.Label>
            <Form.Control type="text" readOnly value={contact.firstName} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name:</Form.Label>
            <Form.Control type="text" readOnly value={contact.lastName} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nickname:</Form.Label>
            <Form.Control type="text" readOnly value={contact.nickname} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth:</Form.Label>
            <Form.Control type="text" readOnly value={contact.dob} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile Numbers:</Form.Label>
            <Form.Control type="text" readOnly value={contact.mobileNumbers.join(", ")} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Emails:</Form.Label>
            <Form.Control type="text" readOnly value={contact.emails.join(", ")} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ViewContact