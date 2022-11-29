import React from "react";
// import { useNavigate } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux';

import { Tab, Tabs, Alert, Navbar, Container, Nav } from "react-bootstrap";

import General from "./general/General";
import Client from "./client/Client";
import Registryyy from "./registry/Registry";
import PayRoll from "./payRoll/PayRoll";
import Reference from "./reference/Reference";
import Education from "./Education/Education";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import EmploymentHistory from "./EmploymentHistory/EmploymentHistory";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComplanyProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCompanyData } from "../../../features/companyProfile/companyProfileSlice";

function CompanyProfile() {
  return (
    <main className="company_main_tab ">
      <NavigationTop />

      <Navv />
      <div className="cennt">
        <div className="tabbs1">
          <Alert className="text-center m-0 alertt">Company Profile</Alert>

          <div className="tabbs">
            <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
              <Tab eventKey="general" title="General">
                <General />
              </Tab>
              <Tab eventKey="clients" title="Clients">
                <Client />
              </Tab>
              <Tab eventKey="registry" title="Registry">
                <Registryyy />
              </Tab>
              <Tab eventKey="payroll" title="Payroll">
                <PayRoll />
              </Tab>
              <Tab eventKey="reference" title="Reference">
                <Reference />
              </Tab>
              <Tab eventKey="education" title="Education">
                <Education />
              </Tab>
              <Tab eventKey="employmentHistory" title="EmploymentHistory">
                <EmploymentHistory />
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
  const dispacth = useDispatch();
  let companydata = useSelector((state) => state.company.General);
  const Client = useSelector((state) => state.company.clients);
  const Registry = useSelector((state) => state.company.Registry);
  const Payroll = useSelector((state) => state.company.Payroll);
  const Refernce = useSelector((state) => state.company.Refernce);
  // const Education = useSelector(state => state.company.Education)
  // const EmployementHistory = useSelector(state => state.company.EmployementHistory)

  const FinalSave = (e) => {
    e.preventDefault();
    companydata = {
      ...companydata,
      companyProfile_Client: Client,
      companyProfile_Registry: Registry,
      companyProfile_PayRoll: Payroll,
      companyProfile_Reference: Refernce,
    };
    dispacth(addCompanyData(companydata))
    navigate("/companyProfileTable")
  };

  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link href="/companyProfile" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          <Nav.Link onClick={FinalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/companyProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CompanyProfile;
