import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-white bg-opacity-10 my-16 rounded-lg shadow-lg p-10 max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Create an Account
        </h1>
        <p className="text-center text-lg mb-8">
          Join ScholarSwap today
        </p>

        {/* Registration Form */}
        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your full username"
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 block w-full p-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-purple-700 hover:bg-purple-900 transition duration-300 font-semibold text-white text-lg">
            <Link to="/profile" className='h-full w-full'>
              Sign Up
            </Link>
          </button>
        </form>

        {/* Wallet Connect Button */}
        <div className="mt-8 text-center">
          <p className="text-lg mb-4">Or</p>
          <button
            className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 transition duration-300 font-semibold text-lg">
            Connect with Wallet
          </button>
        </div>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
