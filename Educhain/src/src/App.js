import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Web3 from 'web3';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddNFTPage from './components/AddNFTPage';
import MarketplacePage from './components/MarketplacePage';
import NFTContract from './components/abis/NFTContract.json';

const App = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        console.log('Web3 instance:', web3);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        console.log('Connected accounts:', accounts);
        setWeb3(web3);
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Failed to connect to wallet', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };



  useEffect(() => {
    if (web3) {
      // You could potentially check for already connected accounts here
    }
  }, [web3]);

  return (
    <Router>
      <Navbar account={account} onConnectWallet={connectWallet} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketplacePage web3={web3} />} />
        <Route path="/add-nft" element={<AddNFTPage web3={web3} />} />
      </Routes>
    </Router>
  );
};

export default App;
