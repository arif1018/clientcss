import React from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './workHistoryTable.css'

function WorkHistoryTable() {
    return (
        <main className="main_travelQuoteTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="travelquotetable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> Work History </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                    <tr className='bg-light'>
                                            <th>Client <sub>2</sub> <i className='fa-solid fa-caret-up px-2'></i></th>
                                            <th>Nat</th>
                                            <th>Department: <sub>3</sub> <i className='fa-solid fa-caret-up px-2'></i> </th>
                                            <th>Registrant: <sub>1</sub> <i className='fa-solid fa-caret-up px-2'></i> </th>
                                            <th>Disp</th>
                                            <th>Status</th>
                                            <th>First Date</th>
                                            <th>Last Date</th>
                                            <th>Oriented</th> 
                                            <th>Oriented Date</th>
                                            <th>Comments</th> 
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Crownn HC of Greenvile</td>
                                            <td></td>
                                            <td>Coretha Smith</td>
                                            <td>Jenkins,Alexandra</td>
                                            <td>CNA</td>
                                            <td>T</td>
                                            <td>08/05/22</td>
                                            <td>08/05/22</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>
                                            <div className = "div__registryTable">
                                            <Form.Select className="div__input__registry">
                                               <option>Timcards</option>
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
                                            <i className="fa-solid fa-print" style = {{color: 'orange', padding: '3px'}}></i>
                                            <i className="fa-solid fa-message" style = {{color: 'blue' , padding: '3px'}}></i>
                                            <i className="fa-solid fa-address-card" style = {{color: 'green',  padding: '3px' }}></i>
                                            <i className="fa-solid fa-envelope" style = {{color: 'red',  padding: '3px'}}></i>
                                            <i className="fa-solid fa-database" style = {{color: 'purple',  padding: '3px'}}></i>
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
                    <Nav.Link href="/workHistory" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
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

export default WorkHistoryTable