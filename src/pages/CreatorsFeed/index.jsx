import React from 'react'
import "./../dashboard.scss"
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import CreatorsTimeline from '../../components/CreatorsTimeline'

const Creatorsfeed = () => {
  return (
    <div style={{background:"#e7eff5"}}>
        <HeaderInternalPage />
        <CreatorsTimeline />
      </div>
  )
}

export default Creatorsfeed