import React, { useEffect , useState } from 'react';
import Web3 from 'web3';
import NFTContract from './abis/NFTContract.json'; // Ensure ABI and contract address are correct

const MintNFTPage = ({ account }) => {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const initWeb3 = async () => {
            const provider = new Web3(Web3.givenProvider || "http://localhost:8545");
            const web3 = new Web3(provider);
            setWeb3(web3);

            const networkId = await web3.eth.net.getId();
            const deployedNetwork = NFTContract.networks[networkId];
            const contractInstance = new web3.eth.Contract(
                NFTContract.abi,
                deployedNetwork && deployedNetwork.address
            );
            setContract(contractInstance);
        };

        initWeb3();
    }, []);

    const handleMint = async () => {
        if (contract) {
            try {
                await contract.methods.mint(account).send({ from: account });
                alert('NFT Minted Successfully');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h1>Mint NFT</h1>
            <button onClick={handleMint}>Mint</button>
        </div>
    );
};

export default MintNFTPage;
