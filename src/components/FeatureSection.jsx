import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronRight, Shield, Star, Zap } from "lucide-react";

const AccordionItem = ({ title, subtitle, content }) => (
  <Accordion.Item value={title} className="mb-4">
    <Accordion.Trigger className="w-full">
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-400">{subtitle}</p>
          </div>
          <ChevronRight className="text-gray-400 h-5 w-5" />
        </div>
      </div>
    </Accordion.Trigger>
    <Accordion.Content>
      <div className="bg-white rounded-lg p-4 mt-1">
        <p className="text-sm text-gray-500">{content}</p>
      </div>
    </Accordion.Content>
  </Accordion.Item>
);

const FeatureSection = ({ id }) => {
  return (
    <>
      <div id={id} className="bg-blue-600 px-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="text-white">
              <h2 className="text-5xl font-medium mb-4">
                Discover Your Dream Car
              </h2>
              <p className="text-lg mb-12">
                Explore a diverse selection of top-quality cars available for
                sale. We offer flexible financing options and comprehensive
                insurance solutions to ensure a seamless buying experience.
              </p>
              {/* <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-4xl font-bold">180K+</p>
                  <p className="text-sm uppercase text-blue-200">
                    Active users
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold">12K+</p>
                  <p className="text-sm uppercase text-blue-200">
                    Satisfied customers
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold">48K+</p>
                  <p className="text-sm uppercase text-blue-200">
                    Cars available
                  </p>
                </div>
              </div> */}
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Accordion.Root type="single" collapsible defaultOpenIndex={0}>
                <AccordionItem
                  title="Explore Our Inventory"
                  subtitle="Browse our collection"
                  content="Browse through our extensive inventory of cars to find the perfect match for your needs and preferences. Each car is thoroughly inspected for quality and reliability."
                />
                <AccordionItem
                  title="Flexible Financing Options"
                  subtitle="Customizable plans available"
                  content="We offer flexible financing options tailored to your financial situation. Our goal is to make your dream car purchase affordable and hassle-free."
                />

                <AccordionItem
                  title="Mechanical Insurance"
                  subtitle="Extended coverage for your vehicle"
                  content="Get protection against mechanical failures with our comprehensive mechanical insurance plans."
                />
                <AccordionItem
                  title="Comprehensive Insurance"
                  subtitle="Protect your investment"
                  content="Ensure your peace of mind with comprehensive insurance coverage options tailored to safeguard your new vehicle."
                />
              </Accordion.Root>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Shield className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Quality Assurance
              </h3>
              <p className="text-sm text-gray-600">
                Each car undergoes rigorous quality checks to ensure reliability
                and performance, giving you peace of mind with every purchase.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Star className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Personalized Service
              </h3>
              <p className="text-sm text-gray-600">
                Our dedicated team provides personalized assistance throughout
                your car buying journey, ensuring a smooth and enjoyable
                experience.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                <Zap className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Secure Transactions
              </h3>
              <p className="text-sm text-gray-600">
                Rest assured, all transactions are handled securely and
                efficiently, supported by trusted banking partners for your
                peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
