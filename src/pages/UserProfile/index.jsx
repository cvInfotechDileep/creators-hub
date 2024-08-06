import React from 'react'
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import "./../dashboard.scss"
import UseAccount from '../../components/InnerPagesComponents/UserAccount'

const UserProfile = () => {
    return (
        <div style={{background:"#e7eff5"}}>
        <HeaderInternalPage />
        <UseAccount />
      </div> 
    )
}

export default UserProfile