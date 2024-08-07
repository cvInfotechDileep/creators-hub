import React from 'react'
import HeaderInternalPage from '../../components/Headers/HeaderInternalPage'
import Allcreators from '../../components/InnerPagesComponents/Allcreators';
import "./../dashboard.scss"

const CreatotsList = () => {
    return (
        <div style={{background:"#EDF0F2"}}>
            <HeaderInternalPage />
            <Allcreators />
        </div>
    )
}

export default CreatotsList