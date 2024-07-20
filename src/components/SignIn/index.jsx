import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  faArrowLeft,
  faKey,
  faEyeSlash,
  faEye,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { signInStart, signInSuccess, signInFailure } from '../../redux/authSlice';
import { signinApi } from '../../Apis/api';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleLogo from './../../assets/svg/GoogleLogo.svg';
import TwitchLogo from './../../assets/svg/twitch.svg';
import AppleLogo from './../../assets/svg/apple.svg';
import YoutubeLogo from './../../assets/svg/youtube.svg';
import TwitterLogo from './../../assets/svg/twitter.svg';
import Right from "./../../assets/svg/chevronRight1.svg";
// import Right1 from "./../../assets/svg/chevronRight.svg";
import './style.scss';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const response = await signinApi({ email, password });
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

  return (
    <>
      <Container fluid>
        <Row style={{ height: "100vh" }}>
          <Col className='auth-left-main m-5 position-relative'>
            <Row className='my-4 px-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <Button
                  variant='dark'
                  className='bg-white text-black fw-semibold backBtn'
                  onClick={() => navigate('/signup')}
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
                    Don’t have an account? <span className='linkBtn'>
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
                    >
                      <img src={YoutubeLogo} />
                    </Button>
                  </div>
                </Col>
                <Col sm={6} className='position-relative'>
                  <div className='d-flex justify-content-center align-items-center'>
                    <Button
                      variant='light'
                      className='border border-1 bg-white signup-btn-auth  '
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
                  <form>
                    <InputGroup className='mb-3'>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <FormControl
                        placeholder='you@email.com'
                        aria-label='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                    <InputGroup className='mb-3'>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faKey} />
                      </InputGroup.Text>
                      <FormControl
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        aria-label='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputGroup.Text
                        style={{
                          cursor: 'pointer',
                          backgroundColor: 'white',
                          border: 'none',
                          position: 'absolute',
                          right: '1px',
                          top: '4px',
                          zIndex: '999',
                        }}
                        onClick={togglePasswordVisibility}
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                        />
                      </InputGroup.Text>
                    </InputGroup>

                  </form>
                  {error && <div className="text-danger mt-2">{error.message}</div>}
                </Col>
              </Row>
            </Row>
            <Row className='position-absolute w-100 px-3' style={{ bottom: "3%" }}>
              <hr className='hr-without-text' />
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <p className='fs-6 m-0 textWithClick'>
                    Forgot Password? Reset it by <span>
                      <Link
                        className='text-black fw-bold underlineposition'
                        to='/forgot'
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
                  className='d-flex text-white fw-semibold gap-2'
                  size='lg'
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                  <span>
                    <svg width='6' height='8' viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M1.25 7.5L4.75 4L1.25 0.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </span>
                </Button>
              </div>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default SignInForm;
