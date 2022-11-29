import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveRegistrantHRForm } from "../../../../features/registrant/registrantSlice";
import "./HR.css";

function HR() {
  const dispatch = useDispatch()
  const [registrant_HR, setRegistrant_HR] = useState({
    registrant_HR_EEO_sex: "",
    registrant_HR_EEO_ethnicity: "",
    registrant_HR_EEO_disability: "",
    registrant_HR_EEO_veteran: "",
    registrant_HR_EEO_birthday: "",
    registrant_HR_EEO_marital: "",
    registrant_HR_EEO_hired: "",
    registrant_HR_referral_source: "",
    registrant_HR_referral_sourceName: "",
    registrant_HR_referral_secondarySource: "",
    registrant_HR_referral_secondarySourceName: "",
    registrant_HR_referral_coordinator: "",
    registrant_HR_referral_recruiter: "",
    registrant_HR_referral_interviewedBy: "",
    registrant_HR_referral_interviewedDate: "",
    registrant_HR_employmentStatus_partTime: "",
    registrant_HR_employmentStatus_notToExceed: "",
    registrant_HR_workStatus_firstWorked: "",
    registrant_HR_workStatus_lastWorked: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegistrant_HR({
      ...registrant_HR,
      [name]: value,
    });
  };


  useEffect(()=>{dispatch(saveRegistrantHRForm(registrant_HR))},[dispatch,registrant_HR])

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="HR_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">EEO</Form.Label>

                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end">
                          <Form.Label>Sex:</Form.Label>
                        </div>
                        <div className="px-2 left  w-50 align-items-center d-flex">
                          <Form.Select
                            className="w-75"
                            name="registrant_HR_EEO_sex"
                            value={registrant_HR.registrant_HR_EEO_sex}
                            onChange={handleChange}
                          >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Prefer Not to Say</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end ">
                          <Form.Label>Ethnicity:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Select
                            className="w-100"
                            name="registrant_HR_EEO_ethnicity"
                            value={registrant_HR.registrant_HR_EEO_ethnicity}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end">
                          <Form.Label>Disability:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="registrant_HR_EEO_disability"
                            value={registrant_HR.registrant_HR_EEO_disability}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end ">
                          <Form.Label>Veteran:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Select
                            className="w-100"
                            name="registrant_HR_EEO_veteran"
                            value={registrant_HR.registrant_HR_EEO_veteran}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end">
                          <Form.Label>Birthday:</Form.Label>
                        </div>
                        <div className="px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="registrant_HR_EEO_birthday"
                            value={registrant_HR.registrant_HR_EEO_birthday}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end ">
                          <Form.Label>Marital St.:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Select
                            className="w-75"
                            name="registrant_HR_EEO_marital"
                            value={registrant_HR.registrant_HR_EEO_marital}
                            onChange={handleChange}
                          >
                            <option>Married</option>
                            <option>Unmarried</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end">
                          <Form.Label>Hired:</Form.Label>
                        </div>
                        <div className="px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="registrant_HR_EEO_hired"
                            value={registrant_HR.registrant_HR_EEO_hired}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-25 border-end "></div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex"></div>
                      </div>
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
                <Form.Label className="m-0 pb-1">Referral</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Source:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_HR_referral_source"
                        value={registrant_HR.registrant_HR_referral_source}
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
                    <Form.Label>Source Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control
                        type="text"
                        name="registrant_HR_referral_sourceName"
                        value={registrant_HR.registrant_HR_referral_sourceName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label
                      style={{ whiteSpace: "nowrap", fontSize: "11px" }}
                    >
                      Secondary Source:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_HR_referral_secondarySource"
                        value={
                          registrant_HR.registrant_HR_referral_secondarySource
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
                    <Form.Label>Secondary Source Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control
                        type="text"
                        name="registrant_HR_referral_secondarySourceName"
                        value={
                          registrant_HR.registrant_HR_referral_secondarySourceName
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <p>
                      Use Referral source dropdown code Interface Values(in
                      setup) to link sources to external parameters in the URL
                      from Online Application using the &param = value format.
                      Contact support for additional assistance
                    </p>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Coordinator:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_HR_referral_coordinator"
                        value={registrant_HR.registrant_HR_referral_coordinator}
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
                    <Form.Label>Recruiter:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_HR_referral_recruiter"
                        value={registrant_HR.registrant_HR_referral_recruiter}
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
                    <Form.Label>Interviewed By:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="registrant_HR_referral_interviewedBy"
                        value={
                          registrant_HR.registrant_HR_referral_interviewedBy
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
                    <Form.Label>Interview Date:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control
                        type="text"
                        name="registrant_HR_referral_interviewedDate"
                        value={
                          registrant_HR.registrant_HR_referral_interviewedDate
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

        <Col md={6}>
          <Form className="HR_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Employment Status</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Part Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Check
                        type="checkbox"
                        name="registrant_HR_employmentStatus_partTime"
                        value={
                          registrant_HR.registrant_HR_employmentStatus_partTime
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Not to exceed:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control
                        type="text"
                        className="w-50"
                        placeholder="0"
                        name="registrant_HR_employmentStatus_notToExceed"
                        value={
                          registrant_HR.registrant_HR_employmentStatus_notToExceed
                        }
                        onChange={handleChange}
                      />
                    </div>
                    <p>Scheduling Hours (0 = unlimited)</p>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Row>
          <Col md={6}>
            <Form className="HR_form">
              <div className="tab_form policy">
                <Form.Group
                  className="mb-3 tab_form_"
                  controlId="formBasicText"
                >
                  <Form.Label className="m-0 pb-1">Work Status</Form.Label>

                  <div className="inner_ d-flex">
                    <div className="right w-50">
                      <Form.Label>First Worked:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="w-50">
                        <Form.Control
                          type="text"
                          className="w-100"
                          name="registrant_HR_workStatus_firstWorked"
                          value={
                            registrant_HR.registrant_HR_workStatus_firstWorked
                          }
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="inner_ d-flex">
                    <div className="right w-50">
                      <Form.Label>Last Worked:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="w-50">
                        <Form.Control
                          type="text"
                          className="w-100"
                          name="registrant_HR_workStatus_lastWorked"
                          value={
                            registrant_HR.registrant_HR_workStatus_lastWorked
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
      </Row>
    </Container>
  );
}

export default HR;
