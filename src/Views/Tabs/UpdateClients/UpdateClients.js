import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import { Tab, Tabs, Alert, Navbar, Container, Nav } from 'react-bootstrap';
import General from './General/General';
import Addresses from './Addresses/Addresses';
import Billing from './Billing/Billing';
import Invoicing from './Invoicing/Invoicing';
import Credits from './Credit/Credit';
import Holidays from './Holidays/Holidays';
import Instructions from './Instructions/Instructions';
import NavigationTop from '../../../Containers/HeaderTop/headerTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Clients.css'
import { useSelector, useDispatch } from 'react-redux';
import { updateClient } from "../../../features/clients/clientSlice"

function Clients() {
    
    return (
        <main className='clients_main_tab'>
            <NavigationTop />

            <Navv />

            <div className='cennt'>
                <div className='tabbs1'>
                    <Alert className="text-center m-0 alertt">
                        Update Client
                    </Alert>
                    <div className='tabbs'>
                        <Tabs
                            defaultActiveKey="general"
                            id="uncontrolled-tab-example">
                            <Tab eventKey="general" title="General">
                                <General />
                            </Tab>
                            <Tab eventKey="addresses" title="Addresses">
                                <Addresses />
                            </Tab>
                            <Tab eventKey="billing" title="Billing">
                                <Billing />
                            </Tab>
                            <Tab eventKey="invoicing" title="Invoicing">
                                <Invoicing />
                            </Tab>
                            <Tab eventKey="credits" title="Credits">
                                <Credits />
                            </Tab>
                            <Tab eventKey="holidays" title="Holidays">
                                <Holidays />
                            </Tab>
                            <Tab eventKey="instructions" title="Instructions">
                                <Instructions />
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </main>
    );
};

function Navv() {
    const id = useParams()
    // const navigate = useNavigate()
    const dispacth = useDispatch()
    let clientdata = useSelector(state => state.client.General)
    // const Address = useSelector(state => state.client.Address)
    // const Billings = useSelector(state => state.client.Billings)
    // const Invoicing = useSelector(state => state.client.Invoicing)
    // const Credits = useSelector(state => state.client.Credits)
    // const Holidays = useSelector(state => state.client.Holidays)
    // const Instructions = useSelector(state => state.client.Instructions)

    // const newadd = []
    // newadd.push(Address)

    const combineSave = (e) => {
        e.preventDefault()
        // clientdata = {...clientdata, client_address: Address, client_billing: Billings, 
        //     client_invoicing: Invoicing}
        // console.log("Client Data", clientdata)
        dispacth(updateClient({id, clientdata}))
        // navigate("/clientTable")
    }

    return (
        <Navbar expand="lg" className="navbar navv">
            <Container fluid className="mx-3">
                <Nav
                    className=" my-2 my-lg-0 d-flex align-items-center "
                    navbarScroll
                >
                    <Nav.Link className='py-1 px-3' onClick={combineSave}><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link>
                    <Link to="/clientTable" className='py-1 px-3'><i className="fa-solid fa-xmark"></i> cancel</Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default Clients;