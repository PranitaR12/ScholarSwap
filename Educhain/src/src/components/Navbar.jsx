import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='text-white p-4 flex justify-between'>
      <span className=''>
        <img src='logo.png' alt='logo' className='h-12 w-12 rounded-sm' />
      </span>

      <nav className='flex justify-between gap-10'>
        <a to='/' className='hover:text-blue-500'>Home</a>
        <a to='/about' className='hover:text-blue-500'>Docs</a>
      </nav>

      <span className=''>
        <Link to='/login' className='hover:text-blue-500'>Login</Link>
      </span>
    </header>
  )
}

export default Navbar