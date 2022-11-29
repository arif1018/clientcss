import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Status.css";

function Questionnaire() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
        <Col md = {12}>
        <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
              <Form.Label className="m-0 pb-1">
                  Status
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-25" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>Current Status:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Button  style={{
                          whiteSpace: "nowrap",
                          fontSize: "8px",
                          color: "#000",
                          backgroundColor: "white",
                        }}>Prospect</Button>
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
          <Form className="status_form">
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
                    Status Information
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
                        <i className="fa-solid fa-plus"></i>Add Status
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
                        <p>From Status</p>
                        <p>To Status</p>
                        <p>Date</p>
                        <p>User</p>
                        <p>User</p>
                        <p>Reason</p>
                        <p>Note</p>
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

export default Questionnaire;
