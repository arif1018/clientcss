import React, { useEffect, useState } from "react";
import {
  Form,
  Alert,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GLaccount.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addglAcountData,
  saveGLAcountData,
} from "../../../features/glAccount/glAccountSlice";
import { Link, useNavigate } from "react-router-dom";

function GLaccount() {
  const dispatch = useDispatch();
  const [glAcount, setGLAcount] = useState({
    glAcount_GLAccountInformation_accountType: "",
    glAcount_GLAccountInformation_exportLevel: "",
    glAcount_GLAccountInformation_accountNumber: "",
    glAcount_GLAccountInformation_accountDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGLAcount({
      ...glAcount,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveGLAcountData(glAcount));
  }, [dispatch, glAcount]);

  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        {/* <div className="w-100 m-auto"> */}
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">G/L Account Details</Alert>
          <Container fluid className="credentials_form">
            <Row>
              <Col lg={12}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        G/L Account Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Account Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-25">
                          <Form.Select
                            name="glAcount_GLAccountInformation_accountType"
                            value={
                              glAcount.glAcount_GLAccountInformation_accountType
                            }
                            onChange={handleChange}
                          >
                            <option>Cash</option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Export Level:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-25">
                          <Form.Select
                            name="glAcount_GLAccountInformation_exportLevel"
                            value={
                              glAcount.glAcount_GLAccountInformation_exportLevel
                            }
                            onChange={handleChange}
                          >
                            <option>D</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Account Number:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            name="glAcount_GLAccountInformation_accountNumber"
                            value={
                              glAcount.glAcount_GLAccountInformation_accountNumber
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Account Description:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            name="glAcount_GLAccountInformation_accountDescription"
                            value={
                              glAcount.glAcount_GLAccountInformation_accountDescription
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>

                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Note on Account Numbers
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <p>
                          Including the letter "L" within the number will insert
                          the location code from branch setup at the time of
                          account number assignment within the General Ledger
                          module. <br />
                          <br /> Example: 000-L-00000 for a branch with location
                          Code 111 would translate into 000-111-00000 when
                          assigning account numbers
                        </p>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>
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
  const finalDataGLAccount = useSelector((state) => state.glAccount.GLAccountTemp);

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addglAcountData(finalDataGLAccount));
    navigate("/glaccountTable");
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
          <Link to="/glaccountTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default GLaccount;
