import { Mountain, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-green-700 p-2 rounded-full">
                <Mountain className="w-5 h-5 text-white" />
              </div>

              <h2 className="text-3xl font-serif font-bold">
                EthioExplore
              </h2>
            </div>

            <p className="text-gray-500 leading-7 max-w-sm">
              Discover Ethiopia — the cradle of humankind.
              Curated journeys through landscapes,
              faith and living culture.
            </p>

            <div className="flex gap-4 mt-6">
  <FaInstagram className="w-5 h-5 text-gray-500 hover:text-green-700 cursor-pointer" />
  <FaXTwitter className="w-5 h-5 text-gray-500 hover:text-green-700 cursor-pointer" />
  <MapPin className="w-5 h-5 text-gray-500 hover:text-green-700 cursor-pointer" />
</div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold mb-5">Explore</h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#">All destinations</a>
              </li>

              <li>
                <a href="#">Heritage sites</a>
              </li>

              <li>
                <a href="#">National Parks</a>
              </li>

              <li>
                <a href="#">Festivals</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-5">Company</h3>

            <ul className="space-y-3 text-gray-500">
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>

              <li>
                <a href="#">Privacy</a>
              </li>

              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-14 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>
            © 2026 EthioExplore. Made with care in Addis Ababa.
          </p>

          <p className="mt-4 md:mt-0">
            Photography for illustrative purposes.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;