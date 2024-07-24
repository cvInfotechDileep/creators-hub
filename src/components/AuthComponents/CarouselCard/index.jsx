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
                className={`margin-padding auth-gallery  ${isVisible ? "slide-in" : "slide-out"
                    }`}
                style={{ minHeight: "100vh", overflow: "hidden" }}
            >
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 1 ? "rotate-5deg" : "") : ""} `} onAnimationEnd={() => handleAnimationEnd(0)}>
                    <div className="auth-card-container">
                        <Card className="auth-main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        <span className="highlight-italic">Cash </span>{" "}
                                        <strong className="rest-highlight">Gifts</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="pb-2 text-center">
                                        Add cash gifts and receive them as payouts.
                                    </p>
                                </Card.Text>
                            </Card.Body>

                            <Card.Img
                                variant="bottom"
                                src={card2}
                                className="auth-bottom-image mt-4"
                            />
                        </Card>
                        <div className="auth-card-gradient-footer"></div>
                    </div>
                </Row>
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 2 ? "rotate5deg" : "") : ""}  `} onAnimationEnd={() => handleAnimationEnd(1)} >
                    <div className="auth-card-container">
                        <Card className="auth-main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        <strong className="rest-highlight">A Suite of Integrations</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="pb-2 text-center">
                                        Automatic custom Tweets, Discord messages, stream overlays and more!
                                    </p>
                                </Card.Text>
                            </Card.Body>

                            <Card.Img
                                variant="bottom"
                                src={card2}
                                className="auth-bottom-image mt-4"
                            />
                        </Card>
                        <div className="auth-card-gradient-footer"></div>
                    </div>
                </Row>
                <Row className={`auth-second-slide m-auto  d-flex justify-content-center align-content-center  ${isVisible ? (activeSlide >= 3 ? "rotate8deg" : "") : ""} `} onAnimationEnd={() => handleAnimationEnd(2)}>
                    <div className="auth-card-container ">
                        <Card className="main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        <strong className="rest-highlight">Crowdfunding</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="pb-2 text-center">
                                        Let fans team up and contribute to a crowd funding gift.
                                    </p>
                                </Card.Text>
                            </Card.Body>

                            <Card.Img
                                variant="bottom"
                                src={card2}
                                className="auth-bottom-image mt-4"
                            />
                        </Card>
                        <div className="auth-card-gradient-footer"></div>
                    </div>
                </Row>
                <Row className="auth-second-slide m-auto  d-flex justify-content-center align-content-center" onAnimationEnd={() => handleAnimationEnd(3)}>
                    <div className="auth-card-container ">
                        <Card className="main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        <strong className="rest-highlight">Gift & Thank Messages</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p className="pb-2 text-center">
                                        Receive messages with your gifts and thank your fans with a personal text or video!
                                    </p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img
                                variant="bottom"
                                src={card2}
                                className="auth-bottom-image mt-4"
                            />
                        </Card>
                        <div className="auth-card-gradient-footer"></div>
                    </div>
                </Row>
            </Col>
        </>
    );
};

export default CarouselCard;
