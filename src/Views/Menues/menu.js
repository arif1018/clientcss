import React from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './menu.css'

function Menu() {
  return (
    <main className="main_menu">
      <NavigationTop />
      <div className='cennt mt-5'>
        <div className="menu_form m-auto w-50">
          <Alert className="text-center fs-4 m-0   alertt">
            Menues
          </Alert>
          <Form className="form py-3 px-4" >
            <div className="input_group d-flex align-items-center justify-content-between gap-2">
              <Form.Group className="mb-2 userId" controlId="formBasicEmail">
                <Form.Label >User ID</Form.Label>
                <Form.Control type="text" placeholder="User ID" />
              </Form.Group>
              <Form.Group className="mb-2 menuId" controlId="formBasicEmail">
                <Form.Label>Menu ID</Form.Label>
                <Form.Control type="text" placeholder="Menu ID" />
              </Form.Group>
              <Form.Group className="mb-2  menuParentId" controlId="formBasicEmail">
                <Form.Label>MenuParentID</Form.Label>
                <Form.Control type="text" placeholder="MenuParentID" />
              </Form.Group>
            </div>

            <Form.Group className="mb-2 input_" controlId="formBasicEmail">
              <Form.Label>Deptart Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Deptart Description"
                rows={5}
              />
            </Form.Group>

            <Form.Group className="mb-2 menuUrl" controlId="formBasicEmail">
              <Form.Label >MenuURL</Form.Label>
              <Form.Control type="text" placeholder="MenuURL" />
            </Form.Group>




            <Button className="form_btn mt-2 w-100" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Menu;
