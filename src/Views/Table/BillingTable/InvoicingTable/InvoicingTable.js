import React from "react";
import { Table, Pagination, Navbar, Container, Nav, Form, Col, Button, Row } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './InvoicingTable.css'

function InvoicingTable() {
    return (
        <main className="main_invoicingTable">

            <NavigationTop />

            <Navv />
            <div className='cennt mt-5'>
                <div className="invoicingTable_feild  w-100 mx-4 p-2">
                    <Container fluid>
                        <Row>
                            <Col md={12}>
                                <Form className="reference_form">
                                    <div className="tab_form policy">
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <div className="inner_ d-flex">
                                                <div className="right" style={{ width: "10%", display: 'contents' }}>
                                                    <div className="w-100" style={{ display: 'block', borderRight: '1px solid darkgray' }}>
                                                        <Form.Label className="div__invoiceTable">Unclosed Branches:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left ">
                                                        <div className="py-1 px-2 left ">
                                                            <div className="w-28">
                                                                <Form.Control type="number"  placeholder="0"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="right" style={{ width: "10%" }}>
                                                        <Form.Label className="div__invoiceTable">Unverified Timecards:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left ">
                                                        <div className="py-1 px-2 left ">
                                                            <div className="w-28">
                                                                <Form.Control type="number" className="w-100"  placeholder="0"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="right" style={{ width: "10%" }}>
                                                        <Form.Label className="div__invoiceTable">Closed Branches:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left ">
                                                        <div className="py-1 px-2 left ">
                                                            <div className="w-28">
                                                                <Form.Control type="number" className="w-100"  placeholder="0"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="right" style={{ width: "10%" }}>
                                                        <Form.Label className="div__invoiceTable">Verified Timecards:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left ">
                                                        <div className="py-1 px-2 left ">
                                                            <div className="w-28">
                                                                <Form.Control type="number" className="w-100"  placeholder="0"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="right" style={{ width: "10%" }}>
                                                    <Form.Label className="div__invoiceTable">Suspended Timecards:</Form.Label>
                                                </div>
                                                <div className="py-1 px-2 left ">
                                                    <div className="py-1 px-2 left ">
                                                        <div className="w-28">
                                                            <Form.Control type="number" className="w-100" placeholder="0"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Form>
                                <Button>Refresh</Button>
                            </Col>
                        </Row>
                    </Container>
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> All Invoices </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>Invoice ID</th>
                                            <th>Client #</th>
                                            <th>Client</th>
                                            <th>Department</th>
                                            <th>Branch</th>
                                            <th>Invoice #</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Qty</th>
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

                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit View</Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-magnifying-glass"></i>  Current View </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-clock"></i> Verify All </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-clock"></i>  Verify Selected </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-sharp fa-solid fa-triangle-exclamation"></i>  Suspend Selected </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'> <i className="fa-solid fa-file"></i> Quick Shift Date </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-print"></i>  Reports </Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}


export default InvoicingTable;
