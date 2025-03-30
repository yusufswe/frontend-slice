import React from "react";
import diamond from "../assets/icons/diamond.png";
import demo from "../assets/images/demo.png";
import circleBg from "../assets/images/subtract.png";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#7261EF] to-[#F1EDFD] via-[#B9AFF7] min-h-screen flex justify-center items-center py-8">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-10 shadow-lg gap-8">
          <div className="space-y-4 md:space-y-5 w-full md:w-1/2">
            <div className="flex items-center space-x-2 border border-purple-600 rounded-xl px-3 py-1 w-fit">
              <img src={diamond} alt="icons" className="h-3" />
              <p className="text-purple-700 text-sm">Live Demo</p>
            </div>
            <div className="space-y-5">
              <h2 className="font-bold text-5xl max-w-xl">
                Coba Fitur URL to Video{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#7F52FF] to-[#FB8570]">
                  Tanpa Biaya!
                </span>
              </h2>
              <div className="max-w-md text-[#545454] pb-14">
                <p>Masukkan URL, ubah jadi video dalam hitungan detik. Mudah dan gratis!</p>
              </div>
              <form className="flex items-center space-x-3">
                <div className="flex items-center w-full rounded-xl border border-gray-300 p-2 bg-white">
                  <span className="text-gray-500 pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>
                  <select className="w-full py-2 px-3 rounded-lg focus:outline-none">
                    <option value="">Pilih Link URL Product</option>
                    <option value="url1">Product URL 1</option>
                    <option value="url2">Product URL 2</option>
                    <option value="url3">Product URL 3</option>
                  </select>
                </div>
                <div className="flex justify-center">
                  <button className="bg-[#703BE7] text-white font-semibold py-2 px-6 rounded-lg shadow-md">
                    Analisa
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="relative w-full md:w-1/2 flex justify-center"
            style={{
              backgroundImage: `url(${circleBg})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              src={demo}
              alt="Demo preview"
              className="w-full max-w-md object-contain rounded-lg relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import diamond from "../assets/icons/diamond.png";
// import demo from "../assets/images/demo.png";

// export default function Hero() {
//   return (
//     <section className="bg-gradient-to-br from-[#7261EF] to-[#F1EDFD] via-[#B9AFF7] min-h-screen flex justify-center items-center py-8">
//       <div className="px-4 sm:px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
//         <div className="bg-white rounded-3xl flex flex-col md:flex-row justify-between p-4 sm:p-6 md:p-10 shadow-lg gap-8">
//           <div className="space-y-4 md:space-y-5 w-full md:w-1/2">
//             <div className="flex items-center space-x-2 border border-purple-600 rounded-xl px-3 py-1 w-fit">
//               <img src={diamond} alt="icons" className="h-3" />
//               <p className="text-purple-700 text-sm">Live Demo</p>
//             </div>
//             <div className="space-y-5">
//               <h2 className="font-bold text-5xl max-w-xl">
//                 Coba Fitur URL to Video
//                 <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#7F52FF] to-[#FB8570]">
//                   Tanpa Biaya!
//                 </span>
//               </h2>
//               <div className="max-w-md text-[#545454] pb-14">
//                 <p>Masukkan URL, ubah jadi video dalam hitungan detik. Mudah dan gratis!</p>
//               </div>
//               <form className="flex items-center space-x-3">
//                 <div className="flex items-center w-full rounded-xl border border-gray-300 p-2 bg-white">
//                   <span className="text-gray-500 pl-2">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
//                       <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
//                     </svg>
//                   </span>
//                   <select className="w-full py-2 px-3 rounded-lg focus:outline-none">
//                     <option value="">Pilih Link URL Product</option>
//                     <option value="url1">Product URL 1</option>
//                     <option value="url2">Product URL 2</option>
//                     <option value="url3">Product URL 3</option>
//                   </select>
//                 </div>
//                 <div className="flex justify-center">
//                   <button className="bg-[#703BE7] text-white font-semibold py-2 px-6 rounded-lg shadow-md">
//                     Analisa
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={demo}
//               alt="Demo preview"
//               className="w-full max-w-md object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
