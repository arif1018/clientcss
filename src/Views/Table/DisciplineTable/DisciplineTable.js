import React, { useEffect } from "react";
import { Table, Pagination, Navbar, Container, Nav,Form } from 'react-bootstrap';
import NavigationTop from '../../../Containers/HeaderTop/headerTop'
import 'bootstrap/dist/css/bootstrap.min.css'
import './disciplineTable.css';
import {useDispatch, useSelector} from 'react-redux';
import {getDisciplineData} from '../../../features/discipline/disciplineSlice';
import { Link } from "react-router-dom";

function DisciplineTable() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDisciplineData())
    }, [])
    
    const disciplineData = useSelector((state) => state.discipline.Discipline)
    return (
        <main className="main_clientTable">

            <NavigationTop />

            <Navv />

            <div className='cennt mt-5'>

                <div className="clienttable_feild  w-100 mx-4 p-2">
                    <div className='sec des'>
                        <div className='head d-flex align-items-center justify-content-between'>
                            <div><label> Discipline </label></div>
                            <div><AdvancedExample /></div>
                        </div>
                        <div className='body'>
                            <div className='body_inner py-1 '>
                                <Table responsive>
                                    <thead>
                                        <tr className='bg-light'>
                                            <th>Discipline Code Name</th>
                                            <th>Discipline Code Name Check</th>
                                            <th>Discipline Description</th>
                                            <th>Discipline Specialities</th>
                                            <th>Discipline Skills</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {disciplineData && (<>{disciplineData.map((data, i) => (
                                            <tr key={i}>
                                                <td>{data.admin_discipline_code_name}</td>
                                                <td>{data.admin_discipline_code_name_check}</td>
                                                <td>{data.admin_discipline_desc}</td>
                                                <td>{data.admin_discipline_specialities}</td>
                                                <td>{data.admin_discipline_skills}</td>
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
                    <Link to="/discipline" className='py-1 px-3'><i className="fa-solid fa-square-plus"></i>  New </Link>
                    <Link to="/disciplineTable" className='py-1 px-3'><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                    {/* <Nav.Link href="/clientTable" className='py-1 px-3'><i className="fa-solid fa-floppy-disk"></i> Save</Nav.Link> */}
                </Nav>

            </Container>
        </Navbar>
    );
}


export default DisciplineTable;
