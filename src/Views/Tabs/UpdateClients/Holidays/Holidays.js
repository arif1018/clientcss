import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./Holidays.css";

function Holidays() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form className="holidays_form">
            <div className="tab_form policy">
              <Form.Group
                className="mb-3 mt-0 tab_form_"
                controlId="formBasicText"
              >
                <Form.Label className="m-0 pb-1 d-flex align-items-center justify-content-between ">
                  Holidays
                  <div className="py-1 px-1 mailing d-flex gap-2">
                    <Button className="form_btn" type="submit">
                      Add a Single Holiday
                    </Button>
                    <Button className="form_btn" type="submit">
                      Add Multiple Holidays
                    </Button>
                  </div>
                </Form.Label>
                <div className=" px-2">
                  <ListGroup
                    as="ul"
                    className="d-flex flex-row justify-content-between flex-wrap"
                  >
                    <ListGroupItem as="li" className="border-right p-0">
                      Holiday
                    </ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">
                      Date
                    </ListGroupItem>
                    <ListGroupItem
                      as="li"
                      className="border-right p-0 px-2 text-center"
                    >
                      Time
                    </ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">
                      Duration
                    </ListGroupItem>
                    <ListGroupItem as="li" className="border-right p-0 px-2">
                      Action
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Form.Group>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Holidays;
