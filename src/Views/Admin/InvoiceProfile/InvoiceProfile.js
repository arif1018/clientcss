import React, { useState, useEffect } from "react";
import {
  Form,
  Alert,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InvoiceProfile.css";
import {
  addInvoiceProfileData,
  saveInvoiceData,
} from "../../../features/invoiceProfile/invoiceProfileSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function InvoiceProfile() {
  const dispatch = useDispatch();
  const [admin_invoiceProfile, setAdmin_invoiceProfile] = useState({
    invoice_profile_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin_invoiceProfile({
      ...admin_invoiceProfile,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveInvoiceData(admin_invoiceProfile));
  }, [dispatch, admin_invoiceProfile]);

  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">
            Invoice Profile Details
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
                        Invoice Profile
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Profile Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Control
                            type="text"
                            name="invoice_profile_name"
                            value={admin_invoiceProfile.invoice_profile_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>

                <Form className="burden_form1 px-2">
                  <div className="tab_form">
                    <div className="tab_form policy">
                      <Form.Group
                        className="mb-3 tab_form_"
                        controlId="formBasicText"
                      >
                        <div className="general_div">
                          <Form.Label
                            className="m-0 pb-1"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            Current Files
                          </Form.Label>
                          <div className="py-1 px-2">
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>Type</p>
                              <p>File</p>
                              <p>Delete</p>
                              <p>Action</p>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
                  </div>
                </Form>

                <Form className="burden_form1 px-2">
                  <div className="tab_form">
                    <div className="tab_form policy">
                      <Form.Group
                        className="mb-3 tab_form_"
                        controlId="formBasicText"
                      >
                        <div className="general_div">
                          <Form.Label
                            className="m-0 pb-1"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            Upload Files
                          </Form.Label>
                          <div className="div__invoice">
                            <Button className="invoice__button">
                              Select files....
                            </Button>
                            <p className="invoice__p">Current runtime: html5</p>
                          </div>
                          <div className="py-1 px-2">
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>Type</p>
                              <p>File</p>
                              <p>Delete</p>
                              <p>Action</p>
                            </div>
                          </div>
                        </div>
                      </Form.Group>
                    </div>
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const finalDataInvoiceProfile = useSelector(
    (state) => state.invoiceProfile.InvoiceProfileTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addInvoiceProfileData(finalDataInvoiceProfile));
    navigate("/invoiceProfileTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/invoiceProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default InvoiceProfile;
