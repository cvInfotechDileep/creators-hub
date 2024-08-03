import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Profileimg1 from './../../../assets/Images/Ellipse18.png'
import Profileimgbg1 from './../../../assets/Images/Rectangle87.png'
import Allcreatorssidebar from './Allcreatorssidebar'

const profiles = [
    {
        id: 1,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
    {
        id: 2,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
    {
        id: 3,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
    {
        id: 4,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
    {
        id: 5,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
    {
        id: 6,
        name: "Ava Mitchell",
        username: "@ava_mitchell",
        description: "Trying to be a rainbow in someone’s cloud. Ends up being a drizzle.",
        profileImg: Profileimg1,
        bgImg: Profileimgbg1
    },
];

function Allcreators() {
    return (
        <Container>
            <div className='spcial_margin_top'></div>
            <Row>
                <Col xl={3}>
                    <div className='livestreambox1 allcreatorssidebar'>
                        <Allcreatorssidebar />
                    </div>
                </Col>
                <Col xl={9}>
                    <div className='livestreambox1 creatorsuihead'>
                        <h1 className='h2heading'>Explore Creators</h1>
                        <p className='pgray_b1' style={{ margin: "0px" }}>Find content creators on CreatorsHub</p>
                    </div>
                    <div className='custom_vertical_space'></div>
                    <div className='livestreambox1'>
                        <Row>
                            {profiles.map(profile => (
                                <Col md={4} key={profile.id}>
                                    <div className='outerprofilebox'>
                                        <div><img src={profile.bgImg} alt="" className='profileimgbgbox' /></div>
                                        <div className='profilecntbox'>
                                            <img src={profile.profileImg} alt="" className='profileimgbox' />
                                            <h1 className='h3heading'>{profile.name}</h1>
                                            <p className='parab2'>{profile.username}</p>
                                            <p className='parab2'>{profile.description}</p>
                                            <button className='btn btncreatorprofile'>View Profile</button>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Allcreators
