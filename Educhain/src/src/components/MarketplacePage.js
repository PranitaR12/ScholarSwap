import React, { useState } from 'react';
import Web3 from 'web3';

const MarketplacePage = () => {
    const [dummyItems, setDummyItems] = useState([
        {
            itemId: 1,
            tokenId: 101,
            seller: '0x123...',
            price: Web3.utils.toWei('0.5', 'ether'),
            name: 'Cornell Notes',
            image: 'https://farm8.staticflickr.com/7435/10177514634_c183c8fbbe_z.jpg',
            purchased: false,
        },
        {
            itemId: 2,
            tokenId: 102,
            seller: '0xabc...',
            price: Web3.utils.toWei('1', 'ether'),
            name: 'Writing Lab ',
            image: 'https://farm4.staticflickr.com/3789/10177514664_0ff9a53cf8_z.jpg',
            purchased: false,
        },
        {
            itemId: 3,
            tokenId: 103,
            seller: '0x789...',
            price: Web3.utils.toWei('0.75', 'ether'),
            name: 'Visualising World Peace',
            image: 'https://farm6.staticflickr.com/5333/9939144425_3d55fa4fda.jpg',
            purchased: false,
        },
    ]);

    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleBuy = (itemId) => {
        // Simulate item purchase
        const updatedItems = dummyItems.map(item =>
            item.itemId === itemId
                ? { ...item, purchased: true }
                : item
        );
        setDummyItems(updatedItems);

        // Show success popup
        setPopupMessage('Purchase successful!');
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">NFT Marketplace</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dummyItems.map(item => (
                    <div key={item.itemId} className={`bg-gray-800 text-white rounded-lg shadow-lg p-4 ${item.purchased ? 'opacity-50' : ''}`}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-t-lg w-full h-48 object-cover"
                        />
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p className="text-gray-400">
                                Listed by: <span className="font-medium">{item.seller}</span>
                            </p>
                            <p className="mt-2">
                                Price: <span className="font-bold">{Web3.utils.fromWei(item.price, 'ether')} ETH</span>
                            </p>
                            <button
                                onClick={() => handleBuy(item.itemId)}
                                className={`mt-4 w-full py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-800 transition duration-300 ${item.purchased ? 'cursor-not-allowed' : ''}`}
                                disabled={item.purchased}
                            >
                                {item.purchased ? 'Sold Out' : 'Buy Now'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup for success or failure */}
            {showPopup && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                        <h2 className="text-lg font-bold mb-4">{popupMessage}</h2>
                        <button
                            onClick={closePopup}
                            className="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarketplacePage;
