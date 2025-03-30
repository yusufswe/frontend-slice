import React, { useState } from "react";
import logo from "../assets/images/logo-videfly.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="container mx-auto px-4 md:px-8 lg:px-24 py-4 md:py-6">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
        </div>

        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 lg:space-x-20">
            <li>Fitur AI</li>
            <li>Cara Kerja</li>
            <li>Harga</li>
            <li>Support</li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-3">
          <button className="px-5 py-2 bg-[#F5F5F5] rounded-xl  font-semibold border">Masuk</button>
          <button className="px-5 py-2  rounded-xl bg-gradient-to-r text-white font-bold  from-[#7F52FF] to-[#FB8570] border">
            Buat Video
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <nav className="flex flex-col space-y-4">
            <ul className="flex flex-col space-y-2">
              <li className="py-2 hover:text-purple-600 transition-colors">Fitur AI</li>
              <li className="py-2 hover:text-purple-600 transition-colors">Cara Kerja</li>
              <li className="py-2 hover:text-purple-600 transition-colors">Harga</li>
              <li className="py-2 hover:text-purple-600 transition-colors">Support</li>
            </ul>
            <div className="flex flex-col space-y-2 pt-2">
              <button className="px-5 py-2 bg-[#F5F5F5] rounded-xl  font-semibold border">
                Masuk
              </button>
              <button className="px-5 py-2  rounded-xl bg-gradient-to-r text-white font-bold  from-[#7F52FF] to-[#FB8570] border">
                Buat Video
              </button>
            </div>
          </nav>
        </div>
      )}
    </section>
  );
}
