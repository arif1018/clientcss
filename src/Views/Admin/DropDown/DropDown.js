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
import "./DropDown.css";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
import {saveDropDownData, addDropDownData} from "../../../features/dropDown/dropDownSlice"

function DropDown() {
  const dispatch = useDispatch()
  const [admin_dropDown, setAdmin_DropDown] = useState({
    drop_down_code_name: "",
    drop_down_desc: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAdmin_DropDown({
      ...admin_dropDown,
      [name]: value,
    })
  }

  useEffect(()=>{
    dispatch(saveDropDownData(admin_dropDown))
  },[dispatch,admin_dropDown])

  // console.log(admin_dropDown)
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">Code Details</Alert>
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
                        code Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Code Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" className="w-50" name="drop_down_code_name" value={admin_dropDown.drop_down_code_name} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Desc:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                           <Form.Check type = "checkbox"/>
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
  const finalDataDropDown = useSelector((state) => state.dropDown.DropDownTemp)

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addDropDownData(finalDataDropDown));
    navigate("/dropDownTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link href="/dropDownTable" className="py-1 px-3" onClick = {finalSave}>
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/dropDownTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DropDown;
