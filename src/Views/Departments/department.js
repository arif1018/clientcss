import React, { useState } from "react";
// import Home from '../Home/index'
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './department.css'
import axios from "axios";


function Department() {
  const navigate = useNavigate()
  const [department, setDepartment] = useState({
    deptID: "",
    deptDescription: "",
    deptHead: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDepartment({
      ...department,
      [name]: value
    })
  }
  const createNewDepartment = () => {
    axios.post('http://localhost:4000/api/department/new', department)
      .then((res) => {
        alert(res.data.message)
        navigate("/home")
      })
  }
  return (
    <main className="main_dashboard">
      <NavigationTop />
      <div className='cennt mt-5'>
        <div className="form_department  m-auto w-50">
          <Alert className="text-center fs-4 m-0   alertt">
            Departments
          </Alert>
          <Form className="form py-3 px-4" >
            <div className="input_group d-flex gap-2">
              <Form.Group className="mb-2 input_" controlId="formBasicEmail">
                <Form.Label >Deptart ID</Form.Label>
                <Form.Control name="deptID" type="text" value={department.deptID} placeholder="Deptart ID" className="Deptid" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2 input_" controlId="formBasicEmail">
                <Form.Label>Deptart Head</Form.Label>
                <Form.Control name="deptHead" type="text" value={department.deptHead} placeholder="Deptart Head" className="Depthead" onChange={handleChange} />
              </Form.Group>
            </div>
            <Form.Group className="mb-2 input_" controlId="formBasicEmail">
              <Form.Label>Deptart Description</Form.Label>
              <Form.Control
                as="textarea" name="deptDescription" value={department.deptDescription}
                placeholder="Deptart Description" onChange={handleChange}
                rows={5}
              />
            </Form.Group>
            <Form.Group className="mb-1  mt-2">
              <Form.Label>Department Status</Form.Label>
              <div className="d-flex gap-4">
                <Form.Check className="form_check"
                  type="radio"
                  label="Online"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check className="form_check"
                  type="radio"
                  label="Offline"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
              </div>
            </Form.Group>
            <Button className="form_btn mt-2 w-100" type="submit" onClick={createNewDepartment}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </main>

  );
}

export default Department;
