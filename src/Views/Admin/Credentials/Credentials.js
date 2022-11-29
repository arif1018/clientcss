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
import "./Credentials.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCredentialsData,
  saveCredentialsData,
} from "../../../features/credentials/credentialsSlice";
import { Link, useNavigate } from "react-router-dom";

function Credentials() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    credentials_credentialsInformation_type: "",
    credentials_credentialsInformation_codeName: "",
    credentials_credentialsInformation_codeDescription: "",
    credentials_credentialsInformation_passingResult: "",
    credentials_credentialsInformation_vnLabel: "",
    credentials_credentialsInformation_defineCustomCodes: "",
    credentials_credentialsInformation_discipline: "",
    credentials_credentialsInformation_specialities: "",
    credentials_credentialsOption_useExpirationDate: "",
    credentials_credentialsOption_getAcquiredData: "",
    credentials_credentialsInformation_agencyRequired: "",
    credentials_credentialsInformation_autoAddedtonewRegistrant: "",
    credentials_credentialsInformation_noRegistrantNotifications: "",
    credentials_credentialsInformation_hidefromRegistrantPortal: "",
    credentials_credentialsInformation_hidefromOnlineApplication: "",
    credentials_credentialsInformation_requestDocuments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveCredentialsData(credentials));
  }, [dispatch, credentials]);

  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">Credentials Details</Alert>
          <Container fluid className="credentials_form">
            <Row className="gap-0">
              <Col lg={7} className="pe-0">
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Credentials Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            name="credentials_credentialsInformation_type"
                            value={
                              credentials.credentials_credentialsInformation_type
                            }
                            onChange={handleChange}
                          >
                            <option>Test for + or - result [+-RES]</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Code Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="credentials_credentialsInformation_codeName"
                            value={
                              credentials.credentials_credentialsInformation_codeName
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Code Description:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="credentials_credentialsInformation_codeDescription"
                            value={
                              credentials.credentials_credentialsInformation_codeDescription
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Passing Result:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            name="credentials_credentialsInformation_passingResult"
                            value={
                              credentials.credentials_credentialsInformation_passingResult
                            }
                            onChange={handleChange}
                          >
                            <option>(-) Negative Result</option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>VN +- Label:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="credentials_credentialsInformation_vnLabel"
                            value={
                              credentials.credentials_credentialsInformation_vnLabel
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label></Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            type="checkbox"
                            className="d-flex align-items-center"
                            label="Define Custom Codes"
                            name="credentials_credentialsInformation_defineCustomCodes"
                            value={
                              credentials.credentials_credentialsInformation_defineCustomCodes
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Discipline:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            name="credentials_credentialsInformation_discipline"
                            value={
                              credentials.credentials_credentialsInformation_discipline
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Specialities:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            name="credentials_credentialsInformation_specialities"
                            value={
                              credentials.credentials_credentialsInformation_specialities
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                            <option>Negative Result</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>
              <Col lg={5} className="ps-0">
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Credentials Option
                      </Form.Label>

                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Use expiration Date"
                          name="credentials_credentialsOption_useExpirationDate"
                          value={
                            credentials.credentials_credentialsOption_useExpirationDate
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Get Acquired Data"
                          name="credentials_credentialsOption_getAcquiredData"
                          value={
                            credentials.credentials_credentialsOption_getAcquiredData
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Agency Required"
                          name="credentials_credentialsInformation_agencyRequired"
                          value={
                            credentials.credentials_credentialsInformation_agencyRequired
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Auto Added to new Registrant"
                          name="credentials_credentialsInformation_autoAddedtonewRegistrant"
                          value={
                            credentials.credentials_credentialsInformation_autoAddedtonewRegistrant
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="No Registrant Notifications"
                          name="credentials_credentialsInformation_noRegistrantNotifications"
                          value={
                            credentials.credentials_credentialsInformation_noRegistrantNotifications
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Hide from Registrant Portal"
                          name="credentials_credentialsInformation_hidefromRegistrantPortal"
                          value={
                            credentials.credentials_credentialsInformation_hidefromRegistrantPortal
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Hide from Online Application"
                          name="credentials_credentialsInformation_hidefromOnlineApplication"
                          value={
                            credentials.credentials_credentialsInformation_hidefromOnlineApplication
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Request Documents"
                          name="credentials_credentialsInformation_requestDocuments"
                          value={
                            credentials.credentials_credentialsInformation_requestDocuments
                          }
                          onChange={handleChange}
                        />
                      </div>
                      <div className="inner_ py-1 px-4 overtime w-100">
                        <Form.Check
                          type="checkbox"
                          className="d-flex align-items-center w-100"
                          label="Allow Override"
                          name="credentials_credentialsInformation_allowOverride"
                          value={
                            credentials.credentials_credentialsInformation_requestDocuments
                          }
                          onChange={handleChange}
                        />
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
  const dispacth = useDispatch();
  const finalDataCredentials = useSelector(
    (state) => state.credentials.CredentialsTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispacth(addCredentialsData(finalDataCredentials));
    navigate("/CredentialTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to='/CredentialTable' className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Credentials;
