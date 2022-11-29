import React, { useEffect, useRef, useState } from "react";
import {
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  ListGroup,
  ListGroupItem,
  NavLink,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useReactToPrint } from "react-to-print";
import "./Modal.css";

function MyVerticallyCenteredModal(props) {
  const [addclient, setAddclient] = useState([]);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Client Table",
  });

  const Data = [
    "Account Manager",
    "Agency Cancel Credit Hours",
    "Agency Cancel Limit Hours",
    "Agency Representatives",
    "Bill By",
    "Bill Modifier DBL Plus",
    " Bill Modifier Holiday Percent",
    "Bill Modifier Holiday Plus",
    "Bill Modifier Max Percent",
    "Bill Modifier Max Plus",
  ];

  const deleteItem = (i) => {
    let temList;

    temList = [...addclient];
    temList.splice(i, 1);
    setAddclient(temList);
  };
  console.log(addclient);
  return (
    // <Container>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modall"
    >
      <Modal.Header closeButton className="py-2">
        <Modal.Title id="contained-modal-title-vcenter">
          All Clients
        </Modal.Title>
      </Modal.Header>
      <Navv />
      {/* <div> */}
      <Modal.Body>
        <Row className="align-items-start border-bottom">
          <Col lg={5}>
            <h6 className="modal_class">Available Fields</h6>
            <ListGroup as="ul" className="modal_ul">
              {Data.map((data, i) => (
                <div key={i}>
                  <ListGroupItem
                    as="li"
                    className="modal_li"
                    onClick={() => {
                      // addclient.splice(i,i)
                      setAddclient([...addclient, data]);
                      // data;
                    }}
                  >
                    {data}
                  </ListGroupItem>
                </div>
              ))}
            </ListGroup>
          </Col>
          <Col lg={2}>
            {/* <Button>Add</Button>
            <Button>Remove</Button> */}
            <Button onClick={handlePrint}>Export to PDF</Button>
          </Col>
          <Col lg={5}>
            <h6 className="modal_class">Fields to Export</h6>
            <ListGroup as="ul" className="modal_ul" ref={componentRef}>
              {addclient.map((data, i) => (
                <div key={i}>
                  <ListGroupItem
                    as="li"
                    className="modal_li"
                    onClick={() => {
                      deleteItem(i);
                    }}
                  >
                    {data}
                  </ListGroupItem>
                </div>
              ))}
            </ListGroup>

            <div className="d-flex gap-2">
              <Button>Move Up</Button>
              <Button>Move Down</Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <p className="text-center m-0 pt-2">
              {" "}
              Columns will be exported in the order of selection. <br /> Use
              [Ctrl] + click and [Shift] click to multiselect or{" "}
            </p>
          </Col>
        </Row>
      </Modal.Body>
      {/* </div> */}
      {/* <Modal.Footer>
          <Button onClick={props.onHide} style={{ backgroundColor: "#6d90c6" }}>
            Close
          </Button>
        </Modal.Footer> */}
    </Modal>
    // </Container>
  );
}

function Navv() {
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0 d-flex align-items-center " navbarScroll>
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Generate Export
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Save Export Template
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Open Export Template
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i class="fa-solid fa-envelope"></i> Cancel
              </Link>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

function Modall({data}) {
  const [modalShow, setModalShow] = React.useState(false);

  // const data = { name: "whithout schema", icon: "fa-solid fa-square-plus" };

  return (
    <>
      <div>
        <NavLink onClick={() => setModalShow(true)}>
          <i className={`${data.icon} pe-1`}></i>
          {data.name}
        </NavLink>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

// function Modall1() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <div>
//         <NavLink onClick={() => setModalShow(true)} className="w-100">
//           <i className="fa-solid fa-square-plus pe-1"></i>
//           PDF
//         </NavLink>
//       </div>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// function Modall2() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <div>
//         <NavLink onClick={() => setModalShow(true)}>
//           <i className="fa-solid fa-square-plus pe-1"></i>
//           CSV Clients (Comma Separated Values)
//         </NavLink>
//       </div>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// function Modall3() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <div>
//         <NavLink onClick={() => setModalShow(true)}>
//           <i className="fa-solid fa-square-plus pe-1"></i>
//           CSV Client Contacts (Comma Separated Values)
//         </NavLink>
//       </div>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// function Modall4() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <div>
//         <NavLink onClick={() => setModalShow(true)} className="w-100">
//           <i className="fa-solid fa-square-plus pe-1"></i>
//           CSV Client Contacts (Comma Separated Values)
//         </NavLink>
//       </div>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// export default Modall;
export { Modall };
// export { Modall, Modall1, Modall2, Modall3, Modall4 };
