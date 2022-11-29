import React, { useEffect } from 'react';
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GLaccountTable.css'
import { useDispatch, useSelector } from 'react-redux';
import { getfuncglAcountData } from '../../../features/glAccount/glAccountSlice';
import { Link } from 'react-router-dom';

function GLaccountTable() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getfuncglAcountData())
    },[])
    const glAcountTable = useSelector((state) => state.glAccount.GLAccount)
    return (
        <main className="main_glaccountTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="glaccount_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> G/L Account Details </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>Account Type</th>
                                            <th>Export Level</th>
                                            <th>Account Number</th>
                                            <th>Account Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {glAcountTable && (<>{glAcountTable.map((data,i)=>(
                                            <tr key={i}>    
                                                <td>{data.glAcount_GLAccountInformation_accountType}</td>
                                                <td>{data.glAcount_GLAccountInformation_exportLevel}</td>
                                                <td>{data.glAcount_GLAccountInformation_accountNumber}</td>
                                                <td>{data.glAcount_GLAccountInformation_accountDescription}</td>

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
                    <Link to="/glaccount" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Link>
                    <Link to="/glaccountTable" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                    {/* <Nav.Link href="/glaccount" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Nav.Link> */}
                </Nav>

            </Container>
        </Navbar>
    );
}

export default GLaccountTable