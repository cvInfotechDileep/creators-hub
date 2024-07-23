// import React from 'react'

// const ForgotPassWord = () => {
//   return (
//     <div>ForgotPassWord</div>
//   )
// }

// export default ForgotPassWord

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, FormControl, InputGroup, Row, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';


const ForgotPassword = () => {

    const [email, setEmail] = useState("")

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
                                {/* <div>
                  <p className='fs-6 m-0 textWithClick'>
                    Want Sign In? <span className='linkBtn'>
                      <Link
                        className='text-black fw-bold underlineposition'
                        to='/signin'
                      >
                        Sign Up
                      </Link>
                    </span>
                  </p>
                </div> */}
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
                                    </Form>
                                    {/* {error && <div className="text-danger mt-2">{error.message}</div>} */}
                                </Col>
                            </Row>
                        </Row>
                        <Row className='position-absolute w-100 px-3' style={{ bottom: "3%" }}>
                            <hr className='hr-without-text' />

                        </Row>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default ForgotPassword;
