import React from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 mt-1" />
              <p>Monkland Cheese Dairy<br />Herefordshire</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="flex items-start space-x-2">
              <Clock className="w-5 h-5 mt-1" />
              <p>Monday - Saturday<br />10:00 AM - 4:00 PM</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex items-start space-x-2">
              <Phone className="w-5 h-5 mt-1" />
              <p>Call us to arrange group visits<br />or special orders</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-yellow-700">
          <p className="text-center text-sm">© 2024 Monkland Cheese Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer