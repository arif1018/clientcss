import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveAddressForm } from "../../../../features/clients/clientSlice"

import "./Addresses.css"

function Addresses() {
  const dispatch = useDispatch()

  const [Client_Adresses, setClient_Adresses] = useState({
    client_adresses_physical_address1: "",
    client_adresses_physical_address2: "",
    client_adresses_physical_city: "",
    client_adresses_physical_state: "",
    client_adresses_physical_zip: "",
    client_adresses_locationCode: "",
    client_adresses_muncipality: "",
    client_adresses_schoolDistrict: "",
    client_adresses_paidLeaveJurisdiction: "",
    client_adresses_FICA: "",    // this is checkbok please  confrm the functional code  line No.211
    client_adresses_billing_address1: "",
    client_adresses_billing_address2: "",
    client_adresses_billing_city: "",
    client_adresses_billing_state: "",
    client_adresses_billing_zip: "",
    client_adresses_name: "",
    client_adresses_attn: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setClient_Adresses({
      ...Client_Adresses,
      [name]: value
    })
  }

  useEffect(() => {
    dispatch(saveAddressForm(Client_Adresses))
  }, [dispatch, Client_Adresses])

  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="addresses_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_physical_address1" value={Client_Adresses.client_adresses_physical_address1} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_physical_address2" value={Client_Adresses.client_adresses_physical_address2} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Control type="text" name="client_adresses_physical_city" value={Client_Adresses.client_adresses_physical_city} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-50">
                      <Form.Select name="client_adresses_physical_state" value={Client_Adresses.client_adresses_physical_state} onChange={handleChange}>
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
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-25">
                      <Form.Control type="text" name="client_adresses_physical_zip" value={Client_Adresses.client_adresses_physical_zip} onChange={handleChange} />
                    </div>
                    <div className="w-100 mt-2 mailing">
                      <Button type="button" className='py-1 px-3'>Lookup Location</Button>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Location Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Select name="client_adresses_locationCode" value={Client_Adresses.client_adresses_locationCode} onChange={handleChange}>
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
                    <Form.Label>Muncipality:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_adresses_muncipality" value={Client_Adresses.client_adresses_muncipality} onChange={handleChange}>
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
                    <Form.Label>School District:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_adresses_schoolDistrict" value={Client_Adresses.client_adresses_schoolDistrict} onChange={handleChange}>
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
                    <Form.Label>GeoLocation:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Label>
                        <div
                          className="d-flex alig-items-center gap-3">
                          <p>Latitude:</p>
                          <p>Longitude:</p>
                        </div>
                      </Form.Label>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Paid Leave Jurisdiction:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select name="client_adresses_paidLeaveJurisdiction" value={Client_Adresses.client_adresses_paidLeaveJurisdiction} onChange={handleChange}>
                        <option defaultValue></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                {/* <Form.Label>Set Value to zero (0) to disable enforcement of a password policy</Form.Label> */}
              </Form.Group>
            </div>
          </Form>

          <Form className="addresses_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">FICA Exempt Pension Plan</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25 m-0 d-flex align-items-center justify-content-end" >
                    <Form.Check
                      type="checkbox"
                      label="FICA Exempt"
                      className="d-flex align-items-center w-75"
                      name="client_adresses_FICA"
                      value={Client_Adresses.client_adresses_FICA}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="left w-75">
                    <div className="w-100 px-2 py-1">
                      <Form.Label>When enabled, users are presented with an optional field allowing them to change the payroll location used when paying paid leave.</Form.Label>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>


        </Col>

        <Col lg={6}>
          <Form className="addresses_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Billing Address</Form.Label>
                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_name" value={Client_Adresses.client_adresses_name} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex ">
                  <div className="right w-25">
                    <Form.Label>Attn:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_attn" value={Client_Adresses.client_adresses_attn} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_billing_address1" value={Client_Adresses.client_adresses_billing_address1} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-100">
                      <Form.Control type="text" name="client_adresses_billing_address2" value={Client_Adresses.client_adresses_billing_address2} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-75">
                      <Form.Control type="text" name="client_adresses_billing_city" value={Client_Adresses.client_adresses_billing_city} onChange={handleChange} />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-50">
                      <Form.Select name="client_adresses_billing_state" value={Client_Adresses.client_adresses_billing_state} onChange={handleChange}>
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
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left w-75">
                    <div className="w-25">
                      <Form.Control type="text" name="client_adresses_billing_zip" value={Client_Adresses.client_adresses_billing_zip} onChange={handleChange} />
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

export default Addresses;
