import { motion } from "framer-motion";
import tokped from "../assets/icons/tokped-dark.png";
import shopee from "../assets/icons/shope-dark.png";
import sociolla from "../assets/icons/sociolla-dark.png";

export default function Platform() {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 overflow-hidden">
      <div className="flex items-center">
        <div className="text-gray-700 whitespace-nowrap mr-8 min-w-[180px]">
          Platform yang didukung:
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-12 w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[tokped, shopee, sociolla].map((icon, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={icon} alt="Platform" className="h-8 object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
