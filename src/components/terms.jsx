// pages/Terms.jsx
import React from "react";
import { Shield, Check, AlertTriangle, Car } from "lucide-react";

const TermsSection = ({ title, content, icon }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const TermsPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
          Terms of Service
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src="/src/assets/contact/terms.jpg"
              alt="Used car sale handshake"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <p className="mt-4 text-center text-gray-500 italic">
              Your trusted partner in used car transactions
            </p>
          </div>
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6">
            <TermsSection
              title="1. Acceptance of Terms"
              content="By using Fortune Cars' services, you agree to abide by these Terms of Service for all vehicle transactions and interactions on our platform."
              icon={<Shield className="w-6 h-6 text-blue-500" />}
            />
            <TermsSection
              title="2. Vehicle Listings"
              content="Sellers must provide accurate and detailed information about the vehicles they list. This includes mileage, condition, history, and any known issues."
              icon={<Car className="w-6 h-6 text-green-500" />}
            />
            <TermsSection
              title="3. User Responsibilities"
              content="Buyers and sellers are responsible for conducting due diligence, arranging inspections, and complying with all local laws regarding vehicle transfers and registrations."
              icon={<Check className="w-6 h-6 text-yellow-500" />}
            />
            <TermsSection
              title="4. Payment and Transactions"
              content="Fortune Cars facilitates transactions but is not responsible for payment processing. Users should use secure payment methods and be cautious of potential fraud."
              icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
