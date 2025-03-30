import React from "react";
import diamond from "../assets/icons/diamond.png";
import mockup1 from "../assets/images/mockup1.png";
import mockup2 from "../assets/images/mockup2.png";
import mockup3 from "../assets/images/mockup3.png";
import mockup4 from "../assets/images/mockup4.png";
import mockup5 from "../assets/images/mockup5.png";
import { FiLink, FiLayout, FiEdit, FiPieChart, FiCalendar } from "react-icons/fi";
import FeatureCard from "../components/FeatureCard";

export default function Feature() {
  const features = [
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
          <FiLink size={24} />
        </div>
      ),
      title: "Buat Video dari URL",
      description:
        "Cukup masukkan tautan produk atau bisnismu, dan Videfly akan otomatis mengambil informasi serta menghasilkan video siap pakai.",
      image: mockup1,
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
          <FiLayout size={24} />
        </div>
      ),
      title: "Template Siap Pakai",
      description:
        "Tak perlu mendesain dari nol! Gunakan beragam template yang bisa langsung disesuaikan dengan kebutuhan bisnismu.",
      image: mockup2,
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
          <FiEdit size={24} />
        </div>
      ),
      title: "Edit Cepat & Fleksibel",
      description:
        "Sesuaikan konten dengan mudah menggunakan Quick Edit. Ubah gambar, musik, atau elemen lainnya tanpa keahlian editing.",
      image: mockup3,
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
          <FiPieChart size={24} />
        </div>
      ),
      title: "Analisis & Rekomendasi Cerdas",
      description:
        "Dapatkan insight performa video dengan Videfly Analytics, lengkap dengan saran improvement untuk konten yang lebih menarik dan efektif.",
      image: mockup4,
    },
    {
      icon: (
        <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
          <FiCalendar size={24} />
        </div>
      ),
      title: "Jadwalkan & Posting Otomatis",
      description:
        "Hemat waktu dengan integrasi media sosial! Langsung jadwalkan dan publikasikan kontenmu ke berbagai platform tanpa perlu pindah aplikasi.",
      image: mockup5,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8 md:p-12 lg:p-24">
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 text-center">
        <div className="flex items-center space-x-2 border border-purple-600 rounded-xl px-3 py-1 w-fit">
          <img src={diamond} alt="icons" className="h-3" />
          <p className="text-purple-700 text-sm">Features</p>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Bagaimana Videfly Membantu Bisnismu?
        </h3>
        <h3 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#703BE7] to-[#FFA899] bg-clip-text text-transparent font-bold">
          Lebih Efisien, Lebih Mudah, Hasil Maksimal!
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-16 lg:py-24">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}

        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-6">
          {features.slice(3, 5).map((feature, index) => (
            <div key={index + 3} className="w-full md:w-1/2">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
