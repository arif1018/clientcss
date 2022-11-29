import React from 'react';
import { Table, Pagination, Navbar, Container, Nav, Form, Row, Col, ListGroup, NavLink } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ratesTable.css'

function RatesTable() {
    return (
        <main className="main_ratesTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="ratestable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> Active Rates </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>ID</th>
                                            <th>Group Type</th>
                                            <th>Template Name</th>
                                            <th>Order ID</th>
                                            <th>Branch: <sub>1</sub> <i className='fa-solid fa-caret-up px-2'></i> </th>
                                            <th>Client <sub>2</sub> <i className='fa-solid fa-caret-up px-2'></i></th>
                                            <th>Department</th>
                                            <th>Disp</th>
                                            <th>Spec</th>
                                            <th>Rate Type</th>
                                            <th>Registrant </th>
                                            <th>Exp (days) <sub>3</sub> <i className='fa-solid fa-caret-up px-2'></i></th>
                                            <th>Cur|30|60|90</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>32612</td>
                                            <td>Daily Rates</td>
                                            <td ></td>
                                            <td></td>
                                            <td className='text-uppercase'>Allied health birmingham</td>
                                            <td className=''>Adam S, Harris,M.D,LLC,</td>
                                            <td></td>
                                            <td className='text-uppercase'>cma</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="div__registryTable">
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="div__registryTable">
                                                    <Form.Select className="div__input__registry">
                                                        <option>Rates</option>
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
                                                        <option>Credential Status <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Contact Information <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Address Information <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Notes <i className="fa-solid fa-angle-right"></i></option>
                                                    </Form.Select>
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>32612</td>
                                            <td>Daily Rates</td>
                                            <td ></td>
                                            <td></td>
                                            <td className='text-uppercase'>Allied health birmingham</td>
                                            <td className=''>Adam S, Harris,M.D,LLC,</td>
                                            <td></td>
                                            <td className='text-uppercase'>cma</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <div className="div__registryTable">
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="div__registryTable">
                                                    <Form.Select className="div__input__registry">
                                                        <option>Rates</option>
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
                                                        <option>Credential Status <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Contact Information <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Address Information <i className="fa-solid fa-angle-right"></i></option>
                                                        <option>Notes <i className="fa-solid fa-angle-right"></i></option>
                                                    </Form.Select>
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
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
                    className=" my-2 my-lg-0 d-flex align-items-center"
                    navbarScroll
                >
                    <Nav.Link href="/rateActive" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit View
                        {/* <ListGroup as='ul' className="listOne">
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Current View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="pe-4"></i> All Statuses</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className='fa-solid fa-square-plus pe-1'></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                        </ListGroup> */}
                    </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-magnifying-glass"></i> Current View
                        {/* <ListGroup as='ul' className="listOne">
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Current View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="pe-4"></i> All Statuses</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className='fa-solid fa-square-plus pe-1'></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                        </ListGroup> */}
                    </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-print"></i> Reports
                        {/* <ListGroup as='ul' className="listOne">
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Current View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="pe-4"></i> All Statuses</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className='fa-solid fa-square-plus pe-1'></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                        </ListGroup> */}
                    </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default RatesTable