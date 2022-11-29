import React, { useEffect } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
} from "react-bootstrap";
import NavigationTop from "../../../Containers/HeaderTop/headerTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mailingLabelTable.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getfuncMailingLabelData } from "../../../features/mailingLabel/mailingLabelSlice";

function MailingLabelTable() {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getfuncMailingLabelData());
  }, []);

  
  const mailingLabelData = useSelector(
      (state) => state.mailingLabel.MailingLabel
      );
      console.log(mailingLabelData)
  return (
    <main className="main_companyProfileTable">
      <NavigationTop />

      <Navv />

      <div className="cennt mt-5">
        <div className="companyProfiletable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> Mailing Label </label>
              </div>
              <div>
                <AdvancedExample />
              </div>
            </div>
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    <tr className="bg-light">
                      <th>Label Name</th>
                      <th>Top Margin</th>
                      <th>Side Margin</th>
                      <th>Pitch</th>
                      <th>Label Width</th>
                      <th>Label Hight</th>
                      <th>Label Across</th>
                      <th>Label Down</th>
                      <th>Text Alignment</th>
                      <th>Font Size</th>
                      <th>Name</th>
                      <th>Attn</th>
                      <th>Address1</th>
                      <th>Address2</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Zip</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mailingLabelData && (
                      <>
                        {mailingLabelData.map((data, i) => (
                          <tr key={i}>
                            <td>{data.mailingLabel_labelLayout_labelName}</td>
                            <td>{data.mailingLabel_labelLayout_topMargin}</td>
                            <td>{data.mailingLabel_labelLayout_sideMargin}</td>
                            <td>{data.mailingLabel_labelLayout_pitch}</td>
                            <td>{data.mailingLabel_labelLayout_labelWidth}</td>
                            <td>{data.mailingLabel_labelLayout_labelHight}</td>
                            <td>{data.mailingLabel_labelLayout_labelAcross}</td>
                            <td>{data.mailingLabel_labelLayout_labelDown}</td>
                            <td>
                              {data.mailingLabel_labelLayout_textAlignment}
                            </td>
                            <td>{data.mailingLabel_labelLayout_fontSize}</td>
                            <td>{data.mailingLabel_previewLabelText_name}</td>
                            <td>{data.mailingLabel_previewLabelText_attn}</td>
                            <td>
                              {data.mailingLabel_previewLabelText_address1}
                            </td>
                            <td>
                              {data.mailingLabel_previewLabelText_address2}
                            </td>
                            <td>{data.mailingLabel_previewLabelText_city}</td>
                            <td>{data.mailingLabel_previewLabelText_state}</td>
                            <td>{data.mailingLabel_previewLabelText_zip}</td>
                          </tr>
                        ))}
                      </>
                    )}
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
      <Pagination.Item>{4}</Pagination.Item>
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
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <Link to="/mailingLabel" className="py-1 px-3">
            <i className="fa-solid fa-square-plus"></i> New{" "}
          </Link>
          <Link to="/mailingLabelTable" className="py-1 px-3">
            <i className="fa-solid fa-pen-to-square"></i> Edit
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MailingLabelTable;
