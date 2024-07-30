// src/components/Loading.js
import React from 'react';
import loader from './../../assets/gifs/loader.gif'
import './style.scss'; // Import CSS file for styles


const Loading = () => {
  return (
    <div className="loading-container">
      {/* <div className="loading-spinner"></div> */}
      <img className="loading-spinner" src={loader} alt='' style={{width:"5%"}}/>
      {/* <p>Loading...</p> */}
    </div>
  );
};

export default Loading;
