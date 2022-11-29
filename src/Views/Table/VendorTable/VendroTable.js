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
import "./VendorTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getVendorData } from "../../../features/vendor/vendorSlice";
import { Link } from "react-router-dom";

function VendorTable() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getVendorData());
  }, []);
  const vendorData = useSelector((state) => state.vendor.Vendor);
  return (
    <main className="main_vendorTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="vendortable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Vendor Details </label>
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
                      <th>Vendor Type</th>
                      <th>Vendor Name</th>
                      <th>Address1</th>
                      <th>Address2</th>
                      <th>Country</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                      <th>Main</th>
                      <th>Mobile</th>
                      <th>Fax</th>
                      <th>Notes</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {vendorData && (<>{vendorData.map((data,i)=>( */}
                    {
                      <>
                        {vendorData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.vendor_vendor_type}</td>
                            <td>{data.vendor_vendor_name}</td>
                            <td>{data.vendor_address_1}</td>
                            <td>{data.vendor_address_2}</td>
                            <td>{data.vendor_county}</td>
                            <td>{data.vendor_city}</td>
                            <td>{data.vendor_state}</td>
                            <td>{data.vendor_zip}</td>
                            <td>{data.vendor_main}</td>
                            <td>{data.vendor_mobile}</td>
                            <td>{data.vendor_fax}</td>
                            <td>{data.vendor_notes}</td>
                            <td>{data.vendor_email}</td>
                          </tr>
                        ))}
                      </>
                    }
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
          <Link to="/vendor" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/vendorTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default VendorTable;
