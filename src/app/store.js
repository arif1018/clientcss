import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../features/auth/authSlice"
import BranchReducer from "../features/branch/branchSlice"
import ClientReducer from "../features/clients/clientSlice"
import paidLeaveReducer from "../features/paidLeave/paidLeaveSlice"
import holidayReducer from "../features/holiday/holidaySlice"
import credentialsReducer from "../features/credentials/credentialsSlice"
import burdernGroupReducer from "../features/burderGroup/burderGroupSlice"
import mailingLabelReducer from "../features/mailingLabel/mailingLabelSlice"
import glAccountReducer from "../features/glAccount/glAccountSlice"
import RegionReducer from "../features/region/regionSlice"
import SalesTaxCodeReducer from "../features/salesTaxCode/salesTaxCodeSlice"
import SkillDetailReducer from "../features/skillDetail/skillDetailSlice"
import DisciplineReducer from "../features/discipline/disciplineSlice"
import DropDownReducer from '../features/dropDown/dropDownSlice';
import PayorReducer from '../features/payor/payorSlice';
import InvoiceProfileReducer from '../features/invoiceProfile/invoiceProfileSlice';
import SpecialityDetailReducer from '../features/specialityDetail/specialityDetailSlice';
import UserDetailReducer from '../features/userDetail/userDetailSlice';
import VendorReducer from '../features/vendor/vendorSlice';
import EarningDeductionReducer from '../features/earningDeduction/earningDeductionSlice';
import PayrollReducer from '../features/payroll/payrollSlice';
import RegistrantReducer from '../features/registrant/registrantSlice';
import CompanyProfileReducer from "../features/companyProfile/companyProfileSlice"
// import RegistryReducer from "../features/companyProfileSlice/RegistrySlice"


export const store = configureStore({
  reducer: {
    auth:authReducer,
    client:ClientReducer,
    branch:BranchReducer, 
    paidleave:paidLeaveReducer,
    holiday:holidayReducer,
    credentials:credentialsReducer,
    burdernGroup:burdernGroupReducer,
    mailingLabel:mailingLabelReducer,
    glAccount:glAccountReducer,
    region:RegionReducer,
    salesTaxCode:SalesTaxCodeReducer,
    skillDetail:SkillDetailReducer,
    discipline:DisciplineReducer,
    dropDown:DropDownReducer,
    payor:PayorReducer,
    invoiceProfile:InvoiceProfileReducer,
    specialityDetail:SpecialityDetailReducer,
    userDetail:UserDetailReducer,
    vendor: VendorReducer,
    earningData: EarningDeductionReducer, 
    payroll: PayrollReducer, 
    registrant: RegistrantReducer, 
    company: CompanyProfileReducer, 
    earningDeduction: EarningDeductionReducer,
  },
});
