import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {generatePath, useParams} from "react-router-dom"
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  Dropdown,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./General.css";
import { getAllBranches } from "../../../../features/branch/branchSlice";
import { getSingleClient, saveGeneralForm } from "../../../../features/clients/clientSlice";
import useKeypress from "react-use-keypress";
// import Select from "react-select";

function General() {
  const id = useParams()

  const dispacth = useDispatch();
  // const [hide, setHide] = useState(false);
  const GeneralData = useSelector((state) => state.client.clients)

  const [Client_General, setClient_General] = useState({
    client_general_branch: "",
    client_general_name: "",
    client_general_type: "",
    client_general_sic: "",
    client_general_group: "",
    client_general_businessLine: "",
    client_general_beds: "",
    client_general_facs: "",
    client_general_national: "", // this is checkbok please  confrm the functional code  line No.158
    client_general_gpo: "", // this is checkbok please confrm  functional the code  line No.172
    client_general_accountManager: "",
    client_general_rating: "",
    client_general_branchVisibility: "",
    client_general_notes: "",
    client_general_disciplinesServiced: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient_General({
      ...Client_General,
      [name]: value,
    });
  };

  useEffect(() => {
    dispacth(saveGeneralForm(Client_General));
  }, [dispacth, Client_General]);

  useEffect(() => {
    dispacth(getSingleClient(id));
    setClient_General({
      client_general_branch: GeneralData.client_general_branch,
      client_general_name: GeneralData.client_general_name,
      client_general_type: GeneralData.client_general_type, 
      client_general_sic: GeneralData.client_general_sic,
      client_general_group: GeneralData.client_general_group,
      client_general_businessLine: GeneralData.client_general_businessLine,
      client_general_beds: GeneralData.client_general_beds,
      client_general_facs: GeneralData.client_general_facs,
      client_general_national: GeneralData.client_general_national, // this is checkbok please  confrm the functional code  line No.158
      client_general_gpo: GeneralData.client_general_gpo, // this is checkbok please confrm  functional the code  line No.172
      client_general_accountManager: GeneralData.client_general_accountManager,
      client_general_rating: GeneralData.client_general_rating,
      client_general_branchVisibility: GeneralData.client_general_branchVisibility,
      client_general_notes: GeneralData.client_general_notes,
      client_general_disciplinesServiced: GeneralData.client_general_disciplinesServiced,     
    })  

  }, [dispacth, GeneralData.client_general_branch]);

  useEffect(() => {
    dispacth(getAllBranches());
  }, []);

  const branchData = useSelector((state) => state.branch.Branches);

  const editItem = (i) => {
    setClient_General({ ...Client_General, client_general_branch: i });
  };



  useEffect(()=>{
      setClient_General({
        client_general_branch: GeneralData.client_general_branch,
        client_general_name: GeneralData.client_general_name,
        client_general_type: GeneralData.client_general_type, 
        client_general_sic: GeneralData.client_general_sic,
        client_general_group: GeneralData.client_general_group,
        client_general_businessLine: GeneralData.client_general_businessLine,
        client_general_beds: GeneralData.client_general_beds,
        client_general_facs: GeneralData.client_general_facs,
        client_general_national: GeneralData.client_general_national, // this is checkbok please  confrm the functional code  line No.158
        client_general_gpo: GeneralData.client_general_gpo, // this is checkbok please confrm  functional the code  line No.172
        client_general_accountManager: GeneralData.client_general_accountManager,
        client_general_rating: GeneralData.client_general_rating,
        client_general_branchVisibility: GeneralData.client_general_branchVisibility,
        client_general_notes: GeneralData.client_general_notes,
        client_general_disciplinesServiced: GeneralData.client_general_disciplinesServiced,     
      })  
},[])
 
  return (
    <Container fluid>
      <Row>
        <Col lg={6}>
          <Form className="clientgeneral_form">
            <div className="tab_form">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0">Clients Information</Form.Label>
                <div className="inner_ d-flex">
                  <Form.Label>Current Status:</Form.Label>
                  <div className="py-1 px-2 w-50 mailing">
                    <Button type="button" className="py-1 px-5">
                      Prospect
                    </Button>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Client#:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Label className="w-100 text-start">
                      Generated when activated
                    </Form.Label>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Branch :</Form.Label>
                  <div className="py-1 px-2 w-50 d-flex selectFlield">
                    <input
                      name="client_general_branch"
                      value={Client_General.client_general_branch}
                      onChange={handleChange}
                    />
                    <span>
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ cursor: "pointer", marginLeft: "-20px" }}
                        // onClick={() => setHide(!hide)}
                      ></i>
                    </span>
                    <div
                      // className={`selectFlield_dropdown bg-white border  m-auto ${
                      //   hide ? "d-block" : "d-none"
                      // }`}
                      className={`selectFlield_dropdown bg-white border  m-auto `}
                    >
                      <Table hover className=" border-0 p-0 m-0">
                        <thead>
                          <tr className="bg-light">
                            <th>Branch Name</th>
                            <th>City</th>
                            <th>State</th>
                          </tr>
                        </thead>
                        <tbody>
                          {branchData.length > 0 && (
                            <>
                              {branchData.map((data, i) => (
                                <tr
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    editItem(data.allBranches_branch_name)
                                  }
                                >
                                  <td>{data.allBranches_branch_name}</td>
                                  <td>{data.allBranches_city}</td>
                                  <td>{data.allBranches_State}</td>
                                </tr>
                              ))}
                            </>
                          )}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Name:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      name="client_general_name"
                      value={Client_General.client_general_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Type:</Form.Label>
                  <div className="py-1 px-2 w-50 d-flex selectFlield">
                    <input
                      name="client_general_type"
                      value={Client_General.client_general_type}
                      onChange={handleChange}
                      className=""
                    />
                    <span>
                      <i
                        className="fa-solid fa-chevron-down"
                        style={{ cursor: "pointer", marginLeft: "-20px" }}
                        // onClick={()=> setHide(!hide)}
                      ></i>
                    </span>
                    {/* <div className={`selectFlield_dropdown bg-white border  m-auto `}>
                      <Table hover className=" border-0 p-0 m-0">
                        <thead>
                          <tr className="bg-light">
                            <th>Branch Name</th>
                            <th>City</th>
                            <th>State</th>
                          </tr>
                        </thead>
                        <tbody>
                          {branchData.length > 0 && ( 
                            <>
                              {branchData.map((data, i) => (
                                <tr
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    editItem(data.allBranches_branch_name)
                                  }
                                >
                                  <td>{data.allBranches_branch_name}</td>
                                  <td>{data.allBranches_city}</td>
                                  <td>{data.allBranches_State}</td>
                                </tr>
                              ))}
                            </>
                          )}
                        </tbody>
                      </Table>
                    </div> */}
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>SIC:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <input
                      type="text"
                      list="citynames"
                      name="client_general_sic"
                      value={Client_General.client_general_sic}
                      onChange={handleChange}
                      className="selectFlield"
                      id="colors"
                    />
                    <datalist id="citynames">
                      <option value="AL" />
                      <option value="Cambridge" />
                    </datalist>

                    {/* <Form.Select
                      name="client_general_type"
                      value={Client_General.client_general_type}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select> */}
                  </div>
                </div>

                <div className="inner_ d-flex">
                  <Form.Label>Group:</Form.Label>
                  <div className="py-1 px-2 w-40">
                    <Form.Select
                      name="client_general_group"
                      value={Client_General.client_general_group}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Business Line:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="client_general_businessLine"
                      value={Client_General.client_general_businessLine}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Beds:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      className="w-25"
                      name="client_general_beds"
                      value={Client_General.client_general_beds}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Facs:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Control
                      type="text"
                      className="w-25"
                      name="client_general_facs"
                      value={Client_General.client_general_facs}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="inner_ d-flex align-items-center">
                  <Form.Label>National:</Form.Label>
                  <div className="py-1 px-2 left">
                    <Form.Check
                      className="d-flex align-items-center"
                      type="checkbox"
                      name="client_general_national"
                      value={Client_General.client_general_national}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inner_ d-flex align-items-center">
                  <Form.Label>GPO:</Form.Label>
                  <div className="clients_general">
                    <div className="d-flex align-items-center ">
                      <Form.Check
                        type="checkbox"
                        name="client_general_gpo"
                        value={Client_General.client_general_gpo}
                        onChange={handleChange}
                      />
                      <Form.Label className="w-100">
                        Group purchasing organization
                      </Form.Label>
                    </div>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Account Manager:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="client_general_accountManager"
                      value={Client_General.client_general_accountManager}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="inner_ d-flex">
                  <Form.Label>Rating:</Form.Label>
                  <div className="py-1 px-2 w-50">
                    <Form.Select
                      name="client_general_rating"
                      value={Client_General.client_general_rating}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Disabled select</option>
                      <option>Disabled select</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <div className="general_div p-0 d-flex justtify-content-between align-items-center w-100">
                  <Form.Label className="m-0 pb-1">
                    Agency Representatives
                  </Form.Label>
                  <div className="py-1 w-50 mailing">
                    <Button type="button">Add Representative</Button>
                  </div>
                </div>
                <div className="py-1 px-2">
                  <div>
                    <Col
                      md={4}
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Type</p>
                      <p>User</p>
                      <p>Action</p>
                    </Col>
                  </div>
                </div>
              </Form.Group>
            </div>

            {/* </div> */}
          </Form>
        </Col>
        <Col lg={6}>
          <Form className="clientgeneral_form">
            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Branch Visibility</Form.Label>
                <div className="py-1 px-2 ">
                  <p>
                    When enabled, users are presented with an optional field
                    allowing them to change the payroll location used when
                    paying paid leave.
                  </p>
                  <div className="py-1 px-1 w-100">
                    <Form.Select
                      style={{ height: "50px" }}
                      name="client_general_branchVisibility"
                      value={Client_General.client_general_branchVisibility}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Must have at least one department</option>
                      <option>Must have at least one contact</option>
                      <option>Must have at least one rate</option>
                      <option>Must have a biling address</option>
                      <option>Credit status must be approved</option>
                      <option>Must have an agency representative</option>
                      <option>Must have a Print option defaultValue</option>
                      <option>Must have a paid Leave Jurisdiction</option>
                      <option>Must have a Rating</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>

            <div className="tab_form Option">
              <div className="tab_form override">
                <Form.Group
                  className="mb-3 tab_form_"
                  controlId="formBasicText"
                >
                  <Form.Label className="m-0 pb-1">Notes</Form.Label>
                  <div className="inner_ d-flex">
                    <div className="py-1 px-2 w-100">
                      <Form.Control
                        as="textarea"
                        type="text"
                        name="client_general_notes"
                        value={Client_General.client_general_notes}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </Form.Group>
              </div>
            </div>

            <div className="tab_form overtime">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">
                  Disciplines Serviced
                </Form.Label>
                <div className="py-1 px-1">
                  <div className="py-1 px-1 w-100">
                    <Form.Select
                      style={{ height: "50px" }}
                      name="client_general_disciplinesServiced"
                      value={Client_General.client_general_disciplinesServiced}
                      onChange={handleChange}
                    >
                      <option defaultValue></option>
                      <option>Must have at least one department</option>
                      <option>Must have at least one contact</option>
                      <option>Must have at least one rate</option>
                      <option>Must have a biling address</option>
                      <option>Credit status must be approved</option>
                      <option>Must have an agency representative</option>
                      <option>Must have a Print option defaultValue</option>
                      <option>Must have a paid Leave Jurisdiction</option>
                      <option>Must have a Rating</option>
                    </Form.Select>
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className="tab_form policy">
              <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                {/* <div className="general_div"> */}
                <Form.Label className="m-0  d-flex align-items-center justify-content-between ">
                  Service Dates
                  <div className="py-1 px-1 mailing">
                    <Button type="button">Add Service Dates</Button>
                  </div>
                </Form.Label>
                <div className="py-1 px-2 d-flex justify-content-between border-top">
                  <p>Service Type</p>
                  <p>Date</p>
                  <p>Action</p>
                </div>
                {/* </div> */}
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default General;
