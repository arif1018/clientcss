import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./reference.css";
import { useDispatch } from "react-redux";
import { saveRefernceCompany } from "../../../../features/companyProfile/companyProfileSlice";

function Reference() {
  const dispacth = useDispatch();

  const [companyProfile_Reference, setCompanyProfile_Reference] = useState({
    companyProfile_reference_referenceInformation_name: "",
    companyProfile_reference_referenceInformation_title: "",
    companyProfile_reference_referenceInformation_employer: "",
    companyProfile_reference_referenceInformation_address1: "",
    companyProfile_reference_referenceInformation_address2: "",
    companyProfile_reference_referenceInformation_city: "",
    companyProfile_reference_referenceInformation_state: "",
    companyProfile_reference_referenceInformation_zip: "",
    companyProfile_reference_referenceInformation_email: "",
    companyProfile_reference_referenceInformation_canContact: "",
    companyProfile_reference_referenceInformation_note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile_Reference({
      ...companyProfile_Reference,
      [name]: value,
    });
  };

  useEffect(() => {
    dispacth(saveRefernceCompany(companyProfile_Reference));
  }, [dispacth, companyProfile_Reference]);

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form className="reference_form">
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Reference Information
                </Form.Label>
                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_name"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_name
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <div className="right">
                    <Form.Label>Title:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_title"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_title
                        }
                        onChange={handleChange}
                      />
                    </div>
                    {/* <Form.Check className='d-flex align-items-center' type="checkbox"  /> */}
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Employer:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_employer"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_employer
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Address1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_address1"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_address1
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Address2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_address2"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_address2
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_city"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_city
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="companyProfile_reference_referenceInformation_state"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_state
                        }
                        onChange={handleChange}
                      >
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_zip"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_zip
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_zip"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_zip
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div> */}

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="companyProfile_reference_referenceInformation_email"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_email
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Can Contact:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Check
                        className="d-flex align-items-center gap-2 p-0"
                        type="checkbox"
                        label="Check here to authorize us to ccontact this reference"
                        name="companyProfile_reference_referenceInformation_canContact"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_canContact
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Note:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      {/* <FloatingLabel controlId="floatingTextarea2"> */}
                      <Form.Control
                        as="textarea"
                        style={{ height: "80px" }}
                        name="companyProfile_reference_referenceInformation_note"
                        value={
                          companyProfile_Reference.companyProfile_reference_referenceInformation_note
                        }
                        onChange={handleChange}
                      />
                      {/* </FloatingLabel> */}
                    </div>
                  </div>
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

export default Reference;
