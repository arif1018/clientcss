import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import {
  saveHolidayData,
  addholidayData,
} from "../../../features/holiday/holidaySlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./holiday.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Holiday() {
  const dispatch = useDispatch();
  const [holiday, setHoliday] = useState({
    holiday_holidayInformation_name: "",
    holiday_holidayInformation_type1: "",
    holiday_holidayInformation_type2: "",
    holiday_holidayInformation_type3: "",
    holiday_holidayInformation_occursOn_select1: "",
    holiday_holidayInformation_occursOn_select2: "",
    holiday_holidayInformation_occursOn_select3: "",
    holiday_holidayInformation_startTime: "",
    holiday_holidayInformation_duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHoliday({
      ...holiday,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveHolidayData(holiday));
  }, [dispatch, holiday]);

  return (
    <main className="main_holiday">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Holiday Details</Alert>
          <Container fluid className="holiday_form">
            <Row>
              <Col lg={12}>
                <Form className="holiday_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Holiday Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left ">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="holiday_holidayInformation_name"
                            value={holiday.holiday_holidayInformation_name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left d-flex gap-3">
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Nth Day of Month"
                            name="holiday_holidayInformation_type1"
                            value={holiday.holiday_holidayInformation_type1}
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Yearly on Same Day"
                            name="holiday_holidayInformation_type2"
                            value={holiday.holiday_holidayInformation_type2}
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="One Time Only"
                            name="holiday_holidayInformation_type3"
                            value={holiday.holiday_holidayInformation_type3}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Occurs On:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left d-flex gap-3">
                          <Form.Select
                            className="w-25"
                            name="holiday_holidayInformation_occursOn_select1"
                            value={
                              holiday.holiday_holidayInformation_occursOn_select1
                            }
                            onChange={handleChange}
                          >
                            <option>First</option>
                          </Form.Select>
                          <div className="w-25 d-flex gap-2">
                            <span>Days:</span>
                            <Form.Select
                              name="holiday_holidayInformation_occursOn_select2"
                              value={
                                holiday.holiday_holidayInformation_occursOn_select2
                              }
                              onChange={handleChange}
                            >
                              <option>Monday</option>
                            </Form.Select>
                          </div>
                          <div className="w-25 d-flex gap-2">
                            <Form.Label>Of:</Form.Label>
                            <Form.Select
                              name="holiday_holidayInformation_occursOn_select3"
                              value={
                                holiday.holiday_holidayInformation_occursOn_select3
                              }
                              onChange={handleChange}
                            >
                              <option>January</option>
                            </Form.Select>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Start Time:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="holiday_holidayInformation_startTime"
                            value={holiday.holiday_holidayInformation_startTime}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right">
                          <Form.Label>Duration:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="holiday_holidayInformation_duration"
                            value={holiday.holiday_holidayInformation_duration}
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
  const dispacth = useDispatch();
  const finalDataHoliday = useSelector((state) => state.holiday.HolidayTemp);
  
  const finalSave = (e) => {
    e.preventDefault();
    dispacth(addholidayData(finalDataHoliday));
    navigate("/holidayTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link className="py-1 px-" onClick={finalSave}>
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/holidayTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Holiday;
