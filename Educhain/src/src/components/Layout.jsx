import React from 'react'
import Navbar from './Navbar.jsx'

function Layout({ children }) {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <main>
        {children}
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  )
}

export default Layout