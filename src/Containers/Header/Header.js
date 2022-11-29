import React, { useState } from "react";
import { Navbar, ListGroup, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/CTSLogo.png"
// import { sidebarData } from './sidebarData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

function Navigation() {

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)

  return (


    <Navbar bg="light " className="navbar_ d-block" >
      <div className="logo">
        <img src={logo} className="w-100" alt="" />
      </div>

      <ListGroup as='ul' className="list">


        <ListGroup.Item as='li' className={open1 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen1(!open1); }}>
            <NavLink to="#"><i className="fa-solid fa-user"></i> <span> Scheduling  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/orderListingTable"> <i className="fa-solid fa-id-badge"></i> <span> Order Listing </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/travelQuoteTable"> <i className="fa-solid fa-code-branch"></i> <span> Travel Quote </span> </NavLink></ListGroup.Item>

            </ListGroup>
          </div>



          {/*  */}


        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/clientTable"><i className="fa-solid fa-users"></i> <span> Clients </span> </NavLink>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/registryTable"><i className="fa-solid fa-registered"></i> <span> Registry </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/inTouchTable"><i className="fa-solid fa-bars"></i> <span> Intouch </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li' className={open2 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen2(!open2); }}>
            <NavLink to="#"><i className="fa-solid fa-user"></i> <span> Rates  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/ratesTable"> <i className="fa-solid fa-id-badge"></i> <span> Rates Table </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/ratesTemplatesTable"> <i className="fa-solid fa-code-branch"></i> <span> Rates Templates </span> </NavLink></ListGroup.Item>

            </ListGroup>
          </div>



          {/*  */}


        </ListGroup.Item>
        <ListGroup.Item as='li' className={open4 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen4(!open4); }}>
            <NavLink to="#"><i className="fa-solid fa-table-columns"></i> <span> Timecards  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/genratedContractTable"> <i className="fa-solid fa-code-branch"></i> <span> Generate Contracts </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/timeCardApprovalTable"> <i className="fa-solid fa-code-branch"></i> <span> TimeCard Approval </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/timeCardReviewTable"> <i className="fa-solid fa-code-branch"></i> <span> TimeCard Review </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/completedTimeCardTable"> <i className="fa-solid fa-code-branch"></i> <span> Completed Timecards </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/suspendedTimeCardTable"> <i className="fa-solid fa-code-branch"></i> <span> Suspended Timecards </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/timeCardCuttOffTable"> <i className="fa-solid fa-code-branch"></i> <span> Timecards Cutoff </span> </NavLink></ListGroup.Item>

            </ListGroup>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li' className={open5 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen5(!open5); }}>
            <NavLink to="#"><i className="fa-solid fa-table-columns"></i> <span> Payroll  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/batchCheckProccessingTable" title="Batch Check Proccessing"> <i className="fa-solid fa-code-branch"></i> <span> Batch Check Proccessing </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/wiselyProccessingTable"> <i className="fa-solid fa-code-branch"></i> <span> Wisely Proccessing </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/checkRegisterTable"> <i className="fa-solid fa-code-branch"></i> <span> Check Register</span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payrollExportTable"> <i className="fa-solid fa-code-branch"></i> <span> Payroll Export </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/eftExportTable"> <i className="fa-solid fa-code-branch"></i> <span> EFT Export </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/four01KExportTable"> <i className="fa-solid fa-code-branch"></i> <span> 401K Export </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/positivePayExportTable"> <i className="fa-solid fa-code-branch"></i> <span> Positive Pay Export </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payAdjustmentTable"> <i className="fa-solid fa-code-branch"></i> <span> Pay Adjustment </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payAdjustmentTransactionTable" title="Pay Adjustment Transactions"> <i className="fa-solid fa-code-branch"></i> <span> Pay Adjustment Trans </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payAdjustmentAccrualsTable" title="Pay Adjustment Accruals"> <i className="fa-solid fa-code-branch"></i> <span> Pay Adjustment Accruals </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payrollTaxSummaryTable"> <i className="fa-solid fa-code-branch"></i> <span> Payroll Tax Summary </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/generalLedgerTable"> <i className="fa-solid fa-code-branch"></i> <span> General  Ledger </span> </NavLink></ListGroup.Item>

            </ListGroup>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/employeeTable"><i className="fa-solid fa-code-branch"></i> <span> Employee </span> </NavLink>
          </div>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <div className="d-flex justify-content-between align-items-center list_itemm ">
            <NavLink to="/workHistoryTable"><i className="fa-solid fa-briefcase"></i> <span> Work History </span> </NavLink>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li' className={open6 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen6(!open6); }}>
            <NavLink to="#"><i className="fa-solid fa-table-columns"></i> <span> Billing  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/allTimeCardsVerificationTable"> <i className="fa-solid fa-code-branch"></i> <span> TimeCard Verification </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/invoicingTable"> <i className="fa-solid fa-code-branch"></i> <span> Invoicing </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/invoiceQueuesTable"> <i className="fa-solid fa-code-branch"></i> <span> Invoice Queues </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/completeTimeCardTable"> <i className="fa-solid fa-code-branch"></i> <span> Completed TimeCards </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/manualBillTable"> <i className="fa-solid fa-code-branch"></i> <span> Manual Billings </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/closeAgencyTable"> <i className="fa-solid fa-code-branch"></i> <span> Close Agency Period </span> </NavLink></ListGroup.Item>

            </ListGroup>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li' className={open7 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen7(!open7); }}>
            <NavLink to="#"><i className="fa-solid fa-user"></i> <span> Receivables  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/collectionsTable" title=""> <i className="fa-solid fa-code-branch"></i> <span> Collections </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/cashApplicationTable" title=""> <i className="fa-solid fa-code-branch"></i> <span> Cash Application </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/cashApplicationJournalTable" title="Cash Application Journal"> <i className="fa-solid fa-code-branch"></i> <span> Cash Application Journal </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/invoiceMaintenanceTable" title=""> <i className="fa-solid fa-code-branch"></i> <span> Invoice Maintenance  </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/creditMemosTable" title=""> <i className="fa-solid fa-code-branch"></i> <span> Credit Memos  </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/debitMemosTable" title=""> <i className="fa-solid fa-code-branch"></i> <span> Debit Memos  </span> </NavLink></ListGroup.Item>    
              <ListGroup.Item as='li'><NavLink to="/generalLedgerTableReceivable" title=""> <i className="fa-solid fa-code-branch"></i> <span> General Ledger </span> </NavLink></ListGroup.Item>    
            </ListGroup>
          </div>
        </ListGroup.Item>

        <ListGroup.Item as='li' className={open3 ? "open" : ""}>
          <div className="d-flex justify-content-between align-items-center list_itemm " onClick={() => { setOpen3(!open3); }}>
            <NavLink to="#"><i className="fa-solid fa-user-lock"></i> <span> Admin  </span>
            </NavLink>
            {/* <i className="fa-solid fa-chevron-up me-3 text-white" onClick={() => setOpen(!open)}></i> */}
            <i className="fa-solid fa-chevron-down me-3 text-white" ></i>
          </div>
          <div className="nestedList ">
            <ListGroup as='ul' className="list_ d-none">
              {/* <ListGroup.Item as='li'><NavLink to="/companyProfileTable" style={({isActive})=>{return{backgroundColor: isActive ? '#536878' : "transparent"}}}> <i className="fa-solid fa-table-columns"></i> <span> Company Profile </span> </NavLink></ListGroup.Item> */}
              <ListGroup.Item as='li'><NavLink to="/companyProfileTable"> <i className="fa-solid fa-id-badge"></i> <span> Company Profile </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/branchTable"> <i className="fa-solid fa-code-branch"></i> <span> Branches </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/userProfileTable"> <i className="fa-solid fa-users"></i>  <span> Users </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/holidayTable"> <i className="fa-solid fa-table-columns"></i> <span> Holidays </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/paidLeaveTable"> <i className="fa-solid fa-star-and-crescent"></i> <span> Paid Leave Policy </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/burdenGroupTable"> <i className="fa-solid fa-user-group"></i> <span> Burden Groups </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/CredentialTable "> <i className="fa-brands fa-cc-diners-club"></i> <span> Credentials </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/DisciplineTable"> <i className="fa-solid fa-table-columns"></i> <span> Disciplines </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/mailingLabelTable"> <i className="fa-solid fa-lock"></i> <span> Mailing Lables </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/PayRollCompanyTable"> <i className="fa-solid fa-bars-staggered"></i> <span> Pay Roll Company </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/dropDownTable"> <i className="fa-solid fa-table-columns"></i> <span> Drop Down Codes </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/glaccountTable"> <i className="fa-solid fa-table-columns"></i> <span> G/L Accounts </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/invoiceProfileTable"> <i className="fa-solid fa-table-columns"></i> <span> Invoice Profile </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/payorTable"> <i className="fa-solid fa-table-columns"></i> <span> Payor </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/regionTable"> <i className="fa-solid fa-table-columns"></i> <span> Regions </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/registryTable"> <i className="fa-solid fa-table-columns"></i> <span> Registry </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/salesTaxCodeTable"> <i className="fa-solid fa-table-columns"></i> <span> Sales Tax Code </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/skillDetailsTable"> <i className="fa-solid fa-table-columns"></i> <span> Skill Details </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/specialityDetailsTable"> <i className="fa-solid fa-table-columns"></i> <span> Speciality Details </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/vendorTable" > <i className="fa-solid fa-table-columns"></i> <span> Vendor </span> </NavLink></ListGroup.Item>
              <ListGroup.Item as='li'><NavLink to="/earningDeductionTable" title="Earning / Deduction Codes"> <i className="fa-solid fa-table-columns"></i> <span> Earning / Deduction Codes </span> </NavLink></ListGroup.Item>
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-lock"></i> <span> Security Grou ps </span> </NavLink></ListGroup.Item> */}
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Email History </span> </NavLink></ListGroup.Item> */}
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Intouch Templates </span> </NavLink></ListGroup.Item> */}
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Invoice Formats </span> </NavLink></ListGroup.Item> */}
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Notification Templates </span> </NavLink></ListGroup.Item> */}
              {/* <ListGroup.Item as='li'><NavLink to="/"> <i className="fa-solid fa-table-columns"></i> <span> Online Application </span> </NavLink></ListGroup.Item> */}
            </ListGroup>
          </div>
        </ListGroup.Item>
      </ListGroup>




    </Navbar>
    // </main>
  );
}

export default Navigation;
