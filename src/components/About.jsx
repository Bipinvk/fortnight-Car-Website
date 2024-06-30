import React from "react";
import key from "../assets/contact/Replacement-Car-Key.jpg"
const About = ({ id }) => {
  return (
    <div className="bg-white py-16" id={id}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h3 className="text-blue-500 font-semibold mb-2">
              How It Started
            </h3>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Our Dream is Quality Vehicle Trading
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Fortunecars T/A Supacheapcars was founded by passionate car
              enthusiasts. Our shared dream was to create a reliable platform
              for high-quality, affordable vehicles. United by our belief in
              excellent customer service, we embarked on a journey to build
              'Fortunecars'. With relentless dedication, we've created a trusted
              community of satisfied car buyers and sellers.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src={key}
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <Stat number="2014" label="Established" />
          <Stat number="MVT-M315572" label="Registration Number" />
          <Stat number="100%" label="VTNZ Inspected" />
          <Stat number="1000+" label="Happy Customers" />
        </div>
      </div>
    </div>
  );
};

const Stat = ({ number, label }) => (
  <div className="text-center">
    <p className="text-3xl font-bold text-gray-800">{number}</p>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default About;
