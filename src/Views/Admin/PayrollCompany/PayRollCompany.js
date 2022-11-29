import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payRollCompany.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addPayRollData,
  savePayrollData,
} from "../../../features/payroll/payrollSlice";
import { Link, useNavigate } from "react-router-dom";

function PayRollCompany() {
  const dispatch = useDispatch();
  const [payRoll, setPayRoll] = useState({
    payRoll_payrollCompanyInformation_name: "",
    payRoll_payrollCompanyInformation_desc: "",
    payRoll_payrollCompanyInformation_active: "",
    payRoll_payrollCompanyInformation_federalID: "",
    payRoll_payrollCompanyInformation_address1: "",
    payRoll_payrollCompanyInformation_address2: "",
    payRoll_payrollCompanyInformation_city: "",
    payRoll_payrollCompanyInformation_state: "",
    payRoll_payrollCompanyInformation_zip: "",
    payRoll_payrollCompanyInformation_phone: "",
    payRoll_payrollCompanyInformation_email: "",
    payRoll_payStubHerade_text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayRoll({
      ...payRoll,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(savePayrollData(payRoll));
  }, [dispatch, payRoll]);

  return (
    <main className="main_payrollcompany">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        {/* <div className="w-75 m-auto"> */}
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">
            Payroll Company Details
          </Alert>
          <Container fluid className="payrollcompany_form">
            <Row>
              <Col lg={12}>
                <Form className="payrollcompany_form2">
                  <div className="tab_form override ">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Payroll Company Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Payroll Company Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payRoll_payrollCompanyInformation_name"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Payroll Company Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payRoll_payrollCompanyInformation_desc"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_desc
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Active:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Check
                            className=""
                            type="checkbox"
                            name="payRoll_payrollCompanyInformation_active"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_active
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Federal ID:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="payRoll_payrollCompanyInformation_federalID"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_federalID
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address1:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payRoll_payrollCompanyInformation_address1"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_address1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address2:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payRoll_payrollCompanyInformation_address2"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_address2
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>City:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="payRoll_payrollCompanyInformation_city"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_city
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select
                            className="w-25"
                            name="payRoll_payrollCompanyInformation_state"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_state
                            }
                            onChange={handleChange}
                          >
                            <option>AB</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Zip:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="payRoll_payrollCompanyInformation_zip"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_zip
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Phone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="payRoll_payrollCompanyInformation_phone"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_phone
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Email:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="payRoll_payrollCompanyInformation_email"
                            value={
                              payRoll.payRoll_payrollCompanyInformation_email
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override ">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Pay Stub Herade
                      </Form.Label>
                      <div className="inner_">
                        <div className="py-1 px-2 left w-100">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="payRoll_payStubHerade_text"
                            value={payRoll.payRoll_payStubHerade_text}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              {/* <Col lg={6}>
                <Form className="payrollcompany_form2">
                  <div className="tab_form override ">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Payroll Company Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Payroll Company Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-100" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Payroll Company Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-100" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Active:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Check className="" type="checkbox" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Federal ID:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-50" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address1:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-100" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address2:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-100" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>City:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-75" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select className="w-25">
                            <option>AB</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Zip:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-75" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Phone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control type="text" className="w-50" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Email:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left ">
                          <Form.Control type="text" className="w-75" />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col> */}
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

function Navv() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const PayRollData = useSelector((state) => state.payroll.PayrollTemp);

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addPayRollData(PayRollData));
    navigate('/payRollCompanyTable')
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/payRollCompanyTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PayRollCompany;
