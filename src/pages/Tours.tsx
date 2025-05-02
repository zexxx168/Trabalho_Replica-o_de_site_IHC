import React from 'react'

const Tours = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-yellow-800 mb-4">
          Cheese Experience Days
        </h1>
        <p className="text-lg text-gray-600">
          GOOD NEWS! CHEESE TOURS ARE NOW AVAILABLE AGAIN
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="prose max-w-none">
          <p className="mb-6">
            We are excited to announce that our popular cheese tours have resumed. Join us for an
            unforgettable experience where you'll discover the art and science of cheesemaking.
          </p>
          
          <p className="mb-6">
            While we are now two separate businesses working closely together, we invite you to
            join us for coffee/tea, cake, or a cheese lunch/platter before or after your tour.
            We look forward to welcoming you!
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-800 p-4 my-8">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Visitor Testimonial</h3>
            <p className="italic text-gray-600">
              "We thoroughly enjoyed the whole day and now realize just how much time, effort,
              love and thought goes into making artisan cheeses. The whole day was planned so
              carefully around not only making the cheeses but detailing and showing all the
              stages of maturing and storing the cheese."
            </p>
            <p className="mt-2 text-sm text-gray-500">- Sara & Diane, November 2019</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">Book Your Experience</h3>
            <p className="mb-4">
              To reserve your cheese experience day, please visit our booking page where you can:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>Choose your preferred date</li>
              <li>Select your tour time</li>
              <li>Make secure payment</li>
              <li>Receive instant confirmation</li>
            </ul>
            <button className="bg-yellow-800 text-white px-6 py-2 rounded hover:bg-yellow-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours