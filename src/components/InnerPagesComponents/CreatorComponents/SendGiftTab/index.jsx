import React, { useState } from 'react';
import FilterBox from '../../FilterBox';
import { Col, Container, Row, InputGroup, Form, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Gift1 from './../../../../assets/svg/gift1.svg';
import Gift2 from './../../../../assets/svg/gift2.svg';
import Gift3 from './../../../../assets/svg/gift3.svg';
import Gift4 from './../../../../assets/svg/gift4.svg';
import Linksimg from './../../../../assets/svg/linksimg.svg';
import Shopcart from './../../../../assets/svg/shopping-cart.svg';

const gifts = [
    { img: Gift1, title: 'Lakme Absolute Blur Perfect Matte Face...', price: 19, link: 'amazon.com' },
    { img: Gift2, title: 'Square Brown Wicker Basket...', price: 34, link: 'flipkart.com' },
    { img: Gift3, title: 'RENEE Glass Glow Pre Make-up Oil Primer...', price: 28, link: 'amazon.com' },
    { img: Gift4, title: 'Clear Glasses With Fresh Strawberry...', price: 86, link: 'flipkart.com' },
    { img: Gift1, title: 'Lakme Absolute Blur Perfect Matte Face...', price: 81, link: 'amazon.com' },
    { img: Gift3, title: 'Clear Glasses With Fresh Strawberry...', price: 19, link: 'amazon.com' },
    { img: Gift4, title: 'Lakme Absolute Blur Perfect Matte Face...', price: 19, link: 'amazon.com' },
    { img: Gift2, title: 'Clear Glasses With Fresh Strawberry...', price: 19, link: 'amazon.com' },
];

const SendGiftTab = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <Container className="mt-5">
            <Row>
                <div className="livestreambox1">
                    <h3 className="h2heading">Send Gifts</h3>
                    <p className="pgray_b1">Send me a Surprise Gift!</p>
                    <div className="hrline"></div>
                    <div className="giftfilterwithsearch">
                        <div>
                            <Button variant="outline-light" onClick={handleShow} id="creatorsgiftfilter">
                                Filter
                            </Button>
                        </div>
                        <div>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Search creator"
                                    aria-label="Search creator"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2">
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>

                    <Row>
                        {gifts.map((gift, index) => (
                            <Col xl={3} key={index}>
                                <div className="allmediaouter">
                                    <img src={gift.img} alt="" className="streamthumbnail" />
                                    <p className="pblack_b1">{gift.title}</p>
                                    <div className="productGiftprice2">
                                        $ <span>{gift.price}</span>
                                    </div>
                                    <div className="socialboxshare">
                                        <img src={Linksimg} alt="" />
                                        <div className="pgray_b3">{gift.link}</div>
                                    </div>
                                    <div className="socialboxview2">
                                        <button className="btn btnaddtocart">
                                            <img src={Shopcart} alt="" /> Add to cart
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className='headerpart'>
                    <div className='headerpart_1'>
                        <h2 className='notihead'>Filters </h2>
                        <p className='notihead_underline'>Find exactly what you need.</p>
                    </div>

                </Modal.Header>
                <Modal.Body>
                    <div className='bodypartcnt'>
                        <h1 className='h4heading'>Gift Categories</h1>

                        <Form>
                            {['checkbox'].map((type) => (
                                <>
                                    <Row>
                                        <Col>
                                            <div key={`default-${type}`} className="mb-3 parab2_black">
                                                <Form.Check default label="All" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Fashion" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Art" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Electronic" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Gaming" name="group1" type={type} id={`default-${type}-1`} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div key={`default-${type}`} className="mb-3 parab2_black">
                                                <Form.Check default label="Clothing" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Gaming" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Electronic" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Clothing" name="group1" type={type} id={`default-${type}-1`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                            ))}
                        </Form>



                        {/* Older Notifications */}
                        <div className='custom_vertical_space'></div>
                        <h1 className='h4heading'>Price</h1>

                        <Form>
                            {['checkbox'].map((type) => (
                                <>
                                    <Row>
                                        <Col>
                                            <div key={`default-${type}`} className="mb-3 parab2_black">
                                                <Form.Check default label="Any (4,365)" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Under $14.99 (4,365)" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Under $49.99 (12,365)" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Under $99.99 (4,365)" name="group1" type={type} id={`default-${type}-1`} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div key={`default-${type}`} className="mb-3 parab2_black">
                                                <Form.Check default label="Under $249.99 (13,255)" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="Under $249.99 (8,365)" name="group1" type={type} id={`default-${type}-1`} />
                                                <Form.Check default label="$250+ (3,365)" name="group1" type={type} id={`default-${type}-1`} />
                                            </div>
                                        </Col>
                                    </Row>
                                </>
                            ))}
                        </Form>
                        <div className='spcial_margin_top'></div>
                        <div className='fotterpartpopup'>
                            <h3 className='h3heading_15'>Clear All</h3>
                            <button className='btn filterapplybtn'>Apply</button>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Apply Filters
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </Container>
    );
};

export default SendGiftTab;
