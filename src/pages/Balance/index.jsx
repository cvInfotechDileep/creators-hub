import React from 'react'
import "./../dashboard.scss";
import { Col, Container, Row } from 'react-bootstrap'
import User_balance_icon from './../../assets/svg/user_balance_icon.svg'
import Cardbox from './../../assets/svg/Cardbox.svg'
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage';

const Balance = () => {
    return (
        <div style={{ background: "#EDF0F2" }}>
            <HeaderInternalPage />
            <Container className='mt-5'>
                <Row>
                    <Col xl='12'>
                        <div className='custom_vertical_space'></div>
                        <div className='livestreambox1'>
                            <h3>Settings & Integrations</h3>
                            <p className='pgray' style={{ margin: "0px" }}>Configure your address, personalize your profile & enter delivery details.</p>
                        </div>
                    </Col>
                </Row>
                <div className='custom_vertical_space'></div>
                <Row>
                    <Col xl={4}>
                        <div className='livestreambox1 bgwith_effect'>
                            <h3>Current Balance (USD)</h3>
                            <p className='pgray'>You can redeem your balance for gifts or withdraw it to your back Read More.</p>
                            <div class="hrline"></div>
                            <div class="pricebox"><span>$</span><p style={{ margin: "0px" }}>0.00</p></div>
                        </div>
                        <div className='custom_vertical_space'></div>
                        <img src={Cardbox} alt="" />

                    </Col>
                    <Col xl={8}>
                        <div className='livestreambox1 balance_transcation_box'>
                            <div className='hiddendetailsbox'>
                                <img src={User_balance_icon} alt="" />
                                <h3>Balance Transactions</h3>
                                <p>No balance transactions yet.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default Balance