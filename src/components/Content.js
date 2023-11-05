import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, ListGroup, Row, Col } from 'react-bootstrap';

const Content = () => {
  const contacts = useSelector(state => state);

  const dispatch = useDispatch();

  const deleteContact = (id)=>{
    dispatch({type: 'DELETE_CONTACT', payload: id});
    toast.success('Contact deleted successfully');
  }
  return (
    <>
      <div className="container">
       <div className="row">
         <div className="col-md-12 my-5 text-end">
             <input className="docSearch docSearch-btn mb-5 me-3 " type="search" placeholder="Search" aria-label="Search"/>
           {/* <Link to="/" className="btn btn-outline-dark">
           Add Contact
               </Link> */}
               <Link to='/add'>
            <div className="btn btn-primary">Add Contact</div>
               </Link>
         </div>
         <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <ListGroup>
            {contacts.map((contact, index) => (
              <div key={index}>
                <ListGroup.Item
                  variant="dark"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {contact.name} (DOB: {contact.dob})
                  <span>
                    {/* <Button variant="info" onClick={() => viewContact(contact)}>View</Button> */}
                    {/* <Button variant="warning" onClick={() => editContact(contact)}>Edit</Button> */}
                    <Button variant="danger" onClick={() => deleteContact(contact.id)}>Delete</Button>
                  </span>
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
        </Col>
      </Row>
       </div>
    </div>
    </>
  );
};

export default Content;