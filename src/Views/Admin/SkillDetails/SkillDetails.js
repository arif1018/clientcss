import React, { useEffect, useState } from "react";
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
import "./SkillDetails.css";
import {
  addSkillDetailData,
  saveSkillDetailData,
} from "../../../features/skillDetail/skillDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function SkillDetails() {
  const dispatch = useDispatch();
  const [skillDetail, setSkillDetail] = useState({
    skillDetail_skillInformation_name: "",
    skillDetail_skillInformation_description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkillDetail({
      ...skillDetail,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveSkillDetailData(skillDetail));
  }, [dispatch, skillDetail]);
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Skill Details</Alert>
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
                        Skill Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="skillDetail_skillInformation_name"
                            value={
                              skillDetail.skillDetail_skillInformation_name
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
                            name="skillDetail_skillInformation_description"
                            value={
                              skillDetail.skillDetail_skillInformation_description
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
  const finalDataSkillDetail = useSelector(
    (state) => state.skillDetail.SkillDetailTemp
  );
  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addSkillDetailData(finalDataSkillDetail));
    navigate("/skillDetailsTable");
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
          <Link to="/skillDetailsTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SkillDetails;
