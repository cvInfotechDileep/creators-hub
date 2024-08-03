import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FollowingUsers from '../FollowingUsers'
import ExploreCreators from '../CreatorComponents/ExploreCreators'
import ExploreLivestream from '../CreatorComponents/ExploreLivestream'
import CreatorProfileSection from '../CreatorProfileSection'
import CreatorProfileTabs from '../CreatorProfileTabs'

const CreatorAccount = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xl='9'>
                        <div className='livestreambox1'>
                            <CreatorProfileSection />
                            <CreatorProfileTabs />
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

export default CreatorAccount