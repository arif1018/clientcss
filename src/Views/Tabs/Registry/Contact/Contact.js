import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import { useDispatch } from "react-redux";
import { saveRegistrantContactForm } from "../../../../features/registrant/registrantSlice";
function Contact() {
  const dispatch = useDispatch();
  const [registrant_contact, setregistrant_contact] = useState({
    registrant_contact_payModifiers_name: "",
    registrant_contact_payModifiers_phone: "",
    registrant_contact_payModifiers_relation: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setregistrant_contact({
      ...registrant_contact,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveRegistrantContactForm(registrant_contact));
  }, [dispatch, registrant_contact]);
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Pay Modifiers</Form.Label>

                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "10%", display: "contents" }}
                  >
                    <div
                      className="w-100"
                      style={{
                        display: "block",
                        borderRight: "1px solid darkgray",
                      }}
                    >
                      <Form.Label>Name:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control
                            type="text"
                            name="registrant_contact_payModifiers_name"
                            value={
                              registrant_contact.registrant_contact_payModifiers_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>Phone:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control
                            type="text"
                            name="registrant_contact_payModifiers_phone"
                            value={
                              registrant_contact.registrant_contact_payModifiers_phone
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>Relation:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control
                            type="text"
                            name="registrant_contact_payModifiers_relation"
                            value={
                              registrant_contact.registrant_contact_payModifiers_relation
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Address Information
                    <div className="py-1 px-1 w-50">
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "8px",
                          color: "#000",
                          backgroundColor: "white",
                        }}
                      >
                        <i className="fa-solid fa-plus"></i> Add Address
                      </Button>
                    </div>
                  </Form.Label>
                  <div className="py-1 px-2">
                    <div>
                      <Col
                        md={4}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Type</p>
                        <p>Address</p>
                        <p>County</p>
                        <p>City</p>
                        <p>State</p>
                        <p>Zip</p>
                        <p>GeoLoc</p>
                        <p>Primary</p>
                        <p>Check</p>
                        <p>Action</p>
                      </Col>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    Contact Information
                    <div className="py-1 px-1 w-50">
                      <Button
                        className="form_btn w-65 h-50"
                        type="submit"
                        style={{
                          whiteSpace: "nowrap",
                          fontSize: "8px",
                          color: "#000",
                          backgroundColor: "white",
                        }}
                      >
                        <i className="fa-solid fa-plus"></i> Add Contact
                      </Button>
                    </div>
                  </Form.Label>
                  <div className="py-1 px-2">
                    <div>
                      <Col
                        md={4}
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>Type</p>
                        <p>Contact</p>
                        <p>Notes</p>
                        <p>Creds</p>
                        <p>Conf</p>
                        <p>Unsubscribed</p>
                        <p>Blackisted</p>
                        <p>Reason</p>
                        <p>Action</p>
                      </Col>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
