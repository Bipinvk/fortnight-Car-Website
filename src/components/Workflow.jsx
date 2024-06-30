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
import { useNavigate } from "react-router-dom";

// Import all images for each car
import toyota_aqua_2015_1 from "../assets/cars/2015 Toyota aqua hybrid g model/1.jpeg";
import toyota_aqua_2015_2 from "../assets/cars/2015 Toyota aqua hybrid g model/2.jpeg";
import toyota_aqua_2015_3 from "../assets/cars/2015 Toyota aqua hybrid g model/3.jpeg";
import toyota_aqua_2015_4 from "../assets/cars/2015 Toyota aqua hybrid g model/4.jpeg";
import toyota_aqua_2015_5 from "../assets/cars/2015 Toyota aqua hybrid g model/5.jpeg";
import toyota_aqua_2015_6 from "../assets/cars/2015 Toyota aqua hybrid g model/6.jpeg";
import toyota_aqua_2015_7 from "../assets/cars/2015 Toyota aqua hybrid g model/7.jpeg";
import toyota_aqua_2015_8 from "../assets/cars/2015 Toyota aqua hybrid g model/8.jpeg";
import toyota_aqua_2015_9 from "../assets/cars/2015 Toyota aqua hybrid g model/9.jpeg";
import toyota_aqua_2017_1 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/2017.jpeg";
import toyota_aqua_2017_2 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20172.jpeg";
import toyota_aqua_2017_3 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20173.jpeg";
import toyota_aqua_2017_4 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20174.jpeg";
import toyota_aqua_2017_5 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20175.jpeg";
import toyota_aqua_2017_6 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20176.jpeg";
import toyota_aqua_2017_7 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/20177.jpeg";
import toyota_chr_1 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid1.jpeg";
import toyota_chr_2 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid2.jpeg";
import toyota_chr_3 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid3.jpeg";
import toyota_chr_4 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid4.jpeg";
import toyota_chr_5 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid5.jpeg";
import toyota_chr_6 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid6.jpeg";
import toyota_chr_7 from "../assets/cars/2017 Toyota CH-R hybrid/hybrid7.jpeg";

const carData = [
  {
    id: 1,
    name: "Toyota CH-R",
    type: "Hybrid SUV",
    images: [
      toyota_chr_1,
      toyota_chr_2,
      toyota_chr_3,
      toyota_chr_4,
      toyota_chr_5,
      toyota_chr_6,
      toyota_chr_7,
    ],
    price: 21000,
    year: 2017,
    fuelType: "Hybrid",
    mileage: 43000,
    transmission: "Automatic",
    details: "Push start, keyless entry, alloy wheels, adaptive cruise control",
  },
  {
    id: 2,
    name: "Toyota Aqua",
    type: "Hybrid S model",
    images: [
      toyota_aqua_2017_1,
      toyota_aqua_2017_2,
      toyota_aqua_2017_3,
      toyota_aqua_2017_4,
      toyota_aqua_2017_5,
      toyota_aqua_2017_6,
      toyota_aqua_2017_7,
    ],
    price: 13800,
    year: 2017,
    fuelType: "Hybrid",
    mileage: 71000,
    transmission: "Automatic",
    details: "Push start, keyless entry",
  },
  {
    id: 3,
    name: "Toyota Aqua",
    type: "Hybrid g model",
    images: [
      toyota_aqua_2015_1,
      toyota_aqua_2015_2,
      toyota_aqua_2015_3,
      toyota_aqua_2015_4,
      toyota_aqua_2015_5,
      toyota_aqua_2015_6,
      toyota_aqua_2015_7,
      toyota_aqua_2015_8,
      toyota_aqua_2015_9,
    ],
    price: 13800,
    year: 2015,
    fuelType: "Hybrid",
    mileage: 78000,
    transmission: "Automatic",
    details: "Push start, keyless entry, cruise control, excellent condition",
  },
];

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
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
          <p className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
            {car.year}
          </p>
        </div>
        <p className="text-sm text-gray-600 mb-4">{car.type}</p>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
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
          <div className="h-10 overflow-y-auto">
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

        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center text-green-600 text-sm font-semibold transition-all duration-300 hover:text-green-700"></button>
          <span className="text-2xl font-bold text-gray-800">
            ${car.price.toLocaleString()}
          </span>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-md font-semibold"
          onClick={handleMakeOffer}
        >
          Make an Offer
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
              <button className="bg-gray-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 inline-flex items-center font-semibold shadow-md hover:shadow-lg">
                View More Cars
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Workflow;
