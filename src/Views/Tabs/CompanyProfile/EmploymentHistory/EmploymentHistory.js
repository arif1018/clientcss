import React from 'react'
import "./EmploymentHistory.css"
import {Container, Row, Col, Form} from "react-bootstrap"

function EmploymentHistory() {
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
                    <Form.Label>Name:</Form.Label>
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
                    <Form.Label>Current Status:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <div className="d-flex gap-4">
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="Permanent"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="PerDiem"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                        <Form.Check className="form_check d-flex align-items-center"
                          type="radio"
                          label="Travel"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Agency:</Form.Label>
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
                
                <div className='emp_history'>
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
                        <option></option>
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
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

          <Form className='education_form'>
            <div className='tab_form policy'>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className='m-0 pb-1'>Education Information</Form.Label>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>
                  
                  <div className='emp_history1'>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Phone:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className = 'w-75'>
                      <Form.Control className = 'w-30' type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex align-items-center w-40'>
                  <div className='right w-25'>
                    <Form.Label>Ext:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Can Contact:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Check className='d-flex align-items-center gap-2 p-0' type="checkbox" label="Check here to authorize us to ccontact this reference" />
                    </div>
                  </div>
                </div>

                {/* <div className='inner_ d-flex'>
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
                    <Form.Label>Expected Graduation Date:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                */}

                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

          
          <Form className='education_form'>
            <div className='tab_form policy'>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className='m-0 pb-1'>Employment</Form.Label>
                <div className='emp_history1'>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Name:</Form.Label>
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
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                </div>
                  
                  <div className='emp_history1'>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Phone:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className = 'w-75'>
                      <Form.Control className = 'w-30' type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>
                  
                <div className='inner_ d-flex align-items-center w-40'>
                  <div className='right w-25'>
                    <Form.Label>Ext:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-75'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Current Position</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Check className='d-flex align-items-center gap-2 p-0' type="checkbox"/>
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Can Contact:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-75'>
                      <Form.Check className='d-flex align-items-center gap-2 p-0' type="checkbox" label="Check here to authorize us to ccontact this reference" />
                    </div>
                  </div>
                </div>

                {/* <div className='inner_ d-flex'>
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
                    <Form.Label>Expected Graduation Date:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-25'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>

                */}

                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

          <Form className='education_form'>
            <div className='tab_form policy'>
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className='m-0 pb-1'>Job Description</Form.Label>
                <div className='inner_ d-flex align-items-center'>
                  <div className='right w-25'>
                    <Form.Label>Name:</Form.Label>
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
                    <Form.Label>Agency:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left'>
                    <div className='w-100'>
                      <Form.Control type="text" />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Note:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-100'>
                      {/* <FloatingLabel controlId="floatingTextarea2"> */}
                        <Form.Control
                          as="textarea"
                          style={{ height: '50px' }}
                        />
                      {/* </FloatingLabel> */}
                    </div>
                  </div>
                </div>

                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Reason for leaving:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-100'>
                      <Form.Control type="text" />
                    </div>
                  </div>
                </div>
                
                <div className='inner_ d-flex'>
                  <div className='right w-25'>
                    <Form.Label>Note:</Form.Label>
                  </div>
                  <div className='py-1 px-2 left '>
                    <div className='w-100'>
                      {/* <FloatingLabel controlId="floatingTextarea2"> */}
                        <Form.Control
                          as="textarea"
                          style={{ height: '40px' }}
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

export default EmploymentHistory