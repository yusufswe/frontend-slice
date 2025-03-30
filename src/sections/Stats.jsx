import React from "react";

export default function Stats() {
  return (
    <section className="container mx-auto px-4 py-8 md:p-12 lg:p-24">
      <div className="p-4 sm:p-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Lebih Produktif, Lebih Untung, Lebih Hemat!
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-lg sm:max-w-2xl mx-auto">
            Jangan tunggu lagi! Buat video pakai Videfly sekarang, biar cepat, untung besar, dan
            hemat!
          </p>

          <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-[#7F52FF] to-[#FB8570] text-white font-medium flex items-center gap-2 mx-auto hover:opacity-90 transition-opacity mb-12 sm:mb-16">
            Buat Video
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            <div className="border-b sm:border-r sm:border-b-0 border-gray-200 px-4 pb-4 sm:pb-0">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FFA899] to-[#703BE7] bg-clip-text text-transparent mb-2">
                0 %
              </h3>
              <div className="text-gray-600 text-sm">Produktivitas meningkat</div>
            </div>

            <div className="border-b sm:border-r sm:border-b-0 border-gray-200 px-4 pb-4 sm:pb-0">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FFA899] to-[#703BE7] bg-clip-text text-transparent mb-2">
                0 %
              </div>
              <div className="text-gray-600 text-sm">Kenaikan ROI</div>
            </div>

            <div className="px-4">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#FFA899] to-[#703BE7] bg-clip-text text-transparent mb-2">
                0 x
              </div>
              <div className="text-gray-600 text-sm">Lebih Hemat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
