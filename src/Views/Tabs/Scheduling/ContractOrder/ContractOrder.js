import React from "react";
import { Tab, Tabs, Alert, Navbar, Container, Nav } from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import Details from "./Deatils/Details";
import Notes from "./Notes/Notes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContractOrder.css";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addRegistrantData } from "../../../features/registrant/registrantSlice";

function ContractOrder() {
  return (
    <main className="registry_main_tab">
      <NavigationTop />

      <Navv />

      <div className="cennt">
        <div className="tabbs1">
          <Alert className="text-center m-0 alertt">Contract Details</Alert>
          <div className="tabbs">
            <Tabs defaultActiveKey="Details" id="uncontrolled-tab-example">
              <Tab eventKey="Details" title="Details">
                <Details />
              </Tab>
              <Tab eventKey="Notes" title="Notes">
                <Notes />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

function Navv() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   let RegistrantData = useSelector((state) => state.registrant.General);
//   const Contact = useSelector((state) => state.registrant.Contact);
//   const Preferences = useSelector((state) => state.registrant.Preferences);
//   const HR = useSelector((state) => state.registrant.RegisHR);
//   const Payrolll = useSelector((state) => state.registrant.Payroll);

//   const finalSave = (e) => {
//     e.preventDefault();
//     RegistrantData = {
//       ...RegistrantData,
//       registrant_contact: Contact,
//       registrant_preferences: Preferences,
//       registrant_HR: HR,
//       registrant_payroll: Payrolll,
//     };
//     dispatch(addRegistrantData(RegistrantData));
//     navigate("/registryTable");
//   };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/clients" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          {/* <Nav.Link onClick={finalSave} className="py-1 px-3"> */}
          {/* <Link to="/registryTable" className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Link> */}
          <Link to="/orderListingTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ContractOrder;
