import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./general.css";
import { useDispatch } from "react-redux";
import { saveGeneralCompany } from "../../../../features/companyProfile/companyProfileSlice";

function General() {
  const dispatch = useDispatch();
  const [companyProfile_General, setCompanyProfile_General] = useState({
    companyProfile_general_agencyName_text: "",
    companyProfile_general_emailAddress_text: "",
    companyProfile_general_defaultDiscipline_default: "",
    companyProfile_general_overtimeWarning: "",
    companyProfile_general_doubleBookTolerance_check: "",
    companyProfile_general_passwordploicy_enforceupperandlowercase: "",
    companyProfile_general_passwordploicy_enforceatleastonenumber: "",
    companyProfile_general_passwordploicy_minimumPasswordLength: "",
    companyProfile_general_passwordploicy_passwordExpireIn: "",
    companyProfile_general_passwordploicy_passwordscannotrepeatwithin: "",
    companyProfile_general_credentialStatusOverride_perDiem: "",
    companyProfile_general_credentialStatusOverride_contracts: "",
    companyProfile_general_stateLicenceRule_stateRule: "",
    companyProfile_general_shedulingSearchOptions_select: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile_General({
      ...companyProfile_General,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveGeneralCompany(companyProfile_General));
  }, [dispatch, companyProfile_General]);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="general_form2">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Agency Name</Form.Label>
                <div className="py-1 px-2">
                  <Form.Control
                    type="text"
                    placeholder="AMT Medical Staffing, Inc."
                    name="companyProfile_general_agencyName_text"
                    value={
                      companyProfile_General.companyProfile_general_agencyName_text
                    }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Last Closed</Form.Label>
                <div className="py-1 px-2">
                  <p>Sharron Woods Closed Week:06/04/2022</p>
                </div>
              </Form.Group>
            </div>
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  (Reply To) Email address
                </Form.Label>
                <div className="py-1 px-2">
                  <Form.Control
                    type="text"
                    placeholder=""
                    name="companyProfile_general_emailAddress_text"
                    value={
                      companyProfile_General.companyProfile_general_emailAddress_text
                    }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Default Discipline</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Default :</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="companyProfile_general_defaultDiscipline_default"
                      value={
                        companyProfile_General.companyProfile_general_defaultDiscipline_default
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Overtime Warning</Form.Label>
                <div className="py-1 px-2 ">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                    label="Display warning if booking registrant into overtime"
                    name="companyProfile_general_overtimeWarning"
                    value={
                      companyProfile_General.companyProfile_general_overtimeWarning
                    }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Double Book Tolerance
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Tolerance :</Form.Label>
                  <div className="py-1 px-2 w-25 d-flex">
                    <Form.Control
                      type="text"
                      placeholder="30"
                      name="companyProfile_general_doubleBookTolerance_check"
                      value={
                        companyProfile_General.companyProfile_general_doubleBookTolerance_check
                      }
                      onChange={handleChange}
                    />
                  </div>
                  <Form.Label>(minutes)</Form.Label>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Password ploicy</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Enforce upper and lower case:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="companyProfile_general_passwordploicy_enforceupperandlowercase"
                      value={
                        companyProfile_General.companyProfile_general_passwordploicy_enforceupperandlowercase
                      }
                      onChange={handleChange}
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Enforce at least one number:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="companyProfile_general_passwordploicy_enforceatleastonenumber"
                      value={
                        companyProfile_General.companyProfile_general_passwordploicy_enforceatleastonenumber
                      }
                      onChange={handleChange}
                    />
                    {/* <Form.Control type="text" placeholder="30"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Minimum password length:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ d-flex">
                      <Form.Control
                        type="text"
                        placeholder="30"
                        name="companyProfile_general_passwordploicy_minimumPasswordLength"
                        value={
                          companyProfile_General.companyProfile_general_passwordploicy_minimumPasswordLength
                        }
                        onChange={handleChange}
                      />
                      <Form.Label>Characters</Form.Label>
                    </div>
                    {/* <Form.Label>Characters</Form.Label>
                                        <Form.Control type="text" placeholder="30" class /> */}
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Password expire in:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ d-flex">
                      <Form.Control
                        type="text"
                        placeholder="30"
                        name="companyProfile_general_passwordploicy_passwordExpireIn"
                        value={
                          companyProfile_General.companyProfile_general_passwordploicy_passwordExpireIn
                        }
                        onChange={handleChange}
                      />
                      <Form.Label>Days</Form.Label>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Passwords can not repeat within:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ d-flex">
                      <Form.Control
                        type="text"
                        placeholder="30"
                        name="companyProfile_general_passwordploicy_passwordscannotrepeatwithin"
                        value={
                          companyProfile_General.companyProfile_general_passwordploicy_passwordscannotrepeatwithin
                        }
                        onChange={handleChange}
                      />
                      <Form.Label>Days</Form.Label>
                    </div>
                  </div>
                </div>

                <Form.Label>
                  Set Value to zero (0) to disable enforcement of a password
                  policy
                </Form.Label>
              </Form.Group>
            </div>
          </Form>
        </Col>
        <Col lg={6}>
          <Form className="general_form2">
            <div className="tab_form override">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Credential Status Override
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>PerDiem:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Control
                      type="text"
                      placeholder="30"
                      name="companyProfile_general_credentialStatusOverride_perDiem"
                      value={
                        companyProfile_General.companyProfile_general_credentialStatusOverride_perDiem
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Contracts:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Control
                      type="text"
                      placeholder="30"
                      name="companyProfile_general_credentialStatusOverride_contracts"
                      value={
                        companyProfile_General.companyProfile_general_credentialStatusOverride_contracts
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Form.Label>
                  These options can only be enabled by StafferLink Support,
                  Enabling these options is not recommended, but will be allowed
                  upon request.
                </Form.Label>
              </Form.Group>
            </div>

            <div className="tab_form default">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">State Licence Rule</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>State Rule:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="companyProfile_general_stateLicenceRule_stateRule"
                      value={
                        companyProfile_General.companyProfile_general_stateLicenceRule_stateRule
                      }
                      onChange={handleChange}
                    >
                      <option>No Validation</option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <Form.Label>
                  This rule applies to credential types [MILION , CLICN and
                  (LION when a state is entered)]
                </Form.Label>
              </Form.Group>
            </div>

            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Sheduling Search Options
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    {/* <Form.Select > */}
                    <Form.Select
                      name="companyProfile_general_shedulingSearchOptions_select"
                      value={
                        companyProfile_General.companyProfile_general_shedulingSearchOptions_select
                      }
                      onChange={handleChange}
                    >
                      <option Checked disabled>
                        Select Option
                      </option>
                      <option>Agency Credentials must pass</option>
                      <option>Client Credentials must pass</option>
                      <option>Allow overtime</option>
                      <option>Include unknown availablity</option>
                      <option>Include scheduling conflicts</option>
                      <option>Must have worked at the client</option>
                      <option>Must have worked at the Department</option>
                      <option>Must be oriented at Client</option>
                      <option>Must be oriented at Department</option>
                      <option>Include Client Do Not Shedule(DNS) </option>
                      <option>Include Registrant Do Not Shedule(DNS)</option>
                      <option>Limit to client branch</option>
                    </Form.Select>
                  </div>
                </div>

                <Form.Label></Form.Label>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default General;
