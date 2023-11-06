import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = ({contact, edit, closeEdit}) => {
    const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [nickName, setNickName] = useState(contact.nickName);
  const [DOB, setDOB] = useState(contact.DOB);
  const [mobileNumbers, setMobileNumbers] = useState(contact.mobileNumbers);
  // const [mobileNumberTwo, setMobileNumberTwo] = useState(contact.mobileNumberTwo);
  const [emails, setEmails] = useState(contact.emails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPhoneNumber = () =>{
    setMobileNumbers([...mobileNumbers,'']);
  }

  const handleRemovePhoneNumber = (index) =>{
    const filteredPhoneNumbers = mobileNumbers.filter((_,i)=> i !== index);
    setMobileNumbers(filteredPhoneNumbers);
  }

  const handleAddEmails = () =>{
    setEmails([...emails,'']);
  }

  const handleRemoveEmails = (index) =>{
    const filteredEmails = emails.filter((_,i)=> i !== index);
    setEmails(filteredEmails);
  }

  const handelEdit = e => {
    e.preventDefault();

      const data = {
      id: contact.id,
      firstName,
      lastName,
      nickName,
      DOB,
      mobileNumbers,
      // mobileNumberTwo,
      emails, 
    };

    dispatch({ type: 'UPDATE_CONTACT', payload: data });
    toast('Contact edited successfully!!');
    navigate('/');

    closeEdit();
  };


  return (
    <Modal show={edit} onHide={closeEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
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
              <Form.Label>Mobile Numbers</Form.Label>
              {mobileNumbers.map((number, index) => (
                <InputGroup key={index} className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number"
                    value={number}
                    required
                    onChange={(e) => {
                      const updatedNumbers = [...mobileNumbers];
                      updatedNumbers[index] = e.target.value;
                      setMobileNumbers(updatedNumbers);
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
              {emails.map((email, index) => (
                <InputGroup key={index} className="mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => {
                      const updatedEmails = [...emails];
                      updatedEmails[index] = e.target.value;
                      setEmails(updatedEmails);
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