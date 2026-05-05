import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
            MyPortfolio
          </Link>
          <div className="space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Home
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
