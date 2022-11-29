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
import "./Vendor.css";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {saveVendorData, addVendorData} from '../../../features/vendor/vendorSlice'


function Vendor() {
  const dispatch = useDispatch()
  const [admin_vendor, setAdmin_vendor] = useState({
    vendor_vendor_type: "",
    vendor_vendor_name: "",
    vendor_address_1: "",
    vendor_address_2: "",
    vendor_county: "",
    vendor_city: "",
    vendor_state: "",
    vendor_zip: "",
    vendor_notes: "",
    vendor_main: "",
    vendor_mobile: "",
    vendor_fax: "",
    vendor_email: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAdmin_vendor({
      ...admin_vendor,
      [name]: value
    })
  }

  useEffect(()=>{
    dispatch(saveVendorData(admin_vendor))
  },[dispatch,admin_vendor])
  
  return (
    <main className="main_credentials">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-50 m-auto">
          <Alert className="text-center m-0 alertt">
            Vendor Details
          </Alert>
          <Container fluid className="credentials_form">
            <Row>
              <Col lg={6}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Vendor Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                            
                          <Form.Label>Vendor Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select name="vendor_vendor_type" value = {admin_vendor.vendor_vendor_type} onChange = {handleChange}>
                            <option>Subcontractor</option>
                            <option></option>
                            <option></option>
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Vendor Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name="vendor_vendor_name" value = {admin_vendor.vendor_vendor_name} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Address1:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name = "vendor_address_1" value = {admin_vendor.vendor_address_1} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Address2:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name = "vendor_address_2" value = {admin_vendor.vendor_address_2} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>County:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name = "vendor_county" value = {admin_vendor.vendor_county} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>City:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" className="w-50" name="vendor_city" value = {admin_vendor.vendor_city} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>State:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select className="w-50" name = "vendor_state" value = {admin_vendor.vendor_state} onChange = {handleChange}>
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
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" className="w-50" name = "vendor_zip" value = {admin_vendor.vendor_zip} onChange = {handleChange}/>
                        </div>
                      </div>

                    </Form.Group>
                  </div>
                </Form>
              </Col>

              <Col lg={6}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                         Notes
                      </Form.Label>

                      <div className="inner_ d-flex">
                       <Form.Control className="div__vendor" name = "vendor_notes" value = {admin_vendor.vendor_notes} onChange = {handleChange}/>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              </Row>

             <Row>
              <Col lg={6}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Contacts
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                            
                          <Form.Label>Main:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control name = "vendor_main" value = {admin_vendor.vendor_main} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Mobile:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name = "vendor_mobile" value = {admin_vendor.vendor_mobile} onChange = {handleChange}/>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Fax:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control type="text" name = "vendor_fax" value = {admin_vendor.vendor_fax} onChange = {handleChange}/>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              
              <Col lg={6}>
                <Form className="credentials_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className="mb-2 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                         Email
                      </Form.Label>

                      <div className="inner_ d-flex">
                       <Form.Control className="div__vendor"></Form.Control>
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
  const finalVendorData = useSelector((state) => state.vendor.VendorTemp)

  const finalSave = (e) => {
    e.preventDefault();
    dispatch(addVendorData(finalVendorData));
    navigate("/vendorTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link href="/vendorTable" className="py-1 px-3" onClick = {finalSave}>
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/vendorTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Vendor;
