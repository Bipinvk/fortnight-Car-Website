import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Facebook,
  Twitter,
} from "lucide-react";
import bgImage from "../assets/contact/contactimage.jpg";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ car, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onBack = () => {
    navigate(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry about ${car.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${
        formData.email
      }\nPhone: ${formData.phone}\nMessage: ${
        formData.message
      }\n\nCar Details:\nModel: ${car.name}\nType: ${
        car.type
      }\nPrice: $${car.price.toLocaleString()}`
    );
    window.location.href = `mailto:Fortunecars100@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <div
            className="w-full md:w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="h-full bg-black bg-opacity-50 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Fortune Cars
                </h2>
                <p className="text-white mb-8">
                  Your trusted partner for quality automobiles. Experience the
                  joy of driving with our curated selection of cars.
                </p>
                <div className="text-white mb-4">
                  <p>Email: fortunecars100@gmail.com</p>
                  <p>Contact No: +64 22 083 3165</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Facebook size={24} className="text-white cursor-pointer" />
                <Twitter size={24} className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-between items-center mb-4">
              <ArrowLeft
                size={24}
                className="cursor-pointer text-gray-600 hover:text-gray-800"
                onClick={onBack}
              />
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-gray-600 mb-8">
              24/7 We will answer your questions and inquiries
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="sr-only">
                    First Name
                  </label>
                  <div className="relative">
                    <User
                      size={20}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 text-black px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="sr-only">
                    Last Name
                  </label>
                  <div className="relative">
                    <User
                      size={20}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 text-black px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative">
                  <Mail
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 text-black px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="relative">
                  <Phone
                    size={20}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-gray-50 text-black px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    size={20}
                    className="absolute left-3 top-3 text-gray-400"
                  />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 text-black px-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Describe your inquiry"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
