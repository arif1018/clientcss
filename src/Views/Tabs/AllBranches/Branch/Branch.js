import React, { useState, useEffect } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveBranchForm } from "../../../../features/branch/branchSlice";
// import {saveBranchForm} from "../../../../features/branch/branchSlice"
import "./Branch.css";

function Branch() {
  const dispatch = useDispatch();
  const [allBranches_Branch, setAllBranches_Branch] = useState({
    allBranches_branch_name: "",
    allBranches_branch_status: "",
    allBranches_address_1: "",
    allBranches_address_2: "",
    allBranches_city: "",
    allBranches_State: "",
    allBranches_Zip: "",
    allBranches_Phone: "",
    allBranches_Fax: "",
    allBranches_Location: "",
    allBranches_TimeZone: "",
    allBranches_TimeZone1: "",
    allBranches_DST: "",
    allBranches_GLAccountCode: "",
    allBranches_Hierarchy: "",
    allBranches_Email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAllBranches_Branch({
      ...allBranches_Branch,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveBranchForm(allBranches_Branch));
  }, [dispatch, allBranches_Branch]);

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Branch Name:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control
                        type="text"
                        name="allBranches_branch_name"
                        value={allBranches_Branch.allBranches_branch_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Branch Status:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-50">
                      <Form.Select
                        name="allBranches_branch_status"
                        value={allBranches_Branch.allBranches_branch_status}
                        onChange={handleChange}
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address 1:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control
                        type="text"
                        name="allBranches_address_1"
                        value={allBranches_Branch.allBranches_address_1}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Address 2:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control
                        type="text"
                        name="allBranches_address_2"
                        value={allBranches_Branch.allBranches_address_2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>City:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="allBranches_city"
                        value={allBranches_Branch.allBranches_city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>State:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Select
                        name="allBranches_State"
                        value={allBranches_Branch.allBranches_State}
                        onChange={handleChange}
                      >
                        <option>Alberta</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Zip:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="w-75">
                        <Form.Control
                          type="text"
                          name="allBranches_Zip"
                          value={allBranches_Branch.allBranches_Zip}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Phone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <Form.Control
                        type="text"
                        name="allBranches_Phone"
                        value={allBranches_Branch.allBranches_Phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Fax:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="w-75">
                        <Form.Control
                          type="text"
                          name="allBranches_Fax"
                          value={allBranches_Branch.allBranches_Fax}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Location Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-75">
                      <div className="w-75">
                        <Form.Control
                          type="text"
                          name="allBranches_Location"
                          value={allBranches_Branch.allBranches_Location}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Time Zone Information
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Timezone:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_TimeZone"
                        value={allBranches_Branch.allBranches_TimeZone}
                        onChange={handleChange}
                      >
                        <option>(GMT - 10:00 hours) Hawaii</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                        <option>Disable Option</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>

                <div className="inner_ pro d-flex">
                  <div className="right w-25">
                    <Form.Label>DST:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <div className="div_imp">
                        <Form.Check
                          type="checkbox"
                          name="allBranches_DST"
                          value={allBranches_Branch.allBranches_DST}
                          onChange={handleChange}
                        />
                        <p>Automatically adjust time for daylight changes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Form.Group>

              <Form.Group className=" tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  US SSN/ Canadian SIN Mask
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>SSN/SIN:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Select
                        name="allBranches_Timezone1"
                        value={allBranches_Branch.allBranches_TimeZone1}
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
              </Form.Group>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Physical Address</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-50">
                    <Form.Label>G/L Account Code:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control
                        type="text"
                        name="allBranches_GLAccountCode"
                        value={allBranches_Branch.allBranches_GLAccountCode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </Form.Group>
            </div>
          </Form>

          <Form className="branch_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Relias Hierarchy</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Hierarchy:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      {/* Editable */}
                      <Form.Select
                        name="allBranches_Hierarchy"
                        value={allBranches_Branch.allBranches_Hierarchy}
                        onChange={handleChange}
                      >
                        <option>AMT Medical Staffing</option>
                      </Form.Select>
                      <p>
                        Hierarchy is optional and only applies when the system
                        is set to link to Relias Learners. <br /> <br /> This
                        hierarchy is assigned at the time a new learner is
                        created or updated through the Relias linking process
                        within the registrant credential sub module . Changing
                        this hierarchy will not mass update all existing linked
                        registrants/learners. You would need to update each
                        registrant link individually in the registrant
                        credential sub module or contact Relias to have them
                        mass update learners to the desired hierarchy.
                      </p>
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
                  (Reply To) Email Address
                </Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-0">
                    <Form.Label>Email:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Control
                        type="text"
                        name="allBranches_Email"
                        value={allBranches_Branch.allBranches_Email}
                        onChange={handleChange}
                      />
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

export default Branch;
