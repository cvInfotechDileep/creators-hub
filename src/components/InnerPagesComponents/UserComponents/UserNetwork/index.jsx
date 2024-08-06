import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NetworkFollowingFollowers from '../NetworkFollowingFollowers'
import FollowingUsers from '../../FollowingUsers'
import ExploreCreators from '../../CreatorComponents/ExploreCreators'
import ExploreLivestream from '../../CreatorComponents/ExploreLivestream'
import TopCreatorsGifters from '../../CreatorComponents/TopCreatorsGifters'

const UserNetwork = () => {
  return (
    <Container className='mt-5'>
    {/* <Row>
        <Col xl='9'> */}
        <div className='livestreambox1'>
        <h3>Your Network</h3>
        <p className='pgray'>Creators & Users that your are following or they are following you.</p>

        <NetworkFollowingFollowers />
        </div>

        {/* </Col> */}
        {/* <Col xl='3' className='follow_followingbox'>
            <FollowingUsers />
            <ExploreCreators />
            <ExploreLivestream />
            <div className='spcial_margin_top'></div>
            <TopCreatorsGifters />
        </Col> */}
    {/* // </Row> */}
    </Container>
  
  )
}

export default UserNetwork