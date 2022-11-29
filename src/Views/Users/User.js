import React, { useEffect, useState } from "react";
import { Form, Alert, Row, Col, Container, Navbar, Nav } from "react-bootstrap";
import NavigationTop from "../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./user.css";
// import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserDetailData, saveUserDetailData } from "../../features/userDetail/userDetailSlice";
import { Link, useNavigate } from "react-router-dom";

function User() {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({
    userDetail_userAccountInformation_userName: "",
    userDetail_userAccountInformation_userLogin: "",
    userDetail_userAccountInformation_email: "",
    userDetail_userAccountInformation_mainPhone: "",
    userDetail_userAccountInformation_mobillePhone: "",
    userDetail_userAccountInformation_password: "",
    userDetail_userAccountInformation_retypepassword: "",
    userDetail_userAccountInformation_userStatus: "",
    userDetail_userAccountInformation_userType: "",
    userDetail_userAccountInformation_securityGroup: "",
    userDetail_userAccountInformation_systemAccess: "",
    userDetail_homeBranch_check: "",
    userDetail_regionBranchLockSelection_securityGroup: "",
    userDetail_regionBranchLockSelection_regions: "",
    userDetail_regionBranchLockSelection_branches: "",
    userDetail_timeZoneInformation_timeZone: "",
    userDetail_timeZoneInformation_DST: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  useEffect(() => {
    dispatch(saveUserDetailData(userDetail));
  }, [dispatch, userDetail]);

  return (
    <main className="main_user">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="w-75 m-auto">
          <Alert className="text-center m-0 alertt">User Details</Alert>
          <Container fluid className="user_form">
            <Row>
              <Col lg={6}>
                <Form className="user_form2">
                  <div className="tab_form override">
                    <Form.Group
                      className=" tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        User Account Information
                      </Form.Label>
                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Name:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_userName"
                            value={
                              userDetail.userDetail_userAccountInformation_userName
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Login:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_userLogin"
                            value={
                              userDetail.userDetail_userAccountInformation_userLogin
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Email:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="email"
                            className="w-75"
                            name="userDetail_userAccountInformation_email"
                            value={
                              userDetail.userDetail_userAccountInformation_email
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Main Phone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_mainPhone"
                            value={
                              userDetail.userDetail_userAccountInformation_mainPhone
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Mobille Phone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="text"
                            className="w-75"
                            name="userDetail_userAccountInformation_mobillePhone"
                            value={
                              userDetail.userDetail_userAccountInformation_mobillePhone
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Password:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="password"
                            className="w-75"
                            name="userDetail_userAccountInformation_password"
                            value={
                              userDetail.userDetail_userAccountInformation_password
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Retype Password:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Control
                            type="password"
                            className="w-75"
                            name="userDetail_userAccountInformation_retypepassword"
                            value={
                              userDetail.userDetail_userAccountInformation_retypepassword
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Status:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-25"
                            name="userDetail_userAccountInformation_userStatus"
                            value={
                              userDetail.userDetail_userAccountInformation_userStatus
                            }
                            onChange={handleChange}
                          >
                            <option>Active</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>User Type:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 mb-2">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_userAccountInformation_userType"
                            value={
                              userDetail.userDetail_userAccountInformation_userType
                            }
                            onChange={handleChange}
                          >
                            <option>Biller, Collector</option>
                            <option>Biller</option>
                            <option>Collector</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override my-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">Security</Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Security Group:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_userAccountInformation_securityGroup"
                            value={
                              userDetail.userDetail_userAccountInformation_securityGroup
                            }
                            onChange={handleChange}
                          >
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>System Access:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_userAccountInformation_systemAccess"
                            value={
                              userDetail.userDetail_userAccountInformation_systemAccess
                            }
                            onChange={handleChange}
                          >
                            <option>Staffing, Accounting</option>
                            <option>Staffing</option>
                            <option>Accounting</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>

              <Col lg={6}>
                <Form className="user_form2">
                  <div className="tab_form override">
                    <Form.Group className="tab_form_" controlId="formBasicText">
                      <Form.Label className="m-0 pb-1">Home Branch</Form.Label>

                      <div className="inner_">
                        <div className="py-2 px-2 w-100">
                          <Form.Select
                            className="w-75"
                            name="userDetail_homeBranch_check"
                            value={userDetail.userDetail_homeBranch_check}
                            onChange={handleChange}
                          >
                            <option></option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override my-0">
                    <Form.Group
                      className="mb-3 tab_form_"
                      controlId="formBasicText"
                    >
                      <Form.Label className="m-0 pb-1">
                        Region/Branch Lock Selection
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label className="d-none">
                            Security Group:
                          </Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            className="d-flex align-items-center w-100 ps-0"
                            type="checkbox"
                            label="All Regions And Branches "
                            name="userDetail_regionBranchLockSelection_securityGroup"
                            value={
                              userDetail.userDetail_regionBranchLockSelection_securityGroup
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Regions:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_regionBranchLockSelection_regions"
                            value={
                              userDetail.userDetail_regionBranchLockSelection_regions
                            }
                            onChange={handleChange}
                          >
                            <option>BIRMINGhAM, HUSTVILLE, MOBILE</option>
                            <option>BIRMINGhAM</option>
                            <option>HUSTVILLE</option>
                            <option>MOBILE</option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>Branches:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-100 align-items-start"
                            style={{ height: "40px" }}
                            name="userDetail_regionBranchLockSelection_branches"
                            value={
                              userDetail.userDetail_regionBranchLockSelection_branches
                            }
                            onChange={handleChange}
                          >
                            <option>Staffing, Accounting</option>
                            <option>Staffing</option>
                            <option>Accounting</option>
                          </Form.Select>
                        </div>
                      </div>
                    </Form.Group>
                  </div>

                  <div className="tab_form override my-0">
                    <Form.Group className="tab_form_" controlId="formBasicText">
                      <Form.Label className="m-0 pb-1">
                        Time Zone Information
                      </Form.Label>

                      <div className="inner_ d-flex">
                        <div className="right w-25">
                          <Form.Label>TimeZone:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75">
                          <Form.Select
                            className="w-75"
                            name="userDetail_timeZoneInformation_timeZone"
                            value={
                              userDetail.userDetail_regionBranchLockSelection_branches
                            }
                            onChange={handleChange}
                          >
                            <option>
                              (GmT -6:00 hours) Central Time (US & Canada),
                              Mexico City
                            </option>
                          </Form.Select>
                        </div>
                      </div>

                      <div className="inner_ d-flex ">
                        <div className="right w-25">
                          <Form.Label>DST:</Form.Label>
                        </div>
                        <div className="py-1 px-2 left w-75 overtime">
                          <Form.Check
                            className="d-flex align-items-center w-100 ps-0"
                            type="checkbox"
                            label="Automatically adjust time for Daylight Saving changes"
                            name="userDetail_timeZoneInformation_DST"
                            value={
                              userDetail.userDetail_timeZoneInformation_DST
                            }
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </main>
  );
}

function Navv() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const finalDataUserDetail = useSelector((state)=> state.userDetail.UserDetailTemp)

    const finalSave = (e) => {
      e.preventDefault();
      dispatch(addUserDetailData(finalDataUserDetail));
      navigate('/userProfileTable')
        // if(finalDataUserDetail === null ){
        //   dispatch(addUserDetailData(finalDataUserDetail));
        //   navigate('/userProfileTable')
        // // }else if(finalDataUserDetail != null ){
        // //   dispatch(addUserDetailData(finalDataUserDetail));
        // //   navigate('/userProfileTable')
        // }
        // else{
        //   alert('fill the form')
        // }
    }
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>


          <Nav.Link onClick={finalSave} className="py-1 px-3">
            <i className="fa-solid fa-floppy-disk"></i> Save
          </Nav.Link>
          <Link to="/userProfileTable" className="py-1 px-3">
            <i className="fa-solid fa-xmark"></i> cancel
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default User;
