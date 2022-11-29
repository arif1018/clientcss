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
import "./RegionTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getRegionData } from "../../../features/region/regionSlice";
import { Link } from "react-router-dom";

function RegionTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegionData());
  }, []);
  const regionData = useSelector((state) => state.region.Region);
  return (
    <main className="main_regionTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="regiontable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Region Details </label>
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
                      <th>Region Name</th>
                      <th>Region Description</th>
                      <th>Region Branches</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionData && (
                      <>
                        {regionData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.region_regionInformation_name}</td>
                            <td>{data.region_regionInformation_description}</td>
                            <td>{data.region_regionInformation_branches}</td>
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
          <Link to="/region" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/regionTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default RegionTable;
