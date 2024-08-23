import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo3.png";
import { navItems } from "../constants";
import ScrollToTop from "./scrollToTop";
import { useNavigation } from "../hooks/useNavigation";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { isActive, navigateTo } = useNavigation();

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
        setMobileDrawerOpen(false);
      }}
      className={`transition-colors duration-300  ${
        isActive(href) ? "text-blue-500" : "text-white hover:text-blue-500 flex"
      }`}
    >
      {label}
    </a>
  );

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 bg-[#121212] px-6">
        <div className="container mx-auto relative px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10" src={logo} alt="Logo" />
              <span className="text-xl font-bold tracking-tight">
                Fortune Cars
              </span>
            </div>
            <ul className="hidden lg:flex space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink {...item} />
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <NavLink
                href="/contact"
                label={
                  <>
                    <div className="flex justify-center items-center">
                      <Phone className="w-3.5 mr-2 text-blue-500" />
                      <span>Contact Us</span>
                    </div>
                  </>
                }
              />
            </div>
            <button className="lg:hidden" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <NavLink {...item} />
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 items-center justify-center pt-4">
                <NavLink
                  href="/contact"
                  label={
                    <>
                      <Phone className="w-3.5 mr-2 text-blue-500" />
                      <span>Contact Us</span>
                    </>
                  }
                />
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
