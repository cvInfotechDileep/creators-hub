import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Collectionimg1 from './../../../assets/svg/collection1.svg'
import Collectionimg2 from './../../../assets/svg/collection2.svg'
import Collectionimg3 from './../../../assets/svg/collection3.svg'
import Gifticon from './../../../assets/svg/gifticon.svg'

const collectionsData = [
    {
        img: Collectionimg1,
        title: 'Painting',
        gifts: 3,
    },
    {
        img: Collectionimg2,
        title: 'Gaming',
        gifts: 8,
    },
    {
        img: Collectionimg3,
        title: 'Reading',
        gifts: 2,
    },
    {
        img: Collectionimg2,
        title: 'Painting',
        gifts: 3,
    },
    {
        img: Collectionimg3,
        title: 'Gaming',
        gifts: 8,
    },
    {
        img: Collectionimg1,
        title: 'Reading',
        gifts: 2,
    },
];

const CollectionsTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Gift Collections</h3>
                    <p className='pgray_b1'>Discover my collective elegantly curated wishlist here.</p>
                    <div className='hrline'></div>
                    <Row>
                        {collectionsData.map((collection, index) => (
                            <Col xl={4} key={index}>
                                <div className='allmediaouter'>
                                    <img src={collection.img} alt="" className='streamthumbnail' />
                                    <div className='socialboxshare'>
                                        <p className='h3heading'>{collection.title}</p>
                                    </div>
                                    <div className='socialboxview2'>
                                        <div className='socialboxview21'>
                                            <img src={Gifticon} alt="" />
                                            <div><span>{collection.gifts}</span> gifts</div>
                                        </div>
                                        <div className='dotsclass'>...</div>
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

export default CollectionsTab
