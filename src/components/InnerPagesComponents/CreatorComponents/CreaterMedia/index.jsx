import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import streamingthumbnail from './../../../../assets/Images/streamingthumbnail.png'
import streamingthumbnail2 from './../../../../assets/svg/streamingthumbnail2.svg'
import Heart from './../../../../assets/svg/heart.svg'
import Comments from './../../../../assets/svg/comments.svg'
import Sendtips from './../../../../assets/svg/sendtips.svg'
import eyeimg from './../../../../assets/svg/eye.svg'

const mediaItems = [
    {
        id: 1,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 2,
        thumbnail: streamingthumbnail2,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 3,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 4,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 5,
        thumbnail: streamingthumbnail2,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 6,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 7,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 8,
        thumbnail: streamingthumbnail2,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    },
    {
        id: 9,
        thumbnail: streamingthumbnail,
        description: 'Catch my live performances and enjoy the raw, unfiltered energy...',
        views: '1K',
        time: '2 weeks ago'
    }
];
const CreaterMedia = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>All Media</h3>
                    <p className='pgray_b1'>Explore my captivating media collection.</p>
                    <div className='hrline'></div>
                    <Row>
                        {mediaItems.map(item => (
                            <Col xl={4} key={item.id}>
                                <div className='allmediaouter'>
                                    <p className='h5heading'>{item.description}</p>
                                    <img src={item.thumbnail} alt="" className='streamthumbnail' />
                                    <div className='socialboxshare'>
                                        <img src={Heart} alt="" />
                                        <img src={Comments} alt="" />
                                        <img src={Sendtips} alt="" />
                                    </div>
                                    <div className='socialboxview'>
                                        <img src={eyeimg} alt="" />
                                        <span>{item.views}</span>
                                        <div>.</div>
                                        <div>{item.time}</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    )
}

export default CreaterMedia;
