import React from 'react';
import "./../dashboard.scss";
import "./style.scss";
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage';
import DropdownIcon from "../../assets/svg/dropdownIcon.svg";
import tableLine from "../../assets/Images/tableline.png";
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';

const SentGifts = () => {

    const tableData = [
        {
            product: "Product 1",
            productImage: "https://via.placeholder.com/38",
            sendTo: "John Doe",
            sendToImage: "https://via.placeholder.com/38",
            price: "$10",
            giftType: "Birthday",
            status: "Delivered",
            date: "01/01/2024",
        },
        {
            product: "Product 2",
            productImage: "https://via.placeholder.com/38",
            sendTo: "Jane Smith",
            sendToImage: "https://via.placeholder.com/38",
            price: "$20",
            giftType: "Anniversary",
            status: "Ordered",
            date: "01/02/2024",
        },
        {
            product: "Product 3",
            productImage: "https://via.placeholder.com/38",
            sendTo: "Emily Johnson",
            sendToImage: "https://via.placeholder.com/38",
            price: "$30",
            giftType: "Christmas",
            status: "Transferred",
            date: "01/03/2024",
        }
        // Add more data as needed
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'status-delivered';
            case 'Transferred':
                return 'status-transferred';
            case 'Ordered':
                return 'status-ordered';
            default:
                return '';
        }
    };

    return (
        <>
            <div style={{ background: "#EDF0F2", minHeight: "100vh" }}>
                <HeaderInternalPage />
                <Container className='mt-5'>
                    <Row>
                        <Col xl='12'>
                            <div className='custom_vertical_space'></div>
                            <div className='livestreambox1 d-flex justify-content-between align-items-center'>
                                <div>
                                    <h3>Gift History</h3>
                                    <p className='pgray' style={{ margin: "0px" }}>See the gifts you’ve given.</p>
                                </div>
                                <DropdownButton className="filterBtn" id="dropdown-basic-button" title={
                                    <div className="d-flex align-items-center gap-2 mx-2">
                                        All
                                        <img src={DropdownIcon} alt="Dropdown Icon" />
                                    </div>
                                }>
                                    <Dropdown.Item href="/">one</Dropdown.Item>
                                    <Dropdown.Item href="/">two</Dropdown.Item>
                                    <Dropdown.Item href="/">three</Dropdown.Item>
                                    <Dropdown.Item href="/">four</Dropdown.Item>
                                    <Dropdown.Item href="/">five</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl='12'>
                            <div className='custom_vertical_space'></div>
                            <img src={tableLine} alt="/" className='tableLine'/>
                            <table className='custom-table w-100'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Send To</th>
                                        <th>Price</th>
                                        <th>Gift Type</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                <img src={row.productImage} alt={row.product} width="38" height="38" className='rounded-circle' style={{ marginRight: '8px' }} />
                                                {row.product}
                                            </td>
                                            <td>
                                                <img src={row.sendToImage} alt={row.sendTo} width="38" height="38" className='rounded-circle' style={{ marginRight: '8px' }} />
                                                {row.sendTo}
                                            </td>
                                            <td>{row.price}</td>
                                            <td>{row.giftType}</td>
                                            <td className='text-center'><div className={getStatusClass(row.status)}>{row.status}</div></td>
                                            <td>{row.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default SentGifts;
