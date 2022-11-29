import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./client.css";
import { saveClientsCompany } from "../../../../features/companyProfile/companyProfileSlice";
import { useDispatch } from "react-redux";

function Client() {
  const dispacth = useDispatch();
  const [companyProfile_Client, setCompanyProfile_Client] = useState({
    companyProfile_client_activationOptions_select: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyProfile_Client({
      ...companyProfile_Client,
      [name]: value,
    });
  };

  useEffect(() => {
    dispacth(saveClientsCompany(companyProfile_Client));
  }, [dispacth, companyProfile_Client]);

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form className="client_form">
            <div className="tab_form Option">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Activation Options</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Options:</Form.Label>
                  <div className="py-1 px-2 w-100">
                    <Form.Select
                      name="companyProfile_client_activationOptions_select"
                      value={
                        companyProfile_Client.companyProfile_client_activationOptions_select
                      }
                      onChange={handleChange}
                    >
                      {/* <Form.Select > */}
                      <option></option>
                      <option>Must have at least one department</option>
                      <option>Must have at least one contact</option>
                      <option>Must have at least one rate</option>
                      <option>Must have a biling address</option>
                      <option>Credit status must be approved</option>
                      <option>Must have an agency representative</option>
                      <option>Must have a Print option defaultValue</option>
                      <option>Must have a paid Leave Jurisdiction</option>
                      <option>Must have a Rating</option>
                    </Form.Select>
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
