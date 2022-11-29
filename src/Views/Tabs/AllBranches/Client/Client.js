import React, { useState } from "react";
import { Container, Col, Row, Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Client.css";

function Client() {
  const [allBranches_client, setAllBranches_client] = useState({
    allBranches_client_week_start_time1: "",
    allBranches_client_day1: "",
    allBranches_client_overtime_rule1: "",
    allBranches_client_oncall_rule: "",
    allBranches_client_overtime_rule2: "",
    allBranches_client_week_start_time2: "",
    allBranches_client_day2: "",
    allBranches_client_weekend_start_time: "",
    allBranches_client_day3: "",
    allBranches_client_weekend_end_time: "",
    allBranches_client_day4: "",
    allBranches_client_split_shifts: "",
    allBranches_client_split_weekends: "",
    allBranches_client_split_holidays: "",
    allBranches_client_bill_modifiers_ot1: "",
    allBranches_client_bill_modifiers_ot2: "",
    allBranches_client_bill_modifiers_dbl1: "",
    allBranches_client_bill_modifiers_dbl2: "",
    allBranches_client_bill_modifiers_holiday1: "",
    allBranches_client_bill_modifiers_holiday2: "",
    allBranches_client_bill_modifiers_max1: "",
    allBranches_client_bill_modifiers_max2: "",
    allBranches_client_pay_modifiers_clients_ot3: "",
    allBranches_client_pay_modifiers_clients__ot4: "",
    allBranches_client_pay_modifiers_clients__dbl3: "",
    allBranches_client_pay_modifiers_clients__dbl4: "",
    allBranches_client_pay_modifiers_clients__holiday3: "",
    allBranches_client_pay_modifiers_clients__holiday4: "",
    allBranches_client_pay_modifiers_clients__max3: "",
    allBranches_client_pay_modifiers_clients__max4: "",
    allBranches_client_faculty_cancel_defaults_dbl5: "",
    allBranches_client_faculty_cancel_defaults_dbl6: "",
    allBranches_client_faculty_cancel_defaults_holiday5: "",
    allBranches_client_faculty_cancel_defaults_holiday6: "",
    allBranches_client_agency_cancel_defaults_dbl7: "",
    allBranches_client_agency_cancel_defaults_dbl8: "",
    allBranches_client_agency_cancel_defaults_holiday7: "",
    allBranches_client_agency_cancel_defaults_holiday8: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAllBranches_client({
      ...allBranches_client,
      [name]: value
    })
  }
  // const [selects, setSelects] = useState();

  // const eventCall = (e) => {
  //   setSelects(e.target.value);
  // }
  return (
    <Container fluid>
      <Row>
      <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Week Paramters
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '10px', whiteSpace: 'nowrap'}}>Bill By:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      {/* Editablee */}
                      <Form.Select name = "allBranches_client_week_start_time1" value = {allBranches_client.allBranches_client_week_start_time1} onChange = {handleChange}>
                        <option>C</option>
                      </Form.Select>
                      {/* <Form.Control type="text" name = "allBranches_client_week_start_time1" value = {allBranches_client.allBranches_client_week_start_time1} onChange = {handleChange}/> */}
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Time Type:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      {/* Editablee */}
                    <Form.Select name = "allBranches_client_day1" value = {allBranches_client.allBranches_client_day1} onChange = {handleChange}>
                        <option>Q</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%", whiteSpace: 'nowrap' }}>
                    <Form.Label style = {{fontSize: '10px'}}>Overtime Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                       {/* Editablee */}
                      <Form.Select
                        style={{ display: "inlineBlock"}}
                        name = "allBranches_client_overtime_rule1"
                        value = {allBranches_client.allBranches_client_overtime_rule1}
                        onChange = {handleChange}
                      >
                        <option>Standard 40</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%" }}>
                    <Form.Label style = {{whiteSpace: 'nowrap', fontSize:'12px'}}>Oncall Rule:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75" style = {{display: 'flex'}}>
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                        name = "allBranches_client_oncall_rule"
                        value = {allBranches_client.allBranches_client_oncall_rule}
                        onChange = {handleChange}
                      />
                      <p style = {{margin: '2px'}}>Overtime Collection</p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "37%", whiteSpace: 'nowrap' }}>
                    <Form.Label style = {{fontSize: '10px'}}>Invoice Formate:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div>
                      <Form.Select
                        style={{ display: "inlineBlock"}}
                        name = "allBranches_client_overtime_rule2"
                        value = {allBranches_client.allBranches_client_overtime_rule2}
                        onChange = {handleChange}
                      >
                        <option></option>
                        <option>AMT DEFAULT INVOICE</option>
                        <option>Bill By Registrant</option>
                        <option>Honda</option>
                        <option>Karan Barton</option>
                        <option>MANHA</option>
                        <option>NON FACTORED INVOICE</option>
                        <option>UABMW - BY DEPT</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Week Paramters
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '10px', whiteSpace: 'nowrap'}}>Week Start Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" placeholder="7 : 00 AM" name = "allBranches_client_week_start_time2" value = {allBranches_client.allBranches_client_week_start_time2} onChange = {handleChange}/>
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select name = "allBranches_client_day2" value = {allBranches_client.allBranches_client_day2} onChange = {handleChange}>
                        <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                        <option>Fri</option>
                        <option>Sat</option>
                        <option>Sun</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '8px', whiteSpace: 'nowrap'}}>Weekend Start Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" placeholder="11 : 00 PM" name = "allBranches_client_weekend_start_time" value = {allBranches_client.allBranches_client_weekend_start_time} onChange = {handleChange}/>
                    </div>
                  </div>
                  </div>

                  

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select name = "allBranches_client_day3"  value = {allBranches_client.allBranches_client_day3} onChange = {handleChange}>
                        <option>Fri</option>
                        <option>Sat</option>
                        <option>Sun</option>
                        <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label style = {{fontSize: '8px', whiteSpace: 'nowrap'}}>Weekend End Time:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" placeholder="7 : 00 AM" name = "allBranches_client_weekend_end_time" value = {allBranches_client.allBranches_client_weekend_end_time} onChange = {handleChange}/>
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "25%" }}>
                    <Form.Label>Day:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                    <Form.Select name = "allBranches_client_day4" value = {allBranches_client.allBranches_client_day4} onChange = {handleChange}>
                    <option>Mon</option>
                        <option>Tue</option>
                        <option>Wed</option>
                        <option>Thu</option>
                        <option>Fri</option>
                        <option>Sat</option>
                        <option>Sun</option>
                      </Form.Select>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>

                <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div">
                  <Form.Label
                    className="m-0 pb-1"
                    style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}
                  >
                    Splits
                  </Form.Label>
                  <div className="py-1 px-2">
                      <div style = {{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <div className="div_1" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox" name = "allBranches_client_split_shifts" value = {allBranches_client.allBranches_client_split_shifts} onChange = {handleChange}/>
                          <p style = {{fontSize: '9px'}}>Split Shifts</p>
                        </div>
                        <div className="div_2" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox" name = "allBranches_client_split_weekends" value = {allBranches_client.allBranches_client_split_weekends} onChange = {handleChange}/>
                          <p style = {{fontSize: '9px'}}>Split Weekends</p>
                        </div>
                        <div className = "div_3" style = {{display: 'flex' ,alignItems: 'center'}}>
                          <Form.Check type = "checkbox" name = "allBranches_client_split_holidays" value = {allBranches_client.allBranches_client_split_holidays} onChange = {handleChange}/>
                          <p style = {{fontSize: '9px'}}>Split Holidays</p>
                        </div>
                      </div>
                    </div>
                </div>
              </Form.Group>
                
              </Form.Group>
            </div>
          </Form>
        </Col>
    

      </Row>

      

      <Row>
        <Col md = {12}>
        <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
              <Form.Label className="m-0 pb-1">
                  Pay Modifiers Clients Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>OT:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_bill_modifiers_ot1" value = {allBranches_client.allBranches_client_bill_modifiers_ot1} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_bill_modifiers_ot2" value = {allBranches_client.allBranches_client_bill_modifiers_ot2} onChange = {handleChange}/>
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_bill_modifiers_dbl1" value = {allBranches_client.allBranches_client_bill_modifiers_dbl1} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_bill_modifiers_dbl2" value = {allBranches_client.allBranches_client_bill_modifiers_dbl2} onChange = {handleChange}/>
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_bill_modifiers_holdiay1" value = {allBranches_client.allBranches_client_bill_modifiers_holiday1} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_bill_modifiers_holdiay2" value = {allBranches_client.allBranches_client_bill_modifiers_holiday2} onChange = {handleChange}/>
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
                      <Form.Control type="text" name = "allBranches_client_bill_modifiers_max1" value = {allBranches_client.allBranches_client_bill_modifiers_max1} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_bill_modifiers_max2" value = {allBranches_client.allBranches_client_bill_modifiers_max2} onChange = {handleChange}/>
                    </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Bill Modifiers Clients Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                    <Form.Label>OT:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_pay_modifiers_clients_ot3" value = {allBranches_client.allBranches_client_pay_modifiers_clients_ot3} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__ot4" value = {allBranches_client.allBranches_client_pay_modifiers_clients__ot4} onChange = {handleChange}/>
                    </div>
                    </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__dbl3" value = {allBranches_client.allBranches_client_pay_modifiers_clients__dbl3} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__dbl4" value = {allBranches_client.allBranches_client_pay_modifiers_clients__dbl4} onChange = {handleChange}/>
                    </div>
                  </div>
                  </div>

                  <div className="right" style={{ width: "10%" }}>
                    <Form.Label>Holiday:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__holiday3" value = {allBranches_client.allBranches_client_pay_modifiers_clients__holiday3} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__holiday4" value = {allBranches_client.allBranches_client_pay_modifiers_clients__holiday4} onChange = {handleChange}/>
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
                      <Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__max3" value = {allBranches_client.allBranches_client_pay_modifiers_clients__max3} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_pay_modifiers_clients__max4" value = {allBranches_client.allBranches_client_pay_modifiers_clients__max4} onChange = {handleChange}/>
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
        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Faculty Cancel Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_faculty_cancel_defaults_dbl5" value = {allBranches_client.allBranches_client_faculty_cancel_defaults_dbl5} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_faculty_cancel_defaults_dbl6" value = {allBranches_client.allBranches_client_faculty_cancel_defaults_dbl6} onChange = {handleChange}/>
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
                      <Form.Control type="text" name = "allBranches_client_faculty_cancel_defaults_holiday5" value = {allBranches_client.allBranches_client_faculty_cancel_defaults_holiday5} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_faculty_cancel_defaults_holiday6" value = {allBranches_client.allBranches_client_faculty_cancel_defaults_holiday6} onChange = {handleChange}/>
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

        <Col md = {6}>
        <Form className="reference_form">
            <div className="tab_form policy">
            <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Agency Cancel Defaults
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right" style={{ width: "10%" , display: 'contents'}}>
                  <div className="w-100" style={{display: 'block', borderRight: '1px solid darkgray'}}>
                  <Form.Label>DBL:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="py-1 px-2 left ">
                    <div className="w-28">
                      <Form.Control type="text" name = "allBranches_client_agency_cancel_defaults_dbl7" value = {allBranches_client.allBranches_client_agency_cancel_defaults_dbl7} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_agency_cancel_defaults_dbl8" value = {allBranches_client.allBranches_client_agency_cancel_defaults_dbl8} onChange = {handleChange}/>
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
                      <Form.Control type="text" name = "allBranches_client_agency_cancel_defaults_holiday7" value = {allBranches_client.allBranches_client_agency_cancel_defaults_holiday7} onChange = {handleChange}/>
                      <p>+</p>
                      $<Form.Control type="text" name = "allBranches_client_agency_cancel_defaults_holiday8" value = {allBranches_client.allBranches_client_agency_cancel_defaults_holiday8} onChange = {handleChange}/>
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
      </Row>

    </Container>
  );
}

export default Client;
