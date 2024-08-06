import React, { useState } from 'react';
import './style.scss'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import creatorslideone from "./../../assets/videos/creatorslideone.mp4"
import creatorslidetwo from "./../../assets/videos/creatorslidetwo.mp4"
import creatorslidethree from "./../../assets/videos/creatorslidethree.mp4"
import creatorslidefour from "./../../assets/videos/creatorslidefour.mp4";
import userslideone from "./../../assets/videos/userslideone.mp4"
import userslidetwo from "./../../assets/videos/userslidertwo.mp4"
import userslidethree from "./../../assets/videos/usersliderthree.mp4"
const tabs = [
  {
    id: 'tab1',
    label: 'Creator',
    content: (
      <>
        <Row className='my-5 fontStyle' style={{ maxWidth: "1000px", margin: "auto" }}>Empower your creative journey on CreatorsHub with intuitive tools designed for creators. Why Join CreatorsHub? As a creator, showcase your talents through live streaming, upload features, and wishlists. Engage with your fans effortlessly, with streamlined payment processing and real-time alerts for gifts and contributions. Our platform ensures that your personal information is protected.</Row>
        <Carousel interval={3000} // Adjust the interval time as needed
          pause="hover"
          className="custom-carousel" data-bs-theme="dark">
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="highlight">
                      <strong>Sign Up</strong>
                    </span>
                    <strong className="rest-highlight"> & Verify Your Profile</strong>
                  </h5>
                  <p>
                    Begin your journey on CreatorsHub by signing up and verifying you own
                    your linked social accounts. Simply add your CreatorsHub link to your
                    platform’s bio, ensuring a secure and authentic experience while also
                    allowing your fans to discover your CreatorsHub.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={creatorslideone}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="rest-highlight">
                      {" "}
                      <strong>Customize Your Profile and</strong>
                    </span>{" "}
                    <strong className="highlight"> Stream Live</strong>
                  </h5>
                  <p>
                    Engage you audience like never before! Personalize your profile with a
                    gift registry from any online store. Interact in real-time by
                    integrating live streams from Twitch, YouTube and more—broadcast your
                    creativity far and wide.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={creatorslidetwo}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="rest-highlight">
                      {" "}
                      <strong>Set Up Your</strong>
                    </span>{" "}
                    <strong className="highlight"> Wish List</strong>
                  </h5>
                  <p>Unlock endless possibilities with our diverse wishlist options: <br />
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

                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={creatorslidethree}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
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
                  <p>
                    Experience the thrill of real-time interaction as you receive alerts
                    and notifications for gifts sent by your supporters. Whether it's a
                    small tip, a crowdfunding contribution, or a wishlist item, stay
                    connected and engaged with your community.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={creatorslidefour}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <Row className="p-3 card-container-row justify-content-center my-5">
          <Col md={12} lg={6} className="card-container-wrapper">
            <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container  " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
    ),
  },
  {
    id: 'tab2',
    label: 'User',
    content: (
      <>
        <Row className='my-5 fontStyle' style={{ maxWidth: "1000px", margin: "auto" }}>Explore the user-centric functionalities of CreatorsHub, where members can easily browse, discover, and support their favorite creators. CreatorsHub offers a secure platform where you can send gifts and contributions without worrying about your personal information being compromised. From interactive profiles to secure one-click payments, our platform ensures a personalized experience tailored to user preferences.</Row>
        <Carousel interval={3000} // Adjust the interval time as needed
          pause="hover"
          data-bs-theme="dark"
          className="custom-carousel">
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="highlight">
                      {" "}
                      <strong>Sign Up</strong>
                    </span>{" "}
                  </h5>
                  <p>
                    Begin your journey by creating an account on CreatorsHub. Join our
                    community effortlessly and start exploring a world of creativity and
                    support.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={userslideone}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="rest-highlight">
                      {" "}
                      <strong>Browse Your </strong>
                    </span>{" "}
                    <strong className="highlight"> Favorite Creators</strong>
                  </h5>
                  <p>
                    Discover a diverse range of creators—from gamers to chefs, vloggers to
                    influencers. Explore their profiles, content, and updates to find
                    those who resonate with you.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={userslidetwo}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item className='slider-carousel-item'>
            <Container className="slider-carousel-container">
              <Row className="w-100">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col">
                  <h5>
                    <span className="rest-highlight">
                      {" "}
                      <strong>Send</strong>
                    </span>{" "}
                    <strong className="highlight"> Gifts & Contributions</strong>
                  </h5>
                  <p>
                    Support your favorite creators by sending gifts and contributions
                    directly. Whether it's a cash tip, a product from their wishlist, or
                    backing their crowdfunding goals, you can engage and show appreciation
                    easily.
                  </p>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="custom-col text-center" >
                  <video
                    autoPlay loop muted playsInline
                    // className="video-bg slider-animate"
                    style={{
                      width: "100%",
                      height: "300px",
                    }}
                  >
                    <source
                      src={userslidethree}
                      type="video/mp4"
                      id="video-mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
        <Row className="p-3 card-container-row justify-content-center my-5">
          <Col md={12} lg={6} className="card-container-wrapper">
            <div className="card-container " style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
            <div className="card-container" style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", width: "98%" }}>
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
      </>
    ),
  },
];

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleChange = (event) => {
    setSelectedTab(event.target.value);
  };
  return (
    <>
      <Row className="text-center creator-content">
        <h1>
          <span className="highlight-italic"> Are You A  </span>{" "}
          <span className="highlight">
            {" "}
            <strong>Creator</strong>
          </span>{" "}
          <strong className="rest-highlight">/ User?</strong>
        </h1>
      </Row>
      <div className="tabSection">
        <div className="tab-buttons">
          {tabs.map((tab) => (
            <label
              key={tab.id}
              className={`tab-button ${selectedTab === tab.id ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="tab"
                value={tab.id}
                checked={selectedTab === tab.id}
                onChange={handleChange}
                className="tab-radio"
              />
              {tab.label}
            </label>
          ))}
        </div>
        <div className="tab-content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`content ${selectedTab === tab.id ? 'active' : ''}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Tabs