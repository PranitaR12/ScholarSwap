import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ account, onConnectWallet }) => {
    return (
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">
                    <img src="logo.svg" alt="logo" className="h-12 w-12 rounded-full" />
                </h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/marketplace" className="text-white hover:text-purple-500">
                            Marketplace
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-nft" className="text-white hover:text-purple-500">
                            Add NFT
                        </Link>
                    </li>
                </ul>
                <div className='w-30'>
                    {account ? (
                        <span className="text-white">{account.substring(0, 10)}...</span>
                    ) : (
                        <button
                            onClick={onConnectWallet}
                            className="bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-900 transition duration-300"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
