import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  NavLink,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RegistryTable.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrantData } from "../../../features/registrant/registrantSlice";

function RegistryTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegistrantData());
  }, []);

  const {Registrant} = useSelector((state) => state.registrant);
  return (
    <main className="main_registryTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="registrytable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> All Registrants </label>
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
                      <th>SSN</th>
                      <th>Branch</th>
                      <th>Name</th>
                      <th>Contact Information Hourly</th>
                      <th>Contact Information Monthly</th>
                      <th>Disability</th>
                      <th>Birthday</th>
                      <th>Hired</th>
                      <th>Company ID</th>
                      <th>Employee</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Registrant && (<>{Registrant.map((data,i)=>(
                    <tr key={i}>
                      <td>{data.registrant_general_clientsInformation_ssn}</td>
                      <td>{data.registrant_general_clientsInformation_branch}</td>
                      <td>{data.registrant_contact.registrant_contact_payModifiers_name}</td>
                      <td>{data.registrant_preferences.registrant_preferences_contactInformation_hourly}</td>
                      <td>{data.registrant_preferences.registrant_preferences_contactInformation_monthly}</td>
                      <td>{data.registrant_HR.registrant_HR_EEO_disability}</td>
                      <td>{data.registrant_HR.registrant_HR_EEO_birthday}</td>
                      <td>{data.registrant_HR.registrant_HR_EEO_hired}</td>
                      <td>{data.registrant_payroll.registrant_payroll_payrollSystemIDs_companyID}</td>
                      <td>{data.registrant_payroll.registrant_payroll_payrollSystemIDs_employee}</td>
                    </tr>
                  ))}</>)}
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
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/registry">
                <i className="fa-solid fa-square-plus"></i> New
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/registryTable">
                <i className="fa-solid fa-square-plus"></i> Edit View
              </Link>
              <div className="divOne">
                <div className="divOne_">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="listOne">
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit Advanced
                          View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Current View
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Saved View
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <span className="pe-4"></span> All Statuses
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          Active Clients
                        </div>
                        {/* </NavLink>/ */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          InActive Clients
                        </div>
                        {/* </NavLink> */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          Prospect Clients
                        </div>
                        {/* </NavLink> */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                          <span className="pe-4"></span>
                          Export Data
                        </NavLink>
                        <div>
                          <ListGroup as="ul" className="listOne">
                            <ListGroupItem as="li">
                              <NavLink to="#">
                                <i className="fa-solid fa-square-plus pe-1"></i>
                                Module Transactions
                              </NavLink>
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <NavLink to="#">
                                <i className="fa-solid fa-square-plus pe-1"></i>
                                Module Transactions
                              </NavLink>
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <NavLink to="#">
                                <i className="fa-solid fa-square-plus pe-1"></i>
                                Module Transactions
                              </NavLink>
                            </ListGroupItem>
                          </ListGroup>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Module Transactions
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div className="divOne_ listtt">
                  <div className="list  d-flex flex-row">
                    <ListGroup as="ul" className="listTwo">
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit Advanced
                          View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Current View
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Saved View
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="pe-3"></i> All Statuses
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Edit Advance View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Edit Advance View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          jidajsld
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          jjisdha
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Ehsiuhas
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/registryTable">
                <i className="fa-solid fa-square-plus"></i> Current View
              </Link>
              <div className="divOne">
                <div className="divOne_ list-inline">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="listOne">
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Save
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Open
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Reset
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Apply Default
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Save Default
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Close
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="px-1 border-bottom w-100">
                    <p>No View Set</p>
                  </div>
                  <div className="d-flex gap-2 p-1">
                    <div className="d-flex gap-2">
                      <input type="checkbox" />
                      <p>View items</p>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="checkbox" />
                      <p>Custom items (click items to remove)</p>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
          {/* <Nav.Link href="/registry" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}
          {/* <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
          {/* <Nav.Link href="/registryTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default RegistryTable;
