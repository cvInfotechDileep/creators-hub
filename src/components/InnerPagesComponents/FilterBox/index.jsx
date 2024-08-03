import React from 'react'
import { Dropdown } from 'react-bootstrap';
import GiftFilterIcon  from './../../../assets/svg/giftfilter.svg'; // Adjust the path as needed

const FilterBox = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="" id="creatorsgiftfilter">
                {/* <GiftFilterIcon className="custom-filter-icon" /> */}
                <span className="custom-filter-icon"><img scr={GiftFilterIcon} alt=""/></span>
                Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterBox