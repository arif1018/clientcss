import React from "react";
import { Table, Pagination, Navbar, Container, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DropDownTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getDropDownData } from "../../../features/dropDown/dropDownSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function DropDownTable() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getDropDownData());
    }, []);
    const dropDowndata = useSelector((state) => state.dropDown.DropDown);
  return (
    <main className="main_dropDownTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="dropDown_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Code Details </label>
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
                      <th>Drop Down Code Name</th>
                      <th>Drop Down Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dropDowndata && (
                      <>
                        {dropDowndata.map((data, i) => (
                          <tr key={i}>
                            <td>{data.drop_down_code_name}</td>
                            <td>{data.drop_down_desc}</td>
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
          <Link to="/dropDown" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/dropDownTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default DropDownTable;
