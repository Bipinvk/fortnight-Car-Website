import React, { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  Bookmark,
  CheckCircle2,
  ChevronRight,
  Fuel,
  Gauge,
  Car,
  Calendar,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { carData } from "../constants";

const CarCard = ({ car }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [car.images]);

  const handleMakeOffer = () => {
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-102 flex flex-col h-full">
      <div className="relative">
        <img
          src={car.images[currentImageIndex]}
          alt={car.name}
          className="w-full h-56 object-cover"
        />
        <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:bg-gray-100">
          <Bookmark className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
          <p className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            {car.year}
          </p>
        </div>
        <p className="text-sm text-gray-600 mb-4">{car.type}</p>
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <Feature
            icon={<Fuel className="w-4 h-4 mr-2" />}
            text={car.fuelType}
          />
          <Feature
            icon={<Gauge className="w-4 h-4 mr-2" />}
            text={`${car.mileage.toLocaleString()} km`}
          />
          <Feature
            icon={<Car className="w-4 h-4 mr-2" />}
            text={car.transmission}
          />
          <Feature
            icon={<Calendar className="w-4 h-4 mr-2" />}
            text={`${car.year}`}
          />
        </div>
        <div className="text-xs text-gray-600 mb-1 flex-grow">
          <div className="h-14 overflow-y-auto">
            {car.details.split(", ").map((detail, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 rounded-full px-2 py-1 mr-1 mb-1"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <button className="flex items-center text-green-600 text-sm font-semibold transition-all duration-300 hover:text-green-700"></button>
          <span className="text-2xl font-bold text-gray-800">
            ${car.price.toLocaleString()}
          </span>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md font-semibold"
          onClick={handleMakeOffer}
        >
          View Detail
        </button>
        <button
        
          className="w-full bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md font-semibold"
          onClick={handleMakeOffer}
        >
          Apply Finance
        </button>
      </div>
    </div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center text-gray-700">
    {icon}
    <span>{text}</span>
  </div>
);

const Workflow = ({ id }) => {
  return (
    <div id={id} className="bg-gray-50 py-6 px-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Find Your Dream Car
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a curated selection of the best and newest cars, with
          friendly pricing to suit your needs.
        </p>

        <Tabs.Root defaultValue="buy">
          <Tabs.Content value="buy">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {carData.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/all-cars"
                className="bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 inline-flex items-center font-semibold shadow-md hover:shadow-lg"
              >
                View More Cars
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Workflow;
