// import React, { useState, useEffect } from 'react';
// import SliderCard from '../SliderCard';
// import './style.scss'

// const CarouselCard = () => {
//     const cards = [
//         { id: 0, content: 'Card 1', image: 'image1.jpg' },
//         { id: 1, content: 'Card 2', image: 'image2.jpg' },
//         { id: 2, content: 'Card 3', image: 'image3.jpg' },
//         { id: 3, content: 'Card 4', image: 'image4.jpg' },
//         { id: 4, content: 'Card 5', image: 'image5.jpg' },
//         { id: 5, content: 'Card 6', image: 'image6.jpg' },
//         { id: 6, content: 'Card 7', image: 'image7.jpg' },
//         { id: 7, content: 'Card 8', image: 'image8.jpg' },
//     ];

//     const [state, setState] = useState({
//         upcomingCards: cards.slice(1).map((_, index) => index + 1),
//         activeCards: [0],
//         completedCards: []
//     });

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setState(prevState => {
//                 if (prevState.upcomingCards.length === 0) {
//                     return {
//                         upcomingCards: cards.slice(1).map((_, index) => index + 1),
//                         activeCards: [0],
//                         completedCards: []
//                     };
//                 }

//                 const nextCard = prevState.upcomingCards.shift();
//                 const completedCards = [...prevState.completedCards, prevState.activeCards[prevState.activeCards.length - 1]];

//                 return {
//                     upcomingCards: prevState.upcomingCards,
//                     activeCards: [...prevState.activeCards, nextCard],
//                     completedCards
//                 };
//             });
//         }, 3000);

//         return () => clearInterval(intervalId);
//     }, []);

//     const getTargetClass = (i) => {
//         const currentActiveCardIndex = state.activeCards.length - 1;
//         const prevActiveCardIndex = currentActiveCardIndex - 1;

//         if (i === state.activeCards[currentActiveCardIndex]) {
//             return { isActive: true, isActiveBehind: false, isUpcoming: false, isCompleted: false };
//         } else if (i === state.activeCards[prevActiveCardIndex]) {
//             return { isActive: true, isActiveBehind: true, isUpcoming: false, isCompleted: false };
//         } else if (state.upcomingCards.includes(i)) {
//             return { isActive: false, isActiveBehind: false, isUpcoming: true, isCompleted: false };
//         } else if (state.completedCards.includes(i)) {
//             return { isActive: false, isActiveBehind: false, isUpcoming: false, isCompleted: true };
//         }

//         return { isActive: false, isActiveBehind: false, isUpcoming: false, isCompleted: false };
//     };

//     return (
//         <div className="carousel align-content-center" style={{ textAlign: "center" }}>
//             {cards.map((card, i) => (
//                 <SliderCard key={card.id} className={getTargetClass(i)} content={card.content} image={card.image} />
//             ))}
//         </div>
//     );
// };

// export default CarouselCard;










import React, { useEffect, useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import card2 from "../../../assets/Images/card2.png";
import './style.scss'

const CarouselCard = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index

    const cardHeight = `${window.innerWidth * 0.2}px`;

    useEffect(() => {
        const slideInOut = () => {
            if (isVisible) {
                setTimeout(() => {
                    setIsVisible(false); // Trigger slideOut animation after 12 seconds
                }, 12000);
            } else {
                setTimeout(() => {
                    setIsVisible(true); // Trigger slideIn animation after 12 seconds
                }, 12000);
            }
        };

        slideInOut(); // Initial trigger of animations

        // Clean up function
        return () => clearTimeout(slideInOut);
    }, [isVisible]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prevIndex) => (prevIndex + 1) % 4); // Change slide every 5 seconds
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleAnimationEnd = (index) => {
        setActiveSlide(index);
    };

    return (
        <>
            <Col
                sm={12}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className={`margin-padding auth-gallery  ${isVisible ? "slide-in" : "slide-out"}`}
                style={{ minHeight: "100vh", overflow: "hidden" }}
            >
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 1 ? "rotate-5deg" : "") : ""} `} onAnimationEnd={() => handleAnimationEnd(0)}>
                    <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <Card className="main-card text-center">
                            <Card.Body className="py-0 my-4">
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
                </Row>
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 2 ? "rotate5deg" : "") : ""}  `} onAnimationEnd={() => handleAnimationEnd(1)} >
                    <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <Card className="main-card text-center">
                            <Card.Body className="py-0 my-4">
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
                </Row>
                <Row className={`auth-second-slide m-auto  d-flex justify-content-center align-content-center  ${isVisible ? (activeSlide >= 3 ? "rotate8deg" : "") : ""} `} onAnimationEnd={() => handleAnimationEnd(2)}>
                    <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <Card className="main-card text-center">
                            <Card.Body className="py-0 my-4">
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
                </Row>
                <Row className="auth-second-slide m-auto  d-flex justify-content-center align-content-center" onAnimationEnd={() => handleAnimationEnd(3)}>
                    <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                        <Card className="main-card text-center">
                            <Card.Body className="py-0 my-4">
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
                </Row>
            </Col>
        </>
    );
};

export default CarouselCard;

// import React, { useEffect, useState } from 'react';
// import { Row, Card, Col } from 'react-bootstrap';
// import card2 from "../../../assets/Images/card2.png";

// const cardData = [
//     {
//         title: "Cash Gifts",
//         text: "Add cash gifts and receive them as payouts.",
//         imgSrc: card2
//     },
//     {
//         title: "A Suite of Integrations",
//         text: "Automatic custom Tweets, Discord messages, stream overlays and more!",
//         imgSrc: card2
//     },
//     {
//         title: "Crowdfunding",
//         text: "Let fans team up and contribute to a crowd funding gift.",
//         imgSrc: card2
//     },
//     {
//         title: "Gift & Thank Messages",
//         text: "Receive messages with your gifts and thank your fans with a personal text or video!",
//         imgSrc: card2
//     }
// ];

// const CarouselCard = () => {
//     const [isVisible, setIsVisible] = useState(true);
//     const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index

//     const cardHeight = `${window.innerWidth * 0.2}px`;

//     useEffect(() => {
//         const slideInOut = () => {
//             if (isVisible) {
//                 setTimeout(() => {
//                     setIsVisible(false); // Trigger slideOut animation after 12 seconds
//                 }, 12000);
//             } else {
//                 setTimeout(() => {
//                     setIsVisible(true); // Trigger slideIn animation after 12 seconds
//                 }, 12000);
//             }
//         };

//         slideInOut(); // Initial trigger of animations

//         // Clean up function
//         return () => clearTimeout(slideInOut);
//     }, [isVisible]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveSlide((prevIndex) => (prevIndex + 1) % cardData.length); // Change slide every 5 seconds
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);

//     const handleAnimationEnd = (index) => {
//         setActiveSlide(index);
//     };

//     return (
//         <>
//             <Col
//                 sm={12}
//                 md={5}
//                 lg={5}
//                 xl={5}
//                 xxl={5}
//                 className={`margin-padding auth-gallery ${isVisible ? "slide-in" : "slide-out"}`}
//                 style={{ minHeight: "100vh", overflow: "hidden" }}
//             >
//                 {cardData.map((card, index) => (
//                     <Row
//                         key={index}
//                         className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide === index ? `rotate${index * 5 - 5}deg` : "") : ""}`}
//                         onAnimationEnd={() => handleAnimationEnd(index)}
//                     >
//                         <div className="auth-card-container">
//                             <Card className="auth-main-card">
//                                 <Card.Body className="marginTop">
//                                     <Card.Title className="text-center">
//                                         <h3>
//                                             {card.title.includes("Cash") ? (
//                                                 <>
//                                                     <span className="highlight-italic">Cash </span>{" "}
//                                                     <strong className="rest-highlight">{card.title.split(" ")[1]}</strong>
//                                                 </>
//                                             ) : (
//                                                 <strong className="rest-highlight">{card.title}</strong>
//                                             )}
//                                         </h3>
//                                     </Card.Title>
//                                     <Card.Text>
//                                         <p className="pb-2 text-center">{card.text}</p>
//                                     </Card.Text>
//                                 </Card.Body>
//                                 <Card.Img
//                                     variant="bottom"
//                                     src={card.imgSrc}
//                                     className="auth-bottom-image mt-4"
//                                 />
//                             </Card>
//                             <div className="auth-card-gradient-footer"></div>
//                         </div>
//                     </Row>
//                 ))}
//             </Col>
//         </>
//     );
// };

// export default CarouselCard;
