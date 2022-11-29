import React from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CloseAgencyPeriodTable.css'

function CloseAgencyPeriodTable() {
    return (
        <main className="main_closeAgencyTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="closeAgencyTable_feild mx-4  w-100 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div className = "__invoice">
                                <label> Close Week (09/04/2022 - 09/10/2022)  </label>
                            </div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>Branch #</th>
                                            <th>Branch Name</th>
                                            <th>Pending Billing</th>
                                            <th>Pending Payroll Export</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>TRAVEL</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Open</td>
                                        </tr>

                                        <tr>
                                            <td>001</td>
                                            <td>TRAVEL</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Open</td>
                                        </tr>

                                        <tr>
                                            <td>001</td>
                                            <td>TRAVEL</td>
                                            {/* <td>06/19/2022-06/25/2022</td> */}
                                            <td>0</td>
                                            <td>0</td>
                                            <td>Open</td>
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
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  Edit View </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Current View </Nav.Link>
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-x"></i>  Close Week  </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default CloseAgencyPeriodTable