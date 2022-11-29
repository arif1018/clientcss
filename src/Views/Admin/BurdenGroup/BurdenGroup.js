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
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BurdenGroup.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addburdernGroupData,
  saveburdernGroupData,
} from "../../../features/burderGroup/burderGroupSlice";
import { Link, useNavigate } from "react-router-dom";

function BurdenGroup() {
  const dispatch = useDispatch();
  const [burdenGroup, setBurdenGroup] = useState({
    burdenGroup_burdenGroupInformation_name: "",
    burdenGroup_burdenGroupInformation_desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBurdenGroup({
      ...burdenGroup,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveburdernGroupData(burdenGroup));
  }, [dispatch, burdenGroup]);

  return (
    <main className="main_burden">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Burden group Details</Alert>
          <Container fluid className="burden_form">
            <Row>
              <Col lg={12}>
                <Form className="burden_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Burden Group Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-10">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="burdenGroup_burdenGroupInformation_name"
                            value={
                              burdenGroup.burdenGroup_burdenGroupInformation_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-10">
                          <Form.Label>Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-100"
                            name="burdenGroup_burdenGroupInformation_desc"
                            value={
                              burdenGroup.burdenGroup_burdenGroupInformation_desc
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              <Col lg={12}>
                <Form className="burden_form1 px-2">
                  <div className="tab_form">
                    <div className="tab_form policy">
                      <Form.Group
                        className="mb-3 tab_form_"
                        controlId="formBasicText"
                      >
                        <div className="general_div">
                          <Form.Label className="m-0 py-0 d-flex align-items-center justify-content-between">
                            Agency Representatives
                            <div className="py-1 px-1 mailing">
                              <Button className="form_btn" type="submit">
                                Add Burden Items
                              </Button>
                            </div>
                          </Form.Label>
                          <div className="py-0 px-2">
                            <ListGroup
                              as="ul"
                              className="d-flex flex-row justify-content-between flex-wrap"
                            >
                              <ListGroupItem
                                as="li"
                                className="border-right px-0 py-1"
                              >
                                Name
                              </ListGroupItem>
                              <ListGroupItem
                                as="li"
                                className="border-right px-2 py-1"
                              >
                                Type
                              </ListGroupItem>
                              <ListGroupItem
                                as="li"
                                className="border-right px-2 py-1 text-center"
                              >
                                Value
                              </ListGroupItem>
                              <ListGroupItem
                                as="li"
                                className="border-right px-2 py-1"
                              >
                                Action
                              </ListGroupItem>
                            </ListGroup>
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
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const finalDataBurdenGroup = useSelector(
    (state) => state.burdernGroup.BurdenGroupTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispacth(addburdernGroupData(finalDataBurdenGroup));
    navigate("/burdenGroupTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/burdenGroupTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BurdenGroup;
