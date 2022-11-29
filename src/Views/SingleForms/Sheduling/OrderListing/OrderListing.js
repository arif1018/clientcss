import React from "react";
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
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./orderListing.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function OrderListingScheduling() {
  return (
    <main className="main_orderListing">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">Order Details</Alert>
          <Container fluid className="ordelisting_form">
            <Row>
              <Col lg={6}>
                <Form className="ordelisting_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Order Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Order ID:</Form.Label>
                        </div>
                        <div className="left w-75 overtime ">
                          <Form.Label>New Order</Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Anticipated Need:</Form.Label>
                        </div>
                        <div className="p-0 left w-75 overtime">
                          <Form.Label className="w-100">
                            Generates a timecard after scheduled and client
                            confirmed
                          </Form.Label>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25"></div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Group>
                            <Form.Check
                              type="checkbox"
                              className="w-100 p-0 d-flex align-items-center"
                              label="Anticipated Need"
                            />
                          </Form.Group>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Client:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-100">
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Dept:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-100" disabled>
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Area:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-100" disabled>
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Caller:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-100" disabled>
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>PO:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 border-bottom">
                          <Form.Select className="w-100" disabled>
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_  d-flex">
                        <div className="right w-25 d-flex">
                          <Form.Label>Shift Date:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-25 mt-1">
                            <Form.Control
                              type="text"
                              className="w-100"
                              name="client_biling_weekStartTime"
                            />
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-50">
                              <Form.Label className="text-end">
                                Oder Type:
                              </Form.Label>
                            </div>
                            <div className=" left w-50 px-2 mt-1">
                              <Form.Select className="w-100">
                                <option></option>
                                <option>Disable</option>
                              </Form.Select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_  d-flex">
                        <div className="right w-25 d-flex">
                          <Form.Label>Discipline:</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex">
                          <div className="w-25 mt-1">
                            <Form.Select className="w-100">
                              <option></option>
                              <option>Disable</option>
                            </Form.Select>
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-50">
                              <Form.Label className="text-end">
                                Specialty:
                              </Form.Label>
                            </div>
                            <div className=" left w-50 px-2 mt-1">
                              <Form.Select className="w-100" disabled>
                                <option></option>
                                <option>Disable</option>
                              </Form.Select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_  d-flex ">
                        <div className="right w-25 d-flex">
                          <Form.Label>(Discipline):</Form.Label>
                        </div>
                        <div className=" px-2 left w-75 d-flex border-bottom">
                          <div className="w-25 mt-1">
                            <Form.Select className="w-100">
                              <option></option>
                              <option>Disable</option>
                            </Form.Select>
                          </div>
                          <div className="w-75 d-flex py-0">
                            <div className="right w-50">
                              <Form.Label className="text-end">
                                (Specialty):
                              </Form.Label>
                            </div>
                            <div className=" left w-50 px-2 mt-1">
                              <Form.Select className="w-100" disabled>
                                <option></option>
                                <option>Disable</option>
                              </Form.Select>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Skills:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 border-bottom">
                          <Form.Select className="w-100">
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Registrant:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-100" disabled>
                            <option></option>
                            <option>Disable Option</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              <Col lg={6}>
                <Form className="ordelisting_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="tab_form_ "
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Shift Information
                      </Form.Label>

                      <div className="inner_">
                        <div className="d-flex justify-content-start ">
                          <div className="d-flex m-0">
                            <div className="right m-0">
                              <Form.Label>Type:</Form.Label>
                            </div>
                            <div className="left py-1 px-2 m-0">
                              <Form.Select className="w-100 m-0">
                                <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                                <option>BIRMINGhAM</option>
                                <option>HUSTVILLE</option>
                                <option>MOBILE</option>
                              </Form.Select>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="right">
                              <Form.Label>Shift:</Form.Label>
                            </div>
                            <div className="left py-1 px-2">
                              <Form.Select className="w-100 ">
                                <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                                <option>BIRMINGhAM</option>
                                <option>HUSTVILLE</option>
                                <option>MOBILE</option>
                              </Form.Select>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="right">
                              <Form.Label>W/C:</Form.Label>
                            </div>
                            <div className="left py-1 px-2">
                              <Form.Select className="w-100 ">
                                <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                                <option>BIRMINGhAM</option>
                                <option>HUSTVILLE</option>
                                <option>MOBILE</option>
                              </Form.Select>
                            </div>
                          </div>
                          <div className="d-flex ">
                            <div className="left py-1 px-2">
                              <Form.Check
                                className="d-flex align-items-center p-0 "
                                label="Change"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="tab_form override my-0">
                    <Form.Group
                      className="tab_form_ "
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Shift Time</Form.Label>

                      <div className="inner_">
                        <div className="d-flex justify-content-start ">
                          <div className="d-flex m-0">
                            <div className="right m-0">
                              <Form.Label>Start:</Form.Label>
                            </div>
                            <div className="left py-1 px-2 m-0">
                              <Form.Control
                                type="text"
                                placeholder="N/A"
                                className="w-100"
                              />
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="right">
                              <Form.Label>End:</Form.Label>
                            </div>
                            <div className="left py-1 px-2">
                              <Form.Control
                                type="text"
                                placeholder="N/A"
                                className="w-100"
                              />
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="right">
                              <Form.Label>Meal:</Form.Label>
                            </div>
                            <div className="left py-1 px-2">
                              <Form.Control
                                type="text"
                                placeholder="N/A"
                                className="w-100"
                              />
                            </div>
                          </div>
                          <div className="d-flex ">
                            <div className="left py-1 px-2">
                              <Form.Check
                                className="d-flex align-items-center p-0 "
                                label="Orient"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="tab_form override my-0">
                    <span style={{ fontSize: "13px", fontWeight: "500" }}>
                      Time Shortcuts: 0700a, 700a, 700 p, 700 pm, 07:00 a, 07:00
                      AM
                    </span>
                  </div>

                  <div className="tab_form override my-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Notes</Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Invoice(500):</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control as="textarea" type="text" />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Internal(8000):</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control as="textarea" type="text" />
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form policy mb-2">
                    <Table responsive>
                      <thead>
                        <tr className="text-center">
                          {/* Pay	Bill	Burden	Margin	Pay W/E	Bill W/E	Margin W/E */}
                          <th className="text-center">Override?</th>
                          <th>Pay</th>
                          <th>Bill</th>
                          <th className="text-end">Burden</th>
                          <th className="text-end">Margin</th>
                          <th>Pay W/E</th>
                          <th>Bill W/E</th>
                          <th>Margin W/E</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center">
                          <td><Form.Check type="checkbox" className="w-100 d-flex justify-content-center" /></td>
                          <td><Form.Control type='text' className="w-auto" /></td>
                          <td><Form.Control type='text' className="w-auto" /></td>
                          <td className="text-end">0.00</td>
                          <td className="text-end">0.00</td>
                          <td><Form.Control type='text' /></td>
                          <td><Form.Control type='text' /></td>
                          <td className="text-end border-0">0.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <div className="mailing d-flex gap-2 justify-content-center align-items-center mb-3">
                    <Button>Calendar Add</Button>
                    <Button>Pattern Add</Button>
                    <Button>Add Individual</Button>
                  </div>
                </Form>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Form className="ordelisting_form2">
                  <div className="tab_form policy">
                    <Form.Group
                      className="mb-3 mt-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1 d-flex align-items-center justify-content-between ">
                        Added Shifts
                        <div className="py-1 px-1 mailing d-flex gap-2">
                          <Button className="form_btn" type="button">
                            [Clear Shifts]
                          </Button>
                        </div>
                      </Form.Label>
                      <div className=" px-2">
                        <ListGroup
                          as="ul"
                          className="d-flex flex-row justify-content-between flex-wrap"
                        >
                          <ListGroupItem as="li" className="border-right p-0">
                            Ant
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Client
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2 text-center"
                          >
                            Dept
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Dsp/Spc Shift
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Hours
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Skls
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Pay
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Notes
                          </ListGroupItem>
                          <ListGroupItem
                            as="li"
                            className="border-right p-0 px-2"
                          >
                            Action
                          </ListGroupItem>
                        </ListGroup>
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
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/orderListingTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link> */}
          {/* <Link to="/orderListingTable" className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Link> */}
          <Link to="/orderListingTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default OrderListingScheduling;
