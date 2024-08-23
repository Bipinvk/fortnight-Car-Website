import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  Phone,
  Calendar,
  Fuel,
  Gauge,
  Car,
  ChevronLeft,
  ChevronRight,
  DollarSign,
} from "lucide-react";

const CarDetailPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState(null);
  const thumbnailsRef = useRef(null);

  useEffect(() => {
    if (location.state && location.state.car) {
      setCar(location.state.car);
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/+64220833165?text=I'm interested in the ${car.name}`
    );
  };

  const handleEmailClick = () => {
    navigate("/contact", { state: { car } });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + car.images.length) % car.images.length
    );
  };

  const scrollThumbnails = (direction) => {
    if (thumbnailsRef.current) {
      const scrollAmount = direction === "left" ? -100 : 100;
      thumbnailsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleApplyFinance = () => {
    navigate(`/finance/${car.id}`, { state: { car } });
  };

  if (!car) {
    return (
      <div className="container mx-auto py-8 px-4 text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-300 min-h-screen text-gray-300">
      <div className=" mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {car.name}
                </h1>
                <p className="text-lg text-gray-600">{car.type}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-3xl font-bold text-green-700">
                  ${car.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="relative aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden mb-4">
                  <img
                    src={car.images[currentImageIndex]}
                    alt={`${car.name} - ${currentImageIndex + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2  hover:bg-black/75 transition duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2  hover:bg-black/75 transition duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="relative">
                  <button
                    onClick={() => scrollThumbnails("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-1  hover:bg-black/75 transition duration-300 z-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div
                    ref={thumbnailsRef}
                    className="flex overflow-x-auto space-x-2 py-2 px-8 scrollbar-hide"
                  >
                    {car.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                          index === currentImageIndex
                            ? "ring-2 ring-blue-400"
                            : ""
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${car.name} - ${index + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollThumbnails("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-1  hover:bg-black/75 transition duration-300 z-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div>
                <div className=" rounded-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4 text-black ">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-2 gap-4 ">
                    <FeatureItem
                      icon={<Calendar className="text-blue-400" />}
                      title="Year"
                      value={car.year}
                    />
                    <FeatureItem
                      icon={<Fuel className="text-green-400" />}
                      title="Fuel Type"
                      value={car.fuelType}
                    />
                    <FeatureItem
                      icon={<Gauge className="text-yellow-400" />}
                      title="Mileage"
                      value={`${car.mileage.toLocaleString()} km`}
                    />
                    <FeatureItem
                      icon={<Car className="text-purple-400" />}
                      title="Transmission"
                      value={car.transmission}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-600">
                    Additional Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {car.details.split(", ").map((detail, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 px-3 py-1 rounded-md text-sm font-medium text-gray-300"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <ContactButton
                    onClick={handleWhatsAppClick}
                    icon={<MessageCircle className="mr-2" />}
                    text="Contact via WhatsApp"
                    bgColor="bg-green-600"
                    hoverColor="hover:bg-green-700"
                  />
                  <ContactButton
                    onClick={handleEmailClick}
                    icon={<Mail className="mr-2" />}
                    text="Contact via Email"
                    bgColor="bg-blue-600"
                    hoverColor="hover:bg-blue-700"
                  />
                  <ContactButton
                    href="tel:+64220833165"
                    icon={<Phone className="mr-2" />}
                    text="Call Us"
                    bgColor="bg-gray-600"
                    hoverColor="hover:bg-gray-700"
                  />

                  <button
                    className="w-full bg-purple-600  py-3 px-4 rounded-lg flex items-center justify-center hover:bg-purple-700 transition duration-300 shadow-md text-sm"
                    onClick={handleApplyFinance}
                  >
                    Apply Finance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, value }) => (
  <div className="flex items-center bg-slate-100 rounded-lg p-3 shadow-sm">
    <div className="bg-slate-200 rounded-full p-2 mr-3">{icon}</div>
    <div>
      <p className="text-sm text-gray-700">{title}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const ContactButton = ({ onClick, href, icon, text, bgColor, hoverColor }) => (
  <a
    href={href}
    onClick={onClick}
    className={`w-full ${bgColor}  py-2 px-4 rounded-lg flex items-center justify-center ${hoverColor} transition duration-300 shadow-md text-sm`}
  >
    {icon} {text}
  </a>
);

export default CarDetailPage;
