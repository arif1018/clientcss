import React from 'react';
import { Container, Row, Col, ListGroup, Table } from "react-bootstrap";
import NavigationTop from '../../Containers/HeaderTop/headerTop'
import "bootstrap/dist/css/bootstrap.min.css";
import './dashboard.css';

function Dashboard() {
    return (
        <main className="main_dashboard ">

            <NavigationTop />

            <div className='cennt mt-5'>

                <div className="dashboard_feild  w-100 mx-4 p-2">

                    <Container fluid>
                        <Row>
                            <Col lg={5} >
                                <div className='sec sec_'>
                                    <div className='head'>
                                        <label>Intouch</label>
                                    </div>
                                    <div className='body pe-2  ps-4 d-flex'>
                                        <div className='body_inner my-2 w-50'>
                                            <h5>Created By Me</h5>
                                            <ListGroup variant="flush" as='ul' >
                                                <ListGroup.Item as='li'>Overdue: 0</ListGroup.Item>
                                                <ListGroup.Item as='li'>Pending: 0</ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                        <div className='body_inner my-2 w-50'>
                                            <h5>Assigned To Me</h5>
                                            <ListGroup variant="flush" as='ul'>
                                                <ListGroup.Item as='li'>Overdue: 0</ListGroup.Item>
                                                <ListGroup.Item as='li'>Pending: 0</ListGroup.Item>
                                            </ListGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className='sec first my-2'>
                                    <div className='head'>
                                        <label>Scheduling</label>
                                    </div>
                                    <div className='body px-2 '>
                                        <div className='body_inner'>
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>[T]</th>
                                                        <th>[F]</th>
                                                        <th></th>
                                                        <th>[T]</th>
                                                        <th>[F]</th>
                                                        <th></th>
                                                        <th>[T]</th>
                                                        <th>[F]</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Cli Cancel:</td>
                                                        <td>23</td>
                                                        <td>133</td>
                                                        <td>Coord Cancel:</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>Open:</td>
                                                        <td>0</td>
                                                        <td>812</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cli Cancel:</td>
                                                        <td>23</td>
                                                        <td>133</td>
                                                        <td>Coord Cancel:</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>Open:</td>
                                                        <td>0</td>
                                                        <td>812</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cli Cancel:</td>
                                                        <td>23</td>
                                                        <td>133</td>
                                                        <td>Coord Cancel:</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>Open:</td>
                                                        <td>0</td>
                                                        <td>812</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                                <div className='sec des second my-2'>
                                    <div className='head'>
                                        <label>Travel Headcount</label>
                                    </div>
                                    <div className='body px-2 '>
                                        <div className='body_inner py-1'>
                                            <Table  >
                                                <thead>
                                                    <tr className='bg-light'>
                                                        <th>Week Ending</th>
                                                        <th>Week Range</th>
                                                        <th>Beginning</th>
                                                        <th>Starts</th>
                                                        <th>Ends</th>
                                                        <th>Working</th>
                                                        <th>Ending</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                    <tr>
                                                        <td>06/25/2022</td>
                                                        <td>06/19/2022</td>
                                                        {/* <td>06/19/2022-06/25/2022</td> */}
                                                        <td>28</td>
                                                        <td>3</td>
                                                        <td>7</td>
                                                        <td>31</td>
                                                        <td>24</td>
                                                    </tr>

                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>

                                <div className='sec des third my-2'>
                                    <div className='head'>
                                        <label>Accounting</label>
                                    </div>
                                    <div className='body px-2 '>
                                        <div className='body_inner py-1'>
                                            <Table  >
                                                <thead>
                                                    <tr className='bg-light text-center' >
                                                        <th colSpan={2}>Billing</th>
                                                        <th colSpan={2}>Receivables</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='text-center'>
                                                    <tr>
                                                        <td>Pay Period</td>
                                                        <td>06/25/2022</td>
                                                        <td>Current</td>
                                                        <td>$60,850.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pay Period</td>
                                                        <td>06/25/2022</td>
                                                        <td>Current</td>
                                                        <td>$60,850.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pay Period</td>
                                                        <td>06/25/2022</td>
                                                        <td>Current</td>
                                                        <td>$60,850.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pay Period</td>
                                                        <td>06/25/2022</td>
                                                        <td>Current</td>
                                                        <td>$60,850.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pay Period</td>
                                                        <td>06/25/2022</td>
                                                        <td>Current</td>
                                                        <td>$60,850.00</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} >
                                <div className='sec des third third_'>
                                    <div className='head'>
                                        <label>Registry</label>
                                    </div>
                                    <div className='body px-2 '>
                                        <div className='body_inner py-1 '>
                                            <Table striped>
                                                <thead>
                                                    <tr className='bg-light text-center' >
                                                        <th colSpan={2}></th>
                                                        <th colSpan={4}>Passing</th>
                                                        <th colSpan={4}>Failing</th>
                                                        <th colSpan={4}>Warning</th>
                                                    </tr>

                                                    <tr className='bg-light text-center' >
                                                        <th>Status</th>
                                                        <th>Count</th>
                                                        <th>Cur</th>
                                                        <th>30</th>
                                                        <th>60</th>
                                                        <th>90</th>
                                                        <th>Cur</th>
                                                        <th>30</th>
                                                        <th>60</th>
                                                        <th>90</th>
                                                        <th>Cur</th>
                                                        <th>30</th>
                                                        <th>60</th>
                                                        <th>90</th>
                                                    </tr>
                                                </thead>
                                                {/* <div className='scroll_'> */}
                                                <tbody>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                    <tr>
                                                        <td className='bold'>Inquiry</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                </tbody >
                                                {/* </div> */}
                                                <tfoot>
                                                    <tr>
                                                        <td className='bold'>Total</td>
                                                        <td>14232</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>10054</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4179</td>
                                                        <td>4107</td>
                                                        <td>4109</td>
                                                        <td>4112</td>
                                                        <td>4114</td>
                                                    </tr>
                                                </tfoot>
                                            </Table>
                                        </div>
                                    </div>
                                </div>

                                <div className='sec des four'>
                                    <div className='head'>
                                        <label>Online Applications</label>
                                    </div>
                                    <div className='body px-2 '>
                                        <div className='body_inner py-1 '>
                                            <Table >
                                                <thead>
                                                    <tr className='bg-light text-center' >
                                                        <th>Registrant</th>
                                                        <th>Disp</th>
                                                        <th>Branch</th>
                                                        <th>Status</th>
                                                        <th>Begin Date</th>
                                                        <th>Completed Date</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Godfrey,Camelia</td>
                                                        <td>CNA</td>
                                                        <td>AMTT STAFFING</td>
                                                        <td>Completed</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                        <td>6/24/2022 9:41:00 AM</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>

            </div>
        </main>


    )
}

export default Dashboard