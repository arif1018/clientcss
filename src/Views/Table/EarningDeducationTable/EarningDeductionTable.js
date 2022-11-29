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
import "./earningDeductionTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getEarningDeductionData } from "../../../features/earningDeduction/earningDeductionSlice";
import { Link } from "react-router-dom";

function EarningDeducationTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEarningDeductionData());
  }, []);

  const deductiondata = useSelector((state) => state.earningData.earningDatas);
  return (
    <main className="main_vendorTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="vendortable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Earning / Deduction Codes</label>
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
                      <th>Enabled</th>
                      <th>For Travel Contracts</th>
                      <th>Name</th>
                      <th>Desc</th>
                      <th>Type</th>
                      <th>Deduction Type</th>
                      <th>Benefit Type</th>
                      <th>W2 12 Box Code</th>
                      <th>Include With Paid Leave</th>
                      <th>Required</th>
                      <th>Billing Revenue With GL Account</th>
                      <th>Calculation Method</th>
                      <th>Calculation Method 1</th>
                      <th>Positive Or Negative</th>
                      <th>Positive Or Negative 1</th>
                      <th>Frequency</th>
                      <th>Frequency 1</th>
                      <th>Adjustment</th>
                      <th>Adjustment 1</th>
                      <th>Editable</th>
                      <th>Editable 1</th>
                      <th>Maximum Hours</th>
                      <th>Maximum Hours 1</th>
                      <th>All Regions and Branches</th>
                      <th>Regions</th>
                      <th>Branches</th>
                      <th>Hours Based</th>
                      <th>Referral 1</th>
                      <th>Hours Required</th>
                      <th>Referral 2</th>
                      <th>Empty</th>
                      <th>Referral 3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {deductiondata && (
                      <>
                        {deductiondata.map((data, i) => (
                          <tr key={i}>
                            <td>{data.earning_deduction_enabled}</td>
                            <td>
                              {data.earning_deduction_for_travel_contracts}
                            </td>
                            <td>{data.earning_deduction_name}</td>
                            <td>{data.earning_deduction_desc}</td>
                            <td>{data.earning_deduction_type}</td>
                            <td>{data.earning_deduction_deduction_type}</td>
                            <td>{data.earning_deduction_benefit_type}</td>
                            <td>{data.earning_deduction_w2_box_12_code}</td>
                            <td>
                              {data.earning_deduction_include_with_paid_leave}
                            </td>
                            <td>{data.earning_deduction_required}</td>
                            <td>
                              {
                                data.earning_deduction_billing_revenue_gl_account
                              }
                            </td>
                            <td>{data.earning_deduction_calculation_method}</td>
                            <td>
                              {data.earning_deduction_calculation_method1}
                            </td>
                            <td>
                              {data.earning_deduction_positive_or_negative}
                            </td>
                            <td>
                              {data.earning_deduction_positive_or_negative1}
                            </td>
                            <td>{data.earning_deduction_frequency}</td>
                            <td>{data.earning_deduction_frequency1}</td>
                            <td>{data.earning_deduction_adjustment}</td>
                            <td>{data.earning_deduction_adjustment1}</td>
                            <td>{data.earning_deduction_editable}</td>
                            <td>{data.earning_deduction_editable1}</td>
                            <td>{data.earning_deduction_maximum_hours}</td>
                            <td>{data.earning_deduction_maximum_hours1}</td>
                            <td>
                              {data.earning_deduction_all_regions_and_branches}
                            </td>
                            <td>{data.earning_deduction_regions}</td>
                            <td>{data.earning_deduction_branches}</td>
                            <td>{data.earning_deduction_hours_based}</td>
                            <td>{data.earning_deduction_referral1}</td>
                            <td>{data.earning_deduction_hours_required}</td>
                            <td>{data.earning_deduction_referral2}</td>
                            <td>{data.earning_deduction_empty}</td>
                            <td>{data.earning_deduction_referral3}</td>
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
          <Link to="/earningDeduction" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/earningDeductionTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default EarningDeducationTable;
