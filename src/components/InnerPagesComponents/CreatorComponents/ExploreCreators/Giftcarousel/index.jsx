import React from 'react';
import Marketplace from './../../../../../assets/svg/amazon.svg'
import Paintcanvas from './../../../../../assets/svg/paint_canvas.svg'
import Makeupbox from './../../../../../assets/svg/makeupbox.svg'
import Giftbutton from "./../../../../../assets/svg/giftbutton.svg";
import Slider from 'react-slick';
import { Col } from 'react-bootstrap';

const Giftcarousel = () => {
    const settings = {
        //   dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        //   nextArrow: <div>Next</div>,
        //   prevArrow: <div>Prev</div>
    };

    return (
        <Slider {...settings}>
            <Col xl='6'>
                <div className='collectionright'>
                    <img src={Paintcanvas} alt="" />
                    <p className='gifttitle'>Easel And Paint Canvas</p>
                    <div className='pricebox'>
                        <span>$</span>
                        <p>2,222</p>
                    </div>
                    <p className='giftdescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>
                    <div className='marketplace'>
                        <img src={Marketplace} alt="" />
                        <p>amazon.com</p>
                    </div>
                    <div className='giftwrap'>
                        <img src={Giftbutton} alt="" />
                        <button className='btn btn-outline-secondary'>View Wishlist</button>
                    </div>
                </div>
            </Col>
            <Col xl='6'>
                <div className='collectionright'>
                    <img src={Makeupbox} alt="" />
                    <p className='gifttitle'>ARTEZA Outdoor Acrylic Paint, Set of 20 Colors/Tubes (59ml)</p>
                    <div className='pricebox'>
                        <span>$</span>
                        <p>35</p>
                    </div>
                    <p className='giftdescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.</p>
                    <div className='marketplace'>
                        <img src={Marketplace} alt="" />
                        <p>amazon.com</p>
                    </div>
                    <div className='giftwrap'>
                        <img src={Giftbutton} alt="" />
                        <button className='btn btn-outline-secondary'>View Wishlist</button>
                    </div>
                </div>
            </Col>
        </Slider>
    );
};

export default Giftcarousel