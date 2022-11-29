import React from 'react';
// import Select from 'react-select';
import { Form, Alert, Row, Col, Container, Navbar, Nav, Button, Table, ListGroup, ListGroupItem } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop';
import { useSelector, useDispatch } from "react-redux";
// import { getAllIntouch } from "../../../features/intouch/intouchSlice";
// import { saveIntouchForm } from "../../../features/intouch/intouchSlice";
// import CombineData from "../SaveClientData";

// import { useNavigate } from "react-router-dom"
// import { useSelector, useDispatch } from 'react-redux';
// import { addClient } from "../../../features/clients/clientSlice"
// import SaveClientData from './SaveClientData';
import 'bootstrap/dist/css/bootstrap.min.css';
import './inTouch.css';

function InTouch() {
    // const dispacth = useDispatch();

    // dispacth(saveIntouchForm('yahiya'))
  
    // const { branches } = useSelector((state) => state.branch);
  
    // useEffect(() => {
    //   dispacth(getAllIntouch());
    // }, []);
  
    // useEffect(() => {
    //   dispacth(saveGeneralForm(Client_General));
    // }, [dispacth, Client_General]);
  
    // const handleChange = (e) => {
    //   setClient_General((prevstate) => ({
    //     ...prevstate,
    //     [e.target.name]: e.target.value,
    //   }));
    //   CombineData.SaveGeneral(Client_General);
    // };
    return (
        <main className="main_inTouch">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>
                <div className="w-75 m-auto">
                    <Alert className="text-center m-0 alertt">
                    Intouch Details
                    </Alert>
                    <Container fluid className="inTouch_form">
                        <Row>
                            <Col lg={5} className="pe-0">
                                <Form className='inTouch_form2'>
                                    <div className='tab_form override'>
                                        <Form.Group className=" tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1'>Rate Information</Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label className=''>Type:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="">
                                                        <option>Availabillity</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex '>
                                                <div className='right w-25'>
                                                    <Form.Label>Order #:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 overtime'>
                                                    {/* <Form.Select className="w-100">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                    <Form.Check type="checkbox" className="p-0 d-flex align-items-center" label="Show Active Clients Only" /> */}
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Dept:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-100">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Discipline:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-50">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Registrant:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-100">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Rate Type:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-100">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>Burden:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex  gap-2 mailing'>
                                                    <Form.Control type="text" className="w-25" />
                                                    <Button type='button'>Recalc</Button>
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25'>
                                                    <Form.Label>W/C Code:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75'>
                                                    <Form.Select className="w-25">
                                                        <option defaultValue></option>
                                                        <option>disable</option>
                                                        <option>disable</option>
                                                    </Form.Select>
                                                </div>
                                            </div>


                                        </Form.Group>
                                    </div>


                                    <div className='tab_form override'>
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1 d-flex justify-content-between align-items-center '>Pay Modifiers <span className='overtime'> <Form.Check type='checkbox' className='d-flex align-items-center gap-1' label="Override" /></span> </Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>OT:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>DBL:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Holiday:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Max:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                        </Form.Group>
                                    </div>

                                    <div className='tab_form override'>
                                        <Form.Group className="mb-3 tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1 d-flex justify-content-between align-items-center '>Bill Modifiers <span className='overtime'> <Form.Check type='checkbox' className='d-flex align-items-center gap-1' label="Override" /></span> </Form.Label>
                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>OT:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>DBL:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Holiday:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                            <div className='inner_ d-flex'>
                                                <div className='right w-25 d-flex align-items-center'>
                                                    <Form.Label className=''>Max:</Form.Label>
                                                </div>
                                                <div className='py-1 px-2 left w-75 d-flex gap-2'>
                                                    <Form.Control type="text" className="w-25" placeholder='1.500' />
                                                    <Form.Label className="w-auto"> + $</Form.Label>
                                                    <Form.Control type="text" className="w-25" placeholder='0.00' />
                                                </div>
                                            </div>

                                        </Form.Group>
                                    </div>




                                </Form>
                            </Col>

                            <Col lg={7} className="ps-0">
                                <Form className='rateactive_form2'>

                                    <div className='tab_form mailing d-flex gap-1 p-2 justify-content-center'>
                                        <Button>Add Blank</Button>
                                        <Button>Add Form Rate Template</Button>
                                    </div>

                                    <div className='tab_form override'>
                                        <Form.Group className="tab_form_" controlId="formBasicText">
                                            <Form.Label className='m-0 pb-1 d-flex justify-content-between align-items-center '>New Rate Set [Expiration Date: Never] <div className='d-flex gap-1 mailing_ pt-1'><Button>Edit</Button> <Button>Copy</Button> <Button>Delete</Button> </div> </Form.Label>


                                            <div className='inner_'>
                                                <Table responsive>
                                                    <thead>
                                                        <tr className='bg-light'>
                                                            <th>Code</th>
                                                            <th>Desc</th>
                                                            <th className="text-center">Type</th>
                                                            <th className="text-end">Pay</th>
                                                            <th className="text-end">Pay W/E</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Day</td>
                                                            <td  className="text-center">H</td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td>Day</td>
                                                            <td  className="text-center">H</td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td>Day</td>
                                                            <td  className="text-center">H</td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                        </tr>

                                                        <tr>
                                                            <td>1</td>
                                                            <td>Day</td>
                                                            <td  className="text-center">H</td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                        </tr>

                                                    </tbody>
                                                </Table>
                                            </div>

                                            <div className='inner_ list'>
                                                <div className=' w-100 overtime px-2 pb-1 d-flex flex-row gap-1 flex-wrap'>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Modifiers</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><Form.Check type="checkbox" className='d-flex align-items-center p-0 ' label="Override Pay Modifiers"/></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><Form.Check type="checkbox" className='d-flex align-items-center p-0' label="Override Bill Modifiers"/></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">OT</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Dbl</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Holiday</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                    </ListGroup>
                                                    <ListGroup as="ul">
                                                        <ListGroupItem as="li" className="border-0 p-0 ps-1">Max</ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
                                                        <ListGroupItem as="li" className="border-0 py-0"><label>1,500 + $0.00</label></ListGroupItem>
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
    // const navigate = useNavigate()
    // const dispacth = useDispatch()
    // const clientdata = useSelector(state => state.client.General)

    // const Intouch = useSelector(state => state.Intouch.Intouch)

    // console.log("clientdata", clientdata)

    // const combineSave = (e) => {
    //     e.preventDefault()
    //     // const {client_general_branch, client_general_name} = SaveClientData.GeneralDataMain
    //     // const clientdata = {client_general_branch, client_general_name}

    //     dispacth(addClient(clientdata))
    //     navigate("/clientTable")
    // }
    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    {/* <Nav.Link href="/user" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link>
                    <Nav.Link href="#action2" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Nav.Link> */}
                    <Nav.Link href="/ratesTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                    <Nav.Link href="/ratesTable" className='py-1 px-3'><i className="fa-solid fa-xmark"></i> cancel</Nav.Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default InTouch