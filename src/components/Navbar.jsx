import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import Sun and Moon icons from React Icons
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Track scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className={`fixed w-full pt-4 pb-4 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-navy-blue" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                src="images/Logo.png"
                alt="Brand Logo"
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex navbar">
            <a href="#home" className="m-3 py-2 text-black">
              Home
            </a>
            <a href="#about" className="m-3 py-2 text-black">
              About
            </a>
            <a href="#features" className="m-3 py-2 text-black">
              Features
            </a>
            <a href="#pricing" className="m-3 py-2 text-black">
              Pricing
            </a>
            <a href="#team" className="m-3 py-2 text-black">
              Team
            </a>
            <a href="#contact" className="m-3 py-2 text-black">
              Contact
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md bg-gray-200 text-black focus:outline-none dark:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <FaSun className="h-6 w-6 text-yellow-500" />
            ) : (
              <FaMoon className="h-6 w-6 text-blue-500" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-blue">
          <a href="#home" className="block px-4 py-2 text-white hover:bg-gray-700">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 text-white hover:bg-gray-700">
            About
          </a>
          <a href="#features" className="block px-4 py-2 text-white hover:bg-gray-700">
            Features
          </a>
          <a href="#pricing" className="block px-4 py-2 text-white hover:bg-gray-700">
            Pricing
          </a>
          <a href="#team" className="block px-4 py-2 text-white hover:bg-gray-700">
            Team
          </a>
          <a href="#contact" className="block px-4 py-2 text-white hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
