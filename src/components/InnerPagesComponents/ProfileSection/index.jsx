import React from 'react'
import Userprofiletab from '../UserComponents/Userprofiletab';
import Userprofile from './../../../assets/svg/userprofile.svg'
import Bluetick from './../../../assets/svg/bluetick.svg'
import Fanicon from './../../../assets/svg/fanicon.svg'
import setting from './../../../assets/svg/settings.svg'
import share from './../../../assets/svg/share.svg'

const ProfileSection = () => {
    return (
        <>
            <div className='user_coverbox'>
                <div className='coverbox'>
                    <div>
                        <div className='changecoverbox'>
                            <button className='btn changecover'> <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0833 1.75H2.91667C2.27233 1.75 1.75 2.27233 1.75 2.91667V11.0833C1.75 11.7277 2.27233 12.25 2.91667 12.25H11.0833C11.7277 12.25 12.25 11.7277 12.25 11.0833V2.91667C12.25 2.27233 11.7277 1.75 11.0833 1.75Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" /><path d="M5.24967 6.41671C5.89401 6.41671 6.41634 5.89437 6.41634 5.25004C6.41634 4.60571 5.89401 4.08337 5.24967 4.08337C4.60534 4.08337 4.08301 4.60571 4.08301 5.25004C4.08301 5.89437 4.60534 6.41671 5.24967 6.41671Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.25 8.75003L10.4498 6.94986C10.2311 6.73114 9.93436 6.60828 9.625 6.60828C9.31564 6.60828 9.01895 6.73114 8.80017 6.94986L3.5 12.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" /></svg> Change Cover</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='userprofilebox'>
                <div className='userimagebox'>
                    <img src={Userprofile} alt="" /><span className='online_icon'></span>
                </div>
                <div className='usernamebox'>
                    <div className='username_balance'>
                        <div className='usernameblueicon'>
                            <h1>John Doe <br /><span>@johndoe123</span></h1>
                            <img src={Bluetick} alt="" className='bluetickcss' />
                            <img src={Fanicon} alt="" className='faniconcss' />
                        </div>
                        <div className='userbalancebox'>
                            <button className='btn btnbalance'>{`Balance: $0.00`}</button>
                            <div className='backgrey'>
                                <img src={setting} alt="" className='greyimghover' />&nbsp;&nbsp;<img src={share} alt="" className='greyimghover' />
                            </div>
                        </div>
                    </div>
                    <div className='user_description_box'>
                        <p>Lifestyle and travel blogger who loves to explore new destinations and share my experiences with my followers. With a background in photography, Instagram is filled with vibrant images from my adventures around the world.</p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProfileSection