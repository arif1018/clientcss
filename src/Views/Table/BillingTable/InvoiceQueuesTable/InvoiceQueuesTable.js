import React from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './InvoiceQueuesTable.css'

function InvoiceQueuesTable() {
    return (
        <main className="main_invoiceQueuesTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="invoiceQueues_feild mx-4  w-100 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div className = "__invoice">
                                <label> All Jobs </label>
                                <div className='_subInvoice'>
                                <Form.Check type = "checkbox"/>
                                <p  style = {{fontSize: "12px"}}>Auto-Refresh[15]</p>
                                <div className='div_bracket'>
                                <div> <Nav.Link  style = {{fontSize: "12px"}}>[Manual Refresh]</Nav.Link></div>
                                </div>
                                <p style = {{fontSize: "12px"}}>Note: Generated Invoices are Automatically deleted</p>
                                </div>
                            </div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>ID</th>
                                            <th>Status</th>
                                            <th>Created</th>
                                            <th>Type</th>
                                            <th>Invoices</th>
                                            <th>Branch</th>
                                            <th>Request Time</th>
                                            <th>begin Time</th>
                                            <th>Completed Time</th>
                                            <th>Duration</th>
                                            <th>Size</th>
                                            <th>Action</th>
                                           
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
                                            <td><div className="div__registryTable">
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div></td>
                                            
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
                                            <td><div className="div__registryTable">
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
                                                </div></td>
                                          
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
                                            <td>
                                            <div className="div__registryTable">
                                                    <i className="fa-solid fa-print" style={{ color: 'orange', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-message" style={{ color: 'blue', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-address-card" style={{ color: 'green', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-envelope" style={{ color: 'red', padding: '3px' }}></i>
                                                    <i className="fa-solid fa-database" style={{ color: 'purple', padding: '3px' }}></i>
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
                    <Nav.Link href="/invoiceQueues" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default InvoiceQueuesTable