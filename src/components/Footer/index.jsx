import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import footerLogo from "./../../assets/svg/footerLogo.svg";
import "./style.scss";
import footer1 from "./../../assets/svg/footer1.svg";
import footer2 from "./../../assets/svg/footer2.svg";
import footer3 from "./../../assets/svg/footer3.svg";
import footer4 from "./../../assets/svg/footer4.svg";
import fbone from "./../../assets/svg/footerfb1.svg";
import instaone from "./../../assets/svg/footerinsta1.svg";
import tiktokone from "./../../assets/svg/footertiktok1.svg";
import twitchone from "./../../assets/svg/footertwitch1.svg";
import youtubeone from "./../../assets/svg/footeryoutube1.svg";
import redditone from "./../../assets/svg/footerreddit1.svg";
import chatone from "./../../assets/svg/footerchat1.svg";
import ytone from "./../../assets/svg/footerytgaming1.svg";
import threadone from "./../../assets/svg/footerthread1.svg";
import twitterone from "./../../assets/svg/footertwitter1.svg";
import fbtwo from "./../../assets/svg/facebook.svg";
import instatwo from "./../../assets/svg/instagram.svg";
import tiktoktwo from "./../../assets/svg/tiktok.svg";
import twitchtwo from "./../../assets/svg/twitch.svg";
import youtubetwo from "./../../assets/svg/youtube.svg";
import reddittwo from "./../../assets/svg/footerreddit2.svg";
import chattwo from "./../../assets/svg/footerchat2.svg";
import yttwo from "./../../assets/svg/footerytgaming2.svg";
import threadtwo from "./../../assets/svg/footerthread2.svg";
import twittertwo from "./../../assets/svg/twitter.svg";
import instagram from "./../../assets/svg/instagram.svg";

function Footer() {
    return (
        <div className="footer-container ">
            <Container fluid className=" footer-wrapper">
                <Row className="footer-wrapper-row m-2">
                    <Col className="left-footer  " sm={12} md={12} lg={4} xl={4} xxl={4}>
                        {/* <Row className='d-flex justify-content-start '> */}
                        <img src={footerLogo} />

                        {/* <h3 className="mt-4">
              {" "}
              <span className="last-heading">Creator</span>
              <span className="highlight">Appreciation</span>
              <br /> <strong> Made Safe and Easy</strong>{" "}
            </h3> */}
                        <h6 >
                            <span className="highlight-italic"> Creator </span>{" "}
                            <span className="highlight">
                                {" "}
                                <strong>Appreciation</strong>
                                <br className="break-line" />
                            </span>{" "}
                            <span className="rest-highlight"> Made Safe and Easy</span>
                        </h6>
                        <p className="pe-4">
                            {" "}
                            Fans support their favorite creators by sending them gifts, subscribing to their exclusive content or by tipping them for their hard work. All the while keeping both fans and creators safe by ensuring their personal information is kept private. We provide creators with all the important tools to create, share and then monetize their content.
                        </p>
                        {/* </Row> */}
                    </Col>
                    <Col
                        className="right-footer  "
                        sm={12}
                        md={12}
                        lg={8}
                        xl={8}
                        xxl={8}
                    //   style={{ backgroundColor: "blueviolet", minHeight: "200px" }}
                    >
                        <div style={{ width: "100%" }} >
                            <Row className="social-or-link-row">
                                <Col xs={12} sm={12} md={12} lg={12} xl={8} xxl={8} >
                                    {" "}
                                    <Row className="mt-5">
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className="col-links my-3"
                                        >
                                            <h5 className="highlight">Quick Links</h5>
                                            <div className="links">
                                                <a href="">Home</a>
                                                <a href="">About Us</a>
                                                <a href="">Login</a>
                                                <a href="">How It Works</a>
                                            </div>
                                        </Col>
                                        <Col
                                            xs={6}
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className="col-links my-3"
                                        >
                                            <h5 className="highlight">Help</h5>
                                            <div className="links">
                                                <a href="">FAQ & Help</a>
                                                <a href="">Contact</a>
                                                <a href="">Blog</a>
                                                <a href="">Support</a>
                                            </div>
                                        </Col>
                                        <Col
                                            sm={6}
                                            md={4}
                                            lg={4}
                                            xl={4}
                                            xxl={4}
                                            className="col-links my-3"
                                        >
                                            <h5 className="highlight">Legal</h5>
                                            <div className="links">
                                                <a href="">Terms of Service</a>
                                                <a href="">Privacy Policy</a>
                                                <a href="">Data Security</a>
                                                <a href="">Careers</a>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={4} xxl={4} className="col">
                                    {" "}


                                    <Row className="footer-social-wrapper">
                                        <Col xs={12} sm={12} md={12} lg={12} xl={10} xxl={10} className="footer-social-container  col-links">
                                            <h5 className="highlight">Follow Us</h5>
                                            <Row className="gap-1 footer-social-icon-row">
                                                <div className="footer-social-icon icon-container col-2">
                                                    <a href="#" className="social-icon">
                                                        <img src={fbtwo} className="hover-image" />
                                                        <img src={fbone} className="animated-img" />
                                                    </a>
                                                </div>
                                                <div className="footer-social-icon icon-container col-2">
                                                    <a href="#" className="social-icon">
                                                        <img src={tiktoktwo} className="hover-image" />
                                                        <img src={tiktokone} className="animated-img" />
                                                    </a>
                                                </div>
                                                <div className="footer-social-icon icon-container col-2">
                                                    {/* <img src={instaSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={instagram} className="hover-image" />
                                                        <img src={instaone} className="animated-img" />
                                                    </a>
                                                </div>
                                                <div className="footer-social-icon icon-container col-2">
                                                    {/* <img src={twitchSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={twitchtwo} className="hover-image" />
                                                        <img src={twitchone} className="animated-img" />
                                                    </a>
                                                </div>
                                                <div className="footer-social-icon icon-container col-2">
                                                    {/* <img src={youtubeSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={youtubetwo} className="hover-image" />
                                                        <img src={youtubeone} className="animated-img" />
                                                    </a>
                                                </div>
                                            </Row>
                                            <Row className="mt-3 gap-1 footer-social-icon-row">
                                                <Col className="footer-social-icon icon-container col-2">
                                                    {/* <img src={redditSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={reddittwo} className="hover-image" />
                                                        <img src={redditone} className="animated-img" />
                                                    </a>
                                                </Col>
                                                <Col className="footer-social-icon icon-container col-2">
                                                    {/* <img src={chatSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={chattwo} className="hover-image" />
                                                        <img src={chatone} className="animated-img" />
                                                    </a>
                                                </Col>
                                                <Col className="footer-social-icon icon-container col-2">
                                                    {/* <img src={ytgamingSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={yttwo} className="hover-image" />
                                                        <img src={ytone} className="animated-img" />
                                                    </a>
                                                </Col>
                                                <Col className="footer-social-icon icon-container col-2">
                                                    {/* <img src={twitterSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={twittertwo} className="hover-image" />
                                                        <img src={twitterone} className="animated-img" />
                                                    </a>
                                                </Col>
                                                <Col className="footer-social-icon icon-container col-2">
                                                    {/* <img src={offSvg} /> */}
                                                    <a href="#" className="social-icon">
                                                        <img src={threadtwo} className="hover-image" />
                                                        <img src={threadone} className="animated-img" />
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="bottom-footer">
                                {/* Second column on top for xs devices, and on the right for md devices */}
                                {/* <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={{ span: 6, order: "last" }}
                                    xxl={{ span: 7, order: "last" }}
                                    className="order-xs-1 order-xl-2"
                                    style={{ textAlign: "-webkit-right" }}
                                >
                                    <Row className="d-flex custom-image-container justify-content-evenly" style={{ inlineSize: "max-content" }}>
                                        <img
                                            src={footer2}
                                            className="first-image"
                                            alt="Footer Image 1"
                                        />
                                        <img
                                            src={footer1}
                                            className="second-image"
                                            alt="Footer Image 2"
                                        />
                                        <img
                                            src={footer3}
                                            className="third-image"
                                            alt="Footer Image 3"
                                        />
                                        <img
                                            src={footer4}
                                            className="fourth-image"
                                            alt="Footer Image 4"
                                        />
                                    </Row>
                                </Col> */}
                                {/* First column on bottom for xs devices, and on the left for md devices */}
                                {/* <Col
                                    xs={12}
                                    sm={12}
                                    md={12}
                                    lg={12}
                                    xl={{ span: 6, order: "first" }}
                                    xxl={{ span: 5, order: "first" }}
                                    className="order-xs-0 order-xl-1"
                                >
                                    <div className="footer-para">
                                        <p>
                                            Copyright © 2024, All Rights Reserved - MWP Entertainment
                                            LLC
                                        </p>
                                        <p>Developed by CV Infotech</p>
                                    </div>
                                </Col> */}
                                <Col md={4} sm={12} xs={12}>
                                    <Row>
                                        <div className="footer-para">
                                            <p>
                                                Copyright © 2024, All Rights Reserved - MWP Entertainment
                                                LLC
                                            </p>
                                            <p>Developed by CV Infotech</p>
                                        </div>
                                    </Row>
                                </Col>
                                <Col md={8} sm={12} xs={12} className="logsStyle">
                                    <Row className="d-flex custom-image-container gap-3 footerLogos">
                                        <img
                                            src={footer2}
                                            className="first-image"
                                            alt="Footer Image 1"
                                        />
                                        <img
                                            src={footer1}
                                            className="second-image"
                                            alt="Footer Image 2"
                                        />
                                        <img
                                            src={footer3}
                                            className="third-image"
                                            alt="Footer Image 3"
                                        />
                                        <img
                                            src={footer4}
                                            className="fourth-image"
                                            alt="Footer Image 4"
                                        />
                                    </Row>
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="footer-gradient"></div> */}
        </div>
    );
}

export default Footer;
