import React from 'react';
// import Select from 'react-select';
import { Form, Alert, Row, Col, Container, Navbar, Nav, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import NavigationTop from '../../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './rateTemplate.css';

function RateTemplate() {
    return (
        <main className="main_rateActive">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>
                <div className="w-75 m-auto">
                    <Alert className="text-center m-0 alertt">
                        Rate Template Details
                    </Alert>
                    <Container fluid className="rateactive_form">
                        <Row>
                            <Col lg={12}>
                                <Form className='rateactive_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Rate Template Information</Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Template Name:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type='text' className='w-50' placeholder='DENTAL ASSISTANT' />
                                                </div>
                                            </div>

                                        </Form.Group>
                                    </div>

                                    <div className='tab_form override'>
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'> Rate Set</Form.Label>


                                            <div className='inner_'>
                                                <Table responsive>
                                                    <thead>
                                                        <tr className='bg-light'>
                                                            <th>Code</th>
                                                            <th>Desc</th>
                                                            <th className="text-center">Type</th>
                                                            <th className="text-end">Pay</th>
                                                            <th className="text-end">Bill</th>
                                                            <th className="text-end">Margin</th>
                                                            <th className="text-end">Pay W/E</th>
                                                            <th className="text-end">Bill W/E</th>
                                                            <th className="text-end">Margin W/E</th>
                                                            <th>Start Time</th>
                                                            <th>End Time</th>
                                                            <th>Meal</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td><Form.Control type="text" placeholder='Day' /> </td>
                                                            <td className="text-center"><Form.Select className="w-auto"><option defaultValue>H</option></Form.Select></td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='6:45 AM' /> </td>
                                                            <td><Form.Control type="text" placeholder='3:30 PM' /> </td>
                                                            <td><Form.Control type="text" placeholder='30' /> </td>

                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td><Form.Control type="text" placeholder='Day' /> </td>
                                                            <td className="text-center"><Form.Select className="w-auto"><option defaultValue>H</option></Form.Select></td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='6:45 AM' /> </td>
                                                            <td><Form.Control type="text" placeholder='3:30 PM' /> </td>
                                                            <td><Form.Control type="text" placeholder='30' /> </td>

                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td><Form.Control type="text" placeholder='Day' /> </td>
                                                            <td className="text-center"><Form.Select className="w-auto"><option defaultValue>H</option></Form.Select></td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='6:45 AM' /> </td>
                                                            <td><Form.Control type="text" placeholder='3:30 PM' /> </td>
                                                            <td><Form.Control type="text" placeholder='30' /> </td>

                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td><Form.Control type="text" placeholder='Day' /> </td>
                                                            <td className="text-center"><Form.Select className="w-auto"><option defaultValue>H</option></Form.Select></td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='16.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='24.00' /> </td>
                                                            <td><Form.Control type="text" placeholder='33.33' /> </td>
                                                            <td><Form.Control type="text" placeholder='6:45 AM' /> </td>
                                                            <td><Form.Control type="text" placeholder='3:30 PM' /> </td>
                                                            <td><Form.Control type="text" placeholder='30' /> </td>

                                                        </tr>



                                                    </tbody>
                                                </Table>
                                            </div>

                                            <div className='inner_ list'>
                                                <div className=' w-100 overtime px-2 pb-1 d-flex flex-row gap-3 flex-wrap'>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Modifiers</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><Form.Check type="checkbox" className='d-flex align-items-center ps-0' label="Override Pay Modifiers" /></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><Form.Check type="checkbox" className='d-flex align-items-center ps-0' label="Override Bill Modifiers" /></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">OT</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Dbl</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Holiday</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Max</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0 px-1 d-flex align-items-center"><Form.Control type="text" placeholder='1,500' /> <label className="text-center">+ $</label> <Form.Control type="text" placeholder='0.00' /></ListGroupItem>
                                                    </ListGroup>

                                                </div>
                                            </div>






                                        </Form.Group>
                                    </div>

                                </Form>
                            </Col>


                        </Row>
                    </Container>
                </div>
            </div>
        </main>
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
                    {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
                    <Nav.Link href="/ratesTemplatesTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                    <Nav.Link href="/ratesTemplatesTable" className='py-1 px-3'><i className="fa-solid fa-xmark"></i> cancel</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default RateTemplate 