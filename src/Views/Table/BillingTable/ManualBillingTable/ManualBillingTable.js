import React from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ManualBillingTable.css'

function ManualBillingTable() {
    return (
        <main className="main_manualBillingTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="manualBillingTable_feild mx-4  w-100 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div className = "__invoice">
                                <label> All Timecards (Unbilled TimeCards)  </label>
                            </div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>TC</th>
                                            <th>Ord</th>
                                            <th>Branch</th>
                                            <th>Registrant</th>
                                            <th>Disp</th>
                                            <th>Client</th>
                                            <th>Department</th>
                                            <th>Date</th>
                                            <th>Shift/Time</th>
                                            <th>Hrs/Mi</th>
                                            <th>Bill</th>
                                            <th>Inv #</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>

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
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-forward-fast"></i>  Quick Shift Date </Nav.Link>
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-file-chart-pie"></i> Reports </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default ManualBillingTable