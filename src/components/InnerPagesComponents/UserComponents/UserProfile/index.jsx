import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExploreCreators from '../../CreatorComponents/ExploreCreators'
import ExploreLivestream from '../../CreatorComponents/ExploreLivestream'
import ProfileSection from '../../ProfileSection'
import FollowingUsers from '../../FollowingUsers'
import Userprofiletab from '../Userprofiletab'

const UserProfile = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xl='9'>
                        <div className='livestreambox1'>
                            <ProfileSection />
                            <Userprofiletab/>
                        </div>

                    </Col>
                    <Col xl='3' className='follow_followingbox'>
                        <FollowingUsers />
                        <ExploreCreators />
                        <ExploreLivestream />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserProfile