import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveSchedulingForm } from "../../../../features/branch/branchSlice";
import "./Scheduling.css";

function Scheduling() {
  const dispatch = useDispatch();
  const [allBranches_Scheduling, setAllBranches_Scheduling] = useState({
    allBranches_order_entry: "",
    allBranches_Discipline: "",
    allBranches_ppc_target_margin: "",
    allBranches_minimum_allowed_margin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAllBranches_Scheduling({
      ...allBranches_Scheduling,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveSchedulingForm(allBranches_Scheduling));
  }, [dispatch, allBranches_Scheduling]);
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Order Entry</Form.Label>

                <div className="inner_ d-flex">
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_schedule">
                        <Form.Check
                          type="checkbox"
                          name="allBranches_order_entry"
                          value={allBranches_Scheduling.allBranches_order_entry}
                          onChange={handleChange}
                        />
                        <p style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
                          Enable selection of secondary disciplines and
                          specialities when adding orders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Default Discipline</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right">
                    {/* Editable */}
                    <Form.Label>Discipline:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <Form.Select
                        name="allBranches_Discipline"
                        value={allBranches_Scheduling.allBranches_Discipline}
                        onChange={handleChange}
                      >
                        <option></option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Travel/Contract Margins
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>PPC Target Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <div className="schedule_margin1">
                        <Form.Control
                          type="text"
                          name="allBranches_ppc_target_margin"
                          value={
                            allBranches_Scheduling.allBranches_ppc_target_margin
                          }
                          onChange={handleChange}
                        />
                        <p>%</p>
                      </div>
                      <p style={{ whiteSpace: "nowrap" }}>
                        This margin sets the default marginlock value for the
                        price profit calculator
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Minimum Allowed Margin:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-25">
                      <div className="schedule_margin1">
                        <Form.Control
                          type="text"
                          name="allBranches_minimum_allowed_margin"
                          value={
                            allBranches_Scheduling.allBranches_minimum_allowed_margin
                          }
                          onChange={handleChange}
                        />
                        <p>%</p>
                      </div>
                      <p style={{ whiteSpace: "nowrap" }}>
                        This margin sets the absolute lower limit allowed for
                        booking contract/travel shifts. Set to zero(0) for
                        no-minimum
                      </p>
                    </div>
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

export default Scheduling;
