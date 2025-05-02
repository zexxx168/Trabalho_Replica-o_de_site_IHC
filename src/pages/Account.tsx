import React from 'react'
import { Package, User, LogOut } from 'lucide-react'

const Account = () => {
  const orders = [
    { id: '1234', date: '2024-03-15', status: 'Delivered', total: '£45.00' },
    { id: '1235', date: '2024-03-10', status: 'Processing', total: '£32.50' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="space-y-4">
              <button className="w-full flex items-center space-x-2 text-gray-700 hover:text-yellow-800">
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-gray-700 hover:text-yellow-800">
                <Package className="w-5 h-5" />
                <span>Orders</span>
              </button>
              <button className="w-full flex items-center space-x-2 text-red-600 hover:text-red-700">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">My Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Order #{order.id}</p>
                      <p className="text-sm text-gray-500">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.total}</p>
                      <p className="text-sm text-gray-500">{order.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account