import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import AddContact from "./AddContact";
import Nav from "./Nav";
import ViewContact from "./ViewContact";
import EditContact from "./EditContact";

const Content = () => {
  const [showModal, setShowModal] = useState(false);

  const [viewModal, setViewModal] = useState(false);

  const [editModal, setEditModal] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleEditModal = () => {
    setEditModal(true);
  };

  const handleEditClose = () => {
    setEditModal(false);
  };

  const handleViewModal = () => {
    // console.log("clicked");
    // console.log(contacts);
    setViewModal(true);
    // console.log({viewModal});
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleViewClose = () => {
    setViewModal(false);
  };
  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact)=>contact.nickName.toLowerCase().includes(searchText.toLowerCase()));

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully");
  };
  return (
    <>
      <Nav />
      <div className="container">
  <div className="row">
    <div className="col-md-12 my-5 text-end">
      <input
        className="docSearch docSearch-btn mb-5 me-3 form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e)=>setSearchText(e.target.value)}
      />
      <button className="btn btn-primary rounded-pill" onClick={handleShowModal}>
        Add Contact
      </button>
      <AddContact show={showModal} handleClose={handleCloseModal} />
    </div>
    <Row>
      <Col md={{ span: 5, offset: 4 }}>
        <ListGroup>
          {filteredContacts.map((contact, index) => (
            <div key={index}>
              <ListGroup.Item
                variant="dark"
                className="d-flex justify-content-between align-items-center rounded"
                style={{ backgroundColor: "#f5f5f5" }}
              >
                <div>
                  <strong>{contact.nickName}</strong>
                  <br />
                  DOB: {contact.DOB}
                </div>
                <div>
                  <Button
                    variant="info"
                    className="rounded-circle"
                    onClick={handleViewModal}
                  >
                    <i className="far fa-eye"></i> View
                  </Button>
                  <ViewContact
                    contact={contact}
                    view={viewModal}
                    closeView={handleViewClose}
                  />
                  <Button
                    variant="warning"
                    className="rounded-circle"
                    onClick={handleEditModal}
                  >
                    <i className="far fa-edit"></i> Edit
                  </Button>
                  <EditContact
                    contact={contact}
                    edit={editModal}
                    closeEdit={handleEditClose}
                  />
                  <Button
                    variant="danger"
                    className="rounded-circle"
                    onClick={() => deleteContact(contact.id)}
                  >
                    <i className="far fa-trash-alt"></i> Delete
                  </Button>
                </div>
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
