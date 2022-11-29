import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalIcon.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal(props) {
  return(
  <Modal
  {...props}
  // size="lg"
    className="modall" 
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header className="p-0">
      <div className="div__modal d-flex justify-content-between w-100 px-2 bg-light py-1">
        <p className="p-0 m-0">Last 15 Transactions</p>
        <Link to="/clients" className="link_modal text-decoration-none">
          View Row Transactions
        </Link>
      </div>
    </Modal.Header>
    <Modal.Body className="p-0">
      <div className="body">
        <div className="body_inner  ">
          <Table responsive className="p-0 m-0 my-1">
            <div className="scroll">
              <thead>
                <tr className="bg-light">
                  <th>User</th>
                  <th>Action</th>
                  <th>Date</th>
                  <th>Desc</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Lane Pair
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>Modified</td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    09/09/2022 10:19 AM
                  </td>
                  <td style={{ fontSize: "12px", padding: "5px" }}>
                    Modified Client: (SUE) ILAVERE PARKRET
                  </td>
                </tr>
              </tbody>
            </div>
          </Table>
        </div>
      </div>
    </Modal.Body>
    {/* <Modal.Footer className="p-0">
      <Button variant="secondary" onClick={props.onHide}>
        Close
      </Button>
    </Modal.Footer> */}
  </Modal>
  );
}

function ModallIcon() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
     

      <i
        onClick={() => setModalShow(true)}
        className="fa-solid fa-database"
        style={{ color: "purple", padding: "3px" , cursor:'pointer'}}
      ></i>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModallIcon;
