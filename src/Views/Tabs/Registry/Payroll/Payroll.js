import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveRegistrantPayrollForm } from "../../../../features/registrant/registrantSlice";
import "./Payroll.css";

function Payroll() {
  const dispatch = useDispatch();
  const [registrant_payroll, setRegistrant_payroll] = useState({
    registrant_payroll_payrollSystemIDs_companyID: "",
    registrant_payroll_payrollSystemIDs_departmentID: "",
    registrant_payroll_payrollSystemIDs_employee: "",
    registrant_payroll_employmentStatus_text: "",
    registrant_payroll_workStatus_radio: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegistrant_payroll({
      ...registrant_payroll,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveRegistrantPayrollForm(registrant_payroll));
  }, [dispatch, registrant_payroll]);

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="Payroll_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Payroll System IDs</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Company ID:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_payroll_payrollSystemIDs_companyID"
                        value={
                          registrant_payroll.registrant_payroll_payrollSystemIDs_companyID
                        }
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Department ID:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_payroll_payrollSystemIDs_departmentID"
                        value={
                          registrant_payroll.registrant_payroll_payrollSystemIDs_departmentID
                        }
                        onChange={handleChange}
                      >
                        <option>Nursing</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Employee:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="payroll__edit">
                      <div className="w-50">
                        <Form.Control
                          type="text"
                          name="registrant_payroll_payrollSystemIDs_employee"
                          value={
                            registrant_payroll.registrant_payroll_payrollSystemIDs_employee
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <Button className="btn__payroll1">
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          <Form className="HR_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Employment Status</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Control
                    style={{ height: "120px" }}
                    type="text"
                    name="registrant_payroll_employmentStatus_text"
                    value={
                      registrant_payroll.registrant_payroll_employmentStatus_text
                    }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={12}>
          <Form className="HR_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Work Status</Form.Label>

                <div className="inner_ abc d-flex align-items-center justify-content-space-evenly">
                  <div
                    className="div__radios"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div>
                      <Form.Check
                        className="form_check"
                        type="radio"
                        label="Printed Check"
                        id="formHorizontalRadios1"
                        name="registrant_payroll_workStatus_radio"
                        value={
                          registrant_payroll.registrant_payroll_workStatus_radio
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Form.Check
                        className="form_check"
                        type="radio"
                        label="Manual Check"
                        id="formHorizontalRadios1"
                        name="registrant_payroll_workStatus_radio"
                        value={
                          registrant_payroll.registrant_payroll_workStatus_radio
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Form.Check
                        className="form_check"
                        type="radio"
                        label="Wisely"
                        id="formHorizontalRadios1"
                        name="registrant_payroll_workStatus_radio"
                        value={
                          registrant_payroll.registrant_payroll_workStatus_radio
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Form.Check
                        className="form_check"
                        type="radio"
                        label="EFT"
                        id="formHorizontalRadios1"
                        name="registrant_payroll_workStatus_radio"
                        value={
                          registrant_payroll.registrant_payroll_workStatus_radio
                        }
                        onChange={handleChange}
                      />
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

export default Payroll;
