import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import vehicles from '../vehicles.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function Vehicle() {
  const { id } = useParams()
  const car = vehicles.find((v) => v.id === id)

  if (!car) return <div className="p-6">Vehicle not found</div>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/">
      <img
          src="https://raw.githubusercontent.com/jpdelgad0/vehicle-json/main/images/logo.png"
          alt="Peninsula Motors"
          className="h-16"
        />
      </Link>
      <h1 className="text-2xl font-bold mb-2">{car.title}</h1>
      <p className="text-xl font-semibold text-green-700 mb-4">{car.price}</p>

      <Swiper navigation={true} modules={[Navigation]} className="mb-4 rounded shadow">
        {car.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img src={img} alt={`Slide ${idx}`} className="w-full max-h-[500px] object-contain" />
          </SwiperSlide>
        ))}
      </Swiper>
      <p>Mileage: {car.mileage}</p>
      <p>VIN:{car.vin}</p>
      <p>Description: {car.description}</p>
    </div>
  )
}