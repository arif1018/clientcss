import React from 'react';
import { Table, Pagination, Navbar, Container, Nav, Form, ListGroup, NavLink } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './InTouchTable.css'

function InTouchTable() {
    return (
        <main className="main_inTouchTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="inTouchTable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> All Intouch </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>ID</th>
                                            <th>Sts</th>
                                            <th>Subject</th>
                                            <th>Type</th>
                                            <th>Client</th>
                                            <th>Department</th>
                                            <th>Registrants</th>
                                            <th>Assigned</th>
                                            <th>By</th>
                                            <th>Created</th>
                                            <th>Due</th>
                                            <th>Last</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>4306298</td>
                                            <td>Pending</td>
                                            <td>Onboarding</td>
                                            <td>Credentialing</td>
                                            <td></td>
                                            <td></td>
                                            <td>Felton, Janisia</td>
                                            <td>Taylor</td>
                                            <td>08/29/22 9:19A</td>
                                            <td>08/31/22 12A</td>
                                            <td>08/29/22 9:22A</td>
                                            <td>Cashonna Copeland</td>
                                            <td><div className='main_intouch'><Form.Select className='intouch_div'>
                                                <option>Notes</option>
                                                <option></option>
                                                <option></option>
                                            </Form.Select>
                                                <i className="fa-solid fa-database"></i>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>4306298</td>
                                            <td>Pending</td>
                                            <td>Onboarding</td>
                                            <td>Credentialing</td>
                                            <td></td>
                                            <td></td>
                                            <td>Felton, Janisia</td>
                                            <td>Taylor</td>
                                            <td>08/29/22 9:19A</td>
                                            <td>08/31/22 12A</td>
                                            <td>08/29/22 9:22A</td>
                                            <td>Cashonna Copeland</td>
                                            <td><div className='main_intouch'><Form.Select className='intouch_div'>
                                                <option>Notes</option>
                                                <option></option>
                                                <option></option>
                                            </Form.Select>
                                                <i className="fa-solid fa-database"></i>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>4306298</td>
                                            <td>Pending</td>
                                            <td>Onboarding</td>
                                            <td>Credentialing</td>
                                            <td></td>
                                            <td></td>
                                            <td>Felton, Janisia</td>
                                            <td>Taylor</td>
                                            <td>08/29/22 9:19A</td>
                                            <td>08/31/22 12A</td>
                                            <td>08/29/22 9:22A</td>
                                            <td>Cashonna Copeland</td>
                                            <td><div className='main_intouch'><Form.Select className='intouch_div'>
                                                <option>Notes</option>
                                                <option></option>
                                                <option></option>
                                            </Form.Select>
                                                <i className="fa-solid fa-database"></i>
                                                <i className="fa-solid fa-check"></i>
                                            </div>
                                            </td>
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
                    <Nav.Link href="/inTouch" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit View
                        {/* <ListGroup as='ul' className="listOne">
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i>Edit Advanced View</NavLink> </ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i> <div className='div_current'> Current View <i className="fa-solid fa-arrow-right"></i>  </div> </NavLink></ListGroup.Item>
                            <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View <i className="fa-solid fa-arrow-right ar"></i></NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="pe-4"></i> All Statuses</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className='fa-solid fa-square-plus pe-1'></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                        </ListGroup> */}
                    </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-binoculars"></i> Current View
                        {/* <ListGroup as='ul' className="listOne">
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i>Edit Advanced View</NavLink> </ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i> <div className='div_current'> Current View <i className="fa-solid fa-arrow-right"></i>  </div> </NavLink></ListGroup.Item>
                            <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View <i className="fa-solid fa-arrow-right ar"></i></NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="pe-4"></i> All Statuses</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className='fa-solid fa-square-plus pe-1'></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                            <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-square-plus pe-1"></i> Edit Advance View</NavLink></ListGroup.Item>
                        </ListGroup> */}
                        {/* <div className="divOne">
                            <div className="divOne_ ">
                                <div className='list d-flex flex-row'>
                                    <ListGroup as='ul'>
                                        <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i>Edit Advanced View</NavLink> </ListGroup.Item>
                                        <ListGroup.Item as='li'><NavLink to="#"><i className="fa-solid fa-pencil"></i> <div className='div_current'> Current View <i className="fa-solid fa-arrow-right"></i>  </div> </NavLink></ListGroup.Item>
                                        <ListGroup.Item as='li' className='border-bottom'><NavLink to=""><i className="fa-solid fa-square-plus pe-1"></i> Saved View <i className="fa-solid fa-arrow-right ar"></i></NavLink></ListGroup.Item>
                                        </ListGroup>
                                </div>

                                <div>
                                    <h1>hello</h1>
                                </div>
                                <div>
                                    <h1>hello</h1>
                                </div>
                            </div>
                        </div> */}
                    </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-file-chart-pie"></i> Reports</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default InTouchTable