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
import "./credentialTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getCredentialsData } from "../../../features/credentials/credentialsSlice";
import { Link } from "react-router-dom";

function CredentialTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCredentialsData());
  }, []);
  const credentialData = useSelector((state) => state.credentials.Credentials);
  return (
    <main className="main_clientTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="clienttable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Credentials </label>
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
                      <th>Type</th>
                      <th>Code Name</th>
                      <th>Code Description</th>
                      <th>Passing Result</th>
                      <th>VN +- Label</th>
                      <th>Discipline</th>
                      <th>Specialities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {credentialData && (
                      <>
                        {credentialData.map((data, i) => (
                          <tr key={i}>
                            <td>
                              {data.credentials_credentialsInformation_type}
                            </td>
                            <td>
                              {data.credentials_credentialsInformation_codeName}
                            </td>
                            <td>
                              {
                                data.credentials_credentialsInformation_codeDescription
                              }
                            </td>
                            <td>
                              {
                                data.credentials_credentialsInformation_passingResult
                              }
                            </td>
                            <td>
                              {data.credentials_credentialsInformation_vnLabel}
                            </td>
                            <td>
                              {
                                data.credentials_credentialsInformation_discipline
                              }
                            </td>
                            <td>
                              {
                                data.credentials_credentialsInformation_specialities
                              }
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
          {/* <Nav.Link href="/credentials" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}
          <Link to="/credentials" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/CredentialTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CredentialTable;
