import React, { useEffect, useRef } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  ListGroup,
  ListGroupItem,
  Dropdown,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClientTable.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteClient, getAllClients } from "../../../features/clients/clientSlice";
import { NavLink } from "react-router-dom";
import {
  Modall,
  Modall1,
  Modall2,
  Modall3,
  Modall4,
} from "../../../Containers/Modal/Modal/Modal";
import ModallIcon from "../../../Containers/Modal/ModalIcon/ModalIcon";
// import { useReactToPrint } from "react-to-print";

function UserProfileTable() {
  const navigate = useNavigate();
  const disptach = useDispatch();
  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content:()=> componentRef.current,
  //   documentTitle:"Client Table"
  // })
  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const { clients } = useSelector((state) => state.client);

  useEffect(() => {
    disptach(getAllClients());
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      if (Object.keys(user)[0] === "success") {
        navigate("/clientTable");
      }
    } else {
      navigate("/");
      toast.error("Invailid Credentials");
    }
  }, [user, isError, isSuccess, message, navigate, disptach]);

  const forDelete = (clientID)=>{
    navigate("/clients/"+clientID)
  }
  return (
    <main className="main_clientTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="clienttable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> All Clients </label>
                {/* <button
                  onClick={handlePrint}
                  style={{
                    borderRadius: "15px",
                    marginLeft: "10px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "5px",
                    fontSize: "10px",
                  }}
                >
                  Export to PDF
                </button> */}
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
                      <th>NAT</th>
                      <th>Status</th>
                      <th>Branch</th>
                      <th>Client #</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Billing Group</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Account Manager</th>
                      <th>Payor</th>
                      <th>Balance</th>
                      <th>Open Credit</th>
                      <th>Rating</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clients && (
                      <>
                        {clients.map((client) => (
                          // <tr
                          //   onClick={() => {
                          //     navigate("/clients/" + client._id);
                          //   }}
                          //   style={{ cursor: "pointer" }}
                          // >
                          <tr
                          // onClick={() => {
                          //   navigate("/clients/" + client._id);
                          // }}
                          // style={{ cursor: "pointer" }}
                          >
                            <td>
                              <Form.Check
                                type="checkbox"
                                style={{ opacity: 0.4 }}
                              />
                            </td>
                            <td>{client._id}</td>
                            <td>-</td>
                            <td>Active</td>
                            <td>{client.client_general_branch}</td>
                            <td>-</td>
                            <td>{client.client_general_name}</td>
                            <td>{client.client_general_type}</td>
                            <td>{client.client_general_group}</td>
                            <td>
                              {client.client_address.map((data) => (
                                <>{data.client_adresses_physical_city}</>
                              ))}
                            </td>
                            <td>-</td>
                            <td>{client.client_general_accountManager}</td>
                            <td>{client.client_address && client.client_address.map((item)=>(item.client_adresses_physical_address1))}</td>
                            <td>{client.client_billing && client.client_billing.map((item)=>(item.client_biling_billBy))}</td>
                            <td>{client.client_invoicing && client.client_invoicing.map((item)=>(item.client_invoicing_invoiceProfile))}</td>
                            <td>{client.client_general_rating}</td>
                            <td>
                              <div className="div__registryTable">
                                {/* <Form.Select className="div__input__registry  me-2  border">
                                  <option>Modules</option>
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
                                    Notes{" "}
                                    <i className="fa-solid fa-angle-right"></i>
                                  </option>
                                </Form.Select> */}
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="white"
                                    id="dropdown-basic"
                                    className=" py-0"
                                  >
                                    Modules
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="p-0">
                                    <div className="d-flex dropdownmenuu ">
                                      <div className="">
                                        <Dropdown.Item href="#/action-1">
                                          Client Contacts
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                          Address Information
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          CLient Note
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Instructions
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Balance/Credit
                                        </Dropdown.Item>
                                      </div>
                                      <div className="bg-light">
                                        <Dropdown.Item href="#/action-1">
                                          Attachment
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                          Client Calendar
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Client Credential
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Contacts
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Department
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Do Not Schedule
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Invoice Attachment
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Purshase Orders
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Rates
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Work History
                                        </Dropdown.Item>
                                      </div>
                                    </div>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <Link to="/intouchTable">
                                  <i
                                    className="fa-solid fa-address-card"
                                    style={{ color: "green", padding: "3px" }}
                                  ></i>
                                </Link>
                                <i
                                  className="fa-solid fa-envelope"
                                  style={{
                                    color: "red",
                                    padding: "3px",
                                    cursor: "pointer",
                                  }}
                                ></i>
                                {/* <i
                                  className="fa-solid fa-database"
                                  style={{ color: "purple", padding: "3px" }}
                                ></i> */}
                                <ModallIcon />
                              </div>
                            </td>
                            <td onClick={()=>{
                              disptach(deleteClient(client._id))
                              // window.location.reload()
                              disptach(getAllClients())
                              }}>Delete</td>
                              <td onClick={()=>{
                                navigate(`/clients/${client._id}`)
                              // disptach(deleteClient(client._id))
                              // // window.location.reload()
                              // disptach(getAllClients())
                              }}>Edit</td>
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
        <Nav className=" my-2 my-lg-0">
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clients">
                <i className="fa-solid fa-square-plus"></i> New
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
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
                          <span className="pe-4"></span>
                          Export Data
                        </NavLink>
                        <div>
                          <ListGroup as="ul" className="listOne ">
                            <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "whithout schema",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <div>
                                {/* <NavLink to="/clientTable"> */}
                                <i className="fa-solid fa-square-plus pe-3"></i>
                                XML Language
                                {/* </NavLink> */}
                              </div>
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "PDF",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "CSV Clients (Comma Separated Values)",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "CSV Client Contacts (Comma Separated Values)",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem>
                            {/* <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "CSV Client Contacts (Comma Separated Values)",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem> */}
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
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
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
              <Link to="/clientTable">
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
              <Link to="/clientTable">
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

export default UserProfileTable;
