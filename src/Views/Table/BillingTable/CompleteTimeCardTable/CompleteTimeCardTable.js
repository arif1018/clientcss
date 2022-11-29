import React from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompleteTimeCardTable.css'

function CompleteTimeCardTable() {
    return (
        <main className="main_completedTimeCardsTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="completedTimeCards_feild mx-4  w-100 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div className = "__invoice">
                                <label> Completed TimeCards </label>
                            </div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>X</th>
                                            <th>TC</th>
                                            <th>TSV</th>
                                            <th>TS Status</th>
                                            <th>Ord</th>
                                            <th>Disp</th>
                                            <th>Client</th>
                                            <th>Department</th>
                                            <th>Registrant</th>
                                            <th>Date</th>
                                            <th>Shift/Time</th>
                                            <th>Check</th>
                                            <th>Chk DT</th>
                                            <th>Pay</th>
                                            <th>Inv #</th>
                                            <th>Inv Date</th>
                                            <th>Bill</th>
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
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-briefcase"></i>  Work Weeks </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-list"></i> Completed Pay Periods </Nav.Link>
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-forward-fast"></i>  Quick Shift Date </Nav.Link>
                    <Nav.Link href="#" className='py-1 px-3'><i className="fa-solid fa-check-double"></i> Quick Check Date</Nav.Link>
                    <Nav.Link href="/completeTimeCard" className='py-1 px-3'><i className="fa-solid fa-file-chart-pie"></i> Reports </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default CompleteTimeCardTable