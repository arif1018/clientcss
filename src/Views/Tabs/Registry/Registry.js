import React from "react";
import { Tab, Tabs, Alert, Navbar, Container, Nav } from "react-bootstrap";
import General from "./General/General";
import Contact from "./Contact/Contact";
import Preferences from "./Preferences/Preferences";
import HR from "./HR/HR";
import Payroll from "./Payroll/Payroll";
import Education from "./Education/Education";
import Employment from "./Employment/Employment";
import References from "./References/References";
import Questionnaire from "./Questionnaire/Questionnaire";
import Status from "./Status/Status";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registry.css";
import { useDispatch, useSelector } from "react-redux";
import { addRegistrantData } from "../../../features/registrant/registrantSlice";
import { Link, useNavigate } from "react-router-dom";

function Registry() {
  return (
    <main className="registry_main_tab">
      <NavigationTop />

      <Navv />

      <div className="cennt">
        <div className="tabbs1">
          <Alert className="text-center m-0 alertt">All Registrants</Alert>
          <div className="tabbs">
            <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
              <Tab eventKey="general" title="General">
                <General />
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <Contact />
              </Tab>
              <Tab eventKey="preferences" title="Preferences">
                <Preferences />
              </Tab>
              <Tab eventKey="hr" title="HR">
                <HR />
              </Tab>
              <Tab eventKey="payroll" title="Payroll">
                <Payroll />
              </Tab>
              <Tab eventKey="education" title="Education">
                <Education />
              </Tab>
              <Tab eventKey="employment" title="Employment">
                <Employment />
              </Tab>
              <Tab eventKey="references" title="References">
                <References />
              </Tab>
              <Tab eventKey="questionnaire" title="Questionnaire">
                <Questionnaire />
              </Tab>
              <Tab eventKey="status" title="Status">
                <Status />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

function Navv() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let RegistrantData = useSelector((state) => state.registrant.General);
  const Contact = useSelector((state) => state.registrant.Contact);
  const Preferences = useSelector((state) => state.registrant.Preferences);
  const HR = useSelector((state) => state.registrant.RegisHR);
  const Payrolll = useSelector((state) => state.registrant.Payroll);

  const finalSave = (e) => {
    e.preventDefault();
    RegistrantData = {
      ...RegistrantData,
      registrant_contact: Contact,
      registrant_preferences: Preferences,
      registrant_HR: HR,
      registrant_payroll: Payrolll,
    };
    dispatch(addRegistrantData(RegistrantData));
    navigate("/registryTable");
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/clients" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/registryTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Registry;
