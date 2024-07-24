// src/components/Loading.js
import React from 'react';
import './style.scss'; // Import CSS file for styles

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
