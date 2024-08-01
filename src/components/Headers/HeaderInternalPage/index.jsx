import React from 'react'
import { Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap'
import Logo from "./../../../assets/svg/CreatorHubLogo.svg"
import DarkLightSwitchButton from '../../DarkLightSwitchButton'
import searchIcon from './../../../assets/svg/search.svg'
import avatar from './../../../assets/Images/Avatar.png'
import DropdownIcon  from './../../../assets/svg/dropdownIcon.svg';
import bell from './../../../assets/svg/bell.svg'
import cart from './../../../assets/svg/cart.svg'
import './style.scss'

const HeaderInternalPage = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='mx-4'>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            className="d-inline-block align-top creator-hub-logo m-0"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex align-items-center">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="rounded-start-pill searchStyle border border-end-0"
                                aria-label="Search"
                            />
                            <Button className='bg-white rounded-end-circle searchbtn border border-start-0 rounded-0'>
                                <img src={searchIcon} alt='' />
                            </Button>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="custom-switch mx-3"
                            />
                            <div className='mx-2' style={{ color: "#E5E7EB" }}>|</div>
                            <Button className='mx-2 w-50 giftBtn' variant="primary"><span className='me-3'>+</span>Add Gift</Button>
                            <DropdownButton className="custom-dropdown-button" id="dropdown-basic-button" title={
                                <div className="d-flex align-items-center gap-2">
                                    <img src={avatar} alt="Avatar" className="avatar" />
                                    Jenna Kelly
                                    <img src={DropdownIcon} alt=''/>
                                    {/* <DropdownIcon classNam}e="custom-icon" /> */}
                                </div>
                                
                            }>
                                <Dropdown.Item href="/">Profile</Dropdown.Item>
                                <Dropdown.Item href="/">Settings</Dropdown.Item>
                                <Dropdown.Item href="/">Account</Dropdown.Item>
                            </DropdownButton>
                            <Button className='giftBtn bg-white iconBtn mx-2'><img src={bell} alt="" /></Button>
                            <Button className='giftBtn bg-white iconBtn mx-2'><img src={cart} alt="" /></Button>

                        </Form>
                        <DarkLightSwitchButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default HeaderInternalPage
