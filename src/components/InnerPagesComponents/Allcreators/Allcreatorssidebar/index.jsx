import React from 'react'
import { Nav, InputGroup, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Allcicon from './../../../../assets/Images/image38.png'
import Articon from './../../../../assets/Images/image39.png'
import Beautyicon from './../../../../assets/Images/image40.png'
import Cosplayicon from './../../../../assets/Images/image41.png'
import Fashionicon from './../../../../assets/Images/image42.png'
import Gamingicon from './../../../../assets/Images/image43.png'
import Gymicon from './../../../../assets/Images/image44.png'
import Musicicon from './../../../../assets/Images/image45.png'
import Streamingicon from './../../../../assets/Images/image46.png'


function Allcreatorssidebar() {
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search creator"
          aria-label="Search creator"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
      </InputGroup>
      <div className='hrline'></div>
      <h3 className='h4heading'>Creator Categories</h3>
      <Nav defaultActiveKey="/home" className="flex-column allciconslist">
        <Nav.Link href="/home"><img src={Allcicon}></img> All</Nav.Link>
        <Nav.Link href="/art"><img src={Articon}></img> Art</Nav.Link>
        <Nav.Link href="/beauty"><img src={Beautyicon}></img> Beauty</Nav.Link>
        <Nav.Link href="/cosplay"><img src={Cosplayicon}></img> Cosplay</Nav.Link>
        <Nav.Link href="/fashion"><img src={Fashionicon}></img> Fashion</Nav.Link>
        <Nav.Link href="/gaming"><img src={Gamingicon}></img> Gaming</Nav.Link>
        <Nav.Link href="/gym"><img src={Gymicon}></img> Gym & Fitness</Nav.Link>
        <Nav.Link href="/music"><img src={Musicicon}></img> Music</Nav.Link>
        <Nav.Link href="/streaming"><img src={Streamingicon}></img> Streaming</Nav.Link>
      </Nav>
    </>
  )
}

export default Allcreatorssidebar