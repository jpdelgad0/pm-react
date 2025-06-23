import React from 'react'
import { Link } from 'react-router-dom'
import vehicles from '../vehicles.json'

export default function Home() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <img src="https://raw.githubusercontent.com/jpdelgad0/vehicle-json/main/images/logo.png" className="h-24 mb-4" alt="Peninsula Motors" />
      <h1 className="text-2xl font-bold mb-1">All prices include taxes and title fees!</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-6">
        {vehicles.map((car) => (
          <Link key={car.id} to={`/vehicle/${car.id}`} className="border rounded p-3 shadow hover:shadow-lg transition">
            <img src={car.image1} alt={car.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{car.title}</h2>
            <p className="text-gray-600">{car.price}</p>
          </Link>
        ))}
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">Contact</h2>
        <p>Juan - 786-387-1360</p>
        <p>Office - 305-257-9996</p>
        <div className="mt-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.646143323503!2d-80.39974212460659!3d25.550161377485374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c33af01b5635%3A0xc91fb5d42625c139!2s23301%20S%20Dixie%20Hwy%2C%20Homestead%2C%20FL%2033032!5e0!3m2!1sen!2sus!4v1750616506173!5m2!1sen!2sus" width="100%" height="300" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
