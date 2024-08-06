import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.scss";
import userPlus from "./../../assets/svg/user-plus.svg";
import connectingPeople from './../../assets/videos/connectingPeople.mp4'
import { Link } from 'react-router-dom';

const ConnectionPeople = () => {
  return (
    <div className="coneecting-people-wrapper">
      <Container fluid>
        <Row className="text-center text-bottom coneecting-people-content align-items-end">

          <div className="connecting-people-video">
            <video autoPlay loop muted playsInline>
              <source
                // src={"https://dev.creatorshub.online/homePage_videos/connectingPeople.mp4"}
                src={connectingPeople}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="content-overlay">
            <h1>
              <strong className="rest-highlight">What about </strong>
              <span className="highlight">
                {" "}
                <strong>My Data</strong>
              </span>
              <strong className="rest-highlight">?</strong>
            </h1>
            <p>At CreatorsHub your safety and privacy is our number one goal. It will always be protected and fully secured.</p>

            <div className="btn-with-text ">
              <Link to="/signup">
                <Button variant="dark" className="join-now-btn">
                  {" "}
                  <img src={userPlus} alt="user-icon" /> Join Now
                </Button></Link>

              <p>It’s Free! 🎉</p>
            </div>
          </div>

        </Row>
      </Container>
    </div>
  )
}

export default ConnectionPeople