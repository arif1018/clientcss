import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Preference.css";
import { saveRegistrantPreferencesForm } from "../../../../features/registrant/registrantSlice";
import { useDispatch } from "react-redux";

function Preferences() {
  const dispatch = useDispatch();
  const [registrant_preferences, setRegistrant_preferences] = useState({
    registrant_preferences_clientsInformation_workerType: "",
    registrant_preferences_contactInformation_hourly: "",
    registrant_preferences_contactInformation_monthly: "",
    registrant_preferences_contactInformation_weekly: "",
    registrant_preferences_contactInformation_yearly: "",
    registrant_preferences_weekHours_maximum: "",
    registrant_preferences_weekDay_maximum: "",
    registrant_preferences_clientsInformation_max1: "",
    registrant_preferences_clientsInformation_maxOvernightStays: "",
    registrant_preferences_schedulingPreferences_preferences: "",
    registrant_preferences_schedulingPreferences_localAssignmentsOnly: "",
    registrant_preferences_schedulingPreferences_localOrTravelAssignmentsOnly:
      "",
    registrant_preferences_schedulingPreferences_travelAssignmentsOnly: "",
    registrant_preferences_schedulingPreferences_willDriveWithin100Miles: "",
    registrant_preferences_schedulingPreferences_perdiem: "",
    registrant_preferences_schedulingPreferences_requestDocuments: "",
    registrant_preferences_schedulingPreferences_allowOverride: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setRegistrant_preferences({
      ...registrant_preferences,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveRegistrantPreferencesForm(registrant_preferences));
  }, [dispatch, registrant_preferences]);

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="preference_form">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0">Clients Information</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Worker Type:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="registrant_preferences_clientsInformation_workerType"
                      value={
                        registrant_preferences.registrant_preferences_clientsInformation_workerType
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Contact Information
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end">
                          <Form.Label>Hourly:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_contactInformation_hourly"
                            value={
                              registrant_preferences.registrant_preferences_contactInformation_hourly
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end ">
                          <Form.Label>Weekly:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_contactInformation_weekly"
                            value={
                              registrant_preferences.registrant_preferences_contactInformation_weekly
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end">
                          <Form.Label>Monthly:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_contactInformation_monthly"
                            value={
                              registrant_preferences.registrant_preferences_contactInformation_monthly
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end ">
                          <Form.Label>Yearly:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_contactInformation_yearly"
                            value={
                              registrant_preferences.registrant_preferences_contactInformation_yearly
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  <div className="main1_div">
                    <p>Hours/Week</p>
                    <p>Weeks/Day</p>
                  </div>
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end">
                          <Form.Label>Maximum:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_weekHours_maximum"
                            value={
                              registrant_preferences.registrant_preferences_weekHours_maximum
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-50">
                        <div className="w-50 border-end ">
                          <Form.Label>Maximum:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="registrant_preferences_weekDay_maximum"
                            value={
                              registrant_preferences.registrant_preferences_weekDay_maximum
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0">Clients Information</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Max 1-Way(miles):</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      className="w-50"
                      name="registrant_preferences_clientsInformation_max1"
                      value={
                        registrant_preferences.registrant_preferences_clientsInformation_max1
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <Form.Label style={{ whiteSpace: "nowrap" }}>
                    Max Overnight Stays:
                  </Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      className="w-50"
                      name="registrant_preferences_clientsInformation_maxOvernightStays"
                      value={
                        registrant_preferences.registrant_preferences_clientsInformation_maxOvernightStays
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form override">
              <Form.Group className="mb-2 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Scheduling Preferences
                </Form.Label>

                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_preferences"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_preferences
                    }
                    onChange={handleChange}
                  />
                  <p>Preferences</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_localAssignmentsOnly"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_localAssignmentsOnly
                    }
                    onChange={handleChange}
                  />
                  <p>Local Assignments Only</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_localOrTravelAssignmentsOnly"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_localOrTravelAssignmentsOnly
                    }
                    onChange={handleChange}
                  />
                  <p>Local or Travel Assignments Only</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_travelAssignmentsOnly"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_travelAssignmentsOnly
                    }
                    onChange={handleChange}
                  />
                  <p>Travel Assignments Only</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_willDriveWithin100Miles"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_willDriveWithin100Miles
                    }
                    onChange={handleChange}
                  />
                  <p>Will Drive Within 100 Miles</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_perdiem"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_perdiem
                    }
                    onChange={handleChange}
                  />
                  <p>Perdiem</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_contract"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_contract
                    }
                    onChange={handleChange}
                  />
                  <p>Contract</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_requestDocuments"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_requestDocuments
                    }
                    onChange={handleChange}
                  />
                  <p>Request Documents</p>
                </div>
                <div className="inner_ d-flex py-1 px-1">
                  <Form.Check
                    type="checkbox"
                    name="registrant_preferences_schedulingPreferences_allowOverride"
                    value={
                      registrant_preferences.registrant_preferences_schedulingPreferences_allowOverride
                    }
                    onChange={handleChange}
                  />
                  <p>Allow Override</p>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Preferences;
