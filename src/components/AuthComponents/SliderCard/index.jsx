import React from 'react';
// import './Card.css'; // Assuming you have a CSS file for styling

const SliderCard = ({ className, content, image }) => {
    return (
        <div className={`w-50 cardCustom ${className.isActive ? 'active' : ''} ${className.isActiveBehind ? 'active-behind' : ''} ${className.isUpcoming ? 'upcoming' : ''} ${className.isCompleted ? 'completed' : ''}`}>
            <img src={image} alt={content} />
            <p>{content}</p>
        </div>
    );
};

export default SliderCard;
