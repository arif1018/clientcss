import React from "react";
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
// import { NavLink } from "react-router-dom";
// import {Button} from '@mui/material'
// import {Link} from 'react-router-dom'
// import logo from "../../assets/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './headerTop.css'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch} from "react-redux"
import {logout, reset} from "../../features/auth/authSlice"

function NavigationTop() {
  const navigate = useNavigate()
  const disptach = useDispatch()

  const userLogout = (e)=>{
    e.preventDefault()
    disptach(logout())
    disptach(reset())
    navigate("/")
  }
  return (
    <main className="header_top">


      <Navbar expand="lg" className="navbar">
        <Container fluid className="mx-3">
          <Form className="d-flex gap-4 align-items-center">
            <h5>Branches</h5>
            <Form.Select name="empDepartment" className="me-2 m-0 py-0 w-100">
              <option defaultValue>All Regions & Branches</option>
            </Form.Select>
          </Form>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          {/* <Navbar.Collapse id="navbarScroll"> */}
          <div className="navigate d-flex justify-content-between w-100">

            <Nav
              className="me-auto my-2 my-lg-0 d-flex align-items-center"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <p className="m-0">Welcome: User (AMT Medical Staffing)</p>
              <Link to="/dashboard"><i className="fa-solid fa-chart-line"></i>  Dashboard </Link>
              <Link to="#action2"><i className="fa-solid fa-asterisk"></i> Prefrence</Link>
              <Link to="/support"> <i className="fa-solid fa-circle-question"></i>  Support</Link>
              <Nav.Link  onClick={userLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</Nav.Link>
              {/* <Nav.Link href=""> <i className="fa-solid fa-circle-question"></i> <button className="btn btn-none" onClick={Modal()}> Support</button></Nav.Link> */}
            </Nav>

          </div>

          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>



    </main>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Modal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default NavigationTop;
