import React from 'react';
import { Table, Pagination, Navbar, Container, Nav, Row, Col, Form } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './collectionsTable.css'

function CollectionsTable() {
    return (
        <main className="main_collectionsTable">

            <NavigationTop />

            <Navv />

            <div className='cennt'>

                <div className="collectiontable_feild  w-100 mx-4 p-2 ">
                    <div className='sec pb-3'>
                        <Row>
                            <Col lg={4} className='pe-0'>
                                <Form className='ordelisting_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>View Mode:</Form.Label>
                                                </div>
                                                <div className='p-1 left w-75 overtime '>
                                                    <Form.Select className='w-50'><option>Invoicing</option></Form.Select>
                                                    <Form.Label>Enter Client Name,Client Number or Invoice Number</Form.Label>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Search:</Form.Label>
                                                </div>
                                                <div className='p-1 left w-75 '>
                                                    <Form.Control type='text' className='w-75' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Contacts: <i className='fa-solid fa-caret-down px-2'></i> </Form.Label>
                                                </div>
                                                <div className='p-1 left w-75 '>
                                                    {/* <Form.Control type='text' className='w-75' /> */}
                                                </div>
                                            </div>

                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                            <Col lg={8} className='ps-0'>
                                <Form className='ordelisting_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            

                                            <div className="inner_  d-flex">
                                                 <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Payment Method:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center">
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>

                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Last Date:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center">
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Credit Limit:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    {/* <Form.Label>Payment Method:</Form.Label> */}
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex">
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>

                                             
                                            </div>

                                            <div className="inner_  d-flex border-bottom">
                                                 <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Payment Terms:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center">
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>

                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Last Amt:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50  overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Open Credit:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Total Amt:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>

                                             
                                            </div>

                                            <div className="inner_  d-flex ">
                                                 <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Ingore Terms:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center overtime">
                                                    <Form.Check type="checkbox" />
                                                    </div>
                                                </div>

                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Current:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>31 to 60:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>91 to 120:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                               

                                             
                                            </div>

                                            <div className="inner_  d-flex border-bottom">
                                                 <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Ingore Terms:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center overtime">
                                                    <Form.Check type="checkbox" />
                                                    </div>
                                                </div>

                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>Current:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 d-flex align-items-center overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>31 to 60:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                                <div className="w-50 d-flex">
                                                    <div className="right w-50 d-flex align-items-center">
                                                    <Form.Label>91 to 120:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-50 overtime">
                                                    <Form.Label>$0.00</Form.Label>
                                                    {/* <Form.Control type="text" /> */}
                                                    </div>
                                                </div>
                                               

                                             
                                            </div>

                                            <div className="inner_ inner__  d-flex ">
                                                    <div className="right w-25 d-flex align-items-center">
                                                    <Form.Label>Intoch:</Form.Label>
                                                    </div>
                                                    <div className="py-1 px-2 left w-75 d-flex align-items-center overtime">
                                                    <Form.Check type="checkbox" />
                                                    </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
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
                                            <th><i className='fa-solid fa-lock'></i></th>
                                            <th>Invoice #</th>
                                            <th>Invoice ID</th>
                                            <th>Client #</th>
                                            <th>Client</th>
                                            <th>Department</th>
                                            <th>Branch</th>
                                            <th>Client Group</th>
                                            <th>Date</th >
                                            <th className='text-end ps-2'>Bill Amt</th >
                                            <th className='text-end ps-2'>Adj Amt</th >
                                            <th className='text-end ps-2'>Discount</th >
                                            <th className='text-end ps-2'>Tax</th >
                                            <th className='text-end ps-2'>Total</th >
                                            <th className='text-end ps-2'>Paid</th >
                                            <th className='text-end ps-2'>Balance</th>
                                            <th className='text-end ps-2'>Qty</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

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

export default CollectionsTable