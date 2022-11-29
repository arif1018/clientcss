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
import "./paidtable.css";
import { useDispatch, useSelector } from "react-redux";
import { getPaidLeaveData } from "../../../features/paidLeave/paidLeaveSlice";
import { Link } from "react-router-dom";

function PaidLeaveTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaidLeaveData());
  }, []);
  const paidLeaveData = useSelector((state) => state.paidleave.paidleave);

  return (
    <main className="main_paidLeaveTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="paidleavetable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Paid Leave </label>
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
                      <th>Name</th>
                      <th>Desc</th>
                      <th>Type</th>
                      <th>Accural</th>
                      <th>Maximum Hours Per Year</th>
                      <th>Maximum Carry Over Hours</th>
                      <th>Accural Commencement</th>
                      <th>Policy Effective Date</th>
                      <th>Usage May Begin</th>
                      <th>Maximum Usage Per Year</th>
                      <th>Minimum Hours Worked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paidLeaveData && (
                      <>
                        {paidLeaveData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.paidLeave_policyInformation_name}</td>
                            <td>{data.paidLeave_policyInformation_desc}</td>
                            <td>{data.paidLeave_policyInformation_type}</td>
                            <td>{data.paidLeave_accuralRules_accural}</td>
                            <td>
                              {data.paidLeave_accuralRules_maximumHoursPerYear}
                            </td>
                            <td>
                              {
                                data.paidLeave_accuralRules_maximumCarryOverHours
                              }
                            </td>
                            <td>
                              {data.paidLeave_accuralRules_accuralCommencement}
                            </td>
                            <td>
                              {data.paidLeave_accuralRules_policyEffectiveDate}
                            </td>
                            <td>{data.paidLeave_usageRules_usageMayBegin}</td>
                            <td>
                              {data.paidLeave_usageRules_maximumUsagePerYear}
                            </td>
                            <td>
                              {data.paidLeave_usageRules_maximumHoursWorked}
                            </td>
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
          <Link to="/paidLeave" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/paidLeaveTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default PaidLeaveTable;
