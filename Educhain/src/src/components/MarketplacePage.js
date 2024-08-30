import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import MarketplaceContract from './abis/MarketplaceContract.json'; // Ensure this path is correct

const MarketplacePage = ({ web3, account }) => {
    const [items, setItems] = useState([]);
    const [marketplaceContract, setMarketplaceContract] = useState(null);

    // Dummy data for illustration
    const dummyItems = [
        {
            itemId: 1,
            tokenId: 101,
            seller: '0x123...',
            price: Web3.utils.toWei('0.5', 'ether'),
            name: 'Cornell Notes',
            image: 'https://farm8.staticflickr.com/7435/10177514634_c183c8fbbe_z.jpg', // Replace with actual image URLs
        },
        {
            itemId: 2,
            tokenId: 102,
            seller: '0xabc...',
            price: Web3.utils.toWei('1', 'ether'),
            name: 'Writing Lab ',
            image: 'https://farm4.staticflickr.com/3789/10177514664_0ff9a53cf8_z.jpg', // Replace with actual image URLs
        },
        {
            itemId: 3,
            tokenId: 103,
            seller: '0x789...',
            price: Web3.utils.toWei('0.75', 'ether'),
            name: 'Visualising World Peace',
            image: 'https://farm6.staticflickr.com/5333/9939144425_3d55fa4fda.jpg',
        },
    ];

    useEffect(() => {
        if (web3) {
            const initMarketplace = async () => {
                try {
                    const networkId = await web3.eth.net.getId();
                    const marketplaceNetwork = MarketplaceContract.networks[networkId];

                    const instance = new web3.eth.Contract(
                        MarketplaceContract.abi,
                        marketplaceNetwork && marketplaceNetwork.address,
                    );

                    setMarketplaceContract(instance);
                    // Uncomment to use real items
                    // loadItems(instance);
                } catch (error) {
                    console.error('Error initializing marketplace:', error);
                }
            };
            initMarketplace();
        }
    }, [web3]);

    const loadItems = async (contract) => {
        try {
            const itemCount = await contract.methods._itemIds().call();
            const items = [];
            for (let i = 1; i <= itemCount; i++) {
                const item = await contract.methods.idToMarketItem(i).call();
                items.push(item);
            }
            setItems(items);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-8">NFT Marketplace</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dummyItems.map(item => (
                    <div key={item.itemId} className="bg-gray-800 text-white rounded-lg shadow-lg p-4">
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
                            <button className="mt-4 w-full py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-800 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarketplacePage;
