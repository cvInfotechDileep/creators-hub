import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Gifter1 from './../../../assets/svg/gifters1.svg'
import Gifter2 from './../../../assets/svg/gifters2.svg'
import Gifter3 from './../../../assets/svg/gifters3.svg'
import Gifter4 from './../../../assets/svg/gifters4.svg'
import Gifter5 from './../../../assets/svg/gifters5.svg'
import Gifter6 from './../../../assets/svg/gifters6.svg'
import Gifter7 from './../../../assets/svg/gifters7.svg'
import Gifter8 from './../../../assets/svg/gifters8.svg'
import Linksimg from './../../../assets/svg/linksimg.svg'

const GiftersTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Received Gifts</h3>
                    <p className='pgray_b1'>Discover the array of thoughtful and exquisite gifts I have received.</p>
                    <div className='hrline'></div>
                    <Row>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter1} alt="" className='streamthumbnail' />
                                <p className='h4heading'>ZEBRONICS ZEB-SBSPK 6 (Juke bar 4101) 110 W...</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>amazon.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter2} alt="" className='streamthumbnail' />
                                <p className='h4heading'>Running Shoes For Women</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>flipkart.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter3} alt="" className='streamthumbnail' />
                                <p className='h4heading'>Puma Kinta Wns Sneakers For Women (Purple)</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>amazon.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter4} alt="" className='streamthumbnail' />
                                <p className='h4heading'>Solid Men Black Gym Shorts, Sports Shorts...</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>flipkart.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter5} alt="" className='streamthumbnail' />
                                <p className='h4heading'>MY TYA Makeup Kit + Hello Kitty Makeup...</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>flipkart.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter6} alt="" className='streamthumbnail' />
                                <p className='h4heading'>COI To Do List Notepad | Daily...</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>flipkart.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter7} alt="" className='streamthumbnail' />
                                <p className='h4heading'>Men Full Sleeve Graphic Print Hooded Sweatshirt</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>amazon.com</div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3}>
                            <div className='allmediaouter'>
                                <img src={Gifter8} alt="" className='streamthumbnail' />
                                <p className='h4heading'>Classmate Origami Longbook - Unruled, 27...</p>
                                <div class="checktotalleft extraspace1">Gifted by <span>@mason_cooper</span></div>
                                <div className='socialboxshare2'>
                                    <img src={Linksimg} alt="" />
                                    <div className='pgray_b3'>amazon.com</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Row>
        </Container>

    )
}

export default GiftersTab