import React, { useState } from 'react'
import { Filter, ShoppingCart, Search } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  price: number
  description: string
  image: string
  weight?: string
  aging?: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'Little Hereford',
    category: 'Our Cheeses',
    price: 12.99,
    description: 'A traditional hard cheese aged for 12 months, with a rich, nutty flavor and crystalline texture',
    image: 'https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    weight: '200g',
    aging: '12 months'
  },
  {
    id: '2',
    name: 'Blue Monkland',
    category: 'Our Cheeses',
    price: 14.99,
    description: 'Creamy blue-veined cheese with a distinctive character and smooth, complex finish',
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg',
    weight: '200g',
    aging: '3 months'
  },
  {
    id: '3',
    name: 'Artisan Selection Box',
    category: 'Cheese Box',
    price: 34.99,
    description: 'A carefully curated selection of our award-winning cheeses, perfect for special occasions',
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    weight: '600g'
  },
  {
    id: '4',
    name: 'Artisan Crackers',
    category: 'Biscuits',
    price: 6.99,
    description: 'Handcrafted sourdough crackers, perfectly paired with our artisanal cheeses',
    image: 'https://images.pexels.com/photos/1963999/pexels-photo-1963999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    weight: '150g'
  },
  {
    id: '5',
    name: 'Aged Cheddar',
    category: 'Our Cheeses',
    price: 13.99,
    description: 'Sharp and complex aged cheddar with a crumbly texture and deep flavor',
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg',
    weight: '200g',
    aging: '18 months'
  },
  {
    id: '6',
    name: 'Honey & Lavender',
    category: 'Accompaniments',
    price: 8.99,
    description: 'Local honey infused with Herefordshire lavender, perfect with blue cheese',
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg',
    weight: '250g'
  }
]

const categories = ['All', 'Our Cheeses', 'Cheese Box', 'Biscuits', 'Accompaniments']

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-yellow-800 mb-4">
          Artisanal Cheese Collection
        </h1>
        <p className="text-lg text-gray-600">
          Handcrafted with passion using traditional methods
        </p>
      </div>

      <div className="mb-8">
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search our collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-start md:items-center mb-12">
        {/* Mobile Filter Button */}
        <button
          className="md:hidden flex items-center text-gray-600 mb-4"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="w-5 h-5 mr-2" />
          Filter Products
        </button>

        {/* Desktop Filter */}
        <div className="hidden md:flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-yellow-800 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Filter Panel */}
        {isFilterOpen && (
          <div className="md:hidden w-full mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-yellow-800 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category)
                    setIsFilterOpen(false)
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-4 py-2 rounded-full text-yellow-800 font-semibold shadow-lg">
                    £{product.price.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <span className="text-sm text-gray-500">{product.weight}</span>
                  </div>
                  {product.aging && (
                    <div className="text-sm text-yellow-800 mb-2">
                      Aged {product.aging}
                    </div>
                  )}
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <button className="w-full bg-yellow-800 text-white py-3 px-4 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center group">
                  <ShoppingCart className="w-5 h-5 mr-2 transform transition-transform group-hover:scale-110" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop