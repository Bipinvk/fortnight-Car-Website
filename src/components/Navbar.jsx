import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import ScrollToTop from "./scrollToTop";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const scrollToSection = (e, href) => {
    e.preventDefault();
    console.log(`Attempting to scroll to ${href}`);
    const element = document.querySelector(href);
    if (element) {
      console.log(`Element found, scrolling...`);
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id ${href} not found`);
    }
    setMobileDrawerOpen(false);
  };

  const handleContact = () => {
    navigate("/contact");
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/+64220833165?text=I'm interested in the ${car.name}`
    );
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPosition = window.scrollY + 100; // Add some offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-[#121212] px-6 ">
        <div className="container  mx-auto relative ">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Fortune Cars</span>
            </div>
            <ul className="hidden lg:flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`transition-colors duration-300 ${
                      activeSection === item.href
                        ? "text-blue-500"
                        : "text-white hover:text-blue-500"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
              >
                Contact Us
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`transition-colors duration-300 ${
                        activeSection === item.href
                          ? "text-blue-500"
                          : "text-white hover:text-blue-500"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/contact");
                  }}
                  href="#"
                  className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <ScrollToTop />
    </>
  );
};

export default Navbar;
