import React, { useState } from "react";
import diamond from "../assets/icons/diamond.png";
import tokped from "../assets/icons/icon-tokped.png";
import shopee from "../assets/icons/icon-shopee.png";
import lazada from "../assets/icons/icon-lazada.png";
import blibli from "../assets/icons/icon-blivli.png";
import sociolla from "../assets/icons/icon-tokped.png";
import beauty from "../assets/icons/icon-sociolla.png";
import dots from "../assets/icons/icon-dots.png";

export default function Tutorial() {
  const [url, setUrl] = useState("");

  return (
    <section className="container mx-auto px-4 py-8 md:p-12 lg:p-24">
      <div className="flex flex-col items-center justify-center space-y-4 md:space-y-8 text-center">
        <div className="flex items-center space-x-2 border border-purple-600 rounded-xl px-3 py-1 w-fit">
          <img src={diamond} alt="icons" className="h-3" />
          <p className="text-purple-700 text-sm">Tutorial</p>
        </div>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Buat Konten Menarik untuk Bisnismu
        </h3>
        <h3 className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#703BE7] to-[#FFA899] bg-clip-text text-transparent font-bold">
          Dalam 3 Langkah Mudah!
        </h3>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto pt-12 md:pt-24">
        {/* Left Panel */}
        <div className="bg-slate-100 rounded-3xl shadow-sm p-4 md:p-8 flex-1">
          <div className="bg-white rounded-2xl flex flex-col items-center justify-center h-full p-4 md:p-6">
            <h2 className="text-lg md:text-xl font-medium text-gray-800 mb-4 md:mb-6 text-center">
              Mulai buat video ad dengan{" "}
              <span className="bg-gradient-to-r from-[#703BE7] to-[#FFA899] bg-clip-text text-transparent font-semibold">
                Link Produk
              </span>
              :
            </h2>

            {/* Improved Input Layout */}
            <div className="w-full relative mb-4">
              <div className="flex flex-col sm:flex-row items-center border border-gray-300 rounded-lg overflow-hidden">
                <div className="flex w-full items-center">
                  <div className="pl-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Masukkan URL produk di sini..."
                    className="w-full py-3 px-3 focus:outline-none text-gray-600"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 transition-colors">
                  Analisa
                </button>
              </div>
            </div>

            {/* Marketplace Icons */}
            <div className="flex flex-col sm:flex-row items-center sm:space-x-3 text-xs text-gray-500 mt-2">
              <h3 className="mb-2 sm:mb-0">Salin tautan dari: </h3>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                <img src={tokped} className="w-6 h-6 md:w-8 md:h-8" alt="Tokopedia" />
                <img src={shopee} className="w-6 h-6 md:w-8 md:h-8" alt="Shopee" />
                <img src={lazada} className="w-6 h-6 md:w-8 md:h-8" alt="Lazada" />
                <img src={blibli} className="w-6 h-6 md:w-8 md:h-8" alt="Blibli" />
                <img src={sociolla} className="w-6 h-6 md:w-8 md:h-8" alt="Sociolla" />
                <img src={beauty} className="w-6 h-6 md:w-8 md:h-8" alt="Beauty" />
                <img src={dots} className="w-6 h-6 md:w-8 md:h-8" alt="More" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8">
          <div className="bg-white rounded-2xl border-2 border-purple-500 p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-purple-600 mb-2">
              Step 1 - Masukkan URL
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Cukup Tampilkan Tautan Produk Atau Bisnis Anda, Dan Sistem Kami Akan Secara Otomatis
              Mengambil Informasi Penting Untuk Memulai.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
              Step 2 - Konfirmasi Informasi & Personalisasi
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Periksa Detail Produk Yang Diambil, Tambahkan Sentuhan Unik, Dan Pilih Gaya Yang
              Sesuai Dengan Brand Anda.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
              Step 3 - Generate & Dapatkan Hasilnya
            </h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Dalam Hitungan Detik, Dapatkan Konten Bisnis Yang Siap Digunakan—Efektif, Menarik, Dan
              Profesional!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
