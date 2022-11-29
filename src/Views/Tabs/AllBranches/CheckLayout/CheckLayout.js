import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./CheckLayout.css";

function CheckLayout() {
  const [allBranches_checkLayout, setAllBranches_checkLayout] = useState({
    allBranches_checklayout_top_margin1: "",
    allBranches_checklayout_top_margin2: "",
    allBranches_checklayout_top_margin3: "",
    allBranches_checklayout_top_margin4: "",
    allBranches_checklayout_bottom_margin1: "",
    allBranches_checklayout_bottom_margin2: "",
    allBranches_checklayout_bottom_margin3: "",
    allBranches_checklayout_bottom_margin4: "",
    allBranches_checklayout_height1: "",
    allBranches_checklayout_height2: "",
    allBranches_checklayout_height3: "",
    allBranches_checklayout_height4: "",
    allBranches_checklayout_width1: "",
    allBranches_checklayout_width2: "",
    allBranches_checklayout_width3: "",
    allBranches_checklayout_width4: "",
    allBranches_checklayout_timezone1: "",
    allBranches_checklayout_dst: "",
    allBranches_checklayout_timezone2: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllBranches_checkLayout({
      ...allBranches_checkLayout,
      [name]: value,
    });
  };
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 d-flex align-items-center gap-4">
                  Check Layout
                  <div className="d-flex mailing alignitems-center gap-2 py-1">
                    <Button type="button" className="">
                      Preview Check Layout
                    </Button>
                    <Button type="button" className="">
                      Copy Check Layout
                    </Button>
                  </div>
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Check:</Form.Label>
                  </div>
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Top Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_top_margin1"
                            value={
                              allBranches_checkLayout.allBranches_top_margin1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end ">
                          <Form.Label>Bottom Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_bottom_margin1"
                            value={
                              allBranches_checkLayout.allBranches_bottom_margin1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Height:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_height1"
                            value={allBranches_checkLayout.allBranches_height1}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Width:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_width1"
                            value={allBranches_checkLayout.allBranches_width1}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Check:</Form.Label>
                  </div>
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Top Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_top_margin2"
                            value={
                              allBranches_checkLayout.allBranches_top_margin2
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end ">
                          <Form.Label>Bottom Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_bottom_margin2"
                            value={
                              allBranches_checkLayout.allBranches_bottom_margin2
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Height:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_height2"
                            value={allBranches_checkLayout.allBranches_height2}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Width:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_width2"
                            value={allBranches_checkLayout.allBranches_width2}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Check:</Form.Label>
                  </div>
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Top Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_top_margin3"
                            value={
                              allBranches_checkLayout.allBranches_top_margin3
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end ">
                          <Form.Label>Bottom Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_bottom_margin3"
                            value={
                              allBranches_checkLayout.allBranches_bottom_margin3
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Height:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_height3"
                            value={allBranches_checkLayout.allBranches_height3}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Width:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_width3"
                            value={allBranches_checkLayout.allBranches_width3}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right">
                    <Form.Label>Check:</Form.Label>
                  </div>
                  <div className="left w-100">
                    <div className="inner_ d-flex">
                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Top Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left  w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_top_margin4"
                            value={
                              allBranches_checkLayout.allBranches_top_margin4
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex  w-25">
                        <div className="w-50 border-end ">
                          <Form.Label>Bottom Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_bottom_margin4"
                            value={
                              allBranches_checkLayout.allBranches_bottom_margin4
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Height:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_height4"
                            value={allBranches_checkLayout.allBranches_height4}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="right d-flex w-25">
                        <div className="w-50 border-end">
                          <Form.Label>Width:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50 align-items-center d-flex">
                          <Form.Control
                            type="text"
                            name="allBranches_width4"
                            value={allBranches_checkLayout.allBranches_width4}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Check Options</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Check Orientation:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_checklayout_timezone1"
                        value={
                          allBranches_checkLayout.allBranches_checklayout_timezone1
                        }
                        onChange={handleChange}
                      >
                        <option>Top</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Paper Type:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_checklayout_dst"
                        value={
                          allBranches_checkLayout.allBranches_checklayout_dst
                        }
                        onChange={handleChange}
                      >
                        <option>Letter</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
{/* 
              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Custom CHeck Layout
                </Form.Label>

                <div className="inner_ d-flex ">
                  <div className="div_first d-flex w-100">
                    <Button className="">Choose File</Button>
                    <p className="button_p">No file choosen</p>
                  </div>

                  <div className="py-1 px-2 left w-auto">
                    <div className="w-50">
                    <div className=" d-flex">
                      <Button className="">
                        <i className="fa-solid fa-ban"></i>Delete
                      </Button>
                      <Button className="">
                        <i className="fa-solid fa-download"></i>Download
                      </Button>
                    </div>
                  </div>
                  </div>
                </div>

               
              </Form.Group>
              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Signature File</Form.Label>

                <div className="inner_ d-flex">
                  <div className="div_first">
                    <Button className="button_div1">Choose File</Button>
                    <p className="button_p">No file choosen</p>
                  </div>
                  <div className="div_second">
                    <Button className="button_div2">
                      <i className="fa-solid fa-ban"></i>Delete
                    </Button>
                    <Button className="button_div3">
                      <i className="fa-solid fa-download"></i>Download
                    </Button>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50"></div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Timezone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_checklayout_timezone2"
                        value={
                          allBranches_checkLayout.allBranches_checklayout_timezone2
                        }
                        onChange={handleChange}
                      >
                        <option>#####----#####</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckLayout;
