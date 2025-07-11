import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "יצירת קשר", to: "/contact" },
    { name: "שירותים ומחירים", to: "/services" },
    { name: "עלינו", to: "/about" },
    { name: "בית", to: "/" },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-sm shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-18">
            <Link to="/" className="text-green-400 text-2xl font-bold">
              <img src="/src/assets/panda-white.png" alt="logo" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="relative text-white px-4 py-2 text-md font-medium transition-all duration-500 ease-out hover:text-white hover:scale-105 hover:-translate-y-0.5 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100 blur-sm group-hover:blur-none"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-green-800 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
            >
              {isOpen ? <X size={35} /> : <Menu size={35} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/30 rounded-lg mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="relative text-white block px-4 py-3 text-base font-medium transition-all duration-500 ease-out hover:text-white hover:scale-105 group text-right"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-75 group-hover:scale-100"></div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
