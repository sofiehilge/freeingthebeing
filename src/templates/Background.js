import React from 'react';
import backgroundImage from '../assets/watercolor-alcohol-ink-background/5898436.jpg';

const Background = ({ children }) => {
  return (
    <div
      className='bg-cover bg-center h-screen w-screen'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {children}
    </div>
  );
};

export default Background;
