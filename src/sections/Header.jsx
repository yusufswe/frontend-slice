import React from "react";
import logo from "../assets/images/logo-videfly.png";

export default function Header() {
  return (
    <section className="container mx-auto h-20  px-24 py-6">
      <div className="flex justify-between items-center cursor-pointer">
        <div className="">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <nav>
          <ul className="flex space-x-20">
            <li>Fitur AI</li>
            <li>Cara Kerja</li>
            <li>Harga</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="space-x-3">
          <button className="px-5 py-2 bg-[#F5F5F5] rounded-xl  font-semibold border">Masuk</button>
          <button className="px-5 py-2  rounded-xl bg-gradient-to-r text-white font-bold  from-[#7F52FF] to-[#FB8570] border">
            Buat Video
          </button>
        </div>
      </div>
    </section>
  );
}
