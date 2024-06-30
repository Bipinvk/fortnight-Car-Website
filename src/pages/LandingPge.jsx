import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CarIcon } from "lucide-react";
import "./css/Hero.css";
import toyota_aqua_2015 from "../assets/cars/2015 Toyota aqua hybrid g model/1.jpeg";
import toyota_aqua_2017 from "../assets/cars/2017 Toyota aqua hybrid 2017 Toyota aqua hybrid/2017.jpeg";
import toyota_chr from "../assets/cars/2017 Toyota CH-R hybrid/hybrid1.jpeg";


const carData = [
    {
      id: 1,
      name: "BMW i4 : M Sport",
      type: "Full - Electric Car",
      price: "$266,500",
      image:
        "https://wallpaper.forfun.com/fetch/5e/5ed69d8e64b55e4d3c86ed2317101dfe.jpeg",
    },
    {
      id: 2,
      name: "Porsche Taycan",
      type: "Electric Sports Car",
      price: "$150,900",
      image:
        "https://i.pinimg.com/736x/45/d3/dd/45d3ddc84f68b145c755fbc5e09be6f1.jpg",
    },
    {
      id: 3,
      name: "Toyota Aqua",
      type: "Hybrid Hatchback",
      price: "$13,800",
      image: toyota_aqua_2015,
    },
    {
      id: 4,
      name: "Toyota Aqua",
      type: "Hybrid Hatchback",
      price: "$13,800",
      image: toyota_aqua_2017,
    },
    {
      id: 5,
      name: "Toyota CH-R",
      type: "Hybrid SUV",
      price: "$21,000",
      image: toyota_chr,
    },
  
    // Add more car data here
  ];

const LandingPge = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + carData.length) % carData.length);

  return (
    <>
      {/* navbar */}
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg ">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Fortune Cars</span>
            </div>
            <ul className="hidden lg:flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Contact Us
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* hero section */}
      <div className=" text-white min-h-screen flex flex-col p-6">
        <div className="px-8 flex flex-col lg:flex-row w-full h-auto lg:h-[80vh] gap-8">
          {/* Left section */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6">
            <p className="text-sm uppercase tracking-wide">
              BEST CARS MARKETPLACE
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find & sell
              <br />
              your best car
              <br />
              easily
            </h2>
            <p className="text-gray-400 text-sm lg:text-base">
              We will help you sell or buy & rent your dream
              <br />
              car here easily and quickly that is reliable.
            </p>
            <div className="flex flex-col">
              <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-base mt-1">
                <span className="font-bold">12k+</span> Good Reviews
              </span>
            </div>
          </div>

          {/* Center section (Car Image) */}
          <div className="w-full lg:w-1/3 relative">
            <img
              src={carData[currentSlide].image}
              alt="Car"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="flex justify-center absolute bottom-0 left-0 bg-gray-400 bg-opacity-70 text-white w-1/2 p-6 rounded-bl-lg flex items-center text-sm">
              VIEW CATALOG <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          {/* Right section (Car Details) */}
          <div className="w-full lg:w-1/3 rounded-lg p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-2xl">
                  {carData[currentSlide].name}
                </h3>
                <span className="bg-white text-black text-xs px-2 py-1 rounded-full font-medium">
                  NEW
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                {carData[currentSlide].type}
              </p>
              <img
                src={carData[currentSlide].image}
                alt={carData[currentSlide].name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <div className="flex justify-between items-center mb-6">
                <button className="bg-gray-800 text-sm py-2 px-4 rounded-lg flex items-center">
                  <CarIcon size={16} className="mr-2" /> Free Test Drive
                </button>
                <span className="font-bold text-2xl">
                  {carData[currentSlide].price}
                </span>
              </div>
            </div>

            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg w-full font-medium mb-4">
              MAKE AN OFFER
            </button>

            <div className="flex justify-between items-center">
              <span className="text-sm">{`0${currentSlide + 1}/${
                carData.length
              }`}</span>
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
    </>
  );
};

export default Home;
