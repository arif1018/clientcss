import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SalesTaxCode.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSalesTaxCodeData,
  saveSalesTaxCodeData,
} from "../../../features/salesTaxCode/salesTaxCodeSlice";
import { Link, useNavigate } from "react-router-dom";

function SalesTaxCode() {
  const dispatch = useDispatch();
  const [salesTaxCode, setSalesTaxCode] = useState({
    salesTaxCode_salestaxInformation_name: "",
    salesTaxCode_salestaxInformation_description: "",
    salesTaxCode_salestaxInformation_state: "",
    salesTaxCode_salestaxInformation_taxAuthority: "",
    salesTaxCode_salestaxInformation_rate: "",
    salesTaxCode_salestaxInformation_glLiabilityAccount: "",
    salesTaxCode_salestaxInformation_interfaceValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesTaxCode({
      ...salesTaxCode,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveSalesTaxCodeData(salesTaxCode));
  }, [dispatch, salesTaxCode]);

  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">
            Sales Tax Code Details
          </Alert>
          <Container fluid className="credentials_form">
            <Row>
              <Col lg={12}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Sales tax Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="salesTaxCode_salestaxInformation_name"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Description:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="salesTaxCode_salestaxInformation_description"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_description
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-25"
                            name="salesTaxCode_salestaxInformation_state"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_state
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Tax Authority:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-75"
                            name="salesTaxCode_salestaxInformation_taxAuthority"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_taxAuthority
                            }
                            onChange={handleChange}
                          >
                            <option>State of Hawaii</option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Rate:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <div className="d-flex gap-2 align-items-center">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="salesTaxCode_salestaxInformation_rate"
                              value={
                                salesTaxCode.salesTaxCode_salestaxInformation_rate
                              }
                              onChange={handleChange}
                            />
                            <p>%</p>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label className="div__sales1">
                            GL Liability Account:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="salesTaxCode_salestaxInformation_glLiabilityAccount"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_glLiabilityAccount
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Interface Value:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="salesTaxCode_salestaxInformation_interfaceValue"
                            value={
                              salesTaxCode.salesTaxCode_salestaxInformation_interfaceValue
                            }
                            onChange={handleChange}
                          />
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const finalDataSalesTaxCode = useSelector(
    (state) => state.salesTaxCode.SalesTaxCodeTemp
  );
  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addSalesTaxCodeData(finalDataSalesTaxCode));
    navigate("/salesTaxCodeTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/salesTaxCodeTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SalesTaxCode;
