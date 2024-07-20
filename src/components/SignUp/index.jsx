import React, { useState } from 'react';
import { message, Steps, theme } from 'antd';
import { Col, Container, Row, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
import CreatorSVG from './../../assets/svg/Creator.svg';
import FanSVG from './../../assets/svg/Fan.svg';
import { signUpApi } from '../../Apis/api';

const SignUpForm = () => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [selectedCard, setSelectedCard] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSelect = (id) => {
    setSelectedCard(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, password, password_confirmation } = formData;
    let isValid = true;
    let newErrors = { name: '', email: '', password: '', password_confirmation: '' };

    // name validation
    if (!name) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required.';
      isValid = false;
    }

    // Confirm password validation
    if (password !== password_confirmation) {
      newErrors.password_confirmation = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async () => {
    if (validateForm()) {
      setLoading(true); // Set loading to true before API call
      try {
        // Example API call
        await signUpApi({
          selectedCardTitle: cards.find((card) => card.id === selectedCard)?.title,
          ...formData
        });
        message.success('Sign up successful!');
        setLoading(false); // Set loading to false after successful API call
      } catch (error) {
        // console.error('Sign up error:', error);
        message.warning('User already exist.');
        setLoading(false); // Set loading to false if there is an error
      }
    } else {
      message.error('Please fix the errors and try again.');
    }
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
            <Row className="justify-content-center text-center">
              {cards.map((card) => (
                <Col md={6} className="mb-4" key={card.id} style={{ width: "294px" }}>
                  <Card
                    onClick={() => handleSelect(card.id)}
                    border={selectedCard === card.id ? 'primary' : 'light'}
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
      title: '',
      content: (
        <>
          <Row className='justify-content-center text-center my-5'>
            <Row className='sec-type-row'>
              <Col className='' style={{ placeContent: "end" }}>
                <h6 className='mt-3 mb-2'>
                  <strong className='rest-highlight'> Create your account </strong>
                </h6>
              </Col>
            </Row>
            <Row className='justify-content-center text-center mt-2'>
              <Col md={8}>
                <p className='textColor'>Choose a name for your page.</p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={8}>
                <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formname">
                    <Form.Label className='text-start lbl' column sm={4}>Name<sup>*</sup></Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="text" 
                        placeholder="Enter name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formEmail">
                    <Form.Label className='text-start lbl' column sm={4}>Email<sup>*</sup></Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formPassword">
                    <Form.Label className='text-start lbl' column sm={4}>Password<sup>*</sup></Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Enter password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />
                      <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formpassword_confirmation">
                    <Form.Label className='text-start lbl' column sm={4}>Confirm Password<sup>*</sup></Form.Label>
                    <Col sm={8}>
                      <Form.Control 
                        type="password" 
                        placeholder="Confirm password" 
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        isInvalid={!!errors.password_confirmation}
                      />
                      <Form.Control.Feedback type="invalid">{errors.password_confirmation}</Form.Control.Feedback>
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Row>
        </>
      ),
    },
  ];

  const next = () => {
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
        <Row>
          <Col md={6}>
            <Row style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
              <Col className='auth-left-main m-5' style={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
                <Row className='' style={{ flex: "1 0 auto", justifyContent: "center" }}>
                  {steps[current].content}
                </Row>
                <Row className='my-5 px-3' style={{ flex: "0 1 auto" }}>
                  <hr className='hr-without-text' />
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
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
                    {current < steps.length - 1 && (
                      <Button variant='dark' className='d-flex text-white fw-semibold gap-2' onClick={next}>
                        Next<span>
                          <svg width='6' height='8' viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M1.25 7.5L4.75 4L1.25 0.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                          </svg>
                        </span>
                      </Button>
                    )}
                    {current === steps.length - 1 && (
                      <Button
                        variant='dark'
                        className='d-flex text-white fw-semibold gap-2'
                        onClick={handleSignUp}
                        disabled={loading} // Disable the button while loading
                      >
                        {loading ? 'Sign Up...' : 'Sign Up'} {/* Show loading text */}
                      </Button>
                    )}
                  </div>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
      <Steps current={current} items={items} />
    </>
  );
};

export default SignUpForm;
