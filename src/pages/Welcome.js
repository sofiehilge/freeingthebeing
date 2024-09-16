import React from 'react';
import Header from '../templates/Header';
import portrait from '../assets/imagecompressor/IMG_0298-min.JPG';
import Background from '../templates/Background';

const Welcome = () => {
  return (
    <>
      <Background>
        <Header title='Mie Dandanell' />
        <img src={portrait} alt='portrait' />
        <h3>Welcome - Om - Podcast links - Instagram</h3>
      </Background>
    </>
  );
};

export default Welcome;
