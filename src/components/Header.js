import React from 'react';
import '../styles/Header.css';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

const Header = () => {
  return (
    <div className='nav'>
      <button className='navItem'>SWAP <SwapHorizIcon className='headerIcon' /></button>
      <button className='navItem'>CONNECT</button>
    </div>
  )
}

export default Header