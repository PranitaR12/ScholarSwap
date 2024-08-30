import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ account, onConnectWallet }) => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.container}>
                <h1 style={styles.logo}>Educhain</h1>
                <ul style={styles.navLinks}>
                    <li><Link to="/" style={styles.navLink}>Home</Link></li>
                    <li><Link to="/marketplace" style={styles.navLink}>Marketplace</Link></li>
                    <li><Link to="/add-nft" style={styles.navLink}>Add NFT</Link></li>
                </ul>
                <div style={styles.accountInfo}>
                    {account ? (
                        `Connected: ${account}`
                    ) : (
                        <button onClick={onConnectWallet} style={styles.connectButton}>
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        margin: 0,
    },
    navLinks: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
    },
    accountInfo: {
        marginLeft: 'auto',
    },
    connectButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '4px',
    },
};

export default Navbar;
