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
import { useDispatch,useSelector } from "react-redux";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Payor.css";
import { savePayorData, addPayorData } from "../../../features/payor/payorSlice";
import {Link, useNavigate} from 'react-router-dom';

function Payor() {
  const dispatch = useDispatch()
  const [admin_payor, setAdmin_payor] = useState({
     payor_payor_name: "",
     payor_address: "",
     payor_city: "",
     payor_state: "",
     payor_zip: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAdmin_payor({
      ...admin_payor,
      [name]: value
    })
  }
  
  useEffect(()=>{
    dispatch(savePayorData(admin_payor))
  },[dispatch,admin_payor])
  
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">
            Payor Details
          </Alert>
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
                        Branch Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Payor Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name="payor_payor_name" value = {admin_payor.payor_payor_name} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Address:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name="payor_address" value={admin_payor.payor_address} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>City:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Control type="text" name="payor_city" value={admin_payor.payor_city} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Select name="payor_state" value = {admin_payor.payor_state} onChange = {handleChange}>
                            <option></option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Zip:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-50">
                          <Form.Control type="text" name="payor_zip" value={admin_payor.payor_zip} onChange = {handleChange}/>
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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const finalDataPayor = useSelector((state) => state.payor.PayorTemp)

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addPayorData(finalDataPayor));
    navigate("/payorTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link href="/payorTable" className="py-1 px-3" onClick = {finalSave}>
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/payorTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Payor;
