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
import "./InvoiceProfileTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getInvoiceProfileData } from "../../../features/invoiceProfile/invoiceProfileSlice";
import { Link } from "react-router-dom";

function InvoiceProfileTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInvoiceProfileData());
  }, []);
  const invoiceprofileData = useSelector(
    (state) => state.invoiceProfile.InvoiceProfile
  );
  //   console.log(invoiceprofileData);
  return (
    <main className="main_invoiceProfileTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="invoiceprofile_feild mx-4  w-100 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Invoice Profile Details </label>
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
                      <th>Invoice Profile Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceprofileData && (
                      <>
                        {invoiceprofileData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.invoice_profile_name}</td>
                          </tr>
                        ))}
                      </>
                    )}
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
          <Link to="/invoiceProfile" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/invoiceProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default InvoiceProfileTable;
