import React, { useEffect, useRef, useState } from 'react';
import { message, Steps, Flex, Input, Spin, Progress } from 'antd';
import { Col, Container, Row, Card, Button, FormControl, InputGroup, Form } from 'react-bootstrap';
import { LoadingOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import ReCAPTCHA from 'react-google-recaptcha';
import './../style.scss';
import { checkUsernameApi, signUpApi } from '../../../Apis/api';
import creatorjson from "./../../../assets/Creator.json"
import fanjson from "./../../../assets/Fan.json"
import Lottie from 'lottie-web';


// Debounce function to limit the rate at which a function can fire
const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [strengthText, setStrengthText] = useState('');
  const [selectedCard, setSelectedCard] = useState("");
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [usernameValid, setUsernameValid] = useState(null); // null = no check yet, true = valid, false = invalid

  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  let debounceTimeout = null;

  const handleSelect = (userType) => {
    setSelectedCard(userType);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const evaluatePasswordStrength = (password) => {
    const strength = getPasswordStrength(password);
    setPasswordStrength(strength);

    if (strength === 0) setStrengthText('Too Short');
    else if (strength === 1) setStrengthText('Weak');
    else if (strength === 2) setStrengthText('Moderate');
    else if (strength === 3) setStrengthText('Strong');
    else if (strength === 4) setStrengthText('Very Strong');
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluatePasswordStrength(newPassword);
  };

  const getProgressBarColor = (strength) => {
    if (strength === 1) return 'red';
    if (strength === 2) return 'orange';
    if (strength === 3) return 'yellow';
    if (strength === 4) return 'green';
    return 'grey';
  };

  const checkUsername = async (username) => {
    if (username) {
      setLoading(true);
      try {
        const { data } = await checkUsernameApi(username, selectedCard);
        if (data.message === "exist") {
          setUsernameValid(true);
        }
      } catch (error) {
        console.error('Username check error:', error);
        setUsernameValid(false);
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
  }, [username, debounce]);

  // useEffect(() => {
  //   // Load reCAPTCHA script
  //   const script = document.createElement('script');
  //   script.src = `https://www.google.com/recaptcha/api.js?render=6LemKhcqAAAAAOm1dYEx1JYVYFwNpXF1EEUI37GV`;
  //   script.async = true;
  //   document.body.appendChild(script);

  //   script.onload = () => {
  //     window.grecaptcha.ready(() => {
  //       window.grecaptcha.execute();
  //     });
  //   };
  // }, []);

  const handleSignUp = async () => {



    setLoading(true);
    try {
      // Replace with your actual API call
      const { data } = await signUpApi({ email, password, username, user_type: selectedCard, name: username });
      console.log({ data }, "hhhhhhhh")
      console.log(recaptchaToken);
      if (data.status) {
        setShowOtp(true);
        message.success('Sign up successful. OTP sent to your email.');
      } else {
        message.error(response.message || 'Sign up failed');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      message.error('Sign up failed');
    }
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };


  const playAnimation = (sec) => {
    if (sec == 1) {
      animation.current.playSegments(
        [0, animation.current.timeCompleted],
        true
      );
      animation.current.setSpeed(1); // Reset speed to normal
    } else {
      animation1.current.playSegments(
        [0, animation1.current.timeCompleted],
        true
      );
      animation1.current.setSpeed(1); // Reset speed to normal
    }
  };

  const container = useRef(null);
  const animation = useRef(null);
  const container1 = useRef(null);
  const animation1 = useRef(null);
  // Initialize animation on component mount
  useEffect(() => {
    animation.current = Lottie.loadAnimation({
      container: container.current,
      animationData: creatorjson,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    // Cleanup function to destroy animation on component unmount
    return () => {
      animation.current.destroy();
    };
  }, []);

  useEffect(() => {
    animation1.current = Lottie.loadAnimation({
      container: container1.current,
      animationData: fanjson,
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    // Cleanup function to destroy animation on component unmount
    return () => {
      animation1.current.destroy();
    };
  }, []);

  // Function to play animation in reverse on mouse leave
  const reverseAnimation = (sec) => {
    if (sec == 1) {
      animation.current.playSegments(
        [animation.current.timeCompleted, 0],
        true
      );
      animation.current.setSpeed(1); // Reset speed to normal
    } else {
      animation1.current.playSegments(
        [animation1.current.timeCompleted, 0],
        true
      );
      animation1.current.setSpeed(1); // Reset speed to normal
    }
  };
  const cards = [
    { id: 1, title: 'Creator', text: 'I’d like to create a wishlist', svg: CreatorSVG, container: container, playAnimation: playAnimation, reverseAnimation: reverseAnimation },
    { id: 2, title: 'Fan', text: 'I’m here to follow & support creators', svg: FanSVG, container: container1, playAnimation: playAnimation, reverseAnimation: reverseAnimation },
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
            <Row className='w-75' style={{ textAlign: "-webkit-center" }}>
              {cards.map((card) => (
                <Col md={6} className="mb-4" key={card.id}>
                  <Card
                    className='align-items-center p-2 bg-white'
                    onClick={() => handleSelect(card.title.toLowerCase())}
                    border={selectedCard === card.title.toLowerCase() ? 'primary' : 'lightBorder'}
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      ref={card.container}
                      onMouseEnter={() => card.playAnimation(card.id)}
                      onMouseLeave={() => card.reverseAnimation(card.id)}
                    ></div>
                    {/* <Card.Img variant="top" src={card.svg} style={{ height: "200px" }} /> */}
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
                      <Spin indicator={<LoadingOutlined spin style={{ fontSize: '24px' }} />} />
                    ) : usernameValid === false ? (
                      <span style={{ color: 'green' }}>✔</span>
                    ) : usernameValid === true ? (
                      <span style={{ color: 'red' }}>✘</span>
                    ) : null
                  ) : (
                    <span style={{ visibility: 'hidden' }}>nothing</span>
                  )}
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
                    CreatorsHub,&nbsp;
                  </strong>
                  <strong className='rest-highlight userNameColor'>
                    {username}!
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
            <div className="separator my-2">OR</div>
              <Col>
                <Form>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text className='customInput'>
                      <img className='mx-2' src={mail} />
                    </InputGroup.Text>
                    <FormControl
                      className='customInput'
                      placeholder='you@email.com'
                      aria-label='Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                  <InputGroup className='mb-3'>
                    <InputGroup.Text className='customInput'>
                      <img className='mx-2' src={key} />
                    </InputGroup.Text>
                    <FormControl
                      className='customInput'
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <InputGroup.Text className='customInput' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                      <img src={showPassword ? hidePasswordIcon : passwordIcon} alt="toggle password visibility" />
                    </InputGroup.Text>
                  </InputGroup>
                  {password && (
                    <div className='d-flex' style={{ fontSize: "12px" }}>
                      <Progress
                        percent={passwordStrength * 25}
                        strokeColor={getProgressBarColor(passwordStrength)}
                        showInfo={false}
                        style={{ marginBottom: '5px' }}
                      />
                      <p className="password-strength-text">{strengthText}</p>
                    </div>
                  )}
                  {/* <InputGroup className='mb-3 justify-content-center d-grid'>
                    <p>
                      Varify you are a Human!
                    </p>
                    <ReCAPTCHA
                      sitekey="emKhcqAAAAAOm1dYEx1JY6LVYFwNpXF1EEUI37GV"
                      onChange={handleRecaptchaChange}
                    />
                  </InputGroup> */}
                </Form>
                {/* {error && <div className="text-danger mt-2">{error.message}</div>} */}
                {
                  showOtp && (
                    <Flex gap="middle" align="flex-start" className='align-items-center' vertical>
                      <p className='textColor m-0'>OTP sent on your given email</p>
                      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
                    </Flex>
                  )
                }

              </Col>
            </Row>
          </Row>
        </>)
    },
  ];

  const getPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;
  };

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
                <Row className='my-4 px-3 top-row'>
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
                      Go Home
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

                <Row className='flex-grow-1 d-flex align-items-center justify-content-center middle-row'>
                  {steps[current].content}
                </Row>

                <Row className='my-5 px-3 bottom-row'>
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
                    {/* {current > 0 && (
                      <Button
                        variant='dark'
                        className=' d-flex mx-2 gap-2'
                        onClick={() => prev()}
                        style={{ fontSize: "18px", alignItems: "center", display: "flex" }}
                      >
                        <span>
                          <img src={arrowprev} />
                        </span>
                        Previous
                      </Button>
                    )} */}
                    {current < steps.length - 1 && (
                      <Button
                        onClick={() => next()}
                        variant='dark'
                        disabled={
                          (current === 0 && !selectedCard) ||
                          (current === 1 && (!username || usernameValid !== false))
                        }
                        className={current === 1 && (!username || usernameValid !== true) ? 'cursor-not-allowed' : ''}
                        style={{ fontSize: "18px", alignItems: "center", display: "flex" }}
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
                        className='d-flex text-white fw-semibold gap-2 mx-2 globalGrediantBtn'
                        onClick={() => handleSignUp()}
                        disabled={loading || !email || !password}
                        style={{ fontSize: "18px", alignItems: "center", display: "flex" }}
                      >
                        {loading ? 'Signing Up...' : 'Sign Up'}
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