import React, {useState} from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "./Invoicing.css"

function Invoicing() {
  const [allBranches_invoicing, setAllBranches_invoicing] = useState({
    allBranches_invoicing_use_agency_invoice_profile: "",
    allBranches_invoicing_invoice_profile: "",
    allBranches_invoicing_use_separate_print_queue_entries_for_this_branch: "",
    allBranches_invoicing_school_district: "",
    allBranches_invoicing_email_reply_to_address: "",
    allBranches_invoicing_invoice_email_template: "",
    allBranches_invoicing_remittance_information: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAllBranches_invoicing({
      ...allBranches_invoicing,
      [name]: value
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="invoicing_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoicing Options</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>Use Agency Invoice Profile:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Check type="checkbox" name = "allBranches_invoicing_use_agency_invoice_profile" onChange = {handleChange} value = {allBranches_invoicing.allBranches_invoicing_use_agency_invoice_profile}/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Profile:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select name = "allBranches_invoicing_invoice_profile" onChange = {handleChange} value = {allBranches_invoicing.allBranches_invoicing_invoice_profile}>
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
                    <Form.Label style={{ whiteSpace: 'nowrap', fontSize: '12px' }}>Use Separate Print Queue Entries for this branch:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Check type="checkbox" name = "allBranches_invoicing_use_separate_print_queue_entries_for_this_branch" value = {allBranches_invoicing.allBranches_invoicing_use_separate_print_queue_entries_for_this_branch}/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>School District:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name = "allBranches_invoicing_school_district" onChange = {handleChange} value = {allBranches_invoicing.allBranches_invoicing_school_district}>
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoicing Emailing</Form.Label>
                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Emailing ReplyTo Address:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Control type="text" name = "allBranches_invoicing_email_reply_to_address" onChange = {handleChange} value = {allBranches_invoicing.allBranches_invoicing_email_reply_to_address}/>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>Invoice Email Template:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select name = "allBranches_invoicing_invoice_email_template" onChange = {handleChange} value = {allBranches_invoicing.allBranches_invoicing_invoice_email_template}>
                        <option>Invoice Queue Email</option>
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

        <Col md={12}>
          <Form className="education_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Remittance Information</Form.Label>
                <div className="inner_">
                    <Form.Control
                      as="textarea"
                      placeholder=""
                      style={{ height: '100px' }}
                      name = "allBranches_invoicing_remittance_information"
                      value = {allBranches_invoicing.allBranches_invoicing_remittance_information}
                      onChange = {handleChange}
                    />
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Invoicing;
