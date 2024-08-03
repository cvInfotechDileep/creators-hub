import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import followimage from './../../../assets/svg/following_image.svg' 
import followimage2 from './../../../assets/svg/following_image2.svg' 


function FollowingUsers() {
  const [key, setKey] = useState('home');
  const following_count = 9;
  const followers_count = 18;

  return (
    <Tabs
      id="follower_following_tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title={`Following ${following_count}+`}>
        
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Following</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Following</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Following</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Following</div>
        </div>
        
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Following</div>
        </div>

        <div className='showallfollowers'>
          Show All
        </div>
        
      </Tab>
      <Tab eventKey="profile" title={`Followers ${followers_count}+`}>
      <div className='follower_list'>
            <div className='follow_image'><img src={followimage2} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Followers</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage2} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Followers</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage2} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Followers</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage2} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Followers</div>
        </div>
        <div className='follower_list'>
            <div className='follow_image'><img src={followimage2} alt='' /></div>
            <div className='follow_name'><p>Talon Everett</p>
            <span>@talon_e</span></div>
            <div className='followbuttoncv'>Followers</div>
        </div>
        <div className='showallfollowers'>
          Show All
        </div>
      </Tab>
    </Tabs>
  );
}

export default FollowingUsers;