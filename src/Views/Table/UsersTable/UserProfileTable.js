import React, { useEffect } from "react";
import { Table, Pagination, Navbar, Container, Nav } from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./userProfileTable.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getfuncUserDetailData } from "../../../features/userDetail/userDetailSlice";

function UserProfileTable() {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getfuncUserDetailData());
  }, []);
  
  const userProfileData = useSelector((state) => state.userDetail.UserDetail);

  return (
    <main className="main_userProfileTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="userProfileTable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> User Profile </label>
              </div>
              <div>
                <AdvancedExample />
              </div>
            </div>
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    {/* <tr className="bg-light"> */}
                    <tr>
                      <th>User Name</th>
                      <th>User Login</th>
                      <th>Email</th>
                      <th>Main Phone</th>
                      <th>Mobille Phone</th>
                      <th>User Status</th>
                      <th>User Type</th>
                      <th>Security Group</th>
                      <th>System Access</th>
                      <th>Regions</th>
                      <th>Branches</th>
                      <th>TimeZone</th>
                      <th>DST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userProfileData && (
                      <>
                        {userProfileData.map((data, i) => (
                          <tr key={i}>
                            <td>
                              {data.userDetail_userAccountInformation_userName}
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_userLogin}
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_email}
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_mainPhone}
                            </td>
                            <td>
                              {
                                data.userDetail_userAccountInformation_mobillePhone
                              }
                            </td>
                            <td>
                              {
                                data.userDetail_userAccountInformation_userStatus
                              }
                            </td>
                            <td>
                              {data.userDetail_userAccountInformation_userType}
                            </td>
                            <td>
                              {
                                data.userDetail_regionBranchLockSelection_securityGroup
                              }
                            </td>
                            <td>
                              {
                                data.userDetail_userAccountInformation_systemAccess
                              }
                            </td>
                            {/* <td>{data.userDetail_homeBranch_check}</td> */}
                            
                            <td>
                              {
                                data.userDetail_regionBranchLockSelection_regions
                              }
                            </td>
                            <td>
                              {
                                data.userDetail_regionBranchLockSelection_branches
                              }
                            </td>
                            <td>
                              {data.userDetail_timeZoneInformation_timeZone}
                            </td>
                            <td>{data.userDetail_timeZoneInformation_DST}</td>
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
  //   const navigate = useNavigate;
  //   const pathChange = () => {
  //     e.preventDefault();
  //     navigate("/user");
  //   };
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          {/* <Nav.Link onClick={pathChange} href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}

          <Link to="/user" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New
          </Link>
          <Link to="/userProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default UserProfileTable;
