import React from "react";
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './employeeTable.css'

function EmployeeTable() {
    return (
        <main className="main_employeeTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="employeetable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> All Employees </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Form.Check type="checkbox" /></td>
                                            <td>817</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td></td>
                                            <td>Inactive</td>
                                            <td>REDSTONE</td>
                                            <td>0000791</td>
                                            <td>(SUE) ILAVERE PARKERT</td>
                                            <td>Private Duty</td>
                                            <td></td>
                                            <td>Huntsville</td>
                                            <td>AL</td>
                                            <td>Cashonna Copeland</td>
                                            <td></td>
                                            <td>1,155.30</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><Form.Check type="checkbox" /></td>
                                            <td>817</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td></td>
                                            <td>Inactive</td>
                                            <td>REDSTONE</td>
                                            <td>0000791</td>
                                            <td>(SUE) ILAVERE PARKERT</td>
                                            <td>Private Duty</td>
                                            <td></td>
                                            <td>Huntsville</td>
                                            <td>AL</td>
                                            <td>Cashonna Copeland</td>
                                            <td></td>
                                            <td>1,155.30</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>

                                        <tr>
                                            <td><Form.Check type="checkbox" /></td>
                                            <td>817</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td></td>
                                            <td>Inactive</td>
                                            <td>REDSTONE</td>
                                            <td>0000791</td>
                                            <td>(SUE) ILAVERE PARKERT</td>
                                            <td>Private Duty</td>
                                            <td></td>
                                            <td>Huntsville</td>
                                            <td>AL</td>
                                            <td>Cashonna Copeland</td>
                                            <td></td>
                                            <td>1,155.30</td>
                                            <td>0.00</td>
                                            <td></td>
                                        </tr>

                                    </tbody >

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
            <Pagination.Item >{4}</Pagination.Item>
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
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    <Nav.Link href="/employee" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}


export default EmployeeTable;
