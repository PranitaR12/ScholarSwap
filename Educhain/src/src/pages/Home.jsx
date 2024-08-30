import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col text-white'>
      <header className='text-white p-4 flex justify-between'>
        <span className=''>
          <img src='logo.svg' alt='logo' className='h-12 w-12 rounded-sm' />
        </span>

        <nav className='flex justify-between gap-10 align-middle'>
          <Link to='/' className='flex flex-col justify-center'>Home</Link>
          <Link to='/about' className=' flex flex-col justify-center'>Docs</Link>
        </nav>

        <span className='flex'>
          <Link to='/login' className='flex flex-col justify-center'>Login</Link>
        </span>
      </header>
      <header className='bg-transparent py-12'>
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4'>
            Welcome to ScholarSwap
          </h1>
          <p className='text-2xl font-light'>
            Revolutionizing the Exchange of Educational Assets
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-grow container mx-auto px-6 py-12'>
        {/* Introduction Section */}
        <section className='bg-white bg-opacity-5 rounded-lg shadow-lg p-8 mb-12'>
          <p className='text-xl mb-6'>
            <span className='font-bold text-blue-400'>ScholarSwap</span> is your decentralized marketplace for buying, selling, and sharing educational materials such as course notes, certifications, and digital textbooks. Leveraging blockchain and AI, we offer a secure and innovative platform for exchanging educational assets.
          </p>
          <div className='grid md:grid-cols-2 gap-8'>
            {/* Marketplace Features */}
            <div className='bg-white bg-opacity-10 p-6 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>Explore Our Marketplace</h2>
              <ul className='list-inside'>
                <li className='mb-3'><strong>Browse Collections:</strong> Explore categories like Science, Engineering, and more.</li>
                <li className='mb-3'><strong>Advanced Search:</strong> Filter through resources easily.</li>
                <li><strong>Secure Transactions:</strong> Enjoy peace of mind with blockchain-powered transactions.</li>
              </ul>
            </div>

            {/* AI-Driven Recommendations */}
            <div className='bg-white bg-opacity-10 p-6 rounded-lg shadow-md'>
              <h2 className='text-3xl font-semibold mb-4'>AI-Powered Recommendations</h2>
              <ul className='list-inside'>
                <li className='mb-3'><strong>Personalized Suggestions:</strong> AI curates materials based on your preferences.</li>
                <li><strong>Dynamic Pricing:</strong> Fair, optimized pricing with AI algorithms.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Wallet Integration Section */}
        <section className='bg-white bg-opacity-5 rounded-lg shadow-md p-8 mb-12'>
          <h2 className='text-3xl font-bold mb-4 text-center'>Seamless Wallet Integration</h2>
          <p className='text-xl mb-4'>
            Connect your crypto wallet to manage your transactions securely. ScholarSwap supports MetaMask and other popular wallets, making it easy to engage with the blockchain features.
          </p>
          <div className='flex justify-center'>
            <ul className='text-xl space-y-3'>
              <li><strong>Wallet Connect:</strong> Securely link your wallet to manage assets.</li>
              <li><strong>Manage Transactions:</strong> Buy, sell, and trade educational materials with ease.</li>
            </ul>
          </div>
        </section>

        {/* Why ScholarSwap Section */}
        <section className='text-center py-12'>
          <h2 className='text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mb-6'>
            Why Choose ScholarSwap?
          </h2>
          <div className='max-w-4xl mx-auto'>
            <ul className='list-inside text-xl space-y-4'>
              <li><strong>Decentralized & Transparent:</strong> Transactions are recorded on the blockchain, ensuring full transparency and trust.</li>
              <li><strong>Cutting-Edge AI:</strong> Dynamic recommendations and pricing with AI.</li>
              <li><strong>Community Driven:</strong> Be part of a thriving ecosystem of learners and educators.</li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className='bg-white bg-opacity-10 text-white py-8 rounded-lg'>
          <div className='container mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-4'>Get Started Today</h2>
            <p className='text-xl mb-8'>Dive into the future of educational resources with ScholarSwap.</p>
            <div className='flex justify-center space-x-4'>
              <button className='bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-full transition duration-300'>
                Create Account
              </button>
              <button className='bg-purple-700 hover:bg-purple-900 text-white font-bold py-3 px-6 rounded-full transition duration-300'>
                Connect Wallet
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
