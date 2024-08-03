import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';
import Homeicon from './../../../assets/svg/home2.svg'
import CreaterMedia from '../CreatorComponents/CreaterMedia';
// import GiftersTab from '../CreatorComponents/SendGiftTab';
import CollectionsTab from '../CollectionsTab';
import SendGiftTab from '../CreatorComponents/SendGiftTab';
import GiftersTab from '../GiftersTab';
import WishListTab from '../WishlistTab';

const CreatorProfileTabs = () => {
    const [key, setKey] = useState('1'); 

    const tabs = [{
        tabname:"Media",
        tabId:'1',
        tabicon:Homeicon,
        tabcomponent:<CreaterMedia />
      },{
        tabname:"WishList",
        tabId:'2',
        tabicon:Homeicon,
        tabcomponent:<WishListTab />
      },{
        tabname:"Gifters",
        tabId:'3',
        tabicon:Homeicon,
        tabcomponent:<GiftersTab />
      },{
        tabname:"Collections",
        tabId:'4',
        tabicon:Homeicon,
        tabcomponent:<CollectionsTab />
      },{
        tabname:"Send Gifts",
        tabId:'5',
        tabicon:Homeicon,
        tabcomponent:<SendGiftTab />
      },]

      const gettitle=(tab)=>{
        return (           
            <div className='tabHeading'>
                <img src={tab.tabicon} alt="" />
                <h1>{tab.tabname}</h1>
            </div>
        )
      }  

    return (
        <Tabs
        defaultActiveKey={key}
          id="user_profile_section"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3, mt-4"
        >
  
          {tabs?.map((tab,index)=> {
              return  <Tab key={index} eventKey={tab?.tabId} title={gettitle(tab)}>
              {tab.tabcomponent}
              </Tab>
          })}
  
        </Tabs>
      );
}

export default CreatorProfileTabs