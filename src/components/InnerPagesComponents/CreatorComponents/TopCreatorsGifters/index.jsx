import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import followimage2 from './../../../../assets/svg/following_image2.svg'
import Topcreatorsimg from './../../../../assets/svg/topcreators.svg' 
import Rankimg from './../../../../assets/svg/1st.svg' 

const TopCreatorsGifters = () => {
    const [key, setKey] = useState('home');
    return (
        <>
            <Tabs
                id="follower_following_tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="home" title="Top Creators">

                    <div className='follower_list'>
                        <div className='follow_image'><img src={Topcreatorsimg} alt='' /><img src={Rankimg} alt='' className='rankIMG' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>View Profile</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={Topcreatorsimg} alt='' /><img src={Rankimg} alt='' className='rankIMG' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>View Profile</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={Topcreatorsimg} alt='' /><img src={Rankimg} alt='' className='rankIMG' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>View Profile</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={Topcreatorsimg} alt='' /><img src={Rankimg} alt='' className='rankIMG' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>View Profile</div>
                    </div>

                    <div className='follower_list'>
                        <div className='follow_image'><img src={Topcreatorsimg} alt='' /><img src={Rankimg} alt='' className='rankIMG' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>View Profile</div>
                    </div>

                </Tab>
                <Tab eventKey="profile" title="Top Gifters">
                    <div className='follower_list'>
                        <div className='follow_image'><img src={followimage2} alt='' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>Followers</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={followimage2} alt='' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>Followers</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={followimage2} alt='' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>Followers</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={followimage2} alt='' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>Followers</div>
                    </div>
                    <div className='follower_list'>
                        <div className='follow_image'><img src={followimage2} alt='' /></div>
                        <div className='follow_name'><p>Talon Everett</p>
                            <span>@talon_e</span></div>
                        <div className='followbuttoncv'>Followers</div>
                    </div>
                </Tab>
            </Tabs>
        </>
    )
}

export default TopCreatorsGifters