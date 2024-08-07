import React from 'react'
import "./../dashboard.scss"
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import CreatorsTimeline from '../../components/CreatorsTimeline'

const Creatorsfeed = () => {
  return (
    <div style={{background:"#EDF0F2"}}>
        <HeaderInternalPage />
        <CreatorsTimeline />
      </div>
  )
}

export default Creatorsfeed