import React, { useEffect, useState, useCallback } from 'react';
import { message, Steps, Flex, Input, Typography } from 'antd';
import { Col, Container, Row, Card, Button, FormControl, InputGroup, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import GoogleLogo from './../../../assets/svg/GoogleLogo.svg';
import TwitchLogo from './../../../assets/svg/twitch.svg';
import AppleLogo from './../../../assets/svg/apple.svg';
import YoutubeLogo from './../../../assets/svg/youtube.svg';
import mail from './../../../assets/svg/mail.svg';
import key from './../../../assets/svg/key.svg';
import hidePasswordIcon from './../../../assets/svg/hidePasswordIcon.svg';
import passwordIcon from './../../../assets/svg/passwordIcon.svg';
import TwitterLogo from './../../../assets/svg/twitter.svg';
import Right from "./../../../assets/svg/chevronRight1.svg";
import CreatorSVG from './../../../assets/svg/Creator.svg';
import arrowprev from './../../../assets/svg/arrowprev.svg';
import arrownext from './../../../assets/svg/arrownext.svg';
import FanSVG from './../../../assets/svg/Fan.svg';
import CarouselCard from './../CarouselCard';
import './../style.scss';
import { checkUsernameApi, signUpApi } from '../../../Apis/api';

// Debounce function to limit the rate at which a function can fire
const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
const { Title } = Typography;

const SignUpForm = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [usernameValid, setUsernameValid] = useState(null); // null = no check yet, true = valid, false = invalid

  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };

  let debounceTimeout = null;

  const handleSelect = (userType) => {
    setSelectedCard(userType);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkUsername = async (username) => {
    if (username) {
      setLoading(true);
      try {
        // Replace with your actual API call
        const response = await checkUsernameApi(username, selectedCard);
        if (response.isAvailable) {
          setUsernameValid(true);
          message.success('Username is available.');
        } else {
          setUsernameValid(false);
          message.error('Username is taken.');
        }
      } catch (error) {
        console.error('Username check error:', error);
        setUsernameValid(false);
        message.error('Error checking username.');
      }
      setLoading(false);
    } else {
      setUsernameValid(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Clear previous debounce timeout
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set new debounce timeout
    debounceTimeout = setTimeout(() => {
      checkUsername(username);
    }, 10); // Debounce delay in milliseconds

    // Cleanup timeout on unmount
    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [username]);


  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const cards = [
    { id: 1, title: 'Creator', text: 'I’d like to create a wishlist', svg: CreatorSVG },
    { id: 2, title: 'Fan', text: 'I’m here to follow & support creators', svg: FanSVG },
  ];

  const steps = [
    {
      title: '',
      content: (
        <>
          <Row className='justify-content-center text-center my-5'>
            <Row className='sec-type-row'>
              <Col className='text-center'>
                <h6 className='mt-3 mb-2'>
                  <span className='highlight-italic'> Welcome to </span>
                  <strong className='rest-highlight'> CreatorsHub! </strong>
                </h6>
              </Col>
            </Row>
            <Row className='justify-content-center text-center mt-2'>
              <Col md={8}>
                <p className='textColor'>Please choose your account type. You can support other creators with either of the account types and can change your account type anytime.</p>
              </Col>
            </Row>
            <Row style={{ textAlign: "-webkit-center" }}>
              {cards.map((card) => (
                <Col md={6} className="mb-4" key={card.id}>
                  <Card
                    onClick={() => handleSelect(card.title)}
                    border={selectedCard === card.title ? 'primary' : 'lightBorder'}
                    style={{ cursor: 'pointer', borderWidth: selectedCard === card.id ? '2px' : '1px' }}
                  >
                    <Card.Img variant="top" src={card.svg} style={{ height: "200px" }} />
                    <Card.Body>
                      <Card.Title className='radioBtn'>{card.title}</Card.Title>
                      <Card.Text className='radioParagraph'>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <Row className='sec-type-row justify-content-center text-center my-5'>
            <Col sm={12} className='' style={{ placeContent: "end" }}>
              <h6 className='mt-3 mb-2'>
                <strong className='rest-highlight'> Create your account </strong>
              </h6>
              <p className='textColor'>Choose a name for your page.</p>
            </Col>

            <Col lg={8} md={10} sm={12}>
              <InputGroup className="mb-3 align-items-center">
                <InputGroup.Text id="userName" className='textColorUser my-4'>
                creatorshub.online/
                </InputGroup.Text>
                <FormControl
                  id="basic-url"
                  aria-describedby="userName"
                  className='textColor border-end-0'
                  placeholder="JhonDoe"
                  value={username}
                  onChange={handleInputChange}
                />
                <InputGroup.Text className='bg-white'>
                  {username ? (
                    loading ? (
                      <Spin size="small" />
                    ) : usernameValid === true ? (
                      <span style={{ color: 'green' }}>✔</span>
                    ) : usernameValid === false ? (
                      <span style={{ color: 'red' }}>✘</span>
                    ) : null
                  ) : <span style={{ visibility: "hidden" }}>nothing</span>}
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </>
      )
    },
    {
      title: "",
      content: (
        <>
          <Row className='justify-content-center text-center my-5'>
            <Row className='sec-type-row'>
              <Col className='text-center'>
                <h6 className='mt-3 mb-2'>
                  <span className='highlight-italic'> Welcome to </span>
                  <strong className='rest-highlight'>
                    CreatorsHub!
                  </strong>
                </h6>
              </Col>
            </Row>
            <Row className='justify-content-center text-center mt-2'>
              <Col md={8}>
                <p className='textColor'>Let’s sign in back into your account.</p>
              </Col>
            </Row>
            <Row className='justify-content-center social-signup-btn text-center mt-2 w-75'>
              <Col sm={12} className='position-relative my-2'>
                <Button
                  variant='light'
                  className='bg-white signup-btn-auth '
                  onClick={() => { }}
                >
                  <img className='mx-2' src={GoogleLogo} />
                  Sign in with Google
                  <img className='mx-2' src={Right} />
                </Button>
              </Col>

              <Col sm={12} className='position-relative my-2'>
                <Button
                  variant='light'
                  className='border border-1 bg-white signup-btn-auth '
                >
                  <img className='mx-2' src={TwitchLogo} />
                  Sign in with Twitch
                  <img className='mx-2' src={Right} />
                </Button>
              </Col>
              <Col sm={12} className='position-relative my-2'>
                <Button
                  variant='light'
                  className='border border-1 bg-white signup-btn-auth  '
                >
                  <img className='mx-2' src={AppleLogo} />
                  Sign in with Apple
                  <img className='mx-2' src={Right} />
                </Button>
              </Col>
            </Row>

            <Row className='justify-content-center social-signup-btn text-center mt-3 w-75'>
              <Col sm={6}
                className='position-relative'
              >
                <div className='position-relative d-flex justify-content-center align-items-center'>
                  <Button
                    variant='light'
                    className='border border-1 bg-white signup-btn-auth  '
                  > <img src={YoutubeLogo} />
                  </Button>
                </div>
              </Col>
              <Col sm={6} className='position-relative'>
                <div className='d-flex justify-content-center align-items-center'>
                  <Button
                    variant='light'
                    className='border border-1 bg-white signup-btn-auth'
                    size='50px'
                  >
                    <img src={TwitterLogo} />
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center text-center mt-3 w-75'>
              <hr className='hr-text mt-3' data-content='OR' />
              <Col>
                <Form>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text className='cutomInput'>
                      <img className='mx-2' src={mail} />
                    </InputGroup.Text>
                    <FormControl
                      className='cutomInput'
                      placeholder='you@email.com'
                      aria-label='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text className='cutomInput'>
                      <img className='mx-2' src={key} />
                    </InputGroup.Text>
                    <FormControl
                      className='cutomInput'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Password'
                      aria-label='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <InputGroup.Text
                      className='cutomInput'
                      style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        right: '0px',
                        zIndex: "9"
                      }}
                      onClick={togglePasswordVisibility}
                    >
                      <img className='mx-2' src={showPassword ? hidePasswordIcon : passwordIcon} />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
                {/* {error && <div className="text-danger mt-2">{error.message}</div>} */}
                <Flex gap="middle" align="flex-start" className='align-items-center' vertical>
                  <p className='textColor m-0'>OTP sent on your given email</p>
                  <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
                </Flex>
              </Col>
            </Row>
          </Row>
        </>)
    },
  ];

  const next = () => {
    if (current === 0 && !selectedCard) {
      message.error('Please select a card');
      return;
    }
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  return (
    <>
      <Container fluid>
        <Row className='align-items-center'>
          <Col md={6}>
            <Row style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
              <Col className='auth-left-main my-5' style={{ flex: 1, display: "flex", flexDirection: "column", width: "90%", alignSelf: "center" }}>
                <Row className='my-4 px-3' style={{ flex: "0 1 auto" }}>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Button
                      variant='dark'
                      className='bg-white text-black fw-semibold backBtn'
                      onClick={() => navigate('/')}
                    >
                      <FontAwesomeIcon
                        icon={faArrowLeft}
                        fill='blue'
                        className='fw-lighter fs-7 me-2'
                      />
                      Back
                    </Button>
                    <div>
                      <p className='fs-6 m-0 textWithClick'>
                        Already have an account? <span className='linkBtn'>
                          <Link
                            className='text-black fw-bold underlineposition'
                            to='/signin'
                          >
                            Sign in
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </Row>
                <Row className='' style={{ flex: "1 0 auto", justifyContent: "center" }}>
                  {steps[current].content}
                </Row>
                <Row className='my-5 px-3' style={{ flex: "0 1 auto" }}>

                  <hr className='hr-without-text' />
                  <div className='d-flex'>
                    <div className='flex-grow-1'>
                      <p className='fs-6 m-0 textWithClick'>
                        By continuing, you agree to the terms of service and <span>
                          <Link
                            className='text-black fw-bold underlineposition'
                            to='/forgot'
                          >
                            privacy policy.
                          </Link>
                        </span>
                      </p>
                    </div>
                    {current > 0 && (
                      <Button variant='dark' className=' d-flex mx-2 gap-2' onClick={() => prev()}>
                        <span>
                          <img src={arrowprev} />
                        </span>
                        Previous
                      </Button>
                    )}
                    {current < steps.length - 1 && (
                      <Button
                        onClick={() => next()}
                        variant='dark'
                        disabled={
                          (current === 0 && !selectedCard) ||
                          (current === 1 && (!username || usernameValid !== true))
                        }
                        className={current === 1 && (!username || usernameValid !== true) ? 'cursor-not-allowed' : ''}
                        style={{ fontSize: "18px" }}
                      >
                        Next
                        <span>
                          <img src={arrownext} className='mx-2' />
                        </span>
                      </Button>
                    )}
                    {current === steps.length - 1 && (
                      <Button
                        variant='dark'
                        className='d-flex text-white fw-semibold gap-2 mx-2'
                        // onClick={handleSignUp}
                        onClick={() => { }}
                        // disabled={loading}
                        style={{ fontSize: "18px" }}
                      >
                        Sign Up
                        {/* {loading ? 'Sign Up...' : 'Sign Up'} */}
                      </Button>
                    )}
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <CarouselCard />
        </Row>
      </Container>
      <Steps current={current} items={items} />
    </>
  );
};

export default SignUpForm;