import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import eyeimg from './../../../../../assets/svg/eye.svg'
import avtarimg from "./../../../../../assets/svg/Avatar.svg";
import livebtn from './../../../../../assets/svg/livebox.svg'
import livestreaming2 from './../../../../../assets/svg/live_stream_2.svg'
import livestreamimg from './../../../../../assets/svg/LiveStreamThumbnail.svg'
import live_countdown from './../../../../../assets/svg/live_countdown.svg'

const SimpleSlider = () => {
    const settings = {
        //   dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        //   nextArrow: <div>Next</div>,
        //   prevArrow: <div>Prev</div>
    };

    return (
        <Slider {...settings}>
            <Col>
                <img src={live_countdown} alt="" className='live_stream_thumbnailimg' />
                <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                <Row>
                    <div className='authro_with_live_1'>
                        <img src={avtarimg} alt="" /> <span>Mark Villiams</span>
                    </div>
                    <Col xl='12'>
                        <button className='get_notifiedcss'><span>+</span> Get Notified</button>
                    </Col>
                </Row>
            </Col>
            <Col>
                <img src={livestreamimg} alt="" className='live_stream_thumbnailimg' />
                <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className='authro_with_live'>
                    <div className='authro_with_live_1'>
                        <img src={avtarimg} alt="" /> <span>Kelly Normna</span>
                    </div>
                    <div>
                        <div className='authro_with_live_2'>
                            <img src={eyeimg} alt="" style={{ float: "red" }} /> <span>1K</span> <img src={livebtn} alt='' />
                        </div>
                    </div>
                </div>
            </Col>
            <Col>
                <img src={livestreaming2} alt="" className='live_stream_thumbnailimg' />
                <p className='pblue'>Lorem ipsum dolor sit amet, consec adipiscing elit.</p>
                <div className='authro_with_live'>
                    <div className='authro_with_live_1'>
                        <img src={avtarimg} alt="" /> <span>Kelly Normna</span>
                    </div>
                    <div>
                        <div className='authro_with_live_2'>
                            <img src={eyeimg} alt="" style={{ float: "red" }} /> <span>1K</span> <img src={livebtn} alt='' />
                        </div>
                    </div>
                </div>
            </Col>
        </Slider>
    );
};
export default SimpleSlider;