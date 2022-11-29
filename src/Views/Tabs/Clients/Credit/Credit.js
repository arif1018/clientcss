import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import { Container, Col, Row, Form } from "react-bootstrap";
// import { saveCreditsForm } from "../../../../features/clients/clientSlice"
import { useDispatch } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css";
import "./Credit.css";

function Credit() {
  const dispatch = useDispatch()

  // const navigate = useNavigate()

  const [Client_Credit, setClient_Credit] = useState({
    client_credit_status: "",
    client_credit_limit: "",
    client_credit_declineReason: "",
    client_credit_preApproved: "",
    client_credit_score: "",
    client_credit_schedulingLimit_1: "", // this is checkbok please confrm  functional the code  line No.289
    client_credit_schedulingLimit_1_text: "",
    client_credit_schedulingLimit_2: "", // this is checkbok please confrm  functional the code  line No.308
    client_credit_schedulingLimit_2_text: "",
    client_credit_schedulingLimit_3: "", // this is checkbok please confrm  functional the code  line No.326
    client_credit_schedulingLimit_3_text: "",
    client_credit_schedulingLimit_4_text: "",
    client_credit_defaultReason: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setClient_Credit({
      ...Client_Credit,
      [name]: value
    })
  }

  // useEffect(() => {
  //   dispatch(saveCreditsForm(Client_Credit))
  // }, [dispatch, Client_Credit])

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Balances</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Current Balance:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Open Credit:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Statistic</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label className="p-0 "></Form.Label>
                  </div>
                  <div
                    className="left d-flex w-50 align-items-center py-0">
                    <div className="right w-50 border-bottom ">
                      <Form.Label className="p-0 px-1 text-end">MTD</Form.Label>
                    </div>

                    <div className="left w-50 border-bottom">
                      <Form.Label className="p-0 px-1 text-end">STD</Form.Label>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Biling:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Paid:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        {/* Right Columns */}

        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoicing</Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      First Invoiced:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Last Invoiced:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={3}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Payments</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label className="p-0 "></Form.Label>
                  </div>
                  <div
                    className="left d-flex w-50 align-items-center py-0">
                    <div className="right w-50 border-bottom ">
                      <Form.Label className="p-0 px-1 text-end">MTD</Form.Label>
                    </div>

                    <div className="left w-50 border-bottom">
                      <Form.Label className="p-0 px-1 text-end">STD</Form.Label>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Last Payment Amount:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-50">
                    <Form.Label>
                      Last Payment Date:
                    </Form.Label>
                  </div>
                  <div className="left w-50">
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="credit_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Credit</Form.Label>

                <div className="inner_ inner__ d-flex border-bottom">
                  <div className="right w-25 d-flex ">
                    <Form.Label>Status:</Form.Label>
                  </div>
                  <div className=" px-2 left w-75 d-flex">
                    <div className="w-50 mt-1">
                      <Form.Select className="w-75" name="client_credit_status" value={Client_Credit.client_credit_status} onChange={handleChange}>
                        <option defaultValue>Pending</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>

                    </div>
                    <div className="w-50 d-flex py-0">
                      <div className="right w-25">
                        <Form.Label className="text-end">Limit:</Form.Label>
                      </div>
                      <div className="left w-75 px-2 mt-1">
                        <Form.Control type="text" name="client_credit_limit" value={Client_Credit.client_credit_limit} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex">
                  <div
                    className="right w-25">
                    <Form.Label>
                      Decline Reason:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div>
                      <Form.Select className="w-75" name="client_credit_declineReason" value={Client_Credit.client_credit_declineReason} onChange={handleChange}>
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
                    <Form.Label>
                      Pre-Approved:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div>
                      <Form.Control type="text" className="w-25" name="client_credit_preApproved" value={Client_Credit.client_credit_preApproved} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ inner__ d-flex">
                  <div className="right w-25">
                    <Form.Label>Score:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div>
                      <Form.Select className="w-50" name="client_credit_score" value={Client_Credit.client_credit_score} onChange={handleChange}>
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

        <Col md={6}>
          <Form className="credit_form">
            <div className="tab_form policy Sch_limit">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Scheduling Limits</Form.Label>



                <div className="inner_  d-flex align-items-center justify-content-between">
                  <div className="py-1 px-2 right w-25">
                    <Form.Check
                      className=""
                      type="checkbox"
                      name="client_credit_schedulingLimit_1"
                      value={Client_Credit.client_credit_schedulingLimit_1}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="left d-flex align-items-center w-75 px-2 py-0">
                    <Form.Label className="w-75 text-end">Warn if approaching credit limit within:</Form.Label>
                    <Form.Control type="text" className="w-25" name="client_credit_score" value={Client_Credit.client_credit_schedulingLimit_1_text} onChange={handleChange} />
                  </div>

                </div>

                <div className="inner_ d-flex align-items-center justify-content-between border-bottom">
                  <div className="py-1 px-2 right w-25">
                    <Form.Check
                      className=""
                      type="checkbox"
                      name="client_credit_schedulingLimit_2"
                      value={Client_Credit.client_credit_schedulingLimit_2}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="left d-flex align-items-center w-75 px-2 py-0">
                    <Form.Label className="w-75 text-end">Suspend Scheduling if credit exceeds ..... <span className="d-none">the limit by</span> :</Form.Label>
                    <Form.Control type="text" className="w-25" name="client_credit_schedulingLimit_2_text" value={Client_Credit.client_credit_schedulingLimit_2_text} onChange={handleChange} />
                  </div>

                </div>

                <div className="inner_ d-flex align-items-center justify-content-between">
                  <div className="py-1 px-2 right w-25">
                    <Form.Check
                      className=""
                      type="checkbox"
                      name="client_credit_schedulingLimit_3"
                      value={Client_Credit.client_credit_schedulingLimit_3}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="left d-flex align-items-center w-75 px-2 py-0">
                    <Form.Label className="w-75 text-end">Limit Weekly Scheduling to:</Form.Label>
                    <Form.Control type="text" className="w-25" name="client_credit_schedulingLimit_3_text" value={Client_Credit.client_credit_schedulingLimit_3_text} onChange={handleChange}/>
                  </div>

                </div>

                <div className="inner_ d-flex align-items-center justify-content-between">
                  <div className="py-3 px-2 right w-25">
                    <Form.Check
                      className="d-none"
                      type="checkbox"
                    />
                  </div>
                  <div className="left d-flex align-items-center w-75 px-2 py-0">
                    <Form.Label className="w-50 text-end">Reason:</Form.Label>
                    <Form.Select className="w-50" name="client_credit_schedulingLimit_4_text" value={Client_Credit.client_credit_schedulingLimit_4_text} onChange={handleChange}>
                      <option></option>
                      <option>Disable Option</option>
                      <option>Disable Option</option>
                      <option>Disable Option</option>
                    </Form.Select>
                  </div>

                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Form className="credit_form">
            <div className="tab_form policy Work_comp">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Workers Comp</Form.Label>


                <div className="inner_ d-flex">
                  <div
                    className="right w-25">
                    <Form.Label>
                      Default Reason W/C Code:
                    </Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div>
                      <Form.Select className="w-50" name="client_credit_defaultReason" value={Client_Credit.client_credit_defaultReason} onChange={handleChange}>
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
    </Container>
  );
}

export default Credit;
