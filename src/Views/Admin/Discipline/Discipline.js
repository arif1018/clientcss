import React, {useState, useEffect} from "react";
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
import "./Discipline.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import {saveDisciplineData, addDisciplineData} from "../../../features/discipline/disciplineSlice"

function Discipline() {
  const dispatch = useDispatch()
  const [admin_discipline, setAdmin_discipline] = useState({
      admin_discipline_code_name: "",
      admin_discipline_code_name_check: "",
      admin_discipline_desc: "",
      admin_discipline_specialities: "",
      admin_discipline_skills: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
       setAdmin_discipline({
        ...admin_discipline,
        [name]: value,
       })
  }

  useEffect(()=>{
    dispatch(saveDisciplineData(admin_discipline))
  },[dispatch,admin_discipline])

  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Discipline Details</Alert>
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
                        Discipline Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Code Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" className="w-50" name="admin_discipline_code_name" value={admin_discipline.admin_discipline_code_name} onChange = {handleChange}/>
                          <div className="div__credentials">
                          <Form.Check type = "checkbox" name="admin_discipline_code_name_check" value = {admin_discipline.admin_discipline_code_name_check} onChange = 
                          {handleChange}/>
                          <p>Hide from Online Application</p>
                          </div>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" className="w-75" name="admin_discipline_desc" value = {admin_discipline.admin_discipline_desc} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Specialities:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                        <Form.Select name="admin_discipline_specialities" value={admin_discipline.admin_discipline_specialities} onChange = {handleChange}> 
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Skills:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select name="admin_discipline_skills" value={admin_discipline.admin_discipline_skills} onChange = {handleChange}>
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
  const navigate = useNavigate() 
  const dispatch = useDispatch()
  const finalDataDiscipline = useSelector((state) => state.discipline.DisciplineTemp)

  
  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addDisciplineData(finalDataDiscipline));
    navigate("/disciplineTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link className="py-1 px-3" onClick = {finalSave}>
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/disciplineTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Discipline;
