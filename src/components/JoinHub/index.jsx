import React from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./style.scss";
function JoinHub() {
  return (
    <Container fluid className="text-center join-creator-hub ">
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="my-5">
          <h1>
            <span className="highlight">
              {" "}
              <strong>Join now</strong>
            </span>{" "}
            <strong className="rest-highlight">
              {" "}
              and start receiving <br /> the fan
            </strong>
            <span className="highlight-italic">
              {" "}
              support you deserve!{" "}
            </span>{" "}
          </h1>
          <p className="mt-3">
            Create your wishlist and start receiving gifts from your fans right
            away!
          </p>
          <Row className="d-flex justify-content-center m-0">
            <Col xs={10} sm={10} md={6}  lg={5} xl={5} xxl={4}>
              <InputGroup className="mb-5 mt-4 join-now-input">
                <InputGroup.Text
                  id="basic-addon1"
                  className="rounded-left"
                  style={{ textTransform: "lowercase" }}
                >
                  {`creatorshub.online/`}
                </InputGroup.Text>
                <FormControl
                  className="rounded-0"
                  // placeholder="creatorshub.com/"
                  aria-label="creatorshub.online"
                />
                <Button variant="dark" className="rounded-right">
                  Join Us
                </Button>
              </InputGroup>
               <Button variant="dark" className="rounded-right-responsive">Join Us</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default JoinHub;
