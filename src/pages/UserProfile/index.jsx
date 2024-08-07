import React from 'react'
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import "./../dashboard.scss"
import UseAccount from '../../components/InnerPagesComponents/UserAccount'

const UserProfile = () => {
    return (
        <div style={{background:"#EDF0F2"}}>
        <HeaderInternalPage />
        <UseAccount />
      </div> 
    )
}

export default UserProfile