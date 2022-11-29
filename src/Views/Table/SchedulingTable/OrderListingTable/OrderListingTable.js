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
  ListGroup,
  NavLink,
  ListGroupItem,
} from "react-bootstrap";
import NavigationTop from "../../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OrderListingTable.css";
import { Link } from "react-router-dom";

function OrderListingTable() {
  return (
    <main className="main_orderListingTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="orderlistingtable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> All Orders </label>
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
                      <th>ID</th>
                      <th>Sts</th>
                      <th>Type</th>
                      <th>Nat</th>
                      <th>Client</th>
                      <th>Department</th>
                      <th>Status</th>
                      <th>Registrant </th>
                      <th>
                        Date <sub>1</sub>
                      </th>
                      <th>Shift/Time</th>
                      <th>Disp</th>
                      <th>Spec</th>
                      <th>Internal Note</th>
                      <th>Q | S</th>
                      <th>Margin</th>
                      <th>Confirm</th>
                      <th>Search</th>
                      <th>Travel</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Check type="checkbox" />
                      </td>
                      <td>283880</td>
                      {/* <td>06/19/2022-06/25/2022</td> */}
                      <td>S</td>
                      <td className="text-uppercase">Travel Contract</td>
                      <td></td>
                      <td className="text-uppercase">
                        Bradford Health Services Madison
                      </td>
                      <td className="text-uppercase">Madison Location</td>
                      <td className="text-uppercase">AL</td>
                      <td className="text-uppercase">Watkins, Toni</td>
                      <td>05/28/22-08/20/22</td>
                      <td>Su,Sa (24)</td>
                      <td className="text-uppercase">LPN</td>
                      <td></td>
                      <td></td>
                      <td>0 | 0</td>
                      <td>33.33</td>
                      <td>Jenkins,Alexandra</td>
                      <td></td>
                      <td>
                        <div className="div__registryTable">
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
                      <td>
                        <div className="div__registryTable">
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
                      <td>283880</td>
                      {/* <td>06/19/2022-06/25/2022</td> */}
                      <td>S</td>
                      <td className="text-uppercase">Travel Contract</td>
                      <td></td>
                      <td className="text-uppercase">
                        Bradford Health Services Madison
                      </td>
                      <td className="text-uppercase">Madison Location</td>
                      <td className="text-uppercase">AL</td>
                      <td className="text-uppercase">Watkins, Toni</td>
                      <td>05/28/22-08/20/22</td>
                      <td>Su,Sa (24)</td>
                      <td className="text-uppercase">LPN</td>
                      <td></td>
                      <td></td>
                      <td>0 | 0</td>
                      <td>33.33</td>
                      <td>Jenkins,Alexandra</td>
                      <td></td>
                      <td>
                        <div className="div__registryTable">
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
                      <td>
                        <div className="div__registryTable">
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
        <Nav className=" my-2 my-lg-0 d-flex align-items-center" navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="">
                <i className="fa-solid fa-square-plus"></i> New
              </Link>
              <div className="divOne">
                <div className="divOne_">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="listOne">
                      <ListGroup.Item as="li">
                        <Link to="/orderListing">
                        <i className="fa-solid fa-square-plus"></i>
                        New Daily Order
                        </Link>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <Link to="/newContact">
                        <i className="fa-solid fa-square-plus"></i>
                          New Contact
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/orderListingTable">
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
              <Link to="/orderListingTable">
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
              <Link to="/orderListingTable">
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
              <Link to="/orderListingTable">
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
          {/* <Nav.Link href="/orderListing" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit View
                    </Nav.Link> */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default OrderListingTable;
