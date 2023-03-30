import React from 'react';
import '../styles/Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SubjectIcon from '@mui/icons-material/Subject';
import Help from '@mui/icons-material/Help';
import TagIcon from '@mui/icons-material/Tag';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='coreOptions'>
        <p>CORE</p>
        <div className='list'><DashboardIcon className='sidebarIcon' />Dashboard</div>
        <div className='list'><CalculateIcon className='sidebarIcon' />Calculator</div>
        <div className='list'><SwapHorizIcon className='sidebarIcon' />Swap</div>
        <div className='list'><SubjectIcon className='sidebarIcon' />To Do List</div>
        <div className='list'><Help className='sidebarIcon' />FAQ</div>
      </div>
      <div className="coreOptions">
        <p>LINKS</p>
        <div className='list'><TagIcon className='sidebarIcon' />Socials</div>
        <div className='list'><PublicIcon className='sidebarIcon' />Website</div>
        <div className='list'><AccountBalanceWalletIcon className='sidebarIcon' />Buy Now</div>
      </div>
    </div>
  )
}

export default Sidebar