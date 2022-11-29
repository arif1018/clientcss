import React, {useState, useEffect} from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import { getAllBranches } from "../../../../features/branch/branchSlice";
// import { saveBillingForm } from "../../../../features/branch/branchSlice";
// import CombineData from "../SaveClientData";
import "./Billing.css"

function Billing() {
  const [allBranches_billing, setAllBranches_Billing] = useState({
    allBranches_billing_revenues_follow_branch: "",
  })

  // const dispacth = useDispatch();

  // const reduxData  = useSelector((state) => state.branch.Billing);

  // useEffect(() => {
  //   dispacth(getAllBranches());
  // }, []);

  // useEffect(() => {
  //   dispacth(saveBillingForm(allBranches_billing));
  // }, [dispacth, allBranches_billing]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setAllBranches_Billing({
      ...allBranches_billing,
      [name]: value
    })
  }
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Form className="billing_form">
            <div className="tab_form policy">
              <Form.Group className="tab_form_" controlId="formBasicText">
                <Form.Label className="m-0 pb-1">Revenue Preferences</Form.Label>

                <div className="inner_ d-flex">
                  <div className="right w-25">
                    <Form.Label>Revenue Follows Branch:</Form.Label>
                  </div>
                  <div className="py-1 px-2 left ">
                    <div className="w-100">
                      <Form.Check type="checkbox" name = "allBranches_billing_revenues_follow_branch" value = {allBranches_billing.allBranches_billing_revenues_follow_branch} onChange = {handleChange}/>
                    </div>
                  </div>
                </div>
                <Form.Label className="text-lighter"> The system rule is for revenue to follow the Registrant's home branch. Ehenever a Registrant works for clients away from the home branch, the home branch receives credit for the revenue. By enabling this option , this branch will receive the revenue credit with no regard for the home branch of the registrants staffed at its clients.</Form.Label>
              </Form.Group>
              {/* <div className="w-100">
                <p style={{textAlign: 'justify' }}></p>
              </div> */}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Billing;
