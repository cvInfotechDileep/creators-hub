import React, { useState } from 'react'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Networkbg1 from './../../../../assets/svg/network1.svg'
import Networkbg11 from './../../../../assets/svg/network11.svg'
import Networkbg2 from './../../../../assets/svg/network2.svg'
import Networkbg22 from './../../../../assets/svg/network22.svg'
import Networkbg3 from './../../../../assets/svg/network3.svg'
import Networkbg33 from './../../../../assets/svg/network33.svg'
import Networkbg4 from './../../../../assets/svg/network4.svg'
import Networkbg44 from './../../../../assets/svg/network44.svg'
import Networkbg5 from './../../../../assets/svg/network5.svg'
import Networkbg55 from './../../../../assets/svg/network55.svg'
import Networkbg6 from './../../../../assets/svg/network6.svg'
import Networkbg66 from './../../../../assets/svg/network66.svg'
import Anchortag from './../../../../assets/svg/anchortag.svg'
import Tickmark from './../../../../assets/svg/tickmark.svg'

const users = [
    {
        bg: Networkbg1,
        profileImg: Networkbg11,
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: Networkbg2,
        profileImg: Networkbg22,
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: Networkbg3,
        profileImg: Networkbg33,
        name: 'Jack Harlow',
        username: '@jack12',
        description: 'Running on coffee, sarcasm, and bad puns. Welcome to my circus!',
    },
    {
        bg: Networkbg4,
        profileImg: Networkbg44,
        name: 'Steve Miller',
        username: '@steve32',
        description: 'Striving to inspire through words and images.',
    },
    {
        bg: Networkbg5,
        profileImg: Networkbg55,
        name: 'Max Powers',
        username: '@mar.p',
        description: 'Fashion lover. Trendsetter. Style innovator.',
    },
    {
        bg: Networkbg6,
        profileImg: Networkbg66,
        name: 'Amanda Brown',
        username: '@amanda_12',
        description: 'Fashion lover. Trendsetter. Style innovator.',
    },
    // Add more user data here...
];

const NetworkFollowingFollowers = () => {
    const [key, setKey] = useState('home');
    const following_count = 61;
    const followers_count = 812;
    return (
        <Tabs
            id="Network_follower_following_tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="home" title={`Following ${following_count}+`}>
                <Container>
                    <Row>
                        {users.map((user, index) => (
                            <Col key={index} sm={12} md={6} lg={4}>
                                <div className="Outernetworkbox">
                                    <img src={user.bg} alt="" className="networkboxbgimg" />
                                    <div className="outernetworkboxinner">
                                        <img src={user.profileImg} alt="" className="networkprofileimg" />
                                        <h1 className="h3heading">{user.name}</h1>
                                        <p className="parab2">{user.username}</p>
                                        <p className="parab2">{user.description}</p>
                                        <div className="networkfollowingdiv">
                                            <img src={Anchortag} alt="" />
                                            <button className="btn btnfollowing">
                                                <img src={Tickmark} alt="" /> Following
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="profile" title={`Followers ${followers_count}+`}>
                <Container>
                    <Row>
                        {users.map((user, index) => (
                            <Col key={index} sm={12} md={6} lg={4}>
                                <div className="Outernetworkbox">
                                    <img src={user.bg} alt="" className="networkboxbgimg" />
                                    <div className="outernetworkboxinner">
                                        <img src={user.profileImg} alt="" className="networkprofileimg" />
                                        <h1 className="h3heading">{user.name}</h1>
                                        <p className="parab2">{user.username}</p>
                                        <p className="parab2">{user.description}</p>
                                        <div className="networkfollowingdiv">
                                            <img src={Anchortag} alt="" />
                                            <button className="btn btnfollowing">
                                                <img src={Tickmark} alt="" /> Following
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    );
}

export default NetworkFollowingFollowers