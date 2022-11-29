// React
import React from "react";
// import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Auth
import UserProfile from './Views/Auth/UserProfile';


import Department from './Views/Departments/department';
import Taxes from "./Views/Taxes/taxes";
import Menu from "./Views/Menues/menu";


// Admin
import User from "./Views/Users/User";
import EmployeeProfile from './Views/EmployeeProfile/employeeProfile';
import Holiday from './Views/Admin/Holiday/Holiday';
import PaidLeave from './Views/Admin/PaidLeavePolicy/PaidLeave';
import BurdenGroup from './Views/Admin/BurdenGroup/BurdenGroup';
import Credentials from './Views/Admin/Credentials/Credentials';
import Discipline from './Views/Admin/Discipline/Discipline';
import MailingLabel from './Views/Admin/MailingLabel/MailingLabel';
import PayRollCompany from './Views/Admin/PayrollCompany/PayRollCompany';
import DropDown from './Views/Admin/DropDown/DropDown';
import GLaccount from './Views/Admin/GLaccount/GLaccount';
import InvoiceProfile from './Views/Admin/InvoiceProfile/InvoiceProfile';
import Payor from './Views/Admin/Payor/Payor';
import Region from './Views/Admin/Region/Region';
import SalesTaxCode from './Views/Admin/SalesTaxCode/SalesTaxCode';
import SkillDetails from './Views/Admin/SkillDetails/SkillDetails';
import SpecialityDetails from './Views/Admin/SpecialityDetails/SpecialityDetails';
import Vendor from './Views/Admin/Vendor/Vendor';
import EarningDeduction from './Views/Admin/EarningDeduction/EarningDeduction';




// Tabs
import CompanyProfile from './Views/Tabs/CompanyProfile/CompanyProfile';
import Clients from './Views/Tabs/Clients/Clients';
import UpdateClients from './Views/Tabs/UpdateClients/UpdateClients';
import AllBranches from './Views/Tabs/AllBranches/AllBranches';
import Registry from './Views/Tabs/Registry/Registry';
import ContractOrder from './Views/Tabs/Scheduling/ContractOrder/ContractOrder';


// Tables
import BranchTable from './Views/Table/branchTable/BranchTable';
import BurdenGroupTable from './Views/Table/BurdenGroupTable/BurdenGroupTable';
import ClientTable from './Views/Table/ClientTable/ClientTable';
import CompanyProfileTable from './Views/Table/CompanyTable/CompanyProfileTable';
import CredentialTable from './Views/Table/CredentialTable/CredentialTable';
import DisciplineTable from './Views/Table/DisciplineTable/DisciplineTable';
import DropDownTable from './Views/Table/DropDownTable/DropDownTable';
import EmployeeTable from './Views/Table/EmployeeTable/EmployeeTable';
import GLaccountTable from './Views/Table/GLaccountTable/GLaccountTable';
import HolidayTable from './Views/Table/HolidayTable/HolidayTable';
import InvoiceProfileTable from './Views/Table/InvoiceProfileTable/InvoiceProfileTable';
import MailingLabelTable from './Views/Table/MailingLabelTable/MailingLabelTable';
import PaidLeaveTable from './Views/Table/PaidLeaveTable/PaidLeaveTable';
import PayorTable from './Views/Table/PayorTable/PayorTable';
import PayRollCompanyTable from './Views/Table/PayRollCompanyTable/PayRollCompanyTable';
import RegionTable from './Views/Table/RegionTable/RegionTable';
import SalesTaxCodeTable from './Views/Table/SalesTaxCodeTable/SalesTaxCodeTable';
import SkillDetailsTable from './Views/Table/SkillDetailsTable/SkillDetailsTable';
import SpecialityDetailsTable from './Views/Table/SpecialityDetailsTable/SpecialityDetailsTable';
import UserProfileTable from './Views/Table/UsersTable/UserProfileTable';
import VendorTable from './Views/Table/VendorTable/VendroTable';
import EarningDeductionTable from './Views/Table/EarningDeducationTable/EarningDeductionTable';
import RegistryTable from './Views/Table/RegistryTable/RegistryTable';
import TravelQuoteTable from './Views/Table/SchedulingTable/TravelQuoteTable/TravelQuoteTable';
import OrderListingTable from './Views/Table/SchedulingTable/OrderListingTable/OrderListingTable';
import RatesTable from './Views/Table/RatesTable/RatesTable/RatesTable';
import RatesTemplatesTable from "./Views/Table/RatesTable/RatesTemplatesTable/RatesTemplatesTable";
import InTouchTable from "./Views/Table/InTouchTable/InTouchTable";
import WorkHistoryTable from "./Views/Table/WorkHistoryTable/WorkHistoryTable";
import GenratedContractTable from "./Views/Table/TimecardTable/GenratedContractTable/GenratedContractTable";
import TimeCardApprovalTable from "./Views/Table/TimecardTable/TimeCardApprovalTable/TimeCardApprovalTable";
import TimeCardReviewTable from "./Views/Table/TimecardTable/TimeCardReviewTable/TimeCardReviewTable";
import CompletedTimeCardTable from "./Views/Table/TimecardTable/CompletedTimeCardTable/CompletedTimeCardTable";
import SuspendedTimeCardTable from "./Views/Table/TimecardTable/SuspendedTimeCardTable/SuspendedTimeCardTable";
import TimeCardCuttOffTable from "./Views/Table/TimecardTable/TimeCardCuttOffTable/TimeCardCuttOffTable";
import BatchCheckProccessingTable from "./Views/Table/PayrollTable/BatchCheckProccessingTable/BatchCheckProccessingTable";
import WiselyProccessingTable from "./Views/Table/PayrollTable/WiselyProccessingTable/WiselyProccessingTable";
import CheckRegisterTable from "./Views/Table/PayrollTable/CheckRegisterTable/CheckRegisterTable";
import PayrollExportTable from "./Views/Table/PayrollTable/PayrollExportTable/PayrollExportTable";
import EFTExportTable from "./Views/Table/PayrollTable/EFTExportTable/EFTExportTable";
import Four01KExportTable from "./Views/Table/PayrollTable/Four01KExportTable/Four01KExportTable";
import PositivePayExportTable from "./Views/Table/PayrollTable/PositivePayExportTable/PositivePayExportTable";
import PayAdjustmentTable from "./Views/Table/PayrollTable/PayAdjustmentTable/PayAdjustmentTable";
import PayAdjustmentTransactionTable from "./Views/Table/PayrollTable/PayAdjustmentTransactionTable/PayAdjustmentTransactionTable";
import PayAdjustmentAccrualsTable from "./Views/Table/PayrollTable/PayAdjustmentAccrualsTable/PayAdjustmentAccrualsTable";
import PayrollTaxSummaryTable from "./Views/Table/PayrollTable/PayrollTaxSummaryTable/PayrollTaxSummaryTable";
import GeneralLedgerTable from "./Views/Table/PayrollTable/GeneralLedgerTable/GeneralLedgerTable";
import CollectionsTable from "./Views/Table/ReceivablesTable/CollectionsTable/CollectionsTable";
import CashApplicationTable from "./Views/Table/ReceivablesTable/CashApplicationTable/CashApplicationTable";
import CashApplicationJournalTable from "./Views/Table/ReceivablesTable/CashApplicationJournalTable/CashApplicationJournalTable";
import InvoiceMaintenanceTable from "./Views/Table/ReceivablesTable/InvoiceMaintenanceTable/InvoiceMaintenanceTable";
import CreditMemosTable from "./Views/Table/ReceivablesTable/CreditMemosTable/CreditMemosTable";
import DebitMemosTable from "./Views/Table/ReceivablesTable/DebitMemosTable/DebitMemosTable";
import GeneralLedgerTableReceivable from "./Views/Table/ReceivablesTable/GeneralLedgerTable/GeneralLedgerTable";
// import TimeCardVerificationTable from "./Views/Table/BillingTable/TimecardTable/";
import InvoicingTable from "./Views/Table/BillingTable/InvoicingTable/InvoicingTable";
import InvoiceQueuesTable from "./Views/Table/BillingTable/InvoiceQueuesTable/InvoiceQueuesTable";
import CompleteTimeCardTable from "./Views/Table/BillingTable/CompleteTimeCardTable/CompleteTimeCardTable";
import ManualBillingTable from "./Views/Table/BillingTable/ManualBillingTable/ManualBillingTable";
import CloseAgencyPeriodTable from "./Views/Table/BillingTable/CloseAgencyPeriodTable/CloseAgencyPeriodTable";




// Single Forms
import OrderListingScheduling from './Views/SingleForms/Sheduling/OrderListing/OrderListing';
import RateActive from './Views/SingleForms/Rates/RateActive/RateActive';
import RateTemplate from './Views/SingleForms/Rates/RateTemplate/RateTemplate';
import WorkHistory from './Views/SingleForms/WorkHistory/WorkHistory';
import InTouch from './Views/SingleForms/InTouch/InTouch';




// Navbar
import Navigation from './Containers/Header/Header';

// Dashboard
import Dashboard from './Views/Dashboard/Dashboard';

// Support
import Support from './Views/Support/Support';

// Under Construction
import UnderConstruction from './Views/UnderConstruction/UnderConstruction';


// Error
import Error from './Error';


// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  // const [user, setLoginUser] = useState({})
  return (

    <div className="view ">
      <Container fluid>
        <Row>
          <Col sm={12} className="d-flex">

            {/* <CompanyProfile1 /> */}

            <Navigation />


          
            <Routes>
              {/* Auth */}
              <Route path="/" element={<UserProfile />} />


              {/* Admin */}
              <Route path="/employee" element={<EmployeeProfile />} />
              <Route path="/department" element={<Department />} />
              <Route path="/taxes" element={<Taxes />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/user" element={<User />} />
              <Route path="/holiday" element={<Holiday />} />
              <Route path="/paidLeave" element={<PaidLeave />} />
              <Route path="/burdenGroup" element={<BurdenGroup />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/discipline" element={<Discipline />} />
              <Route path="/mailingLabel" element={<MailingLabel />} />
              <Route path="/payRollCompany" element={<PayRollCompany />} />
              <Route path="/dropDown" element={<DropDown />} />
              <Route path="/glaccount" element={<GLaccount />} />
              <Route path="/invoiceProfile" element={<InvoiceProfile />} />
              <Route path="/payor" element={<Payor />} />
              <Route path="/region" element={<Region />} />
              <Route path="/salesTaxCode" element={<SalesTaxCode />} />
              <Route path="/skillDetails" element={<SkillDetails />} />
              <Route path="/specialityDetails" element={<SpecialityDetails />} />
              <Route path="/vendor" element={<Vendor />} />
              <Route path="/earningDeduction" element={<EarningDeduction />} />


              {/* Tabs */}
              <Route path="/clients" element={<Clients />} />
              <Route path="/clients/:id" element={<UpdateClients />} />

              <Route path="/allBranches" element={<AllBranches />} />
              <Route path="/companyProfile" element={<CompanyProfile />} />
              <Route path="/registry" element={<Registry />} />
              <Route path="/newContact" element={<ContractOrder />} />


              {/* Tables */}
              <Route path="/userProfileTable" element={<UserProfileTable />} />
              <Route path="/clientTable" element={<ClientTable />} />
              <Route path="/employeeTable" element={<EmployeeTable />} />
              <Route path="/companyProfileTable" element={<CompanyProfileTable />} />
              <Route path="/branchTable" element={<BranchTable />} />
              <Route path="/holidayTable" element={<HolidayTable />} />
              <Route path="/paidLeaveTable" element={<PaidLeaveTable />} />
              <Route path="/burdenGroupTable" element={<BurdenGroupTable />} />
              <Route path="/credentialTable" element={<CredentialTable />} />
              <Route path="/disciplineTable" element={<DisciplineTable />} />
              <Route path="/mailingLabelTable" element={<MailingLabelTable />} />
              <Route path="/payRollCompanyTable" element={<PayRollCompanyTable />} />
              <Route path="/dropDownTable" element={<DropDownTable />} />
              <Route path="/GLaccountTable" element={<GLaccountTable />} />
              <Route path="/invoiceProfileTable" element={<InvoiceProfileTable />} />
              <Route path="/payorTable" element={<PayorTable />} />
              <Route path="/regionTable" element={<RegionTable />} />
              <Route path="/salesTaxCodeTable" element={<SalesTaxCodeTable />} />
              <Route path="/skillDetailsTable" element={<SkillDetailsTable />} />
              <Route path="/specialityDetailsTable" element={<SpecialityDetailsTable />} />
              <Route path="/vendorTable" element={<VendorTable />} />
              <Route path="/earningDeductionTable" element={<EarningDeductionTable />} />
              <Route path="/registryTable" element={<RegistryTable />} />
              <Route path="/travelQuoteTable" element={<TravelQuoteTable />} />
              <Route path="/orderListingTable" element={<OrderListingTable />} />
              <Route path="/ratesTable" element={<RatesTable />} />
              <Route path="/ratesTemplatesTable" element={<RatesTemplatesTable />} />
              <Route path="/inTouchTable" element={<InTouchTable />} />
              <Route path="/workHistoryTable" element={<WorkHistoryTable />} />
              <Route path="/genratedContractTable" element={<GenratedContractTable />} />
              <Route path="/timeCardApprovalTable" element={<TimeCardApprovalTable />} />
              <Route path="/timeCardReviewTable" element={<TimeCardReviewTable />} />
              <Route path="/completedTimeCardTable" element={<CompletedTimeCardTable />} />
              <Route path="/suspendedTimeCardTable" element={<SuspendedTimeCardTable />} />
              <Route path="/timeCardCuttOffTable" element={<TimeCardCuttOffTable />} />
              <Route path="/batchCheckProccessingTable" element={<BatchCheckProccessingTable />} />
              <Route path="/wiselyProccessingTable" element={<WiselyProccessingTable />} />
              <Route path="/checkRegisterTable" element={<CheckRegisterTable />} />
              <Route path="/payrollExportTable" element={<PayrollExportTable />} />
              <Route path="/eftExportTable" element={<EFTExportTable />} />
              <Route path="/four01KExportTable" element={<Four01KExportTable />} />
              <Route path="/positivePayExportTable" element={<PositivePayExportTable />} />
              <Route path="/payAdjustmentTable" element={<PayAdjustmentTable />} />
              <Route path="/payAdjustmentTransactionTable" element={<PayAdjustmentTransactionTable />} />
              <Route path="/payAdjustmentAccrualsTable" element={<PayAdjustmentAccrualsTable />} />
              <Route path="/payrollTaxSummaryTable" element={<PayrollTaxSummaryTable />} />
              <Route path="/generalLedgerTable" element={<GeneralLedgerTable />} />
              <Route path="/collectionsTable" element={<CollectionsTable />} />
              <Route path="/cashApplicationTable" element={<CashApplicationTable />} />
              <Route path="/cashApplicationJournalTable" element={<CashApplicationJournalTable />} />
              <Route path="/invoiceMaintenanceTable" element={<InvoiceMaintenanceTable />} />
              <Route path="/creditMemosTable" element={<CreditMemosTable />} />
              <Route path="/debitMemosTable" element={<DebitMemosTable />} />
              <Route path="/generalLedgerTableReceivable" element={<GeneralLedgerTableReceivable />} />
              {/* <Route path="/allTimeCardsVerificationTable" element={<TimeCardVerificationTable />} /> */}
              <Route path="/invoicingTable" element={<InvoicingTable />} />
              <Route path="/invoiceQueuesTable" element={<InvoiceQueuesTable />} />
              <Route path= "/completeTimeCardTable" element={<CompleteTimeCardTable />} />
              <Route path= "/manualBillTable" element={<ManualBillingTable />} />
              <Route path="/closeAgencyTable" element={<CloseAgencyPeriodTable/>} />


              {/* SingleForms */}
              <Route path="/orderListing" element={<OrderListingScheduling />} />        
              <Route path="/rateActive" element={<RateActive />} />
              <Route path="/rateTemplate" element={<RateTemplate />} />
              <Route path="/workHistory" element={<WorkHistory />} />
              <Route path="/inTouch" element={<InTouch />} />




              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/support" element={<Support />} />
              <Route path="/underConstruction" element={<UnderConstruction />} />
              <Route path="*" element={<Error />} />

            </Routes>
            <ToastContainer />



          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
