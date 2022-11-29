import React from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TravelQuoteTable.css";
import { ListGroupItem } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function TravelQuoteTable() {
  return (
    <main className="main_travelQuoteTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="travelquotetable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Travel Quotes </label>
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
                      <th></th>
                      <th>Quotes</th>
                      <th>QSts</th>
                      <th>Lst Sts Dt</th>
                      <th>
                        Order <sub>2</sub>{" "}
                      </th>
                      <th>OSts</th>
                      <th>Nat</th>
                      <th>Client</th>
                      <th>Department</th>
                      <th>
                        Registrant <sub>3</sub>
                      </th>
                      <th>
                        Dates <sub>1</sub>
                      </th>
                      <th>Manager</th>
                      <th>Recruiter</th>
                      <th>Disp</th>
                      <th>Spec</th>
                      <th>Note</th>
                      <th>Cr</th>
                      <th>EC</th>
                      <th>ER</th>
                      <th>Prof</th>
                      <th>Margin</th>
                      <th>Viewed</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>311</td>
                      {/* <td>06/19/2022-06/25/2022</td> */}
                      <td>0 (1)</td>
                      <td>08/05/22</td>
                      <td>301990</td>
                      <td>S</td>
                      <td></td>
                      <td>Crownn HC of Greenvile</td>
                      <td>Greenvile</td>
                      <td>Jenkins,Alexandra</td>
                      <td>08/14/22-09/10/22</td>
                      <td>Coretha Smith</td>
                      <td>Shameka Carter</td>
                      <td>CNA</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>37.50</td>
                      <td></td>
                      <td>
                        <div className="div__registryTable">
                          <Form.Select className="div__input__registry">
                            <option>Attachments</option>
                            <option>Availability</option>
                            <option>Contratc Quotes</option>
                            <option>Credential Documents</option>
                            <option>Credentials</option>
                            <option>Do Not Schedule</option>
                            <option>Online Access</option>
                            <option>Paid Leave Policies</option>
                            <option>Pay Adjustment Accruals</option>
                            <option>Pay Adjustment Trans</option>
                            <option>Pay Adjustments</option>
                            <option>Skills</option>
                            <option>Rates</option>
                            <option>Specialitites</option>
                            <option>Work</option>
                            <hr />
                            <option>
                              Credential Status{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Contact Information{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Address Information{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Notes <i className="fa-solid fa-angle-right"></i>
                            </option>
                          </Form.Select>
                          <i
                            className="fa-solid fa-print"
                            style={{ color: "orange", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-message"
                            style={{ color: "blue", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-address-card"
                            style={{ color: "green", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-envelope"
                            style={{ color: "red", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-database"
                            style={{ color: "purple", padding: "3px" }}
                          ></i>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>311</td>
                      {/* <td>06/19/2022-06/25/2022</td> */}
                      <td>0 (1)</td>
                      <td>08/05/22</td>
                      <td>301990</td>
                      <td>S</td>
                      <td></td>
                      <td>Crownn HC of Greenvile</td>
                      <td>Greenvile</td>
                      <td>Jenkins,Alexandra</td>
                      <td>08/14/22-09/10/22</td>
                      <td>Coretha Smith</td>
                      <td>Shameka Carter</td>
                      <td>CNA</td>
                      <td></td>
                      <td></td>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>37.50</td>
                      <td></td>
                      <td>
                        <div className="div__registryTable">
                          <Form.Select className="div__input__registry">
                            <option>Attachments</option>
                            <option>Availability</option>
                            <option>Contratc Quotes</option>
                            <option>Credential Documents</option>
                            <option>Credentials</option>
                            <option>Do Not Schedule</option>
                            <option>Online Access</option>
                            <option>Paid Leave Policies</option>
                            <option>Pay Adjustment Accruals</option>
                            <option>Pay Adjustment Trans</option>
                            <option>Pay Adjustments</option>
                            <option>Skills</option>
                            <option>Rates</option>
                            <option>Specialitites</option>
                            <option>Work</option>
                            <hr />
                            <option>
                              Credential Status{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Contact Information{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Address Information{" "}
                              <i className="fa-solid fa-angle-right"></i>
                            </option>
                            <option>
                              Notes <i className="fa-solid fa-angle-right"></i>
                            </option>
                          </Form.Select>
                          <i
                            className="fa-solid fa-print"
                            style={{ color: "orange", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-message"
                            style={{ color: "blue", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-address-card"
                            style={{ color: "green", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-envelope"
                            style={{ color: "red", padding: "3px" }}
                          ></i>
                          <i
                            className="fa-solid fa-database"
                            style={{ color: "purple", padding: "3px" }}
                          ></i>
                        </div>
                      </td>
                    </tr>
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
              <Link to="/travelQuoteTable">
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
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/travelQuoteTable">
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
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/travelQuoteTable">
                <i className="fa-solid fa-square-plus"></i> Email
              </Link>
              <div className="divOne ">
                <div className="divOne_">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="w-100">
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="#">All CLients in Current View</NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-0">
                        <NavLink to="#">Only Selected CLients</NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  {/* <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>
                  <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>   */}
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/travelQuoteTable">
                <i className="fa-solid fa-square-plus"></i> Reports
              </Link>
              <div className="divOne ">
                <div className="divOne_ hello">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="w-100">
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-plus"></i>
                            <NavLink to="#">New</NavLink>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>

                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  {/* <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>
                  <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>   */}
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TravelQuoteTable;
