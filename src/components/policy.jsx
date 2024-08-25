// pages/Privacy.jsx
import React from "react";
import { Shield, Lock, Bell, Users } from "lucide-react";

const PolicySection = ({ title, content, icon }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const PrivacyPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 text-black">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Privacy with Confidence</h2>
            <p className="text-xl text-gray-600 mb-8">
              Protecting your personal information is our top priority. Learn
              how we safeguard your data and respect your privacy.
            </p>
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Key Privacy Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span> End-to-end
                  encryption
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span> Regular
                  security audits
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-500">✓</span> Strict data
                  access controls
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                Read Full Policy
              </button>
              <a
                href="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-8">
            <PolicySection
              title="Information We Collect"
              content="We collect personal information such as name, email address, and phone number when you use our services."
              icon={<Users className="w-6 h-6 text-blue-600" />}
            />
            <PolicySection
              title="How We Use Your Information"
              content="We use your information to provide and improve our services, communicate with you, and comply with legal obligations."
              icon={<Bell className="w-6 h-6 text-blue-600" />}
            />
            <PolicySection
              title="Data Security"
              content="We implement appropriate technical and organizational measures to protect your personal information."
              icon={<Lock className="w-6 h-6 text-blue-600" />}
            />
            <PolicySection
              title="Your Privacy Rights"
              content="You have the right to access, correct, or delete your personal information. Contact us to exercise these rights."
              icon={<Shield className="w-6 h-6 text-blue-600" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
