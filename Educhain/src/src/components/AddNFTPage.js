import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import NFTContract from './abis/NFTContract.json'; // Ensure this path is correct
import MarketplaceContract from './abis/MarketplaceContract.json'; // Ensure this path is correct

const AddNFTPage = ({ web3, account }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contract, setContract] = useState(null);
    const [marketplaceContract, setMarketplaceContract] = useState(null);

    useEffect(() => {
        if (web3) {
            const initContracts = async () => {
                try {
                    const networkId = await web3.eth.net.getId();
                    const nftNetwork = NFTContract.networks[networkId];
                    const marketplaceNetwork = MarketplaceContract.networks[networkId];

                    const nftInstance = new web3.eth.Contract(
                        NFTContract.abi,
                        nftNetwork && nftNetwork.address,
                    );
                    const marketplaceInstance = new web3.eth.Contract(
                        MarketplaceContract.abi,
                        marketplaceNetwork && marketplaceNetwork.address,
                    );

                    setContract(nftInstance);
                    setMarketplaceContract(marketplaceInstance);
                } catch (error) {
                    console.error('Error initializing contracts:', error);
                }
            };
            initContracts();
        }
    }, [web3]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!contract || !web3 || !account) return;

        try {
            await contract.methods
                .mint(account)
                .send({ from: account });

            alert('NFT successfully added!');

            await marketplaceContract.methods
                .listNFT(contract.options.address, 0, 0.1)
                .send({ from: account, value: web3.utils.toWei('0.01', 'ether') });

            alert('NFT listed on marketplace!');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding or listing NFT:', error);
            alert('Failed to add or list NFT.');
        }
    };

    return (
        <div className="max-w-lg mx-auto my-10 p-8 bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Add New NFT</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-lg font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter NFT title"
                    />
                </div>
                <div>
                    <label className="block text-lg font-semibold mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter NFT description"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-purple-700 rounded-lg text-white font-bold hover:bg-purple-900 transition duration-300">
                    Add NFT
                </button>
            </form>
        </div>
    );
};

export default AddNFTPage;
