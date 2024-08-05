import React, { useState } from 'react'
import { Col, Container, Row, Modal, Form, InputGroup } from 'react-bootstrap'
import ProfileSection from '../ProfileSection'
import Questionmark from './../../../assets/svg/question_mark.svg'
import Useraccountimg from './../../../assets/svg/useraccountimg.svg'
import Emailicon from './../../../assets/svg/emailicon.svg'
import Hiddenimg from './../../../assets/svg/Hiddenimg.svg'
import FollowingUsers from '../FollowingUsers'
import ExploreCreators from '../CreatorComponents/ExploreCreators'
import ExploreLivestream from '../CreatorComponents/ExploreLivestream'
import key from './../../../assets/svg/key.svg'

const UserAccount = () => {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('**********');
    const [otppass, setOtppass] = useState(['*', '*', '*', '*']);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleOtpChange = (index) => (e) => {
        const newOtppass = [...otppass];
        newOtppass[index] = e.target.value;
        setOtppass(newOtppass);
    };

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xl='9'>
                        <div className='livestreambox1'>
                            <ProfileSection />
                        </div>
                        <div className='custom_vertical_space'></div>
                        <div className='livestreambox1'>
                            <h3>Account Settings</h3>
                            <p className='pgray'>Manage your account settings</p>
                            <div className="hrline"></div>
                            <Row>
                                <Col className='greyboxes'>
                                    <img src={Questionmark} alt="" />
                                    <p>Support</p>
                                </Col>
                                <Col className='greyboxes'>
                                    <img src={Questionmark} alt="" />
                                    <p>Terms & Condition</p>
                                </Col>
                                <Col className='greyboxes'>
                                    <img src={Useraccountimg} alt="" />
                                    <p>Switch To Creator Account</p>
                                </Col>
                                <Col className='greyboxes'>
                                    <img src={Emailicon} alt="" />
                                    <p>Change Email</p>
                                </Col>
                            </Row>
                        </div>

                        <div className='custom_vertical_space'></div>
                        <div className='livestreambox1'>
                            <div className='borderblue'>
                                <h3>Country Selection</h3>
                                <p className='pgray'>In your country, the following options are available to receive gifts</p>
                                <div className='grey_browsebox'>
                                    <div className='greyboxes'>Browse Countries</div><div className='greyboxes'>Browse Stories</div>
                                </div>

                                <ul className='countryselection_list'>
                                    <li><b>Cash Wishlist:</b> Add and receive specific cash amounts, removed once fulfilled.</li>
                                    <li><b>Crowdfunding:</b> Specify and receive a total amount, removed once fully funded.</li>
                                    <li><b>Product URL Wishlist:</b> Add product URLs, receive equivalent cash, with optional crowdfunding.</li>
                                    <li><b>Small Amount Wishlist:</b> Receive repeated contributions for items under $100 without removal.</li>
                                </ul>

                            </div>
                        </div>

                        <div className='custom_vertical_space'></div>
                        <div className='livestreambox1'>
                            <div className='hiddendetailsbox'>
                                <img src={Hiddenimg} alt="" />
                                <h3>Your details are hidden</h3>
                                <p>Your delivery details are hidden to keep you safe.<br />Please do not show this information on stream or while you record.</p>
                                <button className='btn bluebutton'>Show Details</button>
                            </div>
                        </div>

                        <div className='custom_vertical_space'></div>
                        <div className='livestreambox1'>
                            <h3 onClick={handleShow} style={{ cursor: 'pointer' }}>Delete your account</h3>
                            <p className='greysmall'>It is possible to <span style={{ color: "#E92A00" }} onClick={handleShow}>delete your account,</span> but it’s irreversible. Please be sure that you would like to do that.</p>
                        </div>
                    </Col>
                    <Col xl='3' className='follow_followingbox'>
                        <FollowingUsers />
                        <ExploreCreators />
                        <ExploreLivestream />
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className='headerpart'>
                    <div className='headerpart_1'>
                        <h2 className='notihead'>Delete Account?</h2>
                        <p className='notihead_underline'>Are you sure you want to delete your CreatorsHub account? This process is irreversible, all your data including your wishlists, collections, network, streams, gifting history, etc. will be delete permanently.</p>
                    </div>
                </Modal.Header>
                <Modal.Body>
                <div className='bodypartcnt'>                
                <Form.Label htmlFor="basic-url">Password</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon3">
                        <img src={key} alt="" />
                    </InputGroup.Text>
                    <Form.Control id="basic-url" aria-describedby="basic-addon3" value={password} onChange={handlePasswordChange} />
                </InputGroup>

                <p className='notihead_underline' style={{textAlign: 'center', marginTop: '30px'}}>Enter the OTP sent to michael@gmail.com to delete your CreatorsHub account permanently.</p>

                <div className='otppasswordfields'>
                    {otppass.map((otp, index) => (
                        <Form.Control
                            key={index}
                            type="text"
                            id={`otp-${index}`}
                            aria-describedby="passwordHelpBlock"
                            value={otp}
                            onChange={handleOtpChange(index)}
                        />
                    ))}
                </div>
                <div className='spcial_margin_top'></div>
                <div className='fotterpartpopup2'>
                    <button className='btn filterapplybtn text-right' style={{background: '#EF4444', color: '#ffffff'}}>Delete Account</button>
                </div>
              </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Delete
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default UserAccount
