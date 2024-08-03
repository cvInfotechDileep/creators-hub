import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import avtarimg from './../../../assets/svg/Avatar.svg'
import Gameremote from './../../../assets/svg/gameremote.svg'
import Giftbutton from './../../../assets/svg/giftbutton.svg'
import Marksvg from './../../../assets/svg/mark.svg'
import Paintingvertical from './../../../assets/svg/painting_vertical.svg'
import Usernamesvg from './../../../assets/svg/username.svg'
import Shroud_gamer from './../../../assets/svg/shroud_gamer.svg'
import Game_thumbnail from './../../../assets/svg/game_thumbnail.svg'
import Twitch_icon from './../../../assets/svg/twitch_svg.svg'
import browsecreators from './../../../assets/svg/browse_creators.svg'
import Giftnumber from './../../../assets/svg/giftnumber.svg'

import SimpleSlider from './ExploreLivestream/SimpleSlider'
import Giftcarousel from './ExploreCreators/Giftcarousel'
// import FollowingUsers from '../FollowingUsers'
import ExploreCreators from './ExploreCreators'
import ExploreLivestream from './ExploreLivestream'
import TopCreatorsGifters from './TopCreatorsGifters'
import FollowingUsers from '../FollowingUsers'


function Admindashboard() {
    return (

        <Container className='mt-5' >
            <Row>
                <Col xl='9'>
                    <div className='livestreambox1'>
                        <h3>Live Streams</h3>
                        <p className='pgray'>Upcoming & on-going live streams from creators you follow.</p>
                        <div className='hrline'></div>

                        <Row>
                            <SimpleSlider />
                        </Row>
                    </div>
                    <div className='spcial_margin_top'></div>
                    <div className='livestreambox1'>
                        <h3>Creators Hub</h3>
                        <p className='pgray'>Stay up to date with updates from your favorite creators.</p>
                        <div className='hrline'></div>

                        <div className='author_with_time'>
                            <div className='author_details_withimage'>
                                <img src={avtarimg} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>Kelly Norman</p>
                                    <p className='author_emailspan'>@kellynorman</p>
                                </div>
                            </div>
                            <div>
                                <span className='timerspan'>2 hrs ago</span>
                            </div>
                        </div>
                        <div className='headingblue mt-3'><p>Add a new gift option to his wishlist.</p></div>


                        <div className='giftmainbox'>
                            <div className='giftrightboximg'>
                                <img src={Gameremote} alt="" />
                            </div>
                            <div className='giftrightbox'>
                                <h3>Sony PS5 Dual Controller Marvel Spiderman 2</h3>
                                <div className='pricebox'>
                                    <span>$</span>
                                    <p>2,222</p>
                                </div>
                                <p className='giftdescription_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>
                                <div className='giftwrap'>
                                    <img src={Giftbutton} alt="" />
                                    <button className='btn btn-outline-secondary'>View Wishlist</button>
                                </div>
                            </div>
                        </div>


                        <div className='author_with_time'>
                            <div className='author_details_withimage'>
                                <img src={Marksvg} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>Mark Villiams</p>
                                    <p className='author_emailspan'>mark@site.com</p>
                                </div>
                            </div>
                            <div>
                                <span className='timerspan'>4 hrs ago</span>
                            </div>
                        </div>
                        <div className='headingblue mt-3'><p>Add new gifts option to her “Painting” collection.</p></div>

                        <Container className='giftcrowselbox'>
                            <Row>
                                <Col xl='4'>
                                    <img src={Paintingvertical} alt="" className='vertivalIMG' />
                                </Col>
                                <Col xl='8'>
                                    <Row>

                                        <Giftcarousel />

                                    </Row>
                                </Col>
                            </Row>
                        </Container>


                        <div className='author_with_time'>
                            <div className='author_details_withimage'>
                                <img src={Marksvg} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>Zain Brock</p>
                                    <p className='author_emailspan'>@zain_brock</p>
                                </div>
                            </div>
                            <div>
                                <span className='timerspan'>5 hrs ago</span>
                            </div>
                        </div>
                        <div className='headingblue mt-3'><p>Thank you for this gift <a href=''>@username#01</a></p></div>

                        <div className='thank_user_box'>
                            <div className='author_details_withimage'>
                                <img src={Usernamesvg} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>Username</p>
                                    <p className='author_emailspan'>@username#01 gifted you <a href=''>PlayStation PS5 Dual Controller Marvel Spiderman 2</a></p>
                                </div>
                            </div>
                        </div>

                        <div className='author_with_time'>
                            <div className='author_details_withimage'>
                                <img src={Shroud_gamer} alt='' />
                                <div className='authordetails'>
                                    <p className='author_spanname'>Shroud</p>
                                    <p className='author_emailspan'>@shroud</p>
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
                </Col>
                <Col xl='3' className='follow_followingbox'>
                    <FollowingUsers />
                    <ExploreCreators />
                    <ExploreLivestream />
                    <div className='spcial_margin_top'></div>
                    <TopCreatorsGifters />
                </Col>
            </Row>
        </Container>
    )
}

export default Admindashboard