import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Wishlist1 from './../../../assets/svg/wishlist1.svg';
import Wishlist2 from './../../../assets/svg/wishlist2.svg';
import Wishlist3 from './../../../assets/svg/wishlist3.svg';
import Wishlist4 from './../../../assets/svg/wishlist4.svg';
import Wishlist5 from './../../../assets/svg/wishlist5.svg';
import Wishlist6 from './../../../assets/svg/wishlist6.svg';
import Wishlist7 from './../../../assets/svg/wishlist7.svg';
import Wishlist8 from './../../../assets/svg/wishlist8.svg';
import Linksimg from './../../../assets/svg/linksimg.svg';
import Shopcart from './../../../assets/svg/shopping-cart.svg';

const wishlistItems = [
    {
        img: Wishlist1,
        title: 'Lakme Absolute Blur Perfect Matte Face...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: Wishlist2,
        title: 'RENEE Glass Glow Pre Make-up Oil Primer...',
        price: 34,
        link: 'flipkart.com'
    },
    {
        img: Wishlist3,
        title: 'boAt Rockerz 450 Bluetooth On Ear...',
        price: 28,
        link: 'amazon.com'
    },
    {
        img: Wishlist4,
        title: 'Lakme Absolute Blur Perfect Matte Face...',
        price: 86,
        link: 'flipkart.com'
    },
    {
        img: Wishlist5,
        title: 'The FloralMart Fresh Flowers Bouquet...',
        price: 81,
        link: 'amazon.com'
    },
    {
        img: Wishlist6,
        title: 'VGRASSP Handheld Video Game Console...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: Wishlist7,
        title: 'EFERMONE® International Edition...',
        price: 19,
        link: 'amazon.com'
    },
    {
        img: Wishlist8,
        title: 'Sonata Women Polyurethane Pink...',
        price: 19,
        link: 'amazon.com'
    }
];

const WishListTab = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <div className='livestreambox1'>
                    <h3 className='h2heading'>Wishlist</h3>
                    <p className='pgray_b1'>Explore my carefully curated and exquisite wishlist.</p>
                    <div className='hrline'></div>
                    <Row>
                        {wishlistItems.map((item, index) => (
                            <Col xl={3} key={index}>
                                <div className='allmediaouter'>
                                    <img src={item.img} alt="" className='streamthumbnail' />
                                    <p className='pblack_b1'>{item.title}</p>
                                    <div className="productGiftprice2">$ <span>{item.price}</span></div>
                                    <div className='socialboxshare'>
                                        <img src={Linksimg} alt="" />
                                        <div className='pgray_b3'>{item.link}</div>
                                    </div>
                                    <div className='socialboxview2'>
                                        <button className='btn btnaddtocart'> <img src={Shopcart} alt="" /> Add to cart</button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    );
}

export default WishListTab;
