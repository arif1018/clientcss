import React from 'react';
import "./Education.css";
import { Container, Row, Col, Form, } from "react-bootstrap"

function Education() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} >
          <Form className='education_form'>
            <div className='tab_form policy'>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className='m-0 pb-1'>Education Information</Form.Label>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>School Name:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Degree:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Major / Field of study:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Current Status:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <div className="d-flex gap-4">
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="Graduated"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="Attending"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="Other"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Control type = "text"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Expected Graduation Date:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-50'>
                      <Form.Select>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Note:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      {/* <FloatingLabel controlId="floatingTextarea2"> */}
                      <Form.Control
                        as="textarea"
                        style={{ height: '80px' }}
                      />
                      {/* </FloatingLabel> */}
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Education