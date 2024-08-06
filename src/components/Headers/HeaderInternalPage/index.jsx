import React, { useState } from 'react';
import { Button, Container, Dropdown, DropdownButton, Form, Nav, Navbar, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from "./../../../assets/svg/CreatorHubLogo.svg";
import DarkLightSwitchButton from '../../DarkLightSwitchButton';
import searchIcon from './../../../assets/svg/search.svg';
import avatar from './../../../assets/Images/Avatar.png';
import DropdownIcon from './../../../assets/svg/dropdownIcon.svg';
import bell from './../../../assets/svg/bell.svg';
import cart from './../../../assets/svg/cart.svg';
import avatarImage from './../../../assets/svg/notification_avtar.svg'; // Import the image with a unique name
import avatarImage1 from './../../../assets/svg/notification_avtar1.svg';
import Marksvg from './../../../assets/svg/mark.svg'
import Giftcartavatar from './../../../assets/svg/Giftcartavatar.svg'
import Giftcart1 from './../../../assets/svg/giftcart1.svg'
import Giftcart2 from './../../../assets/svg/giftcart2.svg'
import Deleteicon from './../../../assets/svg/deleteicon.svg'
import img from './../../../assets/svg/img.svg'
import sound from './../../../assets/svg/sound.svg'
import mice from './../../../assets/svg/mice.svg'
import videorecord from './../../../assets/svg/videorecord.svg'
import dummyprofile from './../../../assets/svg/dummyprofile.svg'
import write from './../../../assets/svg/write.svg'
import fantick from './../../../assets/svg/fantick.svg'
import './style.scss';
import './../../../pages/dashboard.scss'

const HeaderInternalPage = () => {
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    const handleShowNotification = () => setShowNotificationModal(true);
    const handleCloseNotification = () => setShowNotificationModal(false);

    const handleShowCart = () => setShowCartModal(true);
    const handleCloseCart = () => setShowCartModal(false);

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
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={NavLink} to="/contact" activeclassname="active-nav-link">Timelines</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" activeclassname="active-nav-link">My Pages</Nav.Link>
                            <Nav.Link as={NavLink} to="/sentgifts" activeclassname="active-nav-link">Sent Gifts</Nav.Link>
                            <Nav.Link as={NavLink} to="/explore" activeclassname="active-nav-link">Explore</Nav.Link>
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
                            {/* <Form.Check
                                type="switch"
                                id="custom-switch"
                                className="custom-switch mx-3"
                            /> */}
                            <div className='mx-2' style={{ color: "#E5E7EB" }}>|</div>
                            {/* <Button className='mx-2 w-50 giftBtn' variant="primary"><span className='me-3'>+</span>Add Gift</Button> */}
                            <DropdownButton className="custom-dropdown-button" id="dropdown-basic-button" title={
                                <div className="d-flex align-items-center gap-2">
                                    <img src={avatar} alt="Avatar" className="avatar" />
                                    Jenna Kelly
                                    <img src={DropdownIcon} alt='' />
                                </div>
                            }>
                                <Dropdown.Item>
                                    <div className='d-flex profileDetail gap-3' style={{background:"#F3F4F6"}}>
                                        <img src={dummyprofile} alt="" />
                                        <div>
                                            <p className='m-0'>Signed in as</p>
                                            <h3 style={{ fontSize: "14px" }}>Mason Cooper<span className='ms-3'><img src={fantick} alt="" /></span></h3>
                                        </div>
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item><span className='me-3'><img src={img} alt="" /></span>Image/Video</Dropdown.Item>
                                <Dropdown.Item href="/"><span className='me-3'><img src={sound} alt="" /></span>Audio</Dropdown.Item>
                                <Dropdown.Item href="/"><span className='me-3'><img src={mice} alt="" /></span>Audio Record</Dropdown.Item>
                                <Dropdown.Item href="/"><span className='me-3'><img src={videorecord} alt="" /></span>Video Record</Dropdown.Item>
                                <Dropdown.Item href="/"><span className='me-3'><img src={write} alt="" /></span>Blogs</Dropdown.Item>
                            </DropdownButton>
                            <Button className='giftBtn bg-white iconBtn mx-2' onClick={handleShowNotification}>
                                <img src={bell} alt="" />
                            </Button>
                            <Button className='giftBtn bg-white iconBtn mx-2' onClick={handleShowCart}>
                                <img src={cart} alt="" />
                            </Button>
                        </Form>
                        {/* <DarkLightSwitchButton /> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showNotificationModal} onHide={handleCloseNotification}>
                <Modal.Header closeButton className='headerpart'>
                    <Modal.Title className='headerpart_1'>
                        <h2 className='notihead'>Notifications <span>6</span></h2>
                        <p className='notihead_underline'>Stay informed about your favorite creators.</p>
                        {/* <div className='headerpart_2'>
                            <button type="button" class="btn-close" aria-label="Close"></button>
                        </div> */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='new_notifications_popup'>
                        <h1>New</h1>
                        <div className='author_with_time_notifications'>
                            <div className='author_details_withimage'>
                                <img src={avatarImage} alt='Avatar' /> {/* Fallback to imported image */}
                                <div className='authordetails'>
                                    <p className='author_spanname1'>Talon Everett has purchased your gift.</p>
                                    <p className='author_emailspan1'>Your wishlist was visited by 53 fans last week.</p>
                                </div>
                            </div>
                            <div className='notification_time'>3 days ago </div>
                        </div>
                        <div className='author_with_time_notifications'>
                            <div className='author_details_withimage'>
                                <img src={avatarImage1} alt='Avatar' /> {/* Fallback to imported image */}
                                <div className='authordetails'>
                                    <p className='author_spanname1'>Jessica Davis new gift added.</p>
                                    <p className='author_emailspan1'>Your wishlist was visited by 48 fans last week.</p>
                                </div>
                            </div>
                            <div className='notification_time'>4 days ago </div>
                        </div>

                        {/* Older Notifications */}
                        <div className='custom_vertical_space'></div>
                        <h1>Older</h1>
                        <div className='author_with_time_notifications'>
                            <div className='author_details_withimage'>
                                <img src={Marksvg} alt='Avatar' /> {/* Fallback to imported image */}
                                <div className='authordetails'>
                                    <p className='author_spanname1'>Jim Beam new gift added.</p>
                                    <p className='author_emailspan1'>Your wishlist was visited by 32 fans last week.</p>
                                </div>
                            </div>
                            <div className='notification_time'>7 days ago </div>
                        </div>
                        <div className='author_with_time_notifications'>
                            <div className='author_details_withimage'>
                                <img src={avatarImage} alt='Avatar' /> {/* Fallback to imported image */}
                                <div className='authordetails'>
                                    <p className='author_spanname1'>Dave Clark new gift added.</p>
                                    <p className='author_emailspan1'>Your wishlist was visited by 66 fans last week.</p>
                                </div>
                            </div>
                            <div className='notification_time'>10 days ago </div>
                        </div>
                        <div className='author_with_time_notifications'>
                            <div className='author_details_withimage'>
                                <img src={avatarImage} alt='Avatar' /> {/* Fallback to imported image */}
                                <div className='authordetails'>
                                    <p className='author_spanname1'>Talon Everett has purchased your gift.</p>
                                    <p className='author_emailspan1'>Your wishlist was visited by 53 fans last week.</p>
                                </div>
                            </div>
                            <div className='notification_time'>11 days ago </div>
                        </div>
                        <div className='custom_vertical_space'></div>


                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseNotification}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>

            <Modal show={showCartModal} onHide={handleCloseCart}>
                <Modal.Header closeButton className='headerpart'>
                    <Modal.Title className='headerpart_1'>
                        <h2 className='notihead'> Gift Cart</h2>
                        <div className='Giftcartwithimage'>
                            <p className='notihead_underline'>Send gifts to</p>
                            <img src={Giftcartavatar} alt="" />
                            <p style={{ fontSize: "16px" }}>Sarah Smith</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='outerGiftcartlistbox'>
                        <div className='leftsideGiftcartlist'>
                            <div>
                                <img src={Giftcart1} alt="" />
                            </div>
                            <div className='giftcartDescriptionbox'>
                                <div className='giftcartDescriptionboxinner'>
                                    <h1 className='h3heading'>Lakme Absolute Blur Perfect Matte Face...</h1>
                                    <div className='giftspan'>Gift</div>
                                    <div className='productGiftprice'>$ <span>49</span></div>
                                </div>
                                <p className='parab2'>Discover Lakme Absolute Blur Perfect Matte Face Pack for a flawless, matte finish. Ideal for all skin types, it refines pores and enhances radiance.</p>
                            </div>
                        </div>
                        <div className='rightsideGiftcartdelete'>
                            <img src={Deleteicon} alt="" />
                        </div>
                    </div>
                    <div className='outerGiftcartlistbox'>
                        <div className='leftsideGiftcartlist'>
                            <div>
                                <img src={Giftcart2} alt="" />
                            </div>
                            <div className='giftcartDescriptionbox'>
                                <div className='giftcartDescriptionboxinner'>
                                    <h1 className='h3heading'>RENEE Glass Glow Pre Make-up Oil Primer...</h1>
                                    <div className='giftspan'>Gift</div>
                                    <div className='productGiftprice'>$ <span>19</span></div>
                                </div>
                                <p className='parab2'>Discover Renee Glass Glow Pre-Makeup Oil Primer for radiant, smooth skin. Enhance your makeup routine with nourishing oils for a luminous finish.</p>
                            </div>
                        </div>
                        <div className='rightsideGiftcartdelete'>
                            <img src={Deleteicon} alt="" />
                        </div>
                    </div>

                    <div className='Giftcarttotalouter'>
                        <p className='pgray_b1'>Subtotal: <b style={{ color: '#000000' }}>$68</b></p>
                        <p className='parab2'>*Processing fees & extras will be calculated at checkout</p>
                    </div>
                    <div className='spcial_margin_top'></div>
                    <div className='fotterpartpopup'>
                        <h3 className='h3heading_15'>Clear Cart</h3>
                        <button className='btn filterapplybtn'>Checkout</button>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseCart}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default HeaderInternalPage;
