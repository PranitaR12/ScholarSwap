import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import MarketplaceContract from './abis/MarketplaceContract.json'; // Ensure this path is correct

const MarketplacePage = ({ web3, account }) => {
    const [items, setItems] = useState([]);
    const [marketplaceContract, setMarketplaceContract] = useState(null);

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
                    loadItems(instance);
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
        <div>
            <h1>Marketplace</h1>
            <ul>
                {items.map(item => (
                    <li key={item.itemId}>
                        NFT {item.tokenId} listed by {item.seller} for {Web3.utils.fromWei(item.price, 'ether')} ETH
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarketplacePage;
