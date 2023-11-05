import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickName, setNickName] = useState('');
  const [DOB, setDOB] = useState('');
  const [mobileNumbers, setMobileNumbers] = useState('');
  const [emails, setEmails] = useState('');

  const contacts = useSelector(state => state);

  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(true);
  };
  const handelSubmit = e => {
    e.preventDefault();


    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
      firstName,
      lastName,
      nickName,
      DOB,
      mobileNumbers: mobileNumbers.split(','), 
      emails: emails.split(','), 
    };

    dispatch({ type: 'ADD_CONTACT', payload: data });
    toast.success('Contact added successfully!!');
    // navigate('/');

    
    handleCloseModal();
  };

  return (
    <div className='container'>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmit}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nickname'
                value={nickName}
                onChange={e => setNickName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type='text'
                placeholder='Date of Birth'
                value={DOB}
                onChange={e => setDOB(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile Numbers (comma-separated)</Form.Label>
              <Form.Control
                type='text'
                placeholder='Mobile Numbers'
                value={mobileNumbers}
                onChange={e => setMobileNumbers(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Emails (comma-separated)</Form.Label>
              <Form.Control
                type='text'
                placeholder='Emails'
                value={emails}
                onChange={e => setEmails(e.target.value)}
              />
            </Form.Group>
            <Button variant='secondary' onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Save Contact
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddContact;
