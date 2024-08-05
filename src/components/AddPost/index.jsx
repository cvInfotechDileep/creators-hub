import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton, Modal, Form, Row, Col } from 'react-bootstrap';
import live from './../../assets/svg/live.svg';
import pen from './../../assets/svg/pen.svg';
import DropdownIcon from './../../assets/svg/dropdownIcon.svg';
import Uppic1 from './../../assets/svg/Uploadphotos1.svg'
import Uppic2 from './../../assets/svg/Uploadphotos2.svg'
import Uppic3 from './../../assets/svg/Uploadphotos3.svg'
import Addnew from './../../assets/svg/Addnew.svg'
import img from './../../assets/svg/img.svg'
import sound from './../../assets/svg/sound.svg'
import mice from './../../assets/svg/mice.svg'
import videorecord from './../../assets/svg/videorecord.svg'
import write from './../../assets/svg/write.svg'
import DeletePicup from './../../assets/svg/Delete.svg'
import "./style.scss";

const AddPost = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState('free');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleTabChange = (e) => setSelectedTab(e.target.value);

    return (
        <>
            <div className='livestreambox1'>
                <div className="d-flex">
                    <div className="p-2 flex-grow-1">
                        <h3 className='headingSize'>New Upload & Live Stream!</h3>
                        <p className='pgray'>Upload your post to start engaging people</p>
                    </div>
                    <div className="p-2 align-content-center">
                        <Button variant='primary'><span className='mx-2'><img src={live} alt="Live" /></span>Go Live</Button>
                    </div>
                    <div className="p-2 align-content-center" >
                        <DropdownButton className="post-options" id="dropdown-basic-button" title={
                            <div className="d-flex align-items-center gap-2">
                                <img src={pen} alt="Avatar" className="avatar" />
                                Jenna Kelly
                                <img src={DropdownIcon} alt="Dropdown Icon" />
                            </div>
                        }>
                            <Dropdown.Item onClick={handleShow}><span className='me-3'><img src={img} alt="" /></span>Image/Video</Dropdown.Item>
                            <Dropdown.Item href="/"><span className='me-3'><img src={sound} alt="" /></span>Audio</Dropdown.Item>
                            <Dropdown.Item href="/"><span className='me-3'><img src={mice} alt="" /></span>Audio Record</Dropdown.Item>
                            <Dropdown.Item href="/"><span className='me-3'><img src={videorecord} alt="" /></span>Video Record</Dropdown.Item>
                            <Dropdown.Item href="/"><span className='me-3'><img src={write} alt="" /></span>Blogs</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </div>
            <div className="spcial_margin_top"></div>

            {/* Modal for Image/Video */}
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className='headerpart'>
                    <Modal.Title className='headerpart_1'>
                        <h2 className='notihead'>Upload Your Post</h2>
                        <p className='notihead_underline'>Upload your post to start engaging discussions, inspire others, and express yourself.</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                            <input
                                type="radio"
                                className="btn-check"
                                name="uploadOption"
                                id="free"
                                value="free"
                                checked={selectedTab === 'free'}
                                onChange={handleTabChange}
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-primary border border-1 labelFont" htmlFor="free">Free</label>

                            <input
                                type="radio"
                                className="btn-check"
                                name="uploadOption"
                                id="pay_per_view"
                                value="pay_per_view"
                                checked={selectedTab === 'pay_per_view'}
                                onChange={handleTabChange}
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-primary border border-1 labelFont" htmlFor="pay_per_view">Pay Per View</label>

                            <input
                                type="radio"
                                className="btn-check"
                                name="uploadOption"
                                id="subscription_view"
                                value="subscription_view"
                                checked={selectedTab === 'subscription_view'}
                                onChange={handleTabChange}
                                autoComplete="off"
                            />
                            <label className="btn btn-outline-primary border border-1 labelFont" htmlFor="subscription_view">Subscription View</label>
                        </div>
                    </Form>

                    {selectedTab === 'free' && (
                        <div className='bodypartcnt'>
                            <Row className='my-3'>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic1} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic2} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic3} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp' style={{ cursor: 'pointer' }}>
                                    <img src={Addnew} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                            </Row>

                            <div className='spcial_margin_top'></div>
                            <div className='fotterpartpopup2'>
                                <button className='btn filterapplybtn text-right'>Post</button>
                            </div>
                        </div>
                    )}
                    {selectedTab === 'pay_per_view' && (
                        <div className='bodypartcnt'>
                            <Row className='my-3'>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic1} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic2} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic3} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp' style={{ cursor: 'pointer' }}>
                                    <img src={Addnew} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                            </Row>

                            <div className='spcial_margin_top'></div>
                            <div className='fotterpartpopup2'>
                                <button className='btn filterapplybtn text-right'>Post</button>
                            </div>
                        </div>
                    )}
                    {selectedTab === 'subscription_view' && (
                        <div className='bodypartcnt'>
                            <Row className='my-3'>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic1} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic2} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp'>
                                    <img src={Uppic3} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                                <Col xl={6} className='uploadpicpp' style={{ cursor: 'pointer' }}>
                                    <img src={Addnew} alt="" />
                                    <div className='deleteuppic'> <img src={DeletePicup} alt="" /> </div>
                                </Col>
                            </Row>

                            <div className='spcial_margin_top'></div>
                            <div className='fotterpartpopup2'>
                                <button className='btn filterapplybtn text-right'>Post</button>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default AddPost;
