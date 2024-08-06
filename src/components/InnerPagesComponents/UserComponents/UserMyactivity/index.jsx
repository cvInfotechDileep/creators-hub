import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Avatarimgicon from './../../../../assets/svg/avtar_with_tick.svg'
import Avatar1 from './../../../../assets/svg/avatar1.svg'
import Game_thumbnail from './../../../../assets/svg/game_thumbnail.svg'
import Twitch_icon from './../../../../assets/svg/twitch_svg.svg'
import browsecreators from './../../../../assets/svg/browse_creators.svg'
import Giftnumber from './../../../../assets/svg/giftnumber.svg'

const UserMyactivity = () => {
    return (
        <Container className='mt-5'>
            <Row>

                <div className='livestreambox1'>
                    <h3>My Activity</h3>
                    <p className='pgray'>Creators you are following, their updates show up in your timeline.</p>
                    <div className='hrline'></div>

                    <div className='author_with_time'>
                        <div className='author_details_withimage'>
                            <img src={Avatarimgicon} alt='' />
                            <div className='authordetails'>
                                <p className='author_spanname'>Mason Cooper</p>
                                <p className='author_emailspan'>@mason_cooper</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span className='timerspan'>5 hrs ago</span>
                            <span>...</span>
                        </div>
                    </div>
                    <div className='headingblue mt-3'><p>Thank you for this gift <a href=''>@pixelwarrior</a></p></div>

                    <div className='livestreambox1'>
                        <div className='author_with_time' style={{ margin: '0' }}>
                            <div className='author_details_withimage'>
                                <img src={Avatar1} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>PixelWarrior</p>
                                    <p className='author_emailspan'>@pixelwarrior gifted you <a href=''>PlayStation PS5 Dual Controller Marvel Spiderman 2</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='author_with_time'>
                        <div className='author_details_withimage'>
                            <img src={Avatarimgicon} alt='' />
                            <div className='authordetails'>
                                <p className='author_spanname'>Mason Cooper</p>
                                <p className='author_emailspan'>@mason_cooper</p>
                            </div>
                        </div>
                        <div>
                            <span className='timerspan'>6 hrs ago</span>
                        </div>
                    </div>
                    <div className='headingblue mt-3'><p>Fastest CSGO Ace Ever? [SHROUD]</p></div>

                    <div className='giftmainbox_2'>
                        <div className='giftrightboximg_2'>
                            <img src={Game_thumbnail} alt="" />
                        </div>
                        <div className='giftrightbox_2'>
                            <h3>Fastest CSGO Ace Ever? [SHROUD]</h3>
                            <p className='giftdescription_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>

                            <div className="authro_with_live">
                                <div>
                                    <img src={Twitch_icon} alt="" />
                                    <span>Twitch</span>
                                </div>
                                <div>
                                    <div>
                                        <img src={browsecreators} alt="" />
                                        <span>1K</span>
                                        <img src={Giftnumber} alt="" />
                                    </div>
                                </div>
                            </div>

                            <button className='get_notifiedcss'>Play Stream</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default UserMyactivity