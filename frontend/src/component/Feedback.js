import React from 'react';
import { quotes } from '../assets';
import './Feedback.css'; // Make sure to adjust the path to your CSS file

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='feedback-card'>
      <img
        src={quotes}
        alt='double-quotes'
        className='quotes-icon'
      />
      <p className='feedback-content'>
        {content}
      </p>
      <div className='flex-row'>
        <img
          src={img}
          alt={name}
          className='profile-image'
        />
        <div className='info'>
          <h4 className='name'>{name}</h4>
          <p className='title'>{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
