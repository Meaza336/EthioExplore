import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Heart, Mountain } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
            <Mountain className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-green-700">
               EthioExplore
               </h1>
               </div>
         <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className={`transition hover:text-blue-500 text-gray-500`}>
              Home
            </a>
          </li>

          <li>
            <a href="#explore" className={`transition hover:text-blue-500 text-gray-500`}>
              Explore
            </a>
          </li>

          <li>
            <a href="#favorites" className={`transition hover:text-blue-500 text-gray-500`}>
              Favorites
            </a>
          </li>

          <li>
            <a href="#about" className={`transition hover:text-blue-500 text-gray-500`}>
              About
            </a>
          </li>
        </ul>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl"
>
  <FaBars />
\
</button>
<div className="flex items-center gap-4">
  <button className="p-2 rounded-full hover:bg-gray-100 transition">
    <Heart className="w-5 h-5" />
  </button>

  <button className="bg-green-700 text-white px-5 py-2 rounded-full">
    Plan a trip
  </button>
</div>
      </div>
    </nav>
  );
}

export default Navbar;