import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./References.css";

function References() {
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="references1_form">
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
                    Reference Information
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
                        <i className="fa-solid fa-plus"></i>Add References
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
                        <p>Reference Name</p>
                        <p>Title</p>
                        <p>Employer</p>
                        <p>Phone</p>
                        <p>Ext</p>
                        <p>Email</p>
                        <p>Contact</p>
                        <p>Note</p>
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

export default References;
