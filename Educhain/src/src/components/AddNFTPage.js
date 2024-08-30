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
            // Call the smart contract function to mint the NFT
            await contract.methods
                .mint(account) // Adjust this if your mint function requires more parameters
                .send({ from: account });

            alert('NFT successfully added!');
            // Optionally, list it on the marketplace
            // Assuming the tokenId is 0 for simplicity; adjust as necessary
            await marketplaceContract.methods
                .listNFT(contract.options.address, 0, 0.1) // Example price; adjust as necessary
                .send({ from: account, value: web3.utils.toWei('0.01', 'ether') });

            alert('NFT listed on marketplace!');
            // Clear form fields
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error adding or listing NFT:', error);
            alert('Failed to add or list NFT.');
        }
    };

    return (
        <div>
            <h1>Add New NFT</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add NFT</button>
            </form>
        </div>
    );
};

export default AddNFTPage;
