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
import "./companyTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyData } from "../../../features/companyProfile/companyProfileSlice";
import { Link } from "react-router-dom";

function CompanyProfileTable() {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getCompanyData());
  }, []);

  const companyData = useSelector((state) => state.company.CompanyProile);

  return (
    <main className="main_companyProfileTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="companyProfiletable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Company Profile </label>
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
                      <th>Agency Name</th>
                      <th>Email address</th>
                      <th>Default Discipline</th>
                      <th>PerDiem</th>
                      <th>Contracts</th>
                    </tr>
                  </thead>
                  <tbody>
                   {companyData && (<>{companyData.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.companyProfile_general_agencyName_text}</td>
                        <td>{data.companyProfile_general_emailAddress_text}</td>
                        <td>{data.companyProfile_general_defaultDiscipline_default}</td>
                        <td>{data.companyProfile_general_credentialStatusOverride_perDiem}</td>
                        <td>{data.companyProfile_general_credentialStatusOverride_contracts}</td>
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
          <Link to="/companyProfile" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/companyProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CompanyProfileTable;
