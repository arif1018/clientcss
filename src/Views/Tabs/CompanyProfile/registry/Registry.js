import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registry.css";
import { useDispatch } from "react-redux";
import { saveRegistryCompany } from "../../../../features/companyProfile/companyProfileSlice";

function Registry() {
  const dispatch = useDispatch();
  const [companyProfile_Registry, setCompanyProfile_Registry] = useState({
    companyProfile_Registry_activationOptions_options: "",
    companyProfile_Registry_defaultNotificationSetting_RC_options: "",
    companyProfile_Registry_defaultNotificationSetting_RC_options2: "",
    companyProfile_Registry_frequuencyRules_1_text_1: "",
    companyProfile_Registry_frequuencyRules_1_text_2: "",
    companyProfile_Registry_frequuencyRules_2_text_1: "",
    companyProfile_Registry_frequuencyRules_2_text_2: "",
    companyProfile_Registry_frequuencyRules_3_text_1: "",
    companyProfile_Registry_frequuencyRules_3_text_2: "",
    companyProfile_Registry_frequuencyRules_4_text_1: "",
    companyProfile_Registry_frequuencyRules_4_text_2: "",
    companyProfile_Registry_credentialStatusEmailsOnlySentToRegistrantsinStatus_select:
      "",
    companyProfile_Registry_workHistory_check: "",
    companyProfile_Registry_daysToWait: "",
    companyProfile_Registry_SSNChanges_check: "",
    companyProfile_Registry_nextEmployeeID_EIN: "",
    companyProfile_Registry_hireDate_hireDateRule: "",
    companyProfile_Registry_partTimeDefault_partTime: "",
    companyProfile_Registry_partTimeDefault_maximumHours: "",
    companyProfile_Registry_benefitAdmin_enableBenefitAdmin: "",
    companyProfile_Registry_benefitAdmin_benefitSystemType: "",
    companyProfile_Registry_benefitAdmin_includeImport: "",
    companyProfile_Registry_benefitAdmin_defaultBenefitClass: "",
    companyProfile_Registry_webPortalAccess_check: "",
    companyProfile_Registry_webPortalTimecardImages_check: "",
    // companyProfile_Registry_webPortalUnsheduledTimesheets_check,
    // companyProfile_Registry_webPortalDefault_select,
    // companyProfile_Registry_registrantProfileReportHeader_text,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile_Registry({
      ...companyProfile_Registry,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveRegistryCompany(companyProfile_Registry));
  }, [dispatch, companyProfile_Registry]);

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="registry_form">
            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Activation Options</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    <Form.Select
                      name="companyProfile_Registry_activationOptions_options"
                      value={
                        companyProfile_Registry.companyProfile_Registry_activationOptions_options
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Credential must be passing</option>
                      <option>
                        Must have a valid non-system generated SSN/SSI
                      </option>
                      <option>Must have at least one address</option>
                      <option>Registrant's birthday is requird</option>
                      <option>Registrant's ethnicity is requird</option>
                      <option>A recruits is requird</option>
                      <option>Registrant's sex is requird</option>
                      <option>Registrant's marital status is requird</option>
                      <option>Federal filing status is requird</option>
                      <option>Payroll resident state is requird</option>
                      <option>Must have at least one specialty</option>
                      <option>Referral Source is requird</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Default Notification Setting (Registrant Contacts)
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    <Form.Select
                      name="companyProfile_Registry_defaultNotificationSetting_RC_options"
                      value={
                        companyProfile_Registry.companyProfile_Registry_defaultNotificationSetting_RC_options
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Email/Text Registry Module</option>
                      <option>Email/Text available Shifts</option>
                      <option>Email/Text Sheduling Confimmations</option>
                      <option>
                        Email/Text Credential Status Notifications
                      </option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Default Notification Setting (Registrant Contacts)
                </Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    <Form.Select
                      name="companyProfile_Registry_defaultNotificationSetting_RC_options2"
                      value={
                        companyProfile_Registry.companyProfile_Registry_defaultNotificationSetting_RC_options2
                      }
                      onChange={handleChange}
                    >
                      <option></option>
                      <option>Email/Text Registry Module</option>
                      <option>Email/Text available Shifts</option>
                      <option>Email/Text Sheduling Confimmations</option>
                      <option>
                        Email/Text Credential Status Notifications
                      </option>
                    </Form.Select>
                  </div>
                </div>

                {/* <Form.Label>{selectsA}</Form.Label> */}
              </Form.Group>
            </div>

            <div className="tab_form frequency">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Frequuency Rules</Form.Label>
                <div className="py-1 px-2 w-100 ">
                  <div className="frequency_">
                    <Form.Label className="d-flex">
                      Send every{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_1_text_1"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_1_text_1
                        }
                        onChange={handleChange}
                      />{" "}
                      days when faling in{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_1_text_2"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_1_text_2
                        }
                        onChange={handleChange}
                      />{" "}
                      days{" "}
                    </Form.Label>
                    <Form.Label className="d-flex">
                      Send every{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_2_text_1"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_2_text_1
                        }
                        onChange={handleChange}
                      />{" "}
                      days when faling in{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_2_text_2"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_2_text_2
                        }
                        onChange={handleChange}
                      />{" "}
                      days{" "}
                    </Form.Label>
                    <Form.Label className="d-flex">
                      Send every{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_3_text_1"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_3_text_1
                        }
                        onChange={handleChange}
                      />{" "}
                      days when faling in{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_3_text_2"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_3_text_2
                        }
                        onChange={handleChange}
                      />{" "}
                      days{" "}
                    </Form.Label>
                    <Form.Label className="d-flex">
                      Send every{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_4_text_1"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_4_text_1
                        }
                        onChange={handleChange}
                      />{" "}
                      days when faling in{" "}
                      <Form.Control
                        type="text"
                        placeholder="15"
                        name="companyProfile_Registry_frequuencyRules_4_text_2"
                        value={
                          companyProfile_Registry.companyProfile_Registry_frequuencyRules_4_text_2
                        }
                        onChange={handleChange}
                      />{" "}
                      days{" "}
                    </Form.Label>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Credential Status Emails only sent to Registrants in Status
                </Form.Label>
                <div className="py-1 px-2 w-75">
                  <Form.Select
                    name="companyProfile_Registry_credentialStatusEmailsOnlySentToRegistrantsinStatus_select"
                    value={
                      companyProfile_Registry.companyProfile_Registry_credentialStatusEmailsOnlySentToRegistrantsinStatus_select
                    }
                    onChange={handleChange}
                  >
                    <option></option>
                    <option>Disabled select</option>
                  </Form.Select>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Work History</Form.Label>
                <div className="inner_ policy_registry  d-flex">
                  <div className="right">
                    <Form.Label style={{ visibility: "hidden" }}>
                      sds
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left history">
                    <Form.Check
                      className="d-flex align-items-center gap-1 justify-content-start p-0"
                      type="checkbox"
                      label="Enable Work History for Scheduled Shifts"
                      name="companyProfile_Registry_workHistory_check"
                      value={
                        companyProfile_Registry.companyProfile_Registry_workHistory_check
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ policy_registry d-flex ">
                  <div className="right">
                    <Form.Label>Days To Wait:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ w-25">
                      <Form.Control
                        type="text"
                        placeholder="99"
                        name="companyProfile_Registry_daysToWait"
                        value={
                          companyProfile_Registry.companyProfile_Registry_daysToWait
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <Form.Label>
                  Numbers of days to wait, after the shift date of a scheduled
                  shift, before inserting abd updating work history information.
                  This will always be superseded within timecards during payroll
                  processing, This feature is beneficial When you are not using
                  timecards and payroll
                </Form.Label>
              </Form.Group>
            </div>

            <div className="tab_form header">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Registrant Profile Report Header:
                </Form.Label>
                <div className="py-1 px-2">
                  <Form.Label className="m-0 pb-1 p-0">
                    Clicking this button will update PSD Codes for all
                    registrants with resident payroll locations within the state
                    of pennysvina.Clicking this button will update PSD Codes for
                    all registrants with resident payroll locations within the
                    state of pennysvina.Clicking this button will update PSD
                    Codes for all registrants with resident payroll locations
                    within the state of pennysvina.
                  </Form.Label>
                </div>
                <Button>Generate PSD Codes</Button>
              </Form.Group>
            </div>
          </Form>
        </Col>
        <Col lg={6}>
          <Form className="registry_form  ">
            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">SSN Changes</Form.Label>
                <div className="py-1 px-2 ">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                    label="Disable SSN Changes after registrant is paid for all users except Administrartors"
                    name="companyProfile_Registry_SSNChanges_check"
                    value={
                      companyProfile_Registry.companyProfile_Registry_SSNChanges_check
                    }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Next Employee ID (EIN)
                </Form.Label>
                <div className="inner_ nextEmp d-flex">
                  <Form.Label>EIN :</Form.Label>
                  <div className="py-1 px-2 w-25 d-flex">
                    <Form.Control
                      type="text"
                      placeholder="22469"
                      name="companyProfile_Registry_nextEmployeeID_EIN"
                      value={
                        companyProfile_Registry.companyProfile_Registry_nextEmployeeID_EIN
                      }
                      onChange={handleChange}
                    />
                  </div>
                  {/* <Form.Label>(minutes)</Form.Label> */}
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Hire Date</Form.Label>
                <div className="inner_ hire d-flex align-items-center">
                  <Form.Label>Hire Date Rule:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="companyProfile_Registry_hireDate_hireDateRule"
                      value={
                        companyProfile_Registry.companyProfile_Registry_hireDate_hireDateRule
                      }
                      onChange={handleChange}
                    >
                      <option>1st Actived Date</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Part Time Defaults</Form.Label>
                <div className="inner_ policy_registry d-flex align-items-center">
                  <div className="right">
                    <Form.Label>part Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="companyProfile_Registry_partTimeDefault_partTime"
                      value={
                        companyProfile_Registry.companyProfile_Registry_partTimeDefault_partTime
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ policy_registry d-flex">
                  <div className="right">
                    <Form.Label>Maximum Hours:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ w-25">
                      <Form.Control
                        type="text"
                        placeholder="30"
                        name="companyProfile_Registry_partTimeDefault_maximumHours"
                        value={
                          companyProfile_Registry.companyProfile_Registry_partTimeDefault_maximumHours
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Benefit Admin</Form.Label>
                <div className="inner_ policy_registry d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Enable Benefit Admin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="companyProfile_Registry_benefitAdmin_enableBenefitAdmin"
                      value={
                        companyProfile_Registry.companyProfile_Registry_benefitAdmin_enableBenefitAdmin
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ policy_registry d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Benefit System Type:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ w-75">
                      <Form.Select
                        name="companyProfile_Registry_benefitAdmin_benefitSystemType"
                        value={
                          companyProfile_Registry.companyProfile_Registry_benefitAdmin_benefitSystemType
                        }
                        onChange={handleChange}
                      >
                        <option>1st Actived Date</option>
                        <option>Disabled select</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ policy_registry d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Include Import:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="companyProfile_Registry_benefitAdmin_includeImport"
                      value={
                        companyProfile_Registry.companyProfile_Registry_benefitAdmin_includeImport
                      }
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ policy_registry d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Default Benefit Class:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="left_ w-75">
                      <Form.Select
                        name="companyProfile_Registry_benefitAdmin_defaultBenefitClass"
                        value={
                          companyProfile_Registry.companyProfile_Registry_benefitAdmin_defaultBenefitClass
                        }
                        onChange={handleChange}
                      >
                        <option>New Hire - Ingeligible</option>
                        <option>Disabled select</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Web Portal Access</Form.Label>
                <div className="py-1 px-2 ">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                    label="Enabled"
                    name="companyProfile_Registry_webPortalAccess_check"
                    value={
                      companyProfile_Registry.companyProfile_Registry_webPortalAccess_check
                    }
                    onChange={handleChange}
                  />
                </div>
                <Form.Label className="overtimeLabel_">
                  Enabled the option for turning on web portal access within the
                  registrant online access sub module.
                </Form.Label>
              </Form.Group>
            </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Web Portal Timecard Images
                </Form.Label>
                <div className="py-1 px-2 ">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                    label="Allow Registrant to View Timecard Images Within Web Portal"
                    name="companyProfile_Registry_webPortalTimecardImages_check"
                    value={
                      companyProfile_Registry.companyProfile_Registry_webPortalTimecardImages_check
                    }
                    onChange={handleChange}
                  />
                </div>
                {/* <Form.Label className='overtimeLabel_'>Enabled the option for turning on web portal access within the registrant online access sub module.</Form.Label> */}
              </Form.Group>
            </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Web Portal Unsheduled Timesheets
                </Form.Label>
                <div className="py-1 px-2 ">
                  <Form.Check
                    className="d-flex align-items-center"
                    type="checkbox"
                    label="Allow Registrant to Add Unsheduled Timesheets"
                    // name="companyProfile_Registry_webPortalUnsheduledTimesheets_check"
                    // value={
                    //   companyProfile_Registry.companyProfile_Registry_webPortalUnsheduledTimesheets_check
                    // }
                    // onChange={handleChange}
                  />
                </div>
                {/* <Form.Label className='overtimeLabel_'>Enabled the option for turning on web portal access within the registrant online access sub module.</Form.Label> */}
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Web Portal Default Portal Security Group
                </Form.Label>
                <div className="inner_ hire d-flex align-items-center">
                  {/* <Form.Label>Hire Date Rule:</Form.Label> */}
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      // name="companyProfile_Registry_webPortalDefault_select"
                      // value={
                      //   companyProfile_Registry.companyProfile_Registry_webPortalDefault_select
                      // }
                      onChange={handleChange}
                    >
                      <option>All Permissions</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Registrant Profile Report Header:
                </Form.Label>
                <div className="py-1 px-2">
                  <Form.Control
                    type="text"
                    // name="companyProfile_Registry_registrantProfileReportHeader_text"
                    // value={
                    //   companyProfile_Registry.companyProfile_Registry_registrantProfileReportHeader_text
                    // }
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Registry;
