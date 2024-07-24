import React, { useState } from 'react'
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'
import { Form, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CarouselCard from '../CarouselCard';
import mail from './../../../assets/svg/mail.svg';

import './style.scss'

const ForgotPassWord = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit=()=>{
        console.log("clicked")
    }

    return (
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
                                        Go Home
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
                                <Row className='sec-type-row'>
                                    <Col sm={12} className='text-center align-content-end'>
                                        <h6 className='mt-3 mb-2'>
                                            <strong className='rest-highlight'>
                                                Forgot Your Password?
                                            </strong>
                                        </h6>
                                        <p className='textColor'>We’ll send you a link to reset your password in email.</p>
                                    </Col>
                                </Row>
                                <Row className='justify-content-center text-center mt-2'>
                                    <Col md={8}>
                                        <form>
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
                                        </form >
                                    </Col>
                                </Row>
                            </Row>
                            <Row className='my-4 px-3' style={{ flex: "0 1 auto" }}>
                                <hr className='hr-without-text' />
                                <div className=''>
                                    <Button
                                        type='submit'
                                        variant='dark'
                                        className='d-flex text-white fw-semibold gap-2'
                                        size='lg'
                                        style={{ fontSize: "18px", float:"inline-end" }}
                                        onClick={()=>{handleSubmit()}}
                                    >
                                        Submit
                                        <span>
                                            <svg width='6' height='8' viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M1.25 7.5L4.75 4L1.25 0.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
                                            </svg>
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
    )
}

export default ForgotPassWord
