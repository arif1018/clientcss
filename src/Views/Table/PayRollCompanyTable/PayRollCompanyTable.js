import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./payRollCompanyTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getPayRollData } from "../../../features/payroll/payrollSlice";
import { Link } from "react-router-dom";

function PayRollCompanyTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPayRollData());
  }, []);

  const PayRollCompanyData = useSelector((state) => state.payroll.Payroll);

  return (
    <main className="main_paidLeaveTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="paidleavetable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Pay Roll Company </label>
              </div>
              <div>
                <AdvancedExample />
              </div>
            </div>
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    <tr className="bg-light">
                      <th>Payroll Company Name</th>
                      <th>Payroll Company Desc</th>
                      <th>Federal ID</th>
                      <th>Address1</th>
                      <th>Address2</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                      <th>Phone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PayRollCompanyData && (<>{PayRollCompanyData.map((data,i)=>(
                        <tr key={i}>
                            <td>{data.payRoll_payrollCompanyInformation_name}</td>
                            <td>{data.payRoll_payrollCompanyInformation_desc}</td>
                            <td>{data.payRoll_payrollCompanyInformation_federalID}</td>
                            <td>{data.payRoll_payrollCompanyInformation_address1}</td>
                            <td>{data.payRoll_payrollCompanyInformation_address2}</td>
                            <td>{data.payRoll_payrollCompanyInformation_city}</td>
                            <td>{data.payRoll_payrollCompanyInformation_state}</td>
                            <td>{data.payRoll_payrollCompanyInformation_zip}</td>
                            <td>{data.payRoll_payrollCompanyInformation_phone}</td>
                            <td>{data.payRoll_payrollCompanyInformation_email}</td>
                        </tr>
                    ))}</>)}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function AdvancedExample() {
  return (
    <Pagination>
      <Pagination.Item active>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

function Navv() {
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Link to="/payRollCompany" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/payRollCompanyTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PayRollCompanyTable;
