import React, { useState, useEffect } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EarningDeduction.css";
import {
  saveEarningDeductionData,
  addEarningDeductionData,
  getEarningDeductionData,
} from "../../../features/earningDeduction/earningDeductionSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Earning_Deducation() {
  const dispatch = useDispatch();
  const [admin_earningDeduction, setAdmin_earningDeduction] = useState({
    earning_deduction_enabled: "",
    earning_deduction_for_travel_contracts: "",
    earning_deduction_name: "",
    earning_deduction_desc: "",
    earning_deduction_type: "",
    earning_deduction_deduction_type: "",
    earning_deduction_benefit_type: "",
    earning_deduction_w2_box_12_code: "",
    earning_deduction_include_with_paid_leave: "",
    earning_deduction_required: "",
    earning_deduction_billing_revenue_gl_account: "",
    earning_deduction_calculation_method: "",
    earning_deduction_calculation_method1: "",
    earning_deduction_positive_or_negative: "",
    earning_deduction_positive_or_negative1: "",
    earning_deduction_frequency: "",
    earning_deduction_frequency1: "",
    earning_deduction_adjustment: "",
    earning_deduction_adjustment1: "",
    earning_deduction_editable: "",
    earning_deduction_editable1: "",
    earning_deduction_maximum_hours: "",
    earning_deduction_maximum_hours1: "",
    earning_deduction_all_regions_and_branches: "",
    earning_deduction_regions: "",
    earning_deduction_branches: "",
    earning_deduction_hours_based: "",
    earning_deduction_referral1: "",
    earning_deduction_hours_required: "",
    earning_deduction_referral2: "",
    earning_deduction_empty: "",
    earning_deduction_referral3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin_earningDeduction({
      ...admin_earningDeduction,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveEarningDeductionData(admin_earningDeduction));
  }, [dispatch, admin_earningDeduction]);

  return (
    <main className="main_earning_Deducation">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-105 m-auto">
          <Alert className="text-center m-0 alertt">
            Earning/Deducation Details
          </Alert>
          <Container fluid className="earning_deducation_form">
            <Row>
              <Col lg={6}>
                <Form className="earning_deducation_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Code Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          {/* <Form.Label>User Name:</Form.Label> */}
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            className="d-flex align-items-center ps-0"
                            type="checkbox"
                            label="Enabled"
                            name="earning_deduction_enabled"
                            value={
                              admin_earningDeduction.earning_deduction_enabled
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          {/* <Form.Label>User Name:</Form.Label> */}
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            className="d-flex align-items-center ps-0"
                            type="checkbox"
                            label="For Travel Contracts"
                            name="earning_deduction_for_travel_contracts"
                            value={
                              admin_earningDeduction.earning_deduction_for_travel_contracts
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="earning_deduction_name"
                            value={
                              admin_earningDeduction.earning_deduction_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="earning_deduction_desc"
                            value={
                              admin_earningDeduction.earning_deduction_desc
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 mb-2">
                          {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                          <Form.Select
                            className="w-50 align-items-start"
                            name="earning_deduction_type"
                            value={
                              admin_earningDeduction.earning_deduction_type
                            }
                            onChange={handleChange}
                          >
                            <option>Earnings</option>
                            <option>Biller</option>
                            <option>Collector</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Deduction Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 mb-2">
                          {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                          <Form.Select
                            className="w-50 align-items-start"
                            name="earning_deduction_deduction_type"
                            value={
                              admin_earningDeduction.earning_deduction_deduction_type
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Biller</option>
                            <option>Collector</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Benefit Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 mb-2">
                          {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                          <Form.Select
                            className="w-50 align-items-start"
                            name="earning_deduction_benefit_type"
                            value={
                              admin_earningDeduction.earning_deduction_benefit_type
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                            <option>Biller</option>
                            <option>Collector</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>W2 Box 12 Code:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <div className="d-flex">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="earning_deduction_w2_box_12_code"
                              value={
                                admin_earningDeduction.earning_deduction_w2_box_12_code
                              }
                              onChange={handleChange}
                            />
                            <Form.Label>(A-Z)</Form.Label>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          {/* <Form.Label>W2 Box 12 Code:</Form.Label> */}
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <div className="d-flex">
                            <Form.Check
                              className="d-flex align-items-center ps-0 w-100"
                              type="checkbox"
                              label="Include With Paid Leave"
                              name="earning_deduction_include_with_paid_leave"
                              value={
                                admin_earningDeduction.earning_deduction_include_with_paid_leave
                              }
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override more">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Client/ Department Requirement
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Required:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left overtime">
                          <Form.Check
                            className="d-flex align-items-center ps-0 w-100"
                            type="checkbox"
                            label="Client/Department Selection Required"
                            name="earning_deduction_required"
                            value={
                              admin_earningDeduction.earning_deduction_required
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right"></div>
                        <div className="pb-3 px-2s left overtime">
                          {/* <Form.Check className='d-flex align-items-center ps-0 w-100' type="checkbox" label="Client/Department Selection Required" /> */}
                          <Form.Label>
                            Enabling this option will require users to choose a
                            client and a department at the time pay adjustments
                            of this type are created.
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Billing Revenue GL Account:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="earning_deduction_billing_revenue_gl_account"
                            value={
                              admin_earningDeduction.earning_deduction_billing_revenue_gl_account
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
                <Form className="user_form2">
                  <div className="tab_form override">
                    <Form.Group className="tab_form_" controlId="formBasicText">
                      <Form.Label className="m-0 pb-1 justify-content-between d-flex">
                        {" "}
                        <span> Registrant Default </span> <span>Editable</span>
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Calculation Method:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 d-flex justify-content-between">
                          <Form.Select
                            className="w-50"
                            name="earning_deduction_calculation_method"
                            value={
                              admin_earningDeduction.earning_deduction_calculation_method
                            }
                            onChange={handleChange}
                          >
                            <option>Flat Dollar Amount</option>
                          </Form.Select>
                          <Form.Check
                            className="d-flex align-items-center"
                            type="checkbox"
                            name="earning_deduction_calculation_method1"
                            value={
                              admin_earningDeduction.earning_deduction_calculation_method1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Positive or Negative:</Form.Label>
                        </div>
                        <div className="py-1  px-2 left w-75  d-flex justify-content-between">
                          <Form.Select
                            className="w-25"
                            name="earning_deduction_positive_or_negative"
                            value={
                              admin_earningDeduction.earning_deduction_positive_or_negative
                            }
                            onChange={handleChange}
                          >
                            <option>+</option>
                            <option>-</option>
                          </Form.Select>
                          <Form.Check
                            className="d-flex align-items-center"
                            type="checkbox"
                            name="earning_deduction_positive_or_negative1"
                            value={
                              admin_earningDeduction.earning_deduction_positive_or_negative1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Frequency:</Form.Label>
                        </div>
                        <div className="py-1  px-2 left w-75  d-flex justify-content-between">
                          <Form.Select
                            className="w-50"
                            name="earning_deduction_frequency"
                            value={
                              admin_earningDeduction.earning_deduction_frequency
                            }
                            onChange={handleChange}
                          >
                            <option>Each Check</option>
                          </Form.Select>
                          <Form.Check
                            className="d-flex align-items-center"
                            type="checkbox"
                            name="earning_deduction_frequency1"
                            value={
                              admin_earningDeduction.earning_deduction_frequency1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Adjustment ($):</Form.Label>
                        </div>
                        <div className="py-1  px-2 left w-75  d-flex justify-content-between">
                          <Form.Control
                            type="text"
                            className="w-25"
                            placeholder="0"
                            name="earning_deduction_adjustment"
                            value={
                              admin_earningDeduction.earning_deduction_adjustment
                            }
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="d-flex align-items-center"
                            type="checkbox"
                            name="earning_deduction_adjustment1"
                            value={
                              admin_earningDeduction.earning_deduction_adjustment1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25"></div>
                        <div className="py-1  px-2 left w-75  d-flex justify-content-between">
                          <Form.Check
                            className="d-flex align-items-center ps-0"
                            type="checkbox"
                            label="Editable at Pay"
                            name="earning_deduction_editable"
                            value={
                              admin_earningDeduction.earning_deduction_editable
                            }
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="d-flex align-items-center"
                            type="checkbox"
                            name="earning_deduction_editable1"
                            value={
                              admin_earningDeduction.earning_deduction_editable1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Maximum Hours:</Form.Label>
                        </div>
                        <div className="py-1  px-2 left w-75  d-flex justify-content-between">
                          <div className="d-flex w-50 overtime">
                            <Form.Control
                              type="text"
                              className="w-25"
                              disabled
                              name="earning_deduction_maximum_hours"
                              value={
                                admin_earningDeduction.earning_deduction_maximum_hours
                              }
                              onChange={handleChange}
                            />
                            <Form.Label>Per Week</Form.Label>
                          </div>
                          <Form.Check
                            className="d-flex align-items-center"
                            disabled
                            type="checkbox"
                            name="earning_deduction_maximum_hours1"
                            value={
                              admin_earningDeduction.earning_deduction_maximum_hours1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override my-0">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Region/Branch Lock Selection
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25"></div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            className="d-flex align-items-center w-100 ps-0"
                            type="checkbox"
                            label="All Regions And Branches"
                            name="earning_deduction_all_regions_and_branches"
                            value={
                              admin_earningDeduction.earning_deduction_all_regions_and_branches
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Regions:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="earning_deduction_regions"
                            value={
                              admin_earningDeduction.earning_deduction_regions
                            }
                            onChange={handleChange}
                          >
                            <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                            <option>BIRMINGhAM</option>
                            <option>HUSTVILLE</option>
                            <option>MOBILE</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Branches:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          {/* <Select className="w-100" isMulti options={UserSelect}>
                                                    </Select> */}
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="earning_deduction_branches"
                            value={
                              admin_earningDeduction.earning_deduction_branches
                            }
                            onChange={handleChange}
                          >
                            <option>Staffing, Accounting</option>
                            <option>Staffing</option>
                            <option>Accounting</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Hours Worked Related
                      </Form.Label>

                      <div className="inner_ inner__ d-flex">
                        <div className="right w-25 d-flex">
                          <Form.Label>Hours Based:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-25 mt-1">
                            {/* <Form.Control type="text" name="client_biling_weekStartTime" /> */}
                            <Form.Check
                              className="d-flex align-items-center"
                              type="checkbox"
                              name="earning_deduction_hours_based"
                              value={
                                admin_earningDeduction.earning_deduction_hours_based
                              }
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-25">
                              <Form.Label className="text-end">
                                Referral:
                              </Form.Label>
                            </div>
                            <div className="left w-75 px-2 mt-1">
                              <Form.Check
                                className="d-flex align-items-center"
                                type="checkbox"
                                name="earning_deduction_referral1"
                                value={
                                  admin_earningDeduction.earning_deduction_referral1
                                }
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex">
                        <div className="right w-25 d-flex">
                          <Form.Label>Hours Required:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-25 mt-1">
                            <Form.Control
                              type="text"
                              className="w-75"
                              name="earning_deduction_hours_required"
                              value={
                                admin_earningDeduction.earning_deduction_hours_required
                              }
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-25">
                              <Form.Label className="text-end">
                                Referral:
                              </Form.Label>
                            </div>
                            <div className="left w-75 px-2 mt-1">
                              <Form.Check
                                className="d-flex align-items-center"
                                type="checkbox"
                                name="earning_deduction_referral2"
                                value={
                                  admin_earningDeduction.earning_deduction_referral2
                                }
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ inner__ d-flex ">
                        <div className="right w-25 d-flex ">
                          {/* <Form.Label>Hours Based:</Form.Label> */}
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-25 mt-1">
                            {/* <Form.Control type="text" name="client_biling_weekStartTime" /> */}
                            <Form.Check
                              className="d-flex align-items-center"
                              type="checkbox"
                              name="earning_deduction_empty"
                              value={
                                admin_earningDeduction.earning_deduction_referral2
                              }
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-25">
                              <Form.Label className="text-end">
                                Referral:
                              </Form.Label>
                            </div>
                            <div className="left w-75 px-2 mt-1">
                              <Form.Check
                                className="d-flex align-items-center"
                                type="checkbox"
                                name="earning_deduction_referral3"
                                value={
                                  admin_earningDeduction.earning_deduction_referral3
                                }
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const finalEarningDeductionData = useSelector(
    (state) => state.earningData.earningDataTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addEarningDeductionData(finalEarningDeductionData));
    navigate("/earningDeductionTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link
            className="py-1 px-3"
            href="/earningDeductionTable"
            onClick={finalSave}
          >
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/earningDeductionTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Earning_Deducation;
