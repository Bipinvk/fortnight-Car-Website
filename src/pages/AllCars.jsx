import React, { useState } from "react";
import {
  Heart,
  Fuel,
  Gauge,
  Car,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import dummyImg from "../assets/contact/awiat.jpg";
import { carData } from "../constants";

const CarCard = () => {
  return (
    <>
      <div className="bg-[#f1faff] px-14 py-8 ">
        <div className="text-center mb-6 ">
          <h2 className="text-3xl font-bold text-black">
            Explore Our Car Collection
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Discover the perfect car that fits your style and budget.
          </p>
        </div>
        <div className="bg-[#f1faff] px-4 sm:px-6 md:px-8 lg:px-14 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {" "}
          {carData.map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
};

const CarItem = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  const handleApplyFinance = () => {
    navigate(`/finance/${car.id}`, { state: { car } });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === car.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? car.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="relative">
        <div className="relative h-64 overflow-hidden">
          {car.images && car.images.length > 0 ? (
            <img
              src={car.images[currentImageIndex] || dummyImg}
              alt={car.name || "car"}
              className="w-full h-64 object-cover"
            />
          ) : (
            <img
              src={dummyImg}
              alt={car.name || "car"}
              className="w-full h-64 object-cover"
            />
          )}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 transition-all duration-300 hover:bg-opacity-75"
          onClick={prevImage}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 transition-all duration-300 hover:bg-opacity-75"
          onClick={nextImage}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100">
          <Heart className="w-5 h-5 text-red-500" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {car.images &&
            car.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-white" : "bg-gray-300"
                }`}
              />
            ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{car.name}</h3>
          <p className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
            {car.year}
          </p>
        </div>
        <p className="text-lg font-semibold text-gray-700 mb-4">
          ${car.price.toLocaleString()}
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Feature
            icon={<Fuel className="w-5 h-5 mr-2" />}
            text={car.fuelType}
          />
          <Feature
            icon={<Gauge className="w-5 h-5 mr-2" />}
            text={`${car.mileage.toLocaleString()} km`}
          />
          <Feature
            icon={<Car className="w-5 h-5 mr-2" />}
            text={car.transmission}
          />
          <Feature
            icon={<Calendar className="w-5 h-5 mr-2" />}
            text={`${car.year}`}
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700 font-semibold text-sm"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button
            className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg transition-all duration-300 hover:bg-green-700 font-semibold text-sm"
            onClick={handleApplyFinance}
          >
            Apply Finance
          </button>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center text-gray-700">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

export default CarCard;
