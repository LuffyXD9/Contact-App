import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Form,InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddContact = ({show, handleClose}) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [nickName, setNickName] = useState('');
  // const [DOB, setDOB] = useState('');
  // const [mobileNumbers, setMobileNumbers] = useState(['']);
  // const [emails, setEmails] = useState(['']);

  const [contactData, setContactData] = useState({
    firstName : '',
    lastName : '',
    nickname : '',
    DOB : '',
    mobileNumbers: [''],
    emails: [''],
  });

  const contacts = useSelector(state => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPhoneNumber = () =>{
    // setMobileNumbers([...mobileNumbers,'']);
    setContactData({
      ...contactData,
      mobileNumbers : [...contactData.mobileNumbers,''],
    });
  }

  const handleRemovePhoneNumber = (index) =>{
    const filteredPhoneNumbers = contactData.mobileNumbers.filter((_,i)=> i !== index);
    // setMobileNumbers(filteredPhoneNumbers);
    setContactData({
      ...contactData,
      mobileNumbers : filteredPhoneNumbers,
    });
  }

  const handleAddEmails = () =>{
    // setEmails([...emails,'']);
    setContactData({
      ...contactData,
      emails : [...contactData.emails,''],
    })
  }

  const handleRemoveEmails = (index) =>{
    const filteredEmails = contactData.emails.filter((_,i)=> i !== index);
    // setEmails(filteredEmails);
    setContactData({
      ...contactData,
      emails : filteredEmails,
    })
  }

  const handelSubmit = e => {
    e.preventDefault();

      const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
      // firstName,
      // lastName,
      // nickName,
      // DOB,
      // mobileNumbers,
      // emails, 
      ...contactData,
    };

    dispatch({ type: 'ADD_CONTACT', payload: data });
    toast.success('Contact added successfully!!');
    // setFirstName('');
    // setLastName('');
    // setNickName('');
    // setDOB('');
    // setMobileNumbers(['']);
    // setEmails(['']);
    setContactData({
      firstName : '',
      lastName : '',
      nickname : '',
      DOB : '',
      mobileNumbers : [''],
      emails : [''],
    });
    
    navigate('/');

    handleClose();
  };

  return (
    <div className='container'>
      <Modal show={show} onHide={handleClose}>
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
                value={contactData.firstName}
                required
                onChange={e => setContactData({...contactData, firstName: e.target.value})}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Last Name'
                value={contactData.lastName}
                onChange={e => setContactData({...contactData, lastName : e.target.value})}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nickname</Form.Label>
              <Form.Control
                type='text'
                placeholder='Nickname'
                value={contactData.nickName}
                required
                onChange={e => setContactData({...contactData, nickname : e.target.value})}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type='date'
                placeholder='Date of Birth'
                value={contactData.DOB}
                required
                onChange={e => setContactData({...contactData,DOB : e.target.value})}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile Numbers</Form.Label>
              {contactData.mobileNumbers.map((number, index) => (
                <InputGroup key={index} className="mb-2">
                  <Form.Control
                    type="number"
                    placeholder="Mobile Number"
                    value={number}
                    required
                    onChange={(e) => {
                      const updatedNumbers = [...contactData.mobileNumbers];
                      updatedNumbers[index] = e.target.value;
                      setContactData({...contactData, mobileNumbers : updatedNumbers,
                      });
                    }}
                  />
                  <Button
                    variant="danger"
                    onClick={() => handleRemovePhoneNumber(index)}
                    disabled={index === 0}
                  >
                    -
                  </Button>
                </InputGroup>
              ))}
              <Button variant="success" onClick={handleAddPhoneNumber}>
                +
              </Button>
            </Form.Group>
            <Form.Group>
              <Form.Label>Emails</Form.Label>
              {contactData.emails.map((email, index) => (
                <InputGroup key={index} className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => {
                      const updatedEmails = [...contactData.emails];
                      updatedEmails[index] = e.target.value;
                      setContactData({
                        ...contactData,
                        emails : updatedEmails});
                    }}
                  />
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveEmails(index)}
                    disabled={index === 0}
                  >
                    -
                  </Button>
                </InputGroup>
              ))}
              <Button variant="success" onClick={handleAddEmails}>
                +
              </Button>
            </Form.Group>
            <Button variant='secondary' className='rounded-pill my-2 mx-2' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' type='submit' className='rounded-pill'>
              Save Contact
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddContact;
