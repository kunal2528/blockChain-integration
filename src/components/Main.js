import React from 'react';
import '../styles/Main.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const Main = () => {
  return (
    <div className='main'>
      <div className='wallet'>
        <AccountBalanceWalletIcon className='walletIcon' />
        <p>Wallet Address - 0x833aBBF9904E9A3Fe194f7c433F633b1606D159A</p>
      </div>
      <div className='walletDetails'>
        <div className='walletDetails-row'>
          <div className='column'>
            <div>My Total Token</div>
            <div className='valueColor'>34234 TKN</div>
          </div>
          <div className='column'>
            <div>Total Token Value</div>
            <div className='valueColor'>354343$</div>
          </div>
          <div className='column'>
            <div>Token Burned</div>
            <div className='valueColor'>3234 TKN</div>
          </div>
        </div>
        <div className='walletDetails-row'>
          <div className='column'>
            <div>Total Supply</div>
            <div className='valueColor'>10000000</div>
          </div>
          <div className='column'>
            <div>Market Volume (USD)</div>
            <div className='valueColor'>54658</div>
          </div>
          <div className='column'>
            <div>Current Price</div>
            <div className='valueColor'>$0.005454</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main