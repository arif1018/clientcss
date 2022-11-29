import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SkillDetailsTable.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSkillDetailData } from "../../../features/skillDetail/skillDetailSlice";

function SkillDetailsTable() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getSkillDetailData());
  }, []);

  
  const skillDetailsData = useSelector(
    (state) => state.skillDetail.SkillDetail
  );
  return (
    <main className="main_skillDetailsTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="skillDetailstable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Skill Details </label>
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
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {skillDetailsData && (
                      <>
                        {skillDetailsData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.skillDetail_skillInformation_name}</td>
                            <td>
                              {data.skillDetail_skillInformation_description}
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
          <Link to="/skillDetails" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/skillDetailsTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SkillDetailsTable;
