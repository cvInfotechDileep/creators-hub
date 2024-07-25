import React, { useEffect } from 'react'
import { Container, FormControl, InputGroup, Nav, Navbar, Button, Form } from 'react-bootstrap'
import Logo from "./../../../assets/svg/CreatorHubLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import toggleicon from "./../../../assets/svg/toggleicon.svg";
import userPlus from "./../../../assets/svg/user-plus.svg";
import { Link, useNavigate } from 'react-router-dom';
import "./style.scss"
// import { useSelector } from 'react-redux';

const HeaderLandingPage = () => {
    const navigate = useNavigate();

    const reloadFeature = () => {
        navigate('/signup', { state: { reload: true } });
    }
    // const theme = useSelector((state) => state.theme);

    // useEffect(() => {
    //     document.body.className = theme;
    // }, [theme]);

    return (
        <>
            <Container fluid className="p-0">
                <div className="App"></div>
                <div className="transparent-nav ">
                    <Navbar expand="lg" bg="transparent" className="sticky-header">
                        <Navbar.Brand href="#home">
                            <img
                                src={Logo}
                                className="d-inline-block align-top creator-hub-logo m-0"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls="basic-navbar-nav"
                            type="white"
                            style={{ backgroundColor: "white" }}
                        />
                        <Navbar.Collapse id="basic-navbar-nav" className="navbar-col">
                            <Nav className="me-auto">
                                <Nav.Link href="#">Home</Nav.Link>
                                <Nav.Link href="#">About Us</Nav.Link>
                                <Nav.Link href="#">How It Works</Nav.Link>
                                <Nav.Link href="#">Contact Us</Nav.Link>
                                <Nav.Link href="#">FAQ</Nav.Link>
                                <div className="animation start-home"></div>
                            </Nav>
                            <Form className="   custom-search col-6">
                                <div className="search-bar-wrapper">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            type="search"
                                            placeholder="Search Creator"
                                            aria-label="Search"
                                            className="custom-search-input"
                                        />
                                    </InputGroup>
                                    <FontAwesomeIcon
                                        icon={faSearch}
                                        color="#6B7280"
                                        className="custom-search-icon"
                                    />
                                </div>
                                <span onClick={() => {
                                    // setIsDay(!isDay);
                                }}
                                >
                                    {" "}
                                    <img src={toggleicon} className="toggle-icon-daynight" />
                                </span>

                                <Link to='/signin' onClick={() => reloadFeature()}>
                                    <Button variant="dark" className="headers-btn-login">
                                        Log In
                                    </Button>
                                </Link>
                                <Link to='/signup' onClick={() => reloadFeature()}>
                                    <Button variant="dark" className=" headers-btn-signup">
                                        <img src={userPlus} /> Sign Up
                                    </Button>
                                </Link>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container>
        </>
    )
}

export default HeaderLandingPage