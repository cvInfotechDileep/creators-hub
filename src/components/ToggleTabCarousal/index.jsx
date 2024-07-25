import React, { useState } from 'react'
import { Card, Col, Container, Row } from "react-bootstrap";
import './style.scss'
import NewSlider from './NewSlider';

const ToggleTabCarousal = () => {
    const [switcherEnable, setSwitcherEnable] = useState(true);
    return (
        <>
            <Container fluid className="text-center  creator-content ">
                <Row className="">
                    <Col className="m-2">
                        <h1>
                            <span className="highlight-italic"> Are You A  </span>{" "}
                            <span className="highlight">
                                {" "}
                                <strong>Creator</strong>
                            </span>{" "}
                            <strong className="rest-highlight">/ User?</strong>
                        </h1>

                        <div className="toggle-switch-wrapper">
                            <ul className="toggle-switch">
                                <li
                                    id="option1"
                                    className={`option ${switcherEnable ? "active" : ""}`}
                                    onClick={() => setSwitcherEnable(!switcherEnable)}
                                >
                                    Creator
                                </li>
                                <li
                                    id="option2"
                                    className={`option checked ${!switcherEnable ? "active" : ""}`}
                                    onClick={() => setSwitcherEnable(!switcherEnable)}
                                >
                                    User
                                </li>
                                <div className="toggle-effect"></div>
                            </ul>
                        </div>

                        <p className="slider-card-para">
                            {!switcherEnable ? `  Explore the user-centric functionalities of CreatorsHub, where
            members can easily browse, discover, and support their favorite
            creators. CreatorsHub offers a secure platform where you can send
            gifts and contributions without worrying about your personal
            information being compromised. From interactive profiles to secure
            one-click payments, our platform ensures a personalized experience
            tailored to user preferences.`: `Empower your creative journey on CreatorsHub with intuitive tools designed for creators. Why Join CreatorsHub? As a creator, showcase your talents through live streaming, upload features, and wishlists. Engage with your fans effortlessly, with streamlined payment processing and real-time alerts for gifts and contributions. Our platform ensures that your personal information is protected.`}
                        </p>
                    </Col>
                </Row>
                <NewSlider typeValue={switcherEnable} />
                {!switcherEnable ? (
                    <Row className="p-3 card-container-row justify-content-center">
                        <Col md={12} lg={6} className="card-container-wrapper">
                            <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <Card className="main-card">
                                    <Card.Body className="pt-0 pb-0">
                                        <Card.Title>
                                            <h3>
                                                <span className="highlight-italic">Live </span>{" "}
                                                <strong className="rest-highlight">Streaming</strong>
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p>
                                                Connect with creators in real-time with live chat and
                                                interactive features on CreatorsHub. Send tips, crowdfund,
                                                and share wishlist items directly.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="bottom-image ">
                                    <div className="new-card1"></div>
                                    <div className="new-hover-card1"></div>
                                </div>

                                <div className="card-gradient-footer"></div>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="card-container-wrapper">
                            <div className="card-container  " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <Card className="main-card">
                                    <Card.Body className="pt-0 pb-0">
                                        {" "}
                                        <Card.Title>
                                            <h3>
                                                <span className="highlight-italic"> Effortless </span>{" "}
                                                <span className="highlight">
                                                    {" "}
                                                    <strong>One-Tap</strong>
                                                </span>{" "}
                                                <strong className="rest-highlight"> Payment Magic</strong>
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p>
                                                Enjoy seamless one-tap payments on CreatorsHub. Support
                                                creators instantly with tips and crowdfunding
                                                contributions, hassle-free.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="bottom-image ">
                                    <div className="new-card2"></div>
                                    <div className="new-hover-card2"></div>
                                </div>
                                <div className="card-gradient-footer"></div>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="card-container-wrapper">
                            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <Card className="main-card">
                                    <Card.Body className="pt-0 pb-0">
                                        <Card.Title>
                                            <h3>
                                                <span className="highlight-italic"> Explore your </span>{" "}
                                                <strong className="rest-highlight">favorite </strong>
                                                <span className="highlight">
                                                    {" "}
                                                    <strong>creators</strong>
                                                </span>{" "}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p>
                                                Discover and follow your favorite creators for the content
                                                you love. Stay updated with their posts, streams, and
                                                engage directly to support them. Join their community with
                                                a simple click.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="bottom-image3 ">
                                    <div className="new-card3"></div>
                                    <div className="new-hover-card3">
                                        <div className="img1"></div>
                                        <div className="img3"></div>

                                        <div className="img2"></div>
                                    </div>
                                </div>

                                <div className="card-gradient-footer"></div>
                            </div>
                        </Col>
                        <Col md={12} lg={6} className="card-container-wrapper">
                            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                <Card className="main-card">
                                    <Card.Body className="pt-0 pb-0">
                                        <Card.Title>
                                            {" "}
                                            <h3>
                                                <strong className="rest-highlight"> Pay </strong>
                                                <span className="highlight-italic"> Per View </span>{" "}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <p>
                                                Monetize your best work with exclusive pay-per-video and
                                                premium content options. Engage your audience with unique
                                                features and insights, enhancing viewer satisfaction.
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {/* <Card.Img variant="bottom" src={card1} className="bottom-image" /> */}
                                <div className="bottom-image3 ">
                                    <div className="new-card4">
                                        <div className="img1"></div>
                                        <div className="img3"></div>
                                        <div className="img2"></div>
                                    </div>
                                    <div className="new-cardhover4"></div>
                                </div>
                                <div className="card-gradient-footer"></div>
                            </div>
                        </Col>
                    </Row>
                ) : (
                    <>
                        {" "}
                        <Row className="p-3 card-container-row justify-content-center">
                            <Col md={12} lg={6} className="card-container-wrapper">
                                <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <Card className="main-card">
                                        <Card.Body className="pt-0 pb-0">
                                            <Card.Title>
                                                <h3>
                                                    <span className="highlight-italic">Live </span>{" "}
                                                    <strong className="rest-highlight">Streaming</strong>
                                                </h3>
                                            </Card.Title>
                                            <Card.Text>Dive into dynamic live streaming on CreatorsHub with seamless Twitch integration. Engage fans in real-time, receive gift alerts, and enhance your streaming profile.</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div className="creator-bottom-image ">
                                        <div className="new-card1"></div>
                                        <div className="new-hover-card1">
                                            <div className="img1"></div>
                                            <div className="img-wrapper">
                                                <div className="img2"></div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="card-gradient-footer"></div>
                                </div>
                            </Col>
                            <Col md={12} lg={6} className="card-container-wrapper">
                                <div className="card-container  " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <div>
                                        <Card className="main-card">
                                            <Card.Body className="pt-0 pb-0">
                                                {" "}
                                                <Card.Title>
                                                    <h3>
                                                        <strong className="rest-highlight"> Wishlists</strong>
                                                    </h3>
                                                </Card.Title>
                                                <Card.Text>
                                                    <p>
                                                        Upload wishlists with products, cash tips, crowdfunding
                                                        goals, or small gifts. Receive support directly from
                                                        your fans.
                                                    </p>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div>
                                        <div className="creator-bottom-image ">
                                            <div className="new-card2"></div>
                                            <div className="new-card2-sec"></div>
                                            <div className="new-hover-card2">
                                                <div className="img1"></div>
                                                <div className="img2"></div>
                                                <div className="img3"></div>
                                                <div className="img4"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-gradient-footer"></div>
                                </div>
                            </Col>
                            <Col md={12} lg={6} className="card-container-wrapper">
                                <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <Card className="main-card">
                                        <Card.Body className="pt-0 pb-0">
                                            <Card.Title>
                                                <h3>
                                                    <span className="highlight-italic">
                                                        {" "}
                                                        Access to real-time{" "}
                                                    </span>{" "}
                                                    <strong className="rest-highlight">
                                                        notifications{" "}
                                                    </strong>
                                                </h3>
                                            </Card.Title>
                                            <Card.Text>
                                                <p>Get real-time gift alerts from your fans—crowdfunding, cash gifts, tips, and wishlist items included. Stay connected and appreciated with instant notifications.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div className="creator-bottom-image ">
                                        <div className="new-card3"></div>
                                        <div className="new-card3-icon"></div>

                                        <div className="new-hover-card3-img1"></div>
                                        <div className="new-hover-card3-img2"></div>
                                    </div>
                                    <div className="card-gradient-footer"></div>
                                </div>
                            </Col>
                            <Col md={12} lg={6} className="card-container-wrapper">
                                <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                                    <Card className="main-card">
                                        <Card.Body className="pt-0 pb-0">
                                            <Card.Title>
                                                {" "}
                                                <h3>
                                                    <strong className="rest-highlight"> Pay </strong>
                                                    <span className="highlight-italic">
                                                        {" "}
                                                        Per View{" "}
                                                    </span>{" "}
                                                </h3>
                                            </Card.Title>
                                            <Card.Text>

                                                Monetize your best work with exclusive pay-per-video and
                                                premium content options. Engage your audience with
                                                unique features and insights, enhancing viewer
                                                satisfaction.

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    {/* <Card.Img variant="bottom" src={card1} className="bottom-image" /> */}
                                    <div className="bottom-image3 ">
                                        <div className="new-card4">
                                            <div className="img1"></div>
                                            <div className="img3"></div>
                                            <div className="img2"></div>
                                        </div>
                                        <div className="new-cardhover4"></div>
                                    </div>
                                    <div className="card-gradient-footer"></div>
                                </div>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
        </>
    )
}

export default ToggleTabCarousal