import React, { useRef } from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import HeaderLandingPage from '../../components/Headers/HeaderLandingPage';
import TwitchSvg from "./../../assets/svg/twitch.svg";
import InstagramSvg from "./../../assets/svg/instagram.svg";
import TwitterSvg2 from "./../../assets/svg/twitter2.svg";
import TwitterSvg from "./../../assets/svg/twitter.svg";
import YoutubeSvg from "./../../assets/svg/youtube.svg";
import tiktokSvg2 from "./../../assets/svg/tiktok2.svg";
import tiktokSvg from "./../../assets/svg/tiktok.svg";
import ytgamingSvg2 from "./../../assets/svg/ytgaming2.svg";
import ytgamingSvg from "./../../assets/svg/ytgaming.svg";
import snapSvg from "./../../assets/svg/snap.svg";
import snapSvg2 from "./../../assets/svg/snapchat.svg";
import userPlus from "./../../assets/svg/user-plus.svg";
import facebookSvg from "./../../assets/svg/facebook.svg";
import clampGirl from "./../../assets/Images/clampImage.png";
import "./style.scss"
import ToggleTabCarousal from '../../components/ToggleTabCarousal';
import ConnectionPeople from '../../components/ConnectionPeople';
import JoinHub from '../../components/JoinHub';
import Footer from '../../components/Footer';
import herosection from './../../assets/videos/herosection.mp4'
import stream from './../../assets/videos/stream.mp4'
import Tabs from '../../components/Tabs';

const Home = () => {
    const videoRef = useRef(null);
    const dummyData = [
        {
            title: "Instagram",
            icon: InstagramSvg,
            color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
            hoverTitle: "",
        },
        {
            title: "",
            icon: TwitterSvg2,
            color: "",
            hoverTitle: "X",
            hoverIcon: TwitterSvg,
        },
        {
            title: "Twitch",
            icon: TwitchSvg,
            color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "YouTube",
            icon: YoutubeSvg,
            color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
            hoverTitle: "",
        },
        {
            title: "",
            icon: tiktokSvg2,
            color: "",
            hoverTitle: "TikTok",
            hoverIcon: tiktokSvg,
        },
        {
            title: "",
            icon: ytgamingSvg2,
            color: "",
            hoverTitle: "YT Gaming",
            hoverIcon: ytgamingSvg,
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "",
            icon: snapSvg,
            color: "",
            hoverTitle: "Snap",
            hoverIcon: snapSvg2,
        },
        {
            title: "Facebook",
            icon: facebookSvg,
            color: "inset 0px 0px 20px -12px rgb(124, 122, 124)",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
        {
            title: "",
            icon: "",
            color: "",
            hoverTitle: "",
        },
    ];
    return (

        <>
            <HeaderLandingPage />
            <Container fluid className="d-flex align-items-center justify-content-center content-row p-0">
                <Card className="hero-main-card">
                    <Row className="hero-card-row">
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="content-column">
                            <div className="dummmy left-content-column">
                                <div className="left-side-content">
                                    <div className="text-start position-relative justify-content-start">
                                        <h6>
                                            <span className="highlight-italic"> Creator </span>
                                            <span className="highlight">
                                                <strong>Appreciation</strong>
                                                <br />
                                            </span>
                                            <strong className="rest-highlight">

                                                Made Safe and Easy
                                            </strong>
                                        </h6>
                                        <p>Fans support their favorite creators by sending them gifts, subscribing to their exclusive content or by tipping them for their hard work. All the while keeping both fans and creators safe by ensuring their personal information is kept private. We provide creators with all the important tools to create, share and then monetize their content.</p>
                                        <InputGroup className="mb-3 mt-5 hero-text-field">
                                            <InputGroup.Text
                                                id="basic-addon1"
                                                className="rounded-left"
                                                style={{ textTransform: "lowercase" }}
                                            >
                                                creatorshub.online/
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
                                        <Button variant="dark" className="rounded-right-responsive">
                                            Join Us
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="content-column right-content-column">
                            <div className="containers ">
                                <div className="cards ">
                                    <div className="boxs">
                                        <div className="icons">
                                            <div className="circle-for-bottom">
                                                <div className="gif-overlay"></div>
                                            </div>
                                        </div>
                                        <div className="contents">
                                            <video ref={videoRef} id="myVideo" autoPlay loop muted playsInline >
                                                {/* <source src={'https://dev.creatorshub.online/homePage_videos/herosection.mp4'} type="video/mp4" /> */}
                                                <source src={herosection} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
            <Container fluid className="second-section">
                <Row className=" text-center about-heading">
                    <Col md={7} className="d-flex align-items-center  first-about-heading-col" style={{ flexDirection: "column" }}>
                        <h6>
                            <span className="highlight-italic"> Built for </span>
                            <span className="highlight">

                                <strong>Creators</strong>
                            </span>
                            <strong className="rest-highlight"> of all platforms.</strong>
                        </h6>
                        <p>
                            Now your fans can seamlessly and effortlessly show their support
                            and appreciation of the content you work tirelessly to create on
                            any of the platforms you create on.
                        </p>
                    </Col>
                </Row>
                <Row className="poloroid-grid-section my-5">
                    <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex align-item-center left-poloroid-grid-section justify-content-center">
                        <div className="socialPlate-wrapper">
                            {dummyData.map((item, index) => {
                                return (
                                    <div className={`socialPlate-item position-relative social-items-${index}  ${item.hoverTitle ? "" : "no-hover"}`}
                                        style={item?.color ? { boxShadow: item?.color, background: "rgb(255, 255, 248)", } : null}
                                        key={index}
                                    >
                                        {item?.icon ? (<img src={item?.icon} className={`socialPlate-icon ${item.title ? "" : "different"}`} />) : null}
                                        {item.title ? <p>{item.title}</p> : null}
                                        {item.hoverTitle ? (
                                            <div className="hover-content">
                                                {item?.icon ? (
                                                    <img src={item?.hoverIcon} className="" />
                                                ) : null}
                                                <p>
                                                    <strong>{item.hoverTitle}</strong>
                                                </p>
                                            </div>
                                        ) : null}
                                    </div>

                                );
                            })}
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="d-flex align-item-center right-poloroid-grid-section">
                        <Row className="mt-3">
                            <Col>
                                <div className="d-flex polaroid-second ">
                                    <Card className="polaroid-second-item" style={{ backgroundColor: "green" }}>
                                        <div className="card border-0">
                                            <div className="image">
                                                <video autoPlay loop muted playsInline >
                                                    {/* <source src={'https://dev.creatorshub.online/homePage_videos/stream.mp4'} type="video/mp4" /> */}
                                                    <source src={stream} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        </div>
                                        <div className="polaroidcard-footer d-flex my-2">
                                            <img src={TwitchSvg} />
                                            <p className="mx-2">@matt0411</p>
                                        </div>
                                    </Card>
                                    <Card className="second">
                                        <div className="card border-0">
                                            <div className="image">
                                                <img src={clampGirl} alt="" />
                                            </div>
                                        </div>
                                        <h4 className='signature'>“My wishlist is live on Creators Hub”</h4>
                                        <div className="polaroidcard-footer d-flex my-2">
                                            <img src={InstagramSvg} />
                                            <p className="mx-2">@clair02</p>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='mt-5'>
                <Tabs />
            </Container>

            {/* <ToggleTabCarousal /> */}
            <ConnectionPeople />
            <JoinHub />
            <Footer />
        </>
    );
};

export default Home;
