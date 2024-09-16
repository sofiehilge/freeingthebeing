import React from 'react';
import Burgermenu from '../components/Burgermenu';
import { CiShoppingCart } from 'react-icons/ci';

const Header = ({ title }) => {
  return (
    <div class='flex justify-between align-middle p-3 items-center'>
      <Burgermenu />
      <h1 class='h1'>{title}</h1>
      <CiShoppingCart fontSize='4em' style={{ color: '#472237' }} />
    </div>
  );
};

export default Header;
