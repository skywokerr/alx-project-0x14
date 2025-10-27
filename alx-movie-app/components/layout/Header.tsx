import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
            ALX Movie App
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/movies" className="hover:text-blue-300 transition-colors">
              Movies
            </Link>
            <Link href="/tv-shows" className="hover:text-blue-300 transition-colors">
              TV Shows
            </Link>
            <Link href="/about" className="hover:text-blue-300 transition-colors">
              About
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:text-blue-300 transition-colors">
              🔍
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex flex-col space-y-2 mt-4">
          <Link href="/" className="py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            Home
          </Link>
          <Link href="/movies" className="py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            Movies
          </Link>
          <Link href="/tv-shows" className="py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            TV Shows
          </Link>
          <Link href="/about" className="py-2 px-4 rounded hover:bg-gray-800 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;