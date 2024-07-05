import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import catalog from "../assets/contact/catalog.jpg";
import { carData } from "../constants";
import awaitImage from "../assets/contact/awiat.jpg";

const HeroSection = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carData.length) % carData.length);
  };

  const handleMakeOffer = () => {
    F;
    const car = carData[currentSlide];
    navigate(`/car/${car.id}`, { state: { car } });
  };

  return (
    <div id={id} className="text-white min-h-screen flex flex-col px-4 py-4">
      <div className="px-6 flex flex-col lg:flex-row w-full h-auto lg:h-[80vh] gap-8">
        {/* Left section */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6">
          <p className="text-sm uppercase tracking-wide">
            BEST CAR MARKETPLACE
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
            Find Your
            <br />
            Perfect Car
            <br />
            Easily
          </h2>
          <p className="text-gray-400 text-sm lg:text-base">
            Discover a wide range of cars to suit your needs.
            <br />
            Buy your dream car quickly and reliably.
          </p>
          <div className="flex flex-col">
            <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-base mt-1">
              <span className="font-bold">100%</span> Satisfied Customers
            </span>
          </div>
        </div>

        {/* Center section (Car Image) */}
        <div className="w-full lg:w-1/3 relative">
          <img
            src={catalog}
            alt="Car"
            className="w-full h-full object-cover rounded-lg"
          />
          <a
            href="#cars"
            className="flex justify-center absolute bottom-0 left-0 bg-gray-400 bg-opacity-70 text-white w-1/2 lg:p-6 md:p-6 sm:p-4 p-2 rounded-bl-lg flex items-center text-sm"
          >
            VIEW CATALOG <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>

        {/* Right section (Car Details) */}
        <div className="mb-4 w-full lg:w-1/3 lg:rounded-lg lg:p-6 flex flex-col justify-between sm:p-0">
          <div className="border p-4 rounded-lg border-gray-800 mb-4 py-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-2xl">
                {carData[currentSlide].name}
              </h3>
              <span className="bg-white text-black text-xs px-2 py-1 rounded font-medium">
                NEW
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {carData[currentSlide].type}
            </p>
            <div className="flex items-center justify-center ">
              <img
                src={
                  carData[currentSlide].images[currentSlide]
                    ? carData[currentSlide].images[currentSlide]
                    : awaitImage
                }
                alt={carData[currentSlide].name}
                className="w-full object-cover w-[90%] rounded-lg mb-4 max-w-full"
              />
            </div>
            <div className="flex justify-end items-center ">
              <span className="font-bold text-2xl">
                ${carData[currentSlide].price.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full font-medium mb-4"
            onClick={handleMakeOffer}
          >
            MAKE AN OFFER
          </button>

          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center">
              <p className="text-xl">{`0${currentSlide + 1}`}</p>/
              {carData.length}
            </span>

            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-800 p-2 rounded-md"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="bg-gray-800 p-2 rounded-md"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
