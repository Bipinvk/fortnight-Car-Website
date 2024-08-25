import React from "react";

const resourcesLinks = [
  { href: "/all-cars", text: "Car Inventory" },
  { href: "/finance/:id", text: "Financing Options" },
];

const platformLinks = [
  { href: "/faq", text: "FAQ" },
  { href: "/terms", text: "Terms of Service" },
  { href: "/privacy", text: "Privacy Policy" },
];

const communityLinks = [
  { href: "/about", text: "About Fortune Cars" },
  { href: "/testimonials", text: "Customer Testimonials" },
  { href: "/contact", text: "Contact Us" },
];

const Footer = ({ id }) => {
  return (
    <footer id={id} className=" border-t px-10 border-neutral-700 pt-6 bg-gradient-to-t to-gray-700 from-gray-800">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">For Buyers & Sellers</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Fortune Cars Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community & Support</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-neutral-400">
        <p>&copy; 2024 Fortune Cars. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
