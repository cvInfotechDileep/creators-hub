import React, { useEffect, useRef, useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";


import "./style.scss";
function NewSlider({ typeValue }) {
    // const [index, setIndex] = useState(0);
    // const [direction, setDirection] = useState("left");
    // const [interval] = useState(10000);
    // const [isPaused] = useState(false);

    const [expanded, setExpanded] = useState(false);
    // const [numberOfLines, setNumberOfLines] = useState(6);
    const paragraphRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        // Calculate the height of linesToShow lines
        if (paragraphRef.current) {
            const lineHeight = parseFloat(
                getComputedStyle(paragraphRef.current).lineHeight
            );
            const height = lineHeight * 6;
            paragraphRef.current.style.maxHeight = `${height}px`;
        }
    }, []);

    // const handleToggleExpand = () => {
    //   setExpanded(!expanded);
    //   // Set the number of lines to show based on expanded state
    //   if (!expanded) {
    //     setNumberOfLines(null); // Show all lines
    //   } else {
    //     setNumberOfLines(6); // Show limited lines
    //   }
    // };
    const handleSelect = (selectedIndex, e) => {
        // setIndex(selectedIndex);
        // setDirection(e.direction);
    };
    const [creatorSliderData, setCreatorSliderData] = useState([
        {
            title: (
                <h5>
                    <span className="highlight">
                        {" "}
                        <strong>Sign Up</strong>
                    </span>{" "}
                    <strong className="rest-highlight"> & Verify Your Identity</strong>
                </h5>
            ),
            expand: false,
            subtitle: (
                <p ref={paragraphRef} className={`text ${expanded ? "expanded" : ""}`}>
                    Begin your journey on CreatorsHub by signing up and verifying you own
                    your linked social accounts. Simply add your CreatorsHub link to your
                    platform’s bio, ensuring a secure and authentic experience while also
                    allowing your fans to discover your CreatorsHub.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/creatorslideone.mp4',
        },
        {
            title: (
                <h5>
                    <span className="rest-highlight">
                        {" "}
                        <strong>Customize Your Profile and</strong>
                    </span>{" "}
                    <strong className="highlight"> Stream Live</strong>
                </h5>
            ),
            expand: false,
            subtitle: (
                <p ref={paragraphRef} className={`text ${expanded ? "expanded" : ""}`}>
                    Engage you audience like never before! Personalize your profile with a
                    gift registry from any online store. Interact in real-time by
                    integrating live streams from Twitch, YouTube and more—broadcast your
                    creativity far and wide.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/creatorslidetwo.mp4',
        },
        {
            title: (
                <h5>
                    <span className="rest-highlight">
                        {" "}
                        <strong>Set Up Your</strong>
                    </span>{" "}
                    <strong className="highlight"> Wish List</strong>
                </h5>
            ),
            expand: false,

            subtitle: (
                <p>
                    Unlock endless possibilities with our diverse wishlist options: <br />
                    <br />
                    <strong className="heading">Small Cash Tips:</strong> Receive instant
                    tips from fans during your live streams.
                    <br />
                    <strong className="heading">Crowdfunding:</strong> Dream big! Get
                    funded for high-cost items, with a progress bar to track your
                    progress.
                    <br /> <strong className="heading">Product Links:</strong> Add links
                    to products from various stores. Fans contribute, you receive the
                    funds, order the product, and upload the invoice.
                    <br />
                    <strong className="heading"> Small Gift Items:</strong> Allow fans to
                    express their appreciation with thoughtful gifts directly from your
                    profile, up to a value of $100.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/creatorslidethree.mp4',
        },
        {
            title: (
                <h5>
                    <span className="rest-highlight">
                        {" "}
                        <strong>Receive Gifts and</strong>
                    </span>{" "}
                    <strong className="highlight"> Notifications</strong>
                    <span className="rest-highlight">
                        {" "}
                        <strong> in Real-Time</strong>
                    </span>{" "}
                </h5>
            ),
            expand: false,
            subtitle: (
                <p ref={paragraphRef} className={`text ${expanded ? "expanded" : ""}`}>
                    Experience the thrill of real-time interaction as you receive alerts
                    and notifications for gifts sent by your supporters. Whether it's a
                    small tip, a crowdfunding contribution, or a wishlist item, stay
                    connected and engaged with your community.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/creatorslidefour.mp4',
        },
    ]);
    const [userSliderData, setUserSliderData] = useState([
        {
            title: (
                <h5>
                    <span className="highlight">
                        {" "}
                        <strong>Sign Up</strong>
                    </span>{" "}
                </h5>
            ),
            expand: false,
            subtitle: (
                <p>
                    Begin your journey by creating an account on CreatorsHub. Join our
                    community effortlessly and start exploring a world of creativity and
                    support.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/userslideone.mp4',
        },
        {
            title: (
                <h5>
                    <span className="rest-highlight">
                        {" "}
                        <strong>Browse Your </strong>
                    </span>{" "}
                    <strong className="highlight"> Favorite Creators</strong>
                </h5>
            ),
            expand: false,
            subtitle: (
                <p>
                    Discover a diverse range of creators—from gamers to chefs, vloggers to
                    influencers. Explore their profiles, content, and updates to find
                    those who resonate with you.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/userslidetwo.mp4',
        },
        {
            title: (
                <h5>
                    <span className="rest-highlight">
                        {" "}
                        <strong>Send</strong>
                    </span>{" "}
                    <strong className="highlight"> Gifts & Contributions</strong>
                </h5>
            ),
            expand: false,
            subtitle: (
                <p>
                    Support your favorite creators by sending gifts and contributions
                    directly. Whether it's a cash tip, a product from their wishlist, or
                    backing their crowdfunding goals, you can engage and show appreciation
                    easily.
                </p>
            ),
            video: 'https://dev.creatorshub.online/homePage_videos/userslidethree.mp4',
        },
    ]);
    // useEffect(() => {
    //   const timer = setTimeout(() => {
    //     if (!isPaused) {
    //       setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1)); // Adjust based on number of slides
    //     }
    //   }, interval);

    //   return () => clearTimeout(timer);
    // }, [index, interval, isPaused]);

    return (
        <div className="slider-carousel-wrapper">
            <Carousel
                interval={2000}
                indicators
                pause="hover"
                data-bs-theme="dark"
                className="slider-carousel"
                onSelect={handleSelect}
            // wrap={true}
            >
                {(typeValue ? creatorSliderData : userSliderData)?.map(
                    (slide, index) => {
                        return (
                            <Carousel.Item className="slider-carousel-item" key={index}>
                                <Container className="slider-carousel-container">
                                    <Row>
                                        <Col
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                            className="custom-col"
                                        >
                                            {slide?.title}

                                            {windowWidth <= 1000 ? (slide?.subtitle?.props.children?.length > 200 ? (
                                                <>
                                                    <p
                                                        className={` ${slide?.expand ? "expanded" : ""}`}
                                                        dangerouslySetInnerHTML={{
                                                            __html: slide?.expand
                                                                ? slide?.subtitle?.props.children
                                                                : slide?.subtitle?.props.children?.substring(
                                                                    0,
                                                                    200
                                                                ) + "....",
                                                        }}
                                                    />{" "}
                                                    <span
                                                        onClick={() => {

                                                            if (typeValue) {
                                                                const temp = [...creatorSliderData];
                                                                temp[index].expand = !temp[index].expand;
                                                                setCreatorSliderData(temp);
                                                            } else {
                                                                const temp = [...userSliderData];
                                                                temp[index].expand = !temp[index].expand;
                                                                setUserSliderData(temp);
                                                            }

                                                        }}
                                                    >
                                                        {" "}
                                                        {typeValue ? (creatorSliderData[index].expand ? " Show Less " : "Show More") : (userSliderData[index].expand ? " Show Less " : "Show More")}
                                                    </span>
                                                </>
                                            ) : (
                                                slide?.subtitle
                                            )) : typeValue ? index === 2 ? <p
                                                dangerouslySetInnerHTML={{
                                                    __html: slide?.subtitle?.props.children

                                                }}
                                            /> : slide?.subtitle : slide?.subtitle}
                                        </Col>
                                        <Col
                                            xs={12}
                                            sm={12}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                            className="custom-col text-center"
                                        >
                                            {/* <img
                      className="d-block w-100"
                      src={slide?.image}
                      alt="First left"
                      style={{ height: "100%", width: "100%" }}
                    /> */}

                                            <video
                                                autoPlay loop muted playsInline
                                                // className="video-bg slider-animate"
                                                style={{
                                                    width: "100%",
                                                    height: "300px",
                                                }}
                                            >
                                                <source
                                                    src={slide?.video}
                                                    type="video/mp4"
                                                    id="video-mp4"
                                                />
                                                Your browser does not support the video tag.
                                            </video>
                                        </Col>
                                    </Row>
                                </Container>
                                <div className="slider-gradient"></div>
                            </Carousel.Item>
                        );
                    }
                )}
            </Carousel>
        </div>
    );
}

export default NewSlider;
