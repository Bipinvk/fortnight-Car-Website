import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="bg-gray-100 rounded-lg mb-2 overflow-hidden">
    <div
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={onClick}
    >
      <h3
        className={`font-medium ${isOpen ? "text-blue-600" : "text-gray-700"}`}
      >
        {question}
      </h3>
      {isOpen ? (
        <ChevronUp className="text-blue-600" />
      ) : (
        <ChevronDown className="text-gray-400" />
      )}
    </div>
    {isOpen && <div className="p-4 pt-0 text-gray-600">{answer}</div>}
  </div>
);

const FAQPage = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question:
        "What is the maximum number of team members that can enter the meeting call?",
      answer:
        "The maximum number depends on your subscription plan. Please check your plan details or contact support for specific information.",
    },
    {
      question: "How do I set up the Bakehouse POS system?",
      answer:
        "Begin by carefully unboxing all components included in your Bakehouse POS package. The next step is simple: follow the installation guide provided with the system, or contact our support team for assistance.",
    },
    {
      question: "Does Bakehouse POS integrate with other software?",
      answer:
        "Yes, Bakehouse POS integrates with various software solutions. For a full list of integrations, please refer to our documentation or contact our support team.",
    },
    {
      question: "How many minutes is the time limit in one call meeting?",
      answer:
        "The time limit for call meetings varies based on your subscription. Please check your plan details for specific information.",
    },
    {
      question: "Can I track sales performance?",
      answer:
        "Yes, Bakehouse POS offers robust sales tracking features. You can generate reports and view real-time analytics through the dashboard.",
    },
    {
      question: "Is there a trial period or demo available for Bakehouse POS?",
      answer:
        "We offer a 30-day free trial for new customers. You can also request a personalized demo from our sales team.",
    },
  ];

  return (
    <div className="h-screen mx-auto p-4 bg-white overflow-auto">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-2">FAQ</h1>
        <h2 className="text-xl text-gray-500 text-center mb-6">
          Frequently Asked Questions
        </h2>
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
