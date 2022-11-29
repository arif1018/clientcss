import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SpecialityDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { addSpecialityDetailData, saveSpecialityDetailData } from "../../../features/specialityDetail/specialityDetailSlice";
import { Link, useNavigate } from "react-router-dom";

function SpecialityDetails() {
  const dispatch = useDispatch();
  const [specialityDetail, setSpecialityDetail] = useState({
    specialityDetail_specialityInformation_name: "",
    specialityDetail_specialityInformation_application: "",
    specialityDetail_specialityInformation_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSpecialityDetail({
      ...specialityDetail,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveSpecialityDetailData(specialityDetail));
  }, [dispatch, specialityDetail]);

  
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Speciality Details</Alert>
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
                        Speciality Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <div className="div__special ">
                            <Form.Control
                              type="text"
                              className="w-25"
                              name="specialityDetail_specialityInformation_name"
                              value={
                                specialityDetail.specialityDetail_specialityInformation_name
                              }
                              onChange={handleChange}
                            />
                            <div className="div__speciality gap-1">
                              <Form.Check
                                type="checkbox"
                                name="specialityDetail_specialityInformation_application"
                                value={
                                  specialityDetail.specialityDetail_specialityInformation_application
                                }
                                onChange={handleChange}
                              />
                              <p>Hide from online application</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Description:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            name="specialityDetail_specialityInformation_description"
                            value={
                              specialityDetail.specialityDetail_specialityInformation_description
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
  const finalDataSpecialityDetail = useSelector(
    (state) => state.specialityDetail.SpecialityDetailTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addSpecialityDetailData(finalDataSpecialityDetail))
    navigate('/specialityDetailsTable')
  }

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/specialityDetailsTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SpecialityDetails;
