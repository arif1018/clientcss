import React from "react";
import { Tab, Tabs, Alert, Navbar, Container, Nav } from "react-bootstrap";
import Branch from "./Branch/Branch";
import Scheduling from "./Scheduling/Scheduling";
import PayRoll from "./PayRoll/PayRoll";
import Billing from "./Billing/Billing";
import Client from "./Client/Client";
import Registry from "./Registry/Registry";
import CheckLayout from "./CheckLayout/CheckLayout";
import Invoicing from "./Invoicing/Invoicing";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllBranches.css";
import { AddBrancheData } from "../../../features/branch/branchSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function AllBranches() {
  return (
    <main className="allbranches_main_tab">
      <NavigationTop />

      <Navv />

      <div className="cennt">
        <div className="tabbs1">
          <Alert className="text-center m-0 alertt">All Branches</Alert>
          <div className="tabbs">
            <Tabs defaultActiveKey="branch" id="uncontrolled-tab-example">
              <Tab eventKey="branch" title="Branch">
                <Branch />
              </Tab>
              <Tab eventKey="scheduling" title="Scheduling">
                <Scheduling />
              </Tab>
              <Tab eventKey="payroll" title="Payroll">
                <PayRoll />
              </Tab>
              <Tab eventKey="billing" title="Billing">
                <Billing />
              </Tab>
              <Tab eventKey="client" title="Client">
                <Client />
              </Tab>
              <Tab eventKey="registry" title="Registry">
                <Registry />
              </Tab>
              <Tab eventKey="checklayout" title="Check Layout">
                <CheckLayout />
              </Tab>
              <Tab eventKey="invoicing" title="Invoicing">
                <Invoicing />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
}

function Navv() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let branchesData = useSelector((state) => state.branch.Branch);
  const payroll = useSelector((state) => state.branch.payroll);
  const billing = useSelector((state) => state.branch.billing);
  const client = useSelector((state) => state.branch.client);
  const registry = useSelector((state) => state.branch.registry);
  const checklayout = useSelector((state) => state.branch.checklayout);
  const invoicing = useSelector((state) => state.branch.invoicing);
  const scheduling = useSelector((state) => state.branch.scheduling);

  const finalSave = (e) => {
    e.preventDefault();
    branchesData = {
      ...branchesData,
      // branches_billing: billing,
    //   branches_payroll: payroll,
    //   branches_checklayout: checklayout,
    //   branches_invoicing: invoicing,
      // branches_scheduling: scheduling,
    //   branches_client: client,
    //   branches_registry: registry,
    };
    dispatch(AddBrancheData(branchesData));
    navigate("/branchTable");
  };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/branchTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AllBranches;
