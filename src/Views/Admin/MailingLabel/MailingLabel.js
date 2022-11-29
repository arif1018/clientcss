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
import "./mailingLabel.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addMailingLabelData,
  saveMailingLabelData,
} from "../../../features/mailingLabel/mailingLabelSlice";
import { Link, useNavigate } from "react-router-dom";

function MailingLabel() {
  const dispatch = useDispatch();
  const [mailingLabel, setMailingLabel] = useState({
    mailingLabel_labelLayout_labelName: "",
    mailingLabel_labelLayout_default: "",
    mailingLabel_labelLayout_topMargin: "",
    mailingLabel_labelLayout_sideMargin: "",
    mailingLabel_labelLayout_pitch: "",
    mailingLabel_labelLayout_labelWidth: "",
    mailingLabel_labelLayout_labelHight: "",
    mailingLabel_labelLayout_labelAcross: "",
    mailingLabel_labelLayout_labelDown: "",
    mailingLabel_labelLayout_textAlignment: "",
    mailingLabel_labelLayout_fontSize: "",
    mailingLabel_previewLabelText_name: "",
    mailingLabel_previewLabelText_attn: "",
    mailingLabel_previewLabelText_address1: "",
    mailingLabel_previewLabelText_address2: "",
    mailingLabel_previewLabelText_city: "",
    mailingLabel_previewLabelText_state: "",
    mailingLabel_previewLabelText_zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMailingLabel({
      ...mailingLabel,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveMailingLabelData(mailingLabel));
  }, [dispatch, mailingLabel]);

  return (
    <main className="main_mailing">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-100 m-auto">
        {/* <div className="w-50 m-auto"> */}
          <Alert className="text-center m-0 alertt w-50">
            Mailing Label Details
          </Alert>
          <Container fluid className="mailing_form">
            <Row>
              <Col lg={12}>
                <Form className="mailing_form2">
                  <div className="px-3 mt-2 mailing">
                    <Button type="button" className="py-1">
                      <i className="fa-solid fa-file-circle-question"></i>
                      Preview Label
                    </Button>
                  </div>

                  <div className="tab_form override ">
                    <Form.Group
                      className="mb-0 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Label Layout</Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Label Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left d-flex gap-3">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="mailingLabel_labelLayout_labelName"
                            value={
                              mailingLabel.mailingLabel_labelLayout_labelName
                            }
                            onChange={handleChange}
                          />
                          <Form.Check
                            className="d-flex align-items-center "
                            type="checkbox"
                            label="Default"
                            name="mailingLabel_labelLayout_default"
                            value={
                              mailingLabel.mailingLabel_labelLayout_default
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Top Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_topMargin"
                            value={
                              mailingLabel.mailingLabel_labelLayout_topMargin
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Side Margin:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_sideMargin"
                            value={
                              mailingLabel.mailingLabel_labelLayout_sideMargin
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Pitch:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_pitch"
                            value={mailingLabel.mailingLabel_labelLayout_pitch}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Label Width:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_labelWidth"
                            value={
                              mailingLabel.mailingLabel_labelLayout_labelWidth
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Label Hight:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_labelHight"
                            value={
                              mailingLabel.mailingLabel_labelLayout_labelHight
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Label Across:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_labelAcross"
                            value={
                              mailingLabel.mailingLabel_labelLayout_labelAcross
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Label Down:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-25"
                            name="mailingLabel_labelLayout_labelDown"
                            value={
                              mailingLabel.mailingLabel_labelLayout_labelDown
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Text Alignment:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Select
                            className="w-25"
                            name="mailingLabel_labelLayout_textAlignment"
                            value={
                              mailingLabel.mailingLabel_labelLayout_textAlignment
                            }
                            onChange={handleChange}
                          >
                            <option>Left</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Font Size:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left mb-2">
                          <Form.Select
                            className="w-25"
                            name="mailingLabel_labelLayout_fontSize"
                            value={
                              mailingLabel.mailingLabel_labelLayout_fontSize
                            }
                            onChange={handleChange}
                          >
                            <option>10pt</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override mt-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Preview Label Text
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            placeholder="Preview Name"
                            className="w-50"
                            name="mailingLabel_previewLabelText_name"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_name
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Attn:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            className="w-50"
                            name="mailingLabel_previewLabelText_attn"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_attn
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address1:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            placeholder="Preview Address1"
                            className="w-50"
                            name="mailingLabel_previewLabelText_address1"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_address1
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Address2:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            placeholder="Preview Address2"
                            className="w-50"
                            name="mailingLabel_previewLabelText_address2"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_address2
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>City:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            placeholder="City"
                            className="w-50"
                            name="mailingLabel_previewLabelText_city"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_city
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left">
                          <Form.Control
                            type="text"
                            placeholder="State"
                            className="w-50"
                            name="mailingLabel_previewLabelText_state"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_state
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right ">
                          <Form.Label>Zip:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left mb-2">
                          <Form.Control
                            type="text"
                            placeholder="Postal Code"
                            className="w-50"
                            name="mailingLabel_previewLabelText_zip"
                            value={
                              mailingLabel.mailingLabel_previewLabelText_zip
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
  const finalDataMailingLabel = useSelector(
    (state) => state.mailingLabel.MailingLabelTemp
  );

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addMailingLabelData(finalDataMailingLabel));
    navigate("/mailingLabelTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/mailingLabelTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MailingLabel;
