import Explorelivestream from './../../../../assets/svg/explore_live_stream.svg'
import { Col, Row } from 'react-bootstrap'
import avtarimg from './../../../../assets/svg/Avatar.svg'
import eyeimg from './../../../../assets/svg/eye.svg'
import livebtn from './../../../../assets/svg/livebox.svg'
function ExploreLivestream() {

    return (
        <>
            <div className='spcial_margin_top'></div>
            <p className='commanheadming'>Explore live Stream</p>
            <img src={Explorelivestream} alt='' className='image100' />
            <Col className='mt-3'>
                <Row>
                    <Col xl='8'>
                        <img src={avtarimg} alt="" /> <span>Mark Villiams</span>
                    </Col>
                    <Col xl='4' className='underlive_box'>
                        <img src={eyeimg} alt="" style={{ float: "red" }} /> <span>1K</span> <img src={livebtn} alt='' />
                    </Col>
                </Row>
            </Col>
        </>
    )

}

export default ExploreLivestream;