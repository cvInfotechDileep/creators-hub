import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import UserOverview from "../UserOverview";
import Homeicon from './../../../../assets/svg/home2.svg'
import UserNetwork from "../UserNetwork";
import UserMyactivity from "../UserMyactivity";

function Userprofiletab() {
    const [key, setKey] = useState('1'); 
    // const [Tabvalue, setTabvalue] = useState('');  

    const tabs = [{
        tabname:"Overview",
        tabId:'1',
        tabicon:Homeicon,
        tabcomponent:<UserOverview />
      },{
        tabname:"My Activity",
        tabId:'2',
        tabicon:Homeicon,
        tabcomponent:<UserMyactivity />
      },{
        tabname:"Network",
        tabId:'3',
        tabicon:Homeicon,
        tabcomponent:<UserNetwork />
      }]

      const gettitle=(tab)=>{
        return (           
            <div className='tabHeading'>
                <img src={tab.tabicon} alt="" />
                <h1>{tab.tabname}</h1>
            </div>
        )
      }  


    // console.log(Tabvalue);
    return (
      <Tabs
      defaultActiveKey={key}
        id="user_profile_section"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3, mt-4"
      >

        {tabs?.map((tab,index)=> {
            return  <Tab eventKey={tab?.tabId} title={gettitle(tab)}>
            {tab.tabcomponent}
            </Tab>
        })}

      </Tabs>
    );
  }
  export default Userprofiletab