import React, { useEffect, useState } from "react";
import {
  Form,
  Alert,
  Row,
  Col,
  Container,
  Navbar,
  Nav
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import {
  addPaidLeaveData,
  addPaidLeave,
} from "../../../features/paidLeave/paidLeaveSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paidleave.css";
import { Link, useNavigate } from "react-router-dom";

function PaidLeave() {
  const dispatch = useDispatch();

  const [paidLeave, setPaidLeave] = useState({
    paidLeave_policyInformation_name: "",
    paidLeave_policyInformation_desc: "",
    paidLeave_policyInformation_type: "",
    paidLeave_policyCycle_select: "",
    paidLeave_accuralRules_accural: "",
    paidLeave_accuralRules_hours_every_worked: "",
    paidLeave_accuralRules_maximumHoursPerYear: "",
    paidLeave_accuralRules_maximumCarryOverHours: "",
    paidLeave_accuralRules_accuralCommencement: "",
    paidLeave_accuralRules_policyEffectiveDate: "",
    paidLeave_usageRules_usageMayBegin: "",
    paidLeave_usageRules_maximumUsagePerYear: "",
    paidLeave_usageRules_maximumHoursWorked: "",
    paidLeave_stateOrJurisdiction_state1: "",
    paidLeave_stateOrJurisdiction_state2: "",
    paidLeave_policyInformation_check1: "",
    paidLeave_policyInformation_check2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaidLeave({
      ...paidLeave,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(addPaidLeave(paidLeave));
  }, [dispatch, paidLeave]);


  return (
    <main className="main_paid">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">
            Paid Leave Policy Details
          </Alert>
          <Container fluid className="paid_form">
            <Row>
              <Col lg={12}>
                <Form className="paid_form2">
                  <div className="tab_form override ">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Policy Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="paidLeave_policyInformation_name"
                            value={paidLeave.paidLeave_policyInformation_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="paidLeave_policyInformation_desc"
                            value={paidLeave.paidLeave_policyInformation_desc}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Nth Day of Month"
                            name="paidLeave_policyInformation_type"
                            value={paidLeave.paidLeave_policyInformation_type}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="tab_form override mt-0">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Policy Cycle</Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label></Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select
                            className="w-25"
                            name="paidLeave_policyCycle_select"
                            value={paidLeave.paidLeave_policyCycle_select}
                            onChange={handleChange}
                          >
                            <option>Hire Date</option>
                          </Form.Select>

                          <Form.Label
                            className="w-100 text-start"
                            style={{ fontWeight: 500 }}
                          >
                            By default hourse;;; By default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default
                          </Form.Label>
                          <Form.Label
                            className="w-100 text-start"
                            style={{ fontWeight: 500 }}
                          >
                            By default hourse;;; By default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default hourseBy default hourseBy default
                            hourseBy default
                          </Form.Label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="tab_form override mt-0">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Accural Rules
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Accural:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_accural"
                              value={paidLeave.paidLeave_accuralRules_accural}
                              onChange={handleChange}
                            />
                            Hours Every
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_hours_every_worked"
                              value={
                                paidLeave.paidLeave_accuralRules_hours_every_worked
                              }
                              onChange={handleChange}
                            />
                            Hours Worked
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Maximum Hours Per Year:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_maximumHoursPerYear"
                              value={
                                paidLeave.paidLeave_accuralRules_maximumHoursPerYear
                              }
                              onChange={handleChange}
                            />
                            0 = No Maximum
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Maximum Carry Over Hours:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_maximumCarryOverHours"
                              value={
                                paidLeave.paidLeave_accuralRules_maximumCarryOverHours
                              }
                              onChange={handleChange}
                            />
                            0 = No Carry Over
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Accural Commencement:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_accuralCommencement"
                              value={
                                paidLeave.paidLeave_accuralRules_accuralCommencement
                              }
                              onChange={handleChange}
                            />
                            Days After Hire Date (does not apply to manual
                            policy cycles)
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Policy Effective Date:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_accuralRules_policyEffectiveDate"
                              value={
                                paidLeave.paidLeave_accuralRules_policyEffectiveDate
                              }
                              onChange={handleChange}
                            />
                            Leave Blank For Immediate Commencement (does not
                            apply to manual policy cycles)
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right"></div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="w-100 text-start">
                            By default hourseBy default hourseBy default
                            hourseBy default hourseBy default
                          </Form.Label>
                          {/* <Form.Label className='d-flex gap-2 w-100 '><Form.Control type='text'  className='w-25' /> Leave Blank For Immediate Commencement (does not apply to manual policy cycles) </Form.Label> */}
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override mt-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Usage Rules</Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Usage May Begin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_usageRules_usageMayBegin"
                              value={
                                paidLeave.paidLeave_usageRules_usageMayBegin
                              }
                              onChange={handleChange}
                            />
                            Day After Hire Date
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Maximum Usage Per Year:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_usageRules_maximumUsagePerYear"
                              value={
                                paidLeave.paidLeave_usageRules_maximumUsagePerYear
                              }
                              onChange={handleChange}
                            />
                            Hours May Be Used Per Year
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Minimum Hours Worked:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Label className="d-flex gap-2 w-100 ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="paidLeave_usageRules_maximumHoursWorked"
                              value={
                                paidLeave.paidLeave_usageRules_maximumHoursWorked
                              }
                              onChange={handleChange}
                            />
                            Hours Worked In The Year Before Usage Is Allowed
                          </Form.Label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override mt-0">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        State or Jurisdiction
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select
                            className="w-25"
                            name="paidLeave_stateOrJurisdiction_state1"
                            value={
                              paidLeave.paidLeave_stateOrJurisdiction_state1
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>--OR--</Form.Label>
                        </div>
                        <div className="py-1 px-2 left"></div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select
                            className="w-25"
                            name="paidLeave_stateOrJurisdiction_state2"
                            value={
                              paidLeave.paidLeave_stateOrJurisdiction_state2
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                          </Form.Select>
                          <Form.Label className="w-100 text-start">
                            Not Chooseing a state or Jurisdiction will make this
                            policy apply company wide. Only one may be chosen
                          </Form.Label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override  mt-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Policy Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right"></div>
                        <div className="py-1 px-2 left">
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Include on Pay Stub"
                            name="paidLeave_policyInformation_check1"
                            value={paidLeave.paidLeave_policyInformation_check1}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right"></div>
                        <div className="py-1 px-2 left">
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Only Display Hours Used on Pay Stub"
                            name="paidLeave_policyInformation_check2"
                            value={paidLeave.paidLeave_policyInformation_check2}
                            onChange={handleChange}
                          />
                          <Form.Label className="w-100 text-start">
                            Only Display Hours Used on Pay Stub Only Display
                            Hours Used on Pay Stub Only Display Hours Used on
                            Pay Stub
                          </Form.Label>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  {/* <Button onClick={Submitform}>submit</Button> */}
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
  const finalDataPaidLeave = useSelector((state) => state.paidleave.paidleaveTemp);

  const finalSave = (e) => {
    e.preventDefault();
    dispacth(addPaidLeaveData(finalDataPaidLeave));
    navigate("/paidLeaveTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk" onClick={finalSave}></i> Save
          </Nav.Link>
          <Link to="/paidLeaveTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PaidLeave;
