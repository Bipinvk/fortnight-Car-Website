import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  Mail,
  Phone,
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  Car,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ContactForm from "./ContactForm";

const CarDetailPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition duration-300"
        >
          <ArrowLeft className="mr-2" /> Back to Listings
        </button>

        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex gap-4 items-center mb-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {car.name}
            </h1> 
            <p className="text-lg text-gray-600 ">{car.type}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="relative aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden mb-4">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.name} - ${currentImageIndex + 1}`}
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/50 rounded-full p-2 shadow-md hover:bg-gray-700 transition duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/50 rounded-full p-2 shadow-md hover:bg-gray-700/100 transition duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => scrollThumbnails("left")}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800  rounded-full p-1 shadow-md hover:bg-gray-700 transition duration-300 z-10"
                >
                  <ChevronLeft className="w-4 h-4 text-white-800" />
                </button>
                <div
                  ref={thumbnailsRef}
                  className="flex overflow-x-auto space-x-2 py-2 px-8"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {car.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                        index === currentImageIndex
                          ? "ring-2 ring-blue-500"
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
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 rounded-full p-1 shadow-md hover:bg-gray-700 transition duration-300 z-10"
                >
                  <ChevronRight className="w-4 h-4 text-white-800" />
                </button>
              </div>
            </div>

            <div className="shadow-md rounded">
              <div className=" rounded-lg p-6 ">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  ${car.price.toLocaleString()}
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6 text-gray-800">
                  <FeatureItem
                    icon={<Calendar />}
                    title="Year"
                    value={car.year}
                  />
                  <FeatureItem
                    icon={<Fuel />}
                    title="Fuel Type"
                    value={car.fuelType}
                  />
                  <FeatureItem
                    icon={<Gauge />}
                    title="Mileage"
                    value={`${car.mileage.toLocaleString()} km`}
                  />
                  <FeatureItem
                    icon={<Car />}
                    title="Transmission"
                    value={car.transmission}
                  />
                </div>
                <h3 className="text-md mb-2 text-gray-800">
                  Features
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.details.split(", ").map((detail, index) => (
                    <span
                      key={index}
                      className="bg-white outline-dotted outline-2 outline-offset-2 px-3 py-1 rounded-md  text-sm font-semibold text-gray-700 shadow-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
                <div className="space-y-4">
                  <ContactButton
                    onClick={handleWhatsAppClick}
                    icon={<MessageCircle className="mr-2" />}
                    text="Contact via WhatsApp"
                    bgColor="bg-green-500"
                    hoverColor="hover:bg-green-600"
                  />
                  <ContactButton
                    onClick={handleEmailClick}
                    icon={<Mail className="mr-2" />}
                    text="Contact via Email"
                    bgColor="bg-blue-500"
                    hoverColor="hover:bg-blue-600"
                  />
                  <ContactButton
                    href="tel:+64220833165"
                    icon={<Phone className="mr-2" />}
                    text="Call Us"
                    bgColor="bg-gray-700"
                    hoverColor="hover:bg-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showContactForm && (
        <ContactForm car={car} onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

const FeatureItem = ({ icon, title, value }) => (
  <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
    <div className="bg-blue-100 rounded-full p-2 mr-3">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const ContactButton = ({ onClick, href, icon, text, bgColor, hoverColor }) => (
  <a
    href={href}
    onClick={onClick}
    className={`w-full ${bgColor} text-white py-2 px-4 rounded-lg flex items-center justify-center ${hoverColor} transition duration-300 shadow-md text-sm`}
  >
    {icon} {text}
  </a>
);

export default CarDetailPage;
