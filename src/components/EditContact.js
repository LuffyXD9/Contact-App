import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = ({contact, edit, closeEdit}) => {
    const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [nickName, setNickName] = useState(contact.nickName);
  const [DOB, setDOB] = useState(contact.DOB);
  const [mobileNumbers, setMobileNumbers] = useState(contact.mobileNumbers.join(' '));
  const [emails, setEmails] = useState(contact.emails.join(' '));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelEdit = e => {
    e.preventDefault();

      const data = {
      id: contact.id,
      firstName,
      lastName,
      nickName,
      DOB,
      mobileNumbers: mobileNumbers.split(','),
      emails: emails.split(','), 
    };

    dispatch({ type: 'UPDATE_CONTACT', payload: data });
    toast('Contact edited successfully!!');
    navigate('/');

    closeEdit();
  };


  return (
    <Modal show={edit} onHide={closeEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelEdit}>
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
            <Button variant='secondary' onClick={closeEdit}>
              Close
            </Button>
            <Button variant='primary' type='submit'>
              Save Contact
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  )
}

export default EditContact