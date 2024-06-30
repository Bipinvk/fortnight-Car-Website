import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  MessageCircle,
  Mail,
  Phone,
  ArrowLeft,
  Calendar,
  Fuel,
  Gauge,
  Car,
} from "lucide-react";
import ContactForm from "./ContactForm";

const CarDetailPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [car, setCar] = useState(null);

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

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition duration-300"
        >
          <ArrowLeft className="mr-2" /> Back to Listings
        </button>

        <div className="bg-white rounded-xl  p-6 mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">{car.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{car.type}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Carousel
                showThumbs={true}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                className="bg-white rounded-lg shadow-md"
              >
                {car.images.map((img, index) => (
                  <div key={index} className="p-2">
                    <img
                      src={img}
                      alt={`${car.name} - ${index + 1}`}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
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
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Features
                </h3>
                <p className="text-gray-700 mb-6">
                  {car.details.split(", ").map((detail, index) => (
                    <span
                      key={index}
                      className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {detail}
                    </span>
                  ))}
                </p>
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
  <div className="flex items-center">
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
    className={`w-full ${bgColor} text-white py-3 px-4 rounded-lg flex items-center justify-center ${hoverColor} transition duration-300`}
  >
    {icon} {text}
  </a>
);

export default CarDetailPage;
