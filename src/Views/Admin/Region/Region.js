import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Region.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addRegionData,
  saveRegionData,
} from "../../../features/region/regionSlice";
import { Link, useNavigate } from "react-router-dom";

function Region() {
  const dispatch = useDispatch();
  const [region, setRegion] = useState({
    region_regionInformation_name: "",
    region_regionInformation_description: "",
    region_regionInformation_branches: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegion({
      ...region,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveRegionData(region));
  }, [dispatch, region]);
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Region Details</Alert>
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
                        Region Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            name="region_regionInformation_name"
                            value={region.region_regionInformation_name}
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
                            name="region_regionInformation_description"
                            value={region.region_regionInformation_description}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Branches:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="region__input"
                            name="region_regionInformation_branches"
                            value={region.region_regionInformation_branches}
                            onChange={handleChange}
                          >
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
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
  
  const finalDataRegion = useSelector((state) => state.region.RegionTemp);
  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addRegionData(finalDataRegion));
    navigate("/regionTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/regionTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Region;
