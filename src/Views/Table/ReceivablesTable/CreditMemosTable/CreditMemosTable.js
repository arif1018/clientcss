import React from 'react';
import { Table, Pagination, Navbar, Container, Nav, Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './creditMemosTable.css'

function CreditMemosTable() {
    return (
        <main className="main_travelQuoteTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="travelquotetable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> Credit Memos </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                    <tr className='bg-light'>
                                            <th>ID</th>
                                            <th>FederalID</th>
                                            <th>Account Source</th>
                                            <th>Account #</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                            <th>Inv #</th>
                                            <th>Inv Date</th>
                                            <th>Client</th>
                                            <th>Dept</th>
                                            <th>DocID</th>
                                            <th>LockBox</th>
                                            <th>Post Dt</th>
                                            <th>Tran Dt</th>
                                            <th>Tran #</th>
                                            <th className='text-end'>DR</th>
                                            <th className='text-end'>CR</th>
                                            <th>M|Q|Y</th>
                                            <th>Export ID</th>
                                            {/* <th>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2271342</td>
                                            <td>22-343271342</td>
                                            <td></td>
                                            <td></td>
                                            <td>PC</td>
                                            <td>Flat Dollar Amount</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>2271342</td>
                                            <td></td>
                                            <td>08/05/22</td>
                                            <td>08/05/22</td>
                                            <td>22713</td>
                                            <td className='text-end'>658.20</td>
                                            <td className='text-end'>0.00</td>                                            
                                            <td>08|05|22</td>
                                            <td></td>
                                            {/* <td>
                                                <div >
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>2271342</td>
                                            <td>22-343271342</td>
                                            <td></td>
                                            <td></td>
                                            <td>PC</td>
                                            <td>Flat Dollar Amount</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>2271342</td>
                                            <td></td>
                                            <td>08/05/22</td>
                                            <td>08/05/22</td>
                                            <td>22713</td>
                                            <td className='text-end'>658.20</td>
                                            <td className='text-end'>0.00</td>                                            
                                            <td>08|05|22</td>
                                            <td></td>
                                            {/* <td>
                                                <div >
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div>
                                            </td> */}
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
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
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
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-print"></i> Quick Data Range
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

export default CreditMemosTable