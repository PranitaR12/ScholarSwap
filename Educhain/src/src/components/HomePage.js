import React from 'react';

const HomePage = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to Educhain</h1>
            <p>Your platform for minting, buying, and selling NFTs.</p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
};

export default HomePage;
