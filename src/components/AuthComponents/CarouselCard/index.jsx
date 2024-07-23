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

import React, { useEffect, useState } from 'react'
import { Row, Card, Col } from 'react-bootstrap'
import card2 from "../../../assets/Images/card2.png"

const CarouselCard = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide index
    const [activeSlide1, setActiveSlide1] = useState(0); // State to track active slide index

    const cardHeight = `${window.innerWidth * 0.2}px`;

    const deg = [6, -3, 3, -6];
    useEffect(() => {
        // Function to trigger slideIn and slideOut animations
        const slideInOut = () => {
            if (isVisible) {
                setTimeout(() => {
                    setIsVisible(false); // Trigger slideOut animation after 1 second
                }, 12000); // 1000ms = 1s delay
            } else {
                setTimeout(() => {
                    setIsVisible(true); // Trigger slideOut animation after 1 second
                }, 12000); // 1000ms = 1s delay
            }

        };

        slideInOut(); // Initial trigger of animations

        // Clean up function (optional)
    }, [isVisible]); // Empty dependency array means this effect runs only once
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [rotationDeg, setRotationDeg] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            let currentIndex = (currentSlideIndex + 1) % 4;

            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 4);

            const rotation = (currentIndex - slide.id + totalSlides) % totalSlides * (360 / totalSlides);
            setRotationDeg(rotation);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        // Calculate the rotation degree based on slide position
        const rotation = currentSlideIndex + 2;
        console.log(rotation, "asdadasd", currentSlideIndex);
        setRotationDeg(rotation);
    }, [currentSlideIndex]);

    const handleAnimationEnd = (index) => {
        setActiveSlide(index);
    };
    const handleAnimationEnd1 = (index) => {
        setActiveSlide1(index);
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
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 1 ? "rotate-5deg" : "") : (activeSlide1 <= 1 ? "" : "")} `} onAnimationEnd={() => handleAnimationEnd(0)}>
                    <div className={`auth-card-container `}>
                        <Card className="auth-main-card">
                            <Card.Body className="marginTop ">
                                <Card.Title className="text-center">
                                    <h3>
                                        <span className="highlight-italic">Cash </span>{" "}
                                        <strong className="rest-highlight">Gifts</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text >
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
                <Row className={`auth-second-slide m-auto d-flex justify-content-center align-content-center ${isVisible ? (activeSlide >= 2 ? "rotate5deg" : "") : (activeSlide1 <= 2 ? "" : "")}  `} onAnimationEnd={() => handleAnimationEnd(1)} onAnimationStart={() => handleAnimationEnd1(1)} >
                    <div className="auth-card-container">
                        <Card className="auth-main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        {/* <span className="highlight-italic"> </span>{" "} */}
                                        <strong className="rest-highlight">A Suite of Integrations</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text >
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
                <Row className={`auth-second-slide m-auto  d-flex justify-content-center align-content-center  ${isVisible ? (activeSlide >= 3 ? "rotate8deg" : "") : (activeSlide1 <= 3 ? "" : "")} `} onAnimationEnd={() => handleAnimationEnd(2)}>
                    <div className="auth-card-container ">
                        <Card className="main-card">
                            <Card.Body className="marginTop">
                                <Card.Title className="text-center">
                                    <h3>
                                        {/* <span className="highlight-italic">Cash </span>{" "} */}
                                        <strong className="rest-highlight">Crowdfunding</strong>
                                    </h3>
                                </Card.Title>
                                <Card.Text >
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
                                        {/* <span className="highlight-italic">Cash </span>{" "} */}
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
    )
}

export default CarouselCard