import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowLeft, faKey, faEyeSlash, faEye, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { signInStart, signInSuccess, signInFailure } from '../../../redux/authSlice';
import { signinApi } from '../../../Apis/api';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleLogo from './../../../assets/svg/GoogleLogo.svg';
import TwitchLogo from './../../../assets/svg/twitch.svg';
import AppleLogo from './../../../assets/svg/apple.svg';
import hidePasswordIcon from '../../../assets/svg/hidePasswordIcon.svg'
import passwordIcon from '../../../assets/svg/passwordIcon.svg'
import YoutubeLogo from './../../../assets/svg/youtube.svg';
import TwitterLogo from './../../../assets/svg/twitter.svg';
import Right from "./../../../assets/svg/chevronRight1.svg";
import mail from './../../../assets/svg/mail.svg';
import key from './../../../assets/svg/key.svg';
import arrownext from "./../../../assets/svg/arrownext.svg";
import './style.scss';
import './../style.scss';
import CarouselCard from '../CarouselCard';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [loginUrl, setLoginUrl] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const { data } = await signinApi({ email, password });
      console.log({ data })
      const { token } = response.data;
      localStorage.setItem('token', token);
      dispatch(signInSuccess(token));
      navigate('/dashboard');
    } catch (error) {
      dispatch(signInFailure(error.response.data));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    fetch('https://creatorshub.online/apibackend/auth/google', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) =>{
        console.Log(data,"kkkkkkkkkkk")
         setLoginUrl(data.url)
      }
    )
      .catch((error) => console.error(error));
  }, []);



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
                      className='bg-white text-black fw-semibold backBtn common-button'
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
                      <p className='fs-6 m-0 textWithClick common-paragraph'>
                        Don’t have an account? <span className='linkBtn'>
                          { }
                          <Link
                            className='text-black fw-bold underlineposition'
                            to='/signup'
                          >
                            Sign Up
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </Row>
                <Row className='' style={{ flex: "1 0 auto", justifyContent: "center" }}>
                  <Row className='sec-type-row'>
                    <Col className='text-center'>
                      <h6 className='mt-3 mb-2 common-heading'>
                        <span className='highlight-italic common-font-style'> Welcome to </span>
                        <strong className='rest-highlight common-font-style'>
                          CreatorsHub!
                        </strong>
                      </h6>
                    </Col>
                  </Row>
                  <Row className='justify-content-center text-center mt-2'>
                    <Col md={8}>
                      <p className='textColor common-paragraph'>Let’s sign in back into your account.</p>
                    </Col>
                  </Row>
                  <Row className='justify-content-center social-signup-btn text-center mt-2 w-75'>
                    <Col sm={12} className='position-relative my-2'>
                      {/* <div>
                        {loginUrl != null && (
                          <a href={loginUrl}>Google Sign In</a>
                        )}
                      </div> */}
                      {console.log(loginUrl,"öooo")}
                      <Button
                          variant='light'
                          className='bg-white signup-btn-auth common-button'
                          onClick={() => navigate(loginUrl)}
                        >
                          <img className='mx-2' src={GoogleLogo} alt="Google Logo" />
                          Sign in with Google
                          <img className='mx-2' src={Right} alt="Arrow Right" />
                        </Button>
                      {/* <Button
                      variant='light'
                      className='bg-white signup-btn-auth common-button'
                      onClick={() => { }}
                    >
                      <img className='mx-2' src={GoogleLogo} />
                      
                      Sign in with Google
                      <img className='mx-2' src={Right} />
                    </Button> */}
                    </Col>

                    <Col sm={12} className='position-relative my-2'>
                      <Button
                        variant='light'
                        className='border border-1 bg-white signup-btn-auth common-button'
                      >
                        <img className='mx-2' src={TwitchLogo} />
                        Sign in with Twitch
                        <img className='mx-2' src={Right} />
                      </Button>
                    </Col>
                    <Col sm={12} className='position-relative my-2'>
                      <Button
                        variant='light'
                        className='border border-1 bg-white signup-btn-auth common-button'
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
                          className='border border-1 bg-white signup-btn-auth common-button'
                        >
                          <img src={YoutubeLogo} />
                        </Button>
                      </div>
                    </Col>
                    <Col sm={6} className='position-relative'>
                      <div className='d-flex justify-content-center align-items-center'>
                        <Button
                          variant='light'
                          className='border border-1 bg-white signup-btn-auth common-button'
                          size='50px'
                        >
                          <img src={TwitterLogo} />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row className='justify-content-center text-center w-75'>
                    <div className="separator my-2">OR</div>
                    <Col>
                      <form>
                        <InputGroup className='mb-3'>
                          <InputGroup.Text
                            className='customInput'>
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
                          <InputGroup.Text
                            className='customInput'>
                            <img className='mx-2' src={key} />
                          </InputGroup.Text>
                          <FormControl
                            className='customInput'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            aria-label='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <InputGroup.Text className='customInput' onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                            <img src={showPassword ? hidePasswordIcon : passwordIcon} alt="toggle password visibility" />
                          </InputGroup.Text>
                        </InputGroup>
                      </form>
                      {error && <div className="text-danger mt-2">{error.message}</div>}
                    </Col>
                  </Row>
                </Row>
                <Row className='my-4 px-3' style={{ flex: "0 1 auto" }}>
                  <hr className='hr-without-text' />
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <p className='fs-6 m-0 textWithClick common-paragraph'>
                        Forgot Password? Reset it by <span>
                          <Link
                            className='text-black fw-bold underlineposition'
                            to='/forgot-password'
                          >
                            Clicking here
                          </Link>
                        </span>
                      </p>
                    </div>
                    <Button
                      type='submit'
                      onClick={handleSubmit}
                      variant='dark'
                      className='d-flex text-white fw-semibold gap-2 common-button globalGrediantBtn'
                      size='lg'
                      disabled={loading}
                      style={{ fontSize: "18px" }}
                    >
                      {loading ? 'Signing in...' : 'Sign In'}
                      <span>
                        <img src={arrownext} alt="arrow" />
                      </span>
                    </Button>
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <CarouselCard />
        </Row>
      </Container>
    </>
  );
};

export default SignInForm;
