import React, { useEffect } from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SalesTaxCodeTable.css';
import {useDispatch, useSelector} from 'react-redux'
import {getSalesTaxCodeData} from '../../../features/salesTaxCode/salesTaxCodeSlice';
import { Link } from 'react-router-dom';

function SalesTaxCodeTable() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSalesTaxCodeData())
    }, [])
    const salesTaxCodeData = useSelector((state) => state.salesTaxCode.SalesTaxCode)
    return (
        <main className="main_salesTaxCodeTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="salesTaxCodetable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> Sales Tax Code Details </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>Sales Tax Code Name</th>
                                            <th>Sales Tax Code Description</th>
                                            <th>Sales Tax Code State</th>
                                            <th>Sales Tax Code Tax Authority</th>
                                            <th>Sales Tax Code Rate</th>
                                            <th>Sales Tax Code G/Liability Account</th>
                                            <th>Sales Tax Code Inter Face Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {salesTaxCodeData && (<>{salesTaxCodeData.map((data, i) => (
                                            <tr key={i}>
                                                <td>{data.salesTaxCode_salestaxInformation_name}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_description}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_state}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_taxAuthority}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_rate}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_glLiabilityAccount}</td>
                                                <td>{data.salesTaxCode_salestaxInformation_interfaceValue}</td>
                                            </tr>
                                        ))}</>)}
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
                    <Link to="/salesTaxCode" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Link>
                    <Link to="/salesTaxCodeTable" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                </Nav>

            </Container>
        </Navbar>
    );
}

export default SalesTaxCodeTable