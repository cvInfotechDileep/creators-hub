import React from 'react'
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import "./../dashboard.scss"
import CreatorAccount from '../../components/InnerPagesComponents/CreatorAccount';

const CreatorProfile = () => {
  return (
    <div style={{background:"#e7eff5"}}>
        <HeaderInternalPage />
        <CreatorAccount />
      </div> 
  )
}

export default CreatorProfile