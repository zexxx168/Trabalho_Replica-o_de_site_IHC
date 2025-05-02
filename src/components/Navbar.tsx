import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart, User } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-yellow-800">
              Monkland Cheese Dairy
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-gray-700 hover:text-yellow-800">Our Cheeses</Link>
            <Link to="/tours" className="text-gray-700 hover:text-yellow-800">Cheese Tours</Link>
            <Link to="/login" className="text-gray-700 hover:text-yellow-800">
              <User className="w-5 h-5" />
            </Link>
            <button className="text-gray-700 hover:text-yellow-800">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-800"
                onClick={() => setIsOpen(false)}
              >
                Our Cheeses
              </Link>
              <Link
                to="/tours"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-800"
                onClick={() => setIsOpen(false)}
              >
                Cheese Tours
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-800"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar