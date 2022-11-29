import React from 'react';
// import Select from 'react-select';
import { Form, Alert, Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './workHistory.css';

function WorkHistory() {
    return (
        <main className="main_workHistory">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>
                <div className="w-75 m-auto">
                    <Alert className="text-center m-0 alertt">
                        Work History Details
                    </Alert>
                    <Container fluid className="workhistory_form">
                        <Row>
                            <Col lg={12}>
                                <Form className='workhistory_form2'>
                                    <div className='tab_form override mb-2'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Work History Information</Form.Label>
                                            <div className='inner_ inner__ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Client:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className='w-50'>
                                                        <option defaultValue></option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ inner__ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Department:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className='w-50'>
                                                        <option defaultValue></option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ inner__ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Registrant:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className='w-50'>
                                                        <option defaultValue></option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ inner__ d-flex border-bottom'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Employee ID:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Control type='text' className='w-25' />
                                                </div>
                                            </div>

                                            <div className="inner_ inner__  d-flex border-bottom">
                                                <div className="right w-25 d-flex">
                                                    <Form.Label>First Worked:</Form.Label>
                                                </div>
                                                <div className=" px-2 left w-75 d-flex">
                                                    <div className="w-50 mt-1">
                                                        <Form.Control type="text" className="w-25" name="client_biling_weekStartTime" />
                                                    </div>
                                                    <div className="w-50 d-flex py-0">
                                                        <div className="right w-50">
                                                            <Form.Label className="text-end">Last Worked:</Form.Label>
                                                        </div>
                                                        <div className="left w-50 px-2 mt-1">
                                                            <Form.Control type="text" className="w-50" name="client_biling_weekStartTime" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inner_ inner__  d-flex ">
                                                <div className="right w-25 d-flex">
                                                    <Form.Label>Oriented:</Form.Label>
                                                </div>
                                                <div className=" px-2 left w-75 d-flex border-bottom">
                                                    <div className="w-50 mt-1 overtime">
                                                        <Form.Check type="checkbox" name="client_biling_weekStartTime" />
                                                    </div>
                                                    <div className="w-50 d-flex py-0">
                                                        <div className="right w-50">
                                                            <Form.Label className="text-end">Oriented Date:</Form.Label>
                                                        </div>
                                                        <div className="left w-50 px-2 mt-1">
                                                            <Form.Control type="text" className="w-50" name="client_biling_weekStartTime" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="inner_ inner__  d-flex">
                                                <div className="right w-25 d-flex">
                                                </div>
                                                <div className="py-1 px-2 left w-75 d-flex overtime">
                                                    <Form.Check type="checkbox" className="w-100 d-flex align-items-center p-0" label="Hide in Client Web Portal" name="client_biling_weekStartTime" />
                                                </div>
                                            </div>

                                        </Form.Group>
                                    </div>

                                    <div className='tab_form override mb-2'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Comments (Max:500)</Form.Label>
                                            <div className="py-1 px-2 w-100">
                                                <Form.Control as="textarea" name="client_general_notes"/>
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
                    <Nav.Link href="/workHistoryTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                    <Nav.Link href="/workHistoryTable" className='py-1 px-3'><i className="fa-solid fa-xmark"></i> cancel</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default WorkHistory