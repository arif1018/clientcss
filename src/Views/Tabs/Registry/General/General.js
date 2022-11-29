import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./General.css";
import { useDispatch } from "react-redux";
import { saveRegistrantGeneralForm } from "../../../../features/registrant/registrantSlice";
function General() {
  const dispatch = useDispatch();

  const [registrant_general, setRegistrant_general] = useState({
    registrant_general_clientsInformation_currentStatus: "",
    registrant_general_clientsInformation_branch: "",
    registrant_general_clientsInformation_ssn: "",
    registrant_general_clientsInformation_discipline: "",
    registrant_general_clientsInformation_firstName: "",
    registrant_general_clientsInformation_lastName: "",
    registrant_general_clientsInformation_middleInitial: "",
    registrant_general_clientsInformation_maidenName: "",
    registrant_general_clientsInformation_nickName: "",
    registrant_general_clientsInformation_branchVisibility: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegistrant_general({
      ...registrant_general,
      [name]: value,
    });
  };


  useEffect(() => {
    dispatch(saveRegistrantGeneralForm(registrant_general));
  }, [dispatch, registrant_general]);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="general_form">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0">Clients Information</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Current Status:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="registrant_general_clientsInformation_currentStatus"
                      value={
                        registrant_general.registrant_general_clientsInformation_currentStatus
                      }
                      onChange={handleChange}
                    >
                      <option>Prospect</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label
                    style={{ whiteSpace: "nowrap", fontSize: "10px" }}
                  >
                    Online App Status:
                  </Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Button className="registry__btn">None</Button>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Branch :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      className="w-100"
                      name="registrant_general_clientsInformation_branch"
                      value={
                        registrant_general.registrant_general_clientsInformation_branch
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>SSN:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <div className="div__registry">
                      <Form.Control
                        type="text"
                        placeholder=""
                        name="registrant_general_clientsInformation_ssn"
                        value={
                          registrant_general.registrant_general_clientsInformation_ssn
                        }
                        onChange={handleChange}
                      />
                      <Button className="btn_registry2">
                        <i className="fa-solid fa-gear"></i>Auto Generate
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Discipline:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="registrant_general_clientsInformation_discipline"
                      value={
                        registrant_general.registrant_general_clientsInformation_discipline
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>First Name:</Form.Label>
                  <div className="py-1 px-2 w-40">
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="registrant_general_clientsInformation_firstName"
                      value={
                        registrant_general.registrant_general_clientsInformation_firstName
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Last Name:</Form.Label>
                  <div className="py-1 px-2 w-40">
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="registrant_general_clientsInformation_lastName"
                      value={
                        registrant_general.registrant_general_clientsInformation_lastName
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Middle Initial:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      placeholder=""
                      className="w-25"
                      name="registrant_general_clientsInformation_middleInitial"
                      value={
                        registrant_general.registrant_general_clientsInformation_middleInitial
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Maiden Name:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="registrant_general_clientsInformation_maidenName"
                      value={
                        registrant_general.registrant_general_clientsInformation_maidenName
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Nick Name:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      placeholder=""
                      name="registrant_general_clientsInformation_nickName"
                      value={
                        registrant_general.registrant_general_clientsInformation_nickName
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
        <Col lg={6}>
          <Form className="payroll_form">
            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Branch Visibility</Form.Label>
                <div className="py-1 px-2 ">
                  <p>
                    Select other branches that should have access to this
                    registrant. The parent branch will be added automatically
                    when saved and doesnot need to be selected.
                  </p>
                  <div className="py-1 px-1 w-100">
                    <Form.Select
                      style={{ height: "100px" }}
                      name="registrant_general_clientsInformation_branchVisibility"
                      value={
                        registrant_general.registrant_general_clientsInformation_branchVisibility
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Must have at least one department</option>
                      <option>Must have at least one contact</option>
                      <option>Must have at least one rate</option>
                      <option>Must have a biling address</option>
                      <option>Credit status must be approved</option>
                      <option>Must have an agency representative</option>
                      <option>Must have a Print option defaultValue</option>
                      <option>Must have a paid Leave Jurisdiction</option>
                      <option>Must have a Rating</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

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
                    Service Dates
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
                        <i className="fa-solid fa-plus"></i> Add Service Dates
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

export default General;
