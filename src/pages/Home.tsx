import React from 'react'
import { ChevronRight, Award, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg"
          alt="Artisanal Cheese"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-6 max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
              Discover the Art of
              <span className="block text-yellow-400">Artisanal Cheese</span>
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Experience the finest handcrafted cheeses from the heart of Herefordshire.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-yellow-800 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition shadow-md"
            >
              Shop Our Collection
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#FFF7DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow">
              <Award className="w-10 h-10 text-yellow-800 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Award-Winning</h3>
              <p className="text-sm text-gray-600">Recognized for our exceptional quality and taste</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow">
              <Clock className="w-10 h-10 text-yellow-800 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Traditional Methods</h3>
              <p className="text-sm text-gray-600">Crafted using time-honored techniques</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow">
              <MapPin className="w-10 h-10 text-yellow-800 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Local Heritage</h3>
              <p className="text-sm text-gray-600">Using the finest Herefordshire milk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-yellow-800 text-center mb-12">
            Our Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Little Hereford',
                price: 12.99,
                image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
              },
              {
                name: 'Blue Monkland',
                price: 14.99,
                image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg'
              },
              {
                name: 'Aged Cheddar',
                price: 16.99,
                image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg'
              }
            ].map((product, index) => (
              <div key={index} className="bg-[#FFF7DB] rounded-xl shadow hover:shadow-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-yellow-800 font-bold text-md">£{product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#FAF5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Experience the Art of Cheesemaking
            </h2>
            <p className="text-gray-700 mb-6 text-base">
              Join us for an unforgettable cheese experience day where you'll discover
              the secrets behind our artisanal cheesemaking process.
            </p>
            <Link
              to="/tours"
              className="inline-flex items-center bg-yellow-800 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition"
            >
              Book a Tour
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="h-96 rounded-xl overflow-hidden shadow">
            <img
              src="https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg"
              alt="Cheese Experience"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
