import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./PayRoll.css";

function PayRoll() {
  const [allBranches_payRoll, setAllBranches_Payroll] = useState({
    allBranches_check_process_method: "",
    allBranches_eft_process_method: "",
    allBranches_use_separate_check_batches: "",
    allBranches_next_check_number: "",
    allBranches_week_begins: "",
    allBranches_default_payroll_company: "",
    allBranches_default_payroll_departments: "",
    allBranches_enable_registrant_w4: "",
    allBranches_enable_registrant_1099: "",
    allBranches_allow_w4_and_1099: "",
    allBranches_enable_advance_pay: "",
    allBranches_overtime_rule: "",
    allBranches_oncall_rule: "",
    allBranches_exclude_branch_from_exports: "",
    allBranches_format_jp_morgan: "",
    allBranches_payroll_orderentry: "",
    allBranches_location_code: "",
    allBranches_muncipality: "",
    allBranches_school_district: "",
    allBranches_remittance_information: "",
    allBranches_payroll_use_separate_batches: "",
    allBranches_glaccount1: "",
    allBranches_glaccount2: "",
    allBranches_glaccount3: "",
    allBranches_bankrouting1: "",
    allBranches_bankrouting2: "",
    allBranches_bankaccounts1: "",
    allBranches_bankaccounts2: "",
    allBranches_bank_name1: "",
    allBranches_bank_name2: "",
    allBranches_bank_number1: "",
    allBranches_bank_number2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllBranches_Payroll({
      ...allBranches_payRoll,
      [name]: value,
    });
  };
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="payRoll_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Payroll</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Check Process Method:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      {/* Editable */}
                      <Form.Select
                        name="allBranches_check_process_method"
                        value={
                          allBranches_payRoll.allBranches_check_process_method
                        }
                        onChange={handleChange}
                      >
                        <option>Single Check Processing</option>
                        <option>Batch Check Processing </option>
                        <option>Both [Single and Batch]</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      EFT Process Method:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_eft_process_method"
                        value={
                          allBranches_payRoll.allBranches_eft_process_method
                        }
                        onChange={handleChange}
                      >
                        <option>Single Check Processing</option>
                        <option>Batch Check Processing </option>
                        <option>Both [Single and Batch]</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Use Separate Check Batches:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Check
                        type="checkbox"
                        name="allBranches_use_separate_check_batches"
                        value={
                          allBranches_payRoll.allBranches_use_separate_check_batches
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Next Check Number:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control
                        type="text"
                        name="allBranches_next_check_number"
                        value={
                          allBranches_payRoll.allBranches_next_check_number
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Week Begins:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      {/* Editable */}
                      <Form.Select
                        name="allBranches_week_begins"
                        value={allBranches_payRoll.allBranches_week_begins}
                        onChange={handleChange}
                      >
                        <option>Sun</option>
                        <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                        <option>Fri</option>
                        <option>Sat</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Default Payroll Company:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                        {/* Editable */}
                      <Form.Select
                        name="allBranches_default_payroll_company"
                        value={
                          allBranches_payRoll.allBranches_default_payroll_company
                        }
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>AMT STAFFING</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Default Payroll Departments:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      {/* Editable */}
                      <Form.Select
                        name="allBranches_default_payroll_departments"
                        value={
                          allBranches_payRoll.allBranches_default_payroll_departments
                        }
                        onChange={handleChange}
                      >
                        <option>Nursing</option>
                        <option>PC</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Enable Registrant W4:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        type="checkbox"
                        name="allBranches_enable_registrant_w4"
                        value={
                          allBranches_payRoll.allBranches_enable_registrant_w4
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Enable Registrant 1099:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        type="checkbox"
                        name="allBranches_enable_registrant_1099"
                        value={
                          allBranches_payRoll.allBranches_enable_registrant_1099
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Allow W4 and 1099:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        type="checkbox"
                        name="allBranches_allow_w4_and_1099"
                        value={
                          allBranches_payRoll.allBranches_allow_w4_and_1099
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Enable Advance Pay:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        type="checkbox"
                        name="allBranches_enable_advance_pay"
                        value={
                          allBranches_payRoll.allBranches_enable_advance_pay
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Overtime Rule:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      {/* Editable */}
                      <Form.Select
                        name="allBranches_overtime_rule"
                        value={allBranches_payRoll.allBranches_overtime_rule}
                        onChange={handleChange}
                      >
                        <option>Standard 40</option>
                        <option></option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      OnCall Rule:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                        <Form.Check
                          type="checkbox"
                          name="allBranches_oncall_rule"
                          value={allBranches_payRoll.allBranches_oncall_rule}
                          onChange={handleChange}
                        />
                        <p>Include in overtime calculation</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Positive Pay export
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ fontSize: "10px" }}>
                      Exclude Branch from exports:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                        <div className="div__whole__div">
                          <Form.Check
                            type="checkbox"
                            name="allBranches_exclude_branch_from_exports"
                            value={
                              allBranches_payRoll.allBranches_exclude_branch_from_exports
                            }
                            onChange={handleChange}
                          />
                          <p>Format:</p>
                          <Form.Select
                            name="allBranches_format_jp_morgan"
                            value={
                              allBranches_payRoll.allBranches_format_jp_morgan
                            }
                            onChange={handleChange}
                          >
                            <option>J.P Morgan Chase</option>
                            <option>Ponce Bank</option>
                            <option>The Provident Bank</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Order Entry</Form.Label>

                <div className="inner_ d-flex">
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_schedule">
                        <Form.Check
                          type="checkbox"
                          name="allBranches_payroll_orderentry"
                          value={
                            allBranches_payRoll.allBranches_payroll_orderentry
                          }
                          onChange={handleChange}
                        />
                        <p style={{ fontSize: "11px" }}>
                          Enable selection of secondary disciplines and
                          specialities when adding orders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Form.Label className="text-lighter">
                  <div className="inner_ d-flex">
                    <div className="right w-50"></div>
                    <div className="py-1 px-2 left ">
                      <div className="w-100">
                        <Button className="lookup_button">Lookup</Button>
                      </div>
                    </div>
                  </div>

                  <div className="inner_ d-flex">
                    <div className="right w-50">
                      <Form.Label style={{ fontSize: "10px" }}>
                        Location Code:
                      </Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="w-100">
                        <Form.Select
                          name="allBranches_location_code"
                          onChange={handleChange}
                          value={allBranches_payRoll.allBranches_location_code}
                        >
                          <option disabled></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>

                  <div className="inner_ d-flex">
                    <div className="right w-50">
                      <Form.Label style={{ fontSize: "10px" }}>
                        Munciplaity:
                      </Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="w-100">
                        <Form.Select
                          onChange={handleChange}
                          name="allBranches_muncipality"
                          value={allBranches_payRoll.allBranches_muncipality}
                        >
                          <option disabled></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>

                  <div className="inner_ d-flex">
                    <div className="right w-50">
                      <Form.Label style={{ fontSize: "10px" }}>
                        School District:
                      </Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="w-100">
                        <Form.Select
                          onChange={handleChange}
                          name="allBranches_school_district"
                          value={
                            allBranches_payRoll.allBranches_school_district
                          }
                        >
                          <option disabled></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </Form.Label>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Remittance Information
                </Form.Label>
                <div className="inner_">
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: "100px" }}
                    name="allBranches_remittance_information"
                    value={
                      allBranches_payRoll.allBranches_remittance_information
                    }
                    onChange={handleChange}
                  />
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Wisely Batch Processing
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label
                      style={{ fontSize: "10px", whiteSpace: "nowrap" }}
                    >
                      Use Separate Batches:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="div_payroll_1">
                        <div className="div__whole__div">
                          <Form.Check
                            type="checkbox"
                            name="allBranches_payroll_use_separate_batches"
                            value={
                              allBranches_payRoll.allBranches_payroll_use_separate_batches
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">PayRoll Accounts</Form.Label>

                <div className="inner_ d-flex">
                  <div
                    className="right"
                    style={{ width: "10%", display: "contents" }}
                  >
                    <div
                      className="w-100"
                      style={{
                        display: "block",
                        borderRight: "1px solid darkgray",
                      }}
                    >
                      <Form.Label style={{ display: "contents" }}></Form.Label>
                      <br />
                      <Form.Label>OT:</Form.Label>
                      <Form.Label className="py-4">OT:</Form.Label>
                      <Form.Label className="py-2">OT:</Form.Label>
                    </div>

                    <div className="py-1 px-2 left">
                      <div className="w-20 py-2">
                        <Form.Label style={{ fontSize: "9px" }}>
                          GL Accounts
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="allBranches_glaccount1"
                          value={allBranches_payRoll.allBranches_glaccount1}
                          onChange={handleChange}
                        />
                        <br />
                        <Form.Control
                          type="text"
                          name="allBranches_glaccount2"
                          value={allBranches_payRoll.allBranches_glaccount2}
                          onChange={handleChange}
                        />
                        <br />
                        <Form.Control
                          type="text"
                          name="allBranches_glaccount3"
                          value={allBranches_payRoll.allBranches_glaccount3}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}></div>
                    <div className="py-1 px-2 left ">
                      <div className="w-20 py-2">
                        <Form.Label style={{ fontSize: "9px" }}>
                          Bank Routing
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="allBranches_bankrouting1"
                          value={allBranches_payRoll.allBranches_bankrouting1}
                          onChange={handleChange}
                        />
                        <br />
                        <Form.Control
                          type="text"
                          name="allBranches_bankrouting2"
                          value={allBranches_payRoll.allBranches_bankrouting2}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}></div>
                    <div className="py-1 px-2 left ">
                      <div className="w-20 py-2">
                        <Form.Label style={{ fontSize: "9px" }}>
                          Bank Accounts
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="allBranches_bankaccounts1"
                          value={allBranches_payRoll.allBranches_bankaccounts1}
                          onChange={handleChange}
                        />
                        <br />
                        <Form.Control
                          type="text"
                          name="allBranches_bankaccounts2"
                          value={allBranches_payRoll.allBranches_bankaccounts2}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}></div>
                    <div className="py-1 px-2 left ">
                      <div className="w-20 py-2">
                        <Form.Label style={{ fontSize: "9px" }}>
                          Bank Name
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="allBranches_bank_name1"
                          value={allBranches_payRoll.allBranches_bank_name1}
                          onChange={handleChange}
                        />
                        <br />
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="allBranches_bank_name2"
                          value={allBranches_payRoll.allBranches_bank_name1}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}></div>
                  <div className="py-1 px-2 left">
                    <div className="w-20 py-2">
                      <Form.Label style={{ fontSize: "9px" }}>
                        Bank Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="allBranches_bank_number1"
                        onChange={handleChange}
                        value={allBranches_payRoll.allBranches_bank_number1}
                      />
                      <br />
                      <Form.Control
                        type="text"
                        name="allBranches_bank_number2"
                        onChange={handleChange}
                        value={allBranches_payRoll.allBranches_bank_number2}
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

export default PayRoll;
