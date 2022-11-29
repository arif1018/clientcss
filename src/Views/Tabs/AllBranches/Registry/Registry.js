import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./Registry.css";

function Registry() {
  const [allBranches_registry, setAllBranches_registry] = useState({
    allBranches_email_time: "",
  });

  console.log(allBranches_registry);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllBranches_registry({
      ...allBranches_registry,
      [name]: value,
    });
  };
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="registry_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Credential Email Notifications:{" "}
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Email Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="allBranches_email_time"
                        value={allBranches_registry.allBranches_email_time}
                        onChange={handleChange}
                      >
                        <option>1:00 AM</option>
                        <option>2:00 AM</option>
                        <option>3:00 AM</option>
                        <option>4:00 AM</option>
                        <option>5:00 AM</option>
                        <option selected>6:00 AM</option>
                        <option>7:00 AM</option>
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM (Noon)</option>
                        <option>1:00 PM</option>
                        <option>2:00 PM</option>
                        <option>3:00 PM</option>
                        <option>4:00 PM</option>
                        <option>5:00 PM</option>
                        <option>6:00 PM</option>
                        <option>7:00 PM</option>
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                        <option>12:00 AM (Midnight)</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
              {/* <div className="w-100">
                <p style={{textAlign: 'justify' }}></p>
              </div> */}
            </div>
          </Form>

          <Form className="registry_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Registrant Profile Report Header:
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="div_first">
                    <Button className="button_div1">Choose File</Button>
                    <p className="button_p">No file choosen</p>
                  </div>
                  <div className="div_second">
                    <Button className="button_div2">
                      <i className="fa-solid fa-ban"></i>Delete
                    </Button>
                    <Button className="button_div3">
                      <i className="fa-solid fa-download"></i>Download
                    </Button>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50"></div>
                  </div>
                </div>
              </Form.Group>
              {/* <div className="w-100">
                <p style={{textAlign: 'justify' }}></p>
              </div> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registry;
