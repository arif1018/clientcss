import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import { Container, Col, Row, Form } from "react-bootstrap";
import { saveBillingsForm } from "../../../../features/clients/clientSlice"
import { useDispatch } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Billing.css";

function Billing() {
  const dispatch = useDispatch()

  const [Client_Biling, setClient_Biling] = useState({
    client_biling_billBy: "",
    client_biling_discount: "",
    client_biling_discountType: "",
    client_biling_timeCard: "",
    client_biling_consolidated: "", // this is checkbok please  confrm the functional code  line No.108
    client_biling_timeSheets: "", // this is checkbok please  confrm the functional code  line No.152
    client_biling_require: "", // this is checkbok please  confrm the functional code  line No.169
    client_biling_weekStartTime: "",
    client_biling_weekStartTime_day: "",
    client_biling_WeekendStartTime: "",
    client_biling_WeekendStartTime_day: "",
    client_biling_WeekendEndTime: "",
    client_biling_WeekendEndTime_day: "",
    client_biling_overtimeRule: "", // this is checkbok please  confrm the functional code  line No.292
    client_biling_onCallRule: "",
    client_biling_acceptsOT: "", // this is checkbok please confrm  functional the code  line No.300
    client_biling_TimeRounding: "",
    client_biling_split_shift: "", // this is checkbok please confrm  functional the code  line No.329
    client_biling_split_weekend: "", // this is checkbok please confrm  functional the code  line No.330
    client_biling_split_holiday: "", // this is checkbok please confrm  functional the code  line No.331
    client_biling_payModifiers_OT_1: "",
    client_biling_payModifiers_OT_2: "",
    client_biling_payModifiers_DBL_1: "",
    client_biling_payModifiers_DBL_2: "",
    client_biling_payModifiers_Holiday_1: "",
    client_biling_payModifiers_Holiday_2: "",
    client_biling_payModifiers_Max_1: "",
    client_biling_payModifiers_Max_2: "",
    client_biling_billModifiers_OT_1: "",
    client_biling_billModifiers_OT_2: "",
    client_biling_billModifiers_DBL_1: "",
    client_biling_billModifiers_DBL_2: "",
    client_biling_billModifiers_Holiday_1: "",
    client_biling_billModifiers_Holiday_2: "",
    client_biling_billModifiers_Max_1: "",
    client_biling_billModifiers_Max_2: "",
    client_biling_facultyCancel_DBL_1: "",
    client_biling_facultyCancel_DBL_2: "",
    client_biling_facultyCancel_Holiday_1: "",
    client_biling_facultyCancel_Holiday_2: "",
    client_biling_agencyCancel_DBL_1: "",
    client_biling_agencyCancel_DBL_2: "",
    client_biling_agencyCancel_Holiday_1: "",
    client_biling_agencyCancel_Holiday_2: "",
    client_biling_salesTax: "",
    client_biling_payor: "",
    client_biling_method: "",
    client_biling_terms: "",
    client_biling_financeChrg: "", // this is chec☻kbok please confrm  functional the code  line No.799
    client_biling_rate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setClient_Biling({
      ...Client_Biling,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(saveBillingsForm(Client_Biling))
  }, [dispatch, Client_Biling])

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy m-0 mt-2">
              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Billing Information
                </Form.Label>

                <div className="inner_ inner__ d-flex">
                  <div className="right w-25">
                    <Form.Label>Bill By:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-25">
                      <Form.Select name="client_biling_billBy" value={Client_Biling.client_biling_billBy} onChange={handleChange}>
                        <option defaultValue>C</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex">
                  <div className="right w-25">
                    <Form.Label>Discount:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75 d-flex gap-2">
                    <div className="w-25">
                      <Form.Control type="text" name="client_biling_discount" value={Client_Biling.client_biling_discount} onChange={handleChange} />
                    </div>

                    <Form.Label className="p-0 w-auto">% Type:</Form.Label>

                    <div className="w-50">
                      <Form.Select name="client_biling_discountType" value={Client_Biling.client_biling_discountType} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>


                <div className="inner_ inner__ d-flex">
                  <div className="right w-25">
                    <Form.Label>Consolidated:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <Form.Check
                      className="d-flex align-items-center gap-2 p-0"
                      type="checkbox"
                      name="client_biling_consolidated"
                      value={Client_Biling.client_biling_consolidated}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ inner__ d-flex">
                  <div className="right w-25">
                    <Form.Label>
                      TimeCard Images:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-50">
                      <Form.Select name="client_biling_timeCard" value={Client_Biling.client_biling_timeCard} onChange={handleChange}>
                        <option defaultValue>Req. as Pay</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy reg_tim_card  m-0">
              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Registrant TimeSheets
                </Form.Label>

                <div className="inner_  d-flex">
                  <div className="right w-25">
                    <Form.Label>TimeSheets Enabled:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                        name="client_biling_timeSheets"
                        value={Client_Biling.client_biling_timeSheets}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Require Verifications:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                        name="client_biling_require"
                        value={Client_Biling.client_biling_require}
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
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Week Paramters
                </Form.Label>

                <div className="inner_ inner__ d-flex border-bottom">
                  <div className="right w-25 d-flex">
                    <Form.Label>Week Start Time:</Form.Label>
                  </div>
                  <div className=" px-2 left w-75 d-flex">
                    <div className="w-25 mt-1">
                      <Form.Control type="text" name="client_biling_weekStartTime" value={Client_Biling.client_biling_weekStartTime} onChange={handleChange} />
                    </div>
                    <div className="w-75 d-flex py-0">
                      <div className="right w-25">
                        <Form.Label className="text-end">Day:</Form.Label>
                      </div>
                      <div className="left w-75 px-2 mt-1">
                        <Form.Select name="client_biling_weekStartTime_day" value={Client_Biling.client_biling_weekStartTime_day} onChange={handleChange}>
                          <option defaultValue></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex">
                  <div className="right w-25 d-flex">
                    <Form.Label>Weekend Start Time:</Form.Label>
                  </div>
                  <div className=" px-2 left w-75 d-flex">
                    <div className="w-25 mt-1">
                      <Form.Control type="text" name="client_biling_WeekendStartTime" value={Client_Biling.client_biling_WeekendStartTime} onChange={handleChange} />
                    </div>
                    <div className="w-75 d-flex py-0">
                      <div className="right w-25">
                        <Form.Label className="text-end">Day:</Form.Label>
                      </div>
                      <div className="left w-75 px-2 mt-1">
                        <Form.Select name="client_biling_WeekendStartTime_day" value={Client_Biling.client_biling_WeekendStartTime_day} onChange={handleChange}>
                          <option defaultValue></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="inner_ inner__ d-flex border-bottom">
                  <div className="right w-25 d-flex">
                    <Form.Label>Weekend End Time:</Form.Label>
                  </div>
                  <div className=" px-2 left w-75 d-flex">
                    <div className="w-25 mt-1">
                      <Form.Control type="text" name="client_biling_WeekendEndTime" value={Client_Biling.client_biling_WeekendEndTime} onChange={handleChange} />
                    </div>
                    <div className="w-75 d-flex py-0">
                      <div className="right w-25">
                        <Form.Label className="text-end">Day:</Form.Label>
                      </div>
                      <div className="left w-75 px-2 mt-1">
                        <Form.Select name="client_biling_WeekendEndTime_day" value={Client_Biling.client_biling_WeekendEndTime_day} onChange={handleChange}>
                          <option defaultValue></option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                          <option>Disable Option</option>
                        </Form.Select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex border-bottom">
                  <div className="right w-25 d-flex">
                    <Form.Label>Overtime Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Select name="client_biling_overtimeRule" value={Client_Biling.client_biling_overtimeRule} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex border-bottom">
                  <div className="right w-25 d-flex">
                    <Form.Label>OnCall Rule:</Form.Label>
                  </div>
                  <div className="pt-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Check type="checkbox" name="client_biling_onCallRule" value={Client_Biling.client_biling_onCallRule} onChange={handleChange} className="d-flex align-items-center p-0" label="Include in Overtime Calculation" />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="left_ w-25 d-flex align-items-center">
                    <Form.Label>Accepts OT:</Form.Label>
                    <Form.Check
                      type="checkbox"
                      className="p-0"
                      name="client_biling_acceptsOT" value={Client_Biling.client_biling_acceptsOT} onChange={handleChange}
                    />
                  </div>

                  <div className="right_ w-75 border-none d-flex align-items-center gap-2">
                    <Form.Label className=" w-50">Time Rounding:</Form.Label>
                    <Form.Select className="w-25" name="client_biling_TimeRounding" value={Client_Biling.client_biling_TimeRounding} onChange={handleChange}>
                      <option defaultValue>Q</option>
                      <option>Disable Option</option>
                      <option>Disable Option</option>
                      <option>Disable Option</option>
                    </Form.Select>
                  </div>
                </div>

              </Form.Group>
            </div>

            <div className="tab_form policy Splits">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label
                  className="m-0 pb-1">
                  Splits
                </Form.Label>
                <div className="inner  py-1 px-2 d-flex align-items-center justify-content-between flex-wrap">
                  <Form.Check type="checkbox" className="d-flex align-items-center py-0 " label="Split Shifts" name="client_biling_split_shift" value={Client_Biling.client_biling_split_shift} onChange={handleChange} />
                  <Form.Check type="checkbox" className="d-flex align-items-center py-0 " label="Split Weekends" name="client_biling_split_weekend" value={Client_Biling.client_biling_split_weekend} onChange={handleChange} />
                  <Form.Check type="checkbox" className="d-flex align-items-center py-0 " label="Split Holidays" name="client_biling_split_holiday" value={Client_Biling.client_biling_split_holiday} onChange={handleChange} />
                </div>
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
                <Form.Label className="m-0 pb-1">
                  Pay Modifiers
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div className="w-100" style={{ display: 'block', borderRight: '1px solid darkgray' }}>
                      <Form.Label>OT:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_payModifiers_OT_1" value={Client_Biling.client_biling_payModifiers_OT_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_payModifiers_OT_2" value={Client_Biling.client_biling_payModifiers_OT_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>DBL:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_payModifiers_DBL_1" value={Client_Biling.client_biling_payModifiers_DBL_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_payModifiers_DBL_2" value={Client_Biling.client_biling_payModifiers_DBL_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>Holiday:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_payModifiers_Holiday_1" value={Client_Biling.client_biling_payModifiers_Holiday_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_payModifiers_Holiday_2" value={Client_Biling.client_biling_payModifiers_Holiday_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                      <div className="w-28">
                        <Form.Control type="text" name="client_biling_payModifiers_Max_1" value={Client_Biling.client_biling_payModifiers_Max_1} onChange={handleChange} />
                        <p>+</p>
                        $<Form.Control type="text" name="client_biling_payModifiers_Max_2" value={Client_Biling.client_biling_payModifiers_Max_2} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Bill Modifiers
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div className="w-100" style={{ display: 'block', borderRight: '1px solid darkgray' }}>
                      <Form.Label>OT:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_billModifiers_OT_1" value={Client_Biling.client_biling_billModifiers_OT_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_billModifiers_OT_2" value={Client_Biling.client_biling_billModifiers_OT_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>DBL:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_billModifiers_DBL_1" value={Client_Biling.client_biling_billModifiers_DBL_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_billModifiers_DBL_2" value={Client_Biling.client_biling_billModifiers_DBL_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "10%" }}>
                      <Form.Label>Holiday:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_billModifiers_Holiday_1" value={Client_Biling.client_biling_billModifiers_Holiday_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_billModifiers_Holiday_2" value={Client_Biling.client_biling_billModifiers_Holiday_2} onChange={handleChange} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Max:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                      <div className="w-28">
                        <Form.Control type="text" name="client_biling_billModifiers_Max_1" value={Client_Biling.client_biling_billModifiers_Max_1} onChange={handleChange} />
                        <p>+</p>
                        $<Form.Control type="text" name="client_biling_billModifiers_Max_2" value={Client_Biling.client_biling_billModifiers_Max_2} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Faculty Cancel
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div className="w-100" style={{ display: 'block', borderRight: '1px solid darkgray' }}>
                      <Form.Label>DBL:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_facultyCancel_DBL_1" value={Client_Biling.client_biling_facultyCancel_DBL_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_facultyCancel_DBL_2" value={Client_Biling.client_biling_facultyCancel_DBL_2} onChange={handleChange} />
                          hours
                        </div>
                      </div>
                    </div>



                    <div className="right" style={{ width: "25%" }}>
                      <Form.Label>Holiday:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_facultyCancel_Holiday_1" value={Client_Biling.client_biling_facultyCancel_Holiday_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_facultyCancel_Holiday_2" value={Client_Biling.client_biling_facultyCancel_Holiday_2} onChange={handleChange} />
                          hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Agency Cancel
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%", display: 'contents' }}>
                    <div className="w-100" style={{ display: 'block', borderRight: '1px solid darkgray' }}>
                      <Form.Label>DBL:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_agencyCancel_DBL_1" value={Client_Biling.client_biling_agencyCancel_DBL_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_agencyCancel_DBL_2" value={Client_Biling.client_biling_agencyCancel_DBL_2} onChange={handleChange} />
                          hours
                        </div>
                      </div>
                    </div>

                    <div className="right" style={{ width: "25%" }}>
                      <Form.Label>Holiday:</Form.Label>
                    </div>
                    <div className="py-1 px-2 left ">
                      <div className="py-1 px-2 left ">
                        <div className="w-28">
                          <Form.Control type="text" name="client_biling_agencyCancel_Holiday_1" value={Client_Biling.client_biling_agencyCancel_Holiday_1} onChange={handleChange} />
                          <p>+</p>
                          $<Form.Control type="text" name="client_biling_agencyCancel_Holiday_2" value={Client_Biling.client_biling_agencyCancel_Holiday_2} onChange={handleChange} />
                          hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Credit Card
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Type:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        name="client_biling_creditCard_type" value={Client_Biling.client_biling_creditCard_type} onChange={handleChange}
                        style={{ display: "inlineBlock" }}
                      >
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Card Number:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Control
                        style={{ display: "inlineBlock" }}
                        type="text"
                        name="client_biling_creditCard_number"
                        value={Client_Biling.client_biling_creditCard_number}
                        onChange={handleChange}
                      >

                      </Form.Control>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Expiration:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="div_selectors" style={{ display: 'flex', gap: '10px' }}>
                      <Form.Select
                        name="client_biling_creditCard_expiration_1" value={Client_Biling.client_biling_creditCard_expiration_1} onChange={handleChange}
                        style={{ display: "inlineBlock", width: '50%' }}
                      >
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                      <Form.Select
                        name="client_biling_creditCard_expiration_2" value={Client_Biling.client_biling_creditCard_expiration_2} onChange={handleChange}
                        style={{ display: "inlineBlock", width: '40%' }}
                      >
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style={{ fontSize: '11px' }}>Cardholder Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Control
                        style={{ display: "inlineBlock" }}
                        type="text"
                        name="client_biling_creditCard_cardHolderName" value={Client_Biling.client_biling_creditCard_cardHolderName} onChange={handleChange}
                      >

                      </Form.Control>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>Charge Increment:</Form.Label>
                  </div>
                  <div className=" px-2 left ">
                    <div className="whole1_div d-flex align-items-center gap-2" >
                      <Form.Control
                        className="w-25"
                        type="text"
                        name="client_biling_creditCard_chargeIncrement_1" value={Client_Biling.client_biling_creditCard_chargeIncrement_1} onChange={handleChange} />

                      <Form.Check
                        type="checkbox" className="d-flex align-items-center w-75 p-0" label="Change when invoiced" name="client_biling_creditCard_chargeIncrement_2" value={Client_Biling.client_biling_creditCard_chargeIncrement_2} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Taxes
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Sales Tax:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select name="client_biling_salesTax" value={Client_Biling.client_biling_salesTax} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

              </Form.Group>


            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Payment
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Payor:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        name="client_biling_payor" value={Client_Biling.client_biling_payor} onChange={handleChange}
                        style={{ display: "inlineBlock" }}

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
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Method:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        ame="client_biling_method" value={Client_Biling.client_biling_method} onChange={handleChange}
                        style={{ display: "inlineBlock" }}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex border-bottom">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Terms:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        ame="client_biling_terms" value={Client_Biling.client_biling_terms} onChange={handleChange}
                        style={{ display: "inlineBlock" }}
                      >
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label>Finance Chrg:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                        ame="client_biling_financeChrg"
                        value={Client_Biling.client_biling_financeChrg}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "45%" }}>
                    <Form.Label style={{ whiteSpace: 'nowrap', fontSize: '10px' }}>Rate:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style={{ display: 'flex' }}>
                      <Form.Control style={{ width: '30%' }}
                        className="d-flex align-items-center gap-2 p-0"
                        type="text"
                        ame="client_biling_rate"
                        value={Client_Biling.client_biling_rate}
                        onChange={handleChange}
                      />
                      <p>%/Year</p>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>


      </Row>

    </Container >
  );
}

export default Billing;
