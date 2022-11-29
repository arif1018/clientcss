import React, { useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap';
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './taxes.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Taxes() {
  const navigate = useNavigate()

  const [taxes, setTaxes] = useState({
    taxID: "",
    taxDescription: "",
    taxSlab: "",
    extraAmount: "",
    Minimum: "",
    Maximum: "",
    taxStatus: ""

  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTaxes({
      ...taxes,
      [name]: value
    })
  }

  const createNewTaxes = () => {
    axios.post('http://localhost:4000/api/taxes/new', taxes)
      .then((res) => {
        alert(res.data.message)
        navigate("/home")
      })
  }

  return (
    <main className="main_taxes">
      <NavigationTop />
      <div className='cennt mt-5'>
        <div className="taxes_form m-auto w-50">
          <Alert className="text-center fs-4 m-0   alertt">
            Taxes
          </Alert>
          <Form className="form py-3 px-4" >
            <div className="input_group d-flex align-items-center justify-content-between gap-2">
              <Form.Group className="mb-2 taxid" controlId="formBasicEmail">
                <Form.Label >Tax ID</Form.Label>
                <Form.Control name="taxID" type="text" value={taxes.taxID} placeholder="Tax ID" onChange={handleChange} />
                {/* <Form.Text className="text-muted ps-2">
            We'll never share your email with anyone else.
          </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-2  taxslab" controlId="formBasicEmail">
                <Form.Label>Tax Slab</Form.Label>
                <Form.Control name="taxSlab" type="text" value={taxes.taxSlab} placeholder="Tax Slab" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-2 extraAmount" controlId="formBasicEmail">
                <Form.Label>Extra Amount</Form.Label>
                <Form.Control name="extraAmount" type="text" value={taxes.extraAmount} placeholder="Extra Amount" className="" onChange={handleChange} />
              </Form.Group>
            </div>




            <div className="input_group d-flex align-items-center justify-content-between  gap-2">
              <Form.Group className="mb-2 minimum" controlId="formBasicEmail">
                <Form.Label>Minimum</Form.Label>
                <Form.Control name="Minimum" type="text" value={taxes.Minimum} placeholder="Minimum" onChange={handleChange} />
              </Form.Group>


              <Form.Group className="mb-2 maximum" controlId="formBasicEmail">
                <Form.Label>Maximum</Form.Label>
                <Form.Control name="Maximum" type="text" value={taxes.Maximum} placeholder="Maximum" onChange={handleChange} />
              </Form.Group>

            </div>

            <Form.Group className="mb-2 taxdescription" controlId="formBasicEmail">
              <Form.Label>Tax Description</Form.Label>
              <Form.Control
                name="taxDescription" as="textarea" value={taxes.taxDescription}
                placeholder="Tax Description"
                onChange={handleChange}
                rows={5}
              />
            </Form.Group>

            <Form.Group className="mb-1  mt-2">
              <Form.Label>Taxes Status</Form.Label>
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

            <Button className="form_btn mt-2 w-100" type="submit" onClick={createNewTaxes}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
}

export default Taxes;
