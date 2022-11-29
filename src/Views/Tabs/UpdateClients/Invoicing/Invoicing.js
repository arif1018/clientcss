import React, { useState, useEffect } from "react";
import { saveInvoicingsForm } from "../../../../features/clients/clientSlice"
import { useDispatch } from "react-redux"
import { Row, Col, Container, Form, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Invoicing.css";

function Invoicing() {
  const dispatch = useDispatch()

  const [Client_Invoicing, setClient_Invoicing] = useState({
    client_invoicing_invoiceProfile: "",
    client_invoicing_invoiceFormat: "",
    client_invoicing_frequency: "",
    client_invoicing_separation: "",
    client_invoicing_maxShifts: "",
    client_invoicing_maxAmounts: "",
    client_invoicing_noQueuing: "", // this is checkbok please  confrm the functional code  line No.176
    client_invoicing_printQueuing: "", // this is checkbok please  confrm the functional code  line No.196
    client_invoicing_printQueuing_copies: "",
    client_invoicing_emailQueuing: "", // this is checkbok please  confrm the functional code  line No.218
    client_invoicing_status: "", // this is radio please  confrm the functional code  line No.228
    client_invoicing_includeTimecard: "", // this is checkbok please confrm  functional the code  line No.254
    client_invoicing_includeTimecard_images: "",
    client_invoicing_includeTimesheet: "", // this is checkbok please confrm  functional the code  line No.280
    client_invoicing_notes: "",
    client_invoicing_emailTemplate: "",

    //  There is list also (ul/ li) check it out in last field
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setClient_Invoicing({
      ...Client_Invoicing,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(saveInvoicingsForm(Client_Invoicing))
  }, [dispatch, Client_Invoicing])

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="invoicing_form">
            <div className="tab_form policy invoice_opt">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoice Options</Form.Label>

                <div className="inner_ d-flex border-bottom">
                  <div className="right w-25">
                    <Form.Label>Invoice Profile:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_invoicing_invoiceProfile" value={Client_Invoicing.client_invoicing_invoiceProfile} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                    <Form.Label> Invoice Profile is optional and will override
                      Agency/Branch Profile</Form.Label>

                  </div>
                </div>

                <div className="inner_ d-flex border-bottom">
                  <div className="right w-25">
                    <Form.Label>Invoice Format:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_invoicing_invoiceFormat" value={Client_Invoicing.client_invoicing_invoiceFormat} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Frequency:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_invoicing_frequency" value={Client_Invoicing.client_invoicing_frequency} onChange={handleChange}>
                        <option defaultValue>Weekly</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Separation:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_invoicing_separation" value={Client_Invoicing.client_invoicing_separation} onChange={handleChange}>
                        <option defaultValue>None</option>
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

        <Col lg={6}>
          <Form className="invoicing_form">
            <div className="tab_form policy phy_add">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Max Shifts p/invoice:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_invoicing_maxShifts" value={Client_Invoicing.client_invoicing_maxShifts} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Max amounts p/invoice:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_invoicing_maxAmounts" value={Client_Invoicing.client_invoicing_maxAmounts} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>

          </Form>
        </Col>

      </Row>

      <Row>
        <Col lg={6}>
          <Form className="invoicing_form">
            <div className="tab_form policy Print_opt">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Printing Options</Form.Label>


                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>No Queuing:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="client_invoicing_noQueuing"
                      value={Client_Invoicing.client_invoicing_noQueuing}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>Print Queues:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75 d-flex align-items-center gap-2">
                    <div className="">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                        name="client_invoicing_printQueuing"
                        value={Client_Invoicing.client_invoicing_printQueuing}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="p-0 w-auto">Copies:</Form.Label>
                      <Form.Control type="text" className="w-25 p-0" name="client_invoicing_printQueuing_copies" value={Client_Invoicing.client_invoicing_printQueuing_copies} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center border-bottom">
                  <div className="right w-25">
                    <Form.Label>Email Queues:</Form.Label>
                  </div>
                  <div className=" px-2 left w-75 d-flex align-items-center gap-2">
                    <div className="">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                        name="client_invoicing_emailQueuing"
                        value={Client_Invoicing.client_invoicing_emailQueuing}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Check className="form_check p-0 d-flex align-items-center"
                        name="client_invoicing_status" type="radio"
                        label="Adobe PDF"
                        id="formHorizontalRadios1"
                        value={Client_Invoicing.client_invoicing_status}
                        onChange={handleChange}
                      />
                      <Form.Check className="form_check p-0 d-flex align-items-center"
                        name="client_invoicing_status" type="radio"
                        label="Microsoft Excel"
                        id="formHorizontalRadios1"
                        value={Client_Invoicing.client_invoicing_status}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>


                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>Include TimeCard Images:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75 d-flex align-items-center justify-content-between">
                    <div className="">
                      <Form.Check
                        className="d-flex align-items-center"
                        type="checkbox"
                        name="client_invoicing_includeTimecard"
                        value={Client_Invoicing.client_invoicing_includeTimecard}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Label className="p-0 text-end ">Images per page:</Form.Label>
                      <Form.Select name="client_invoicing_includeTimecard_images" className="p-0 w-50 px-2" value={Client_Invoicing.client_invoicing_includeTimecard_images} onChange={handleChange}>
                        <option defaultValue>1</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right w-25">
                    <Form.Label>Include Timesheet verification:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="client_invoicing_includeTimesheet"
                      value={Client_Invoicing.client_invoicing_includeTimesheet}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
        <Col lg={6}>
          <Form className="invoicing_form">
            <div className="tab_form Option">
              <Form.Group
                className="mb-3 tab_form_"
                controlId="formBasicText"
              >
                <Form.Label className="m-0 pb-1">
                  Notes
                </Form.Label>
                <div className="inner_ d-flex">
                  <div className="py-1 px-2 w-100">
                    <Form.Control as="textarea" name="client_invoicing_notes" value={Client_Invoicing.client_invoicing_notes} onChange={handleChange} className="py-1" type="text" placeholder="" style={{ height: '130px' }} />
                  </div>
                </div>
              </Form.Group>
            </div>

          </Form>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <Form className="invoicing_form">
            <div className="tab_form policy">
              <Form.Group className="my-0 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Invoice Options</Form.Label>
                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Invoice Email Template:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-50">
                      <Form.Select name="client_invoicing_emailTemplate" value={Client_Invoicing.client_invoicing_emailTemplate} onChange={handleChange}>
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

          <Form className="invoicing_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 mt-0 tab_form_" controlId="formBasicText">
                <Form.Label
                  className="m-0 pb-1 d-flex align-items-center justify-content-between ">
                  Agency Representatives
                  <div className="py-1 px-1 mailing">
                    <Button
                      className="form_btn"
                      type="submit"
                    >
                      Add Representative
                    </Button>
                  </div>
                </Form.Label>
                <div className=" px-2">
                  <ListGroup as="ul" className="d-flex flex-row justify-content-between flex-wrap">
                    <ListGroupItem as="li" className="border-right p-0">Email Address</ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">Recipient</ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2 text-center">Unsubscribed</ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">BlackListed</ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">Resson</ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">Action</ListGroupItem>
                  </ListGroup>
                  {/* <p>Email Address</p>
                              <p>Recipient</p>
                              <p>Unsubscribed</p>
                              <p>BlackListed</p>
                              <p>Resson</p>
                              <p>Action</p> */}
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Invoicing;
