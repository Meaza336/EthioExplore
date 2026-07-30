import { ArrowRight } from "lucide-react";

import lalibela from "../assets/lalibela.jpg";
import fasil from "../assets/simien.jpg";
import axum from "../assets/danakil.jpg";

function HeritageBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-green-700 rounded-[32px] p-10 lg:p-14 text-white">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div>
            <p className="text-yellow-300 font-medium mb-4">
              UNESCO Heritage
            </p>

            <h2 className="text-5xl font-serif leading-tight mb-6">
              Walk with
              <br />
              3,000 years of
              <br />
              history
            </h2>

            <p className="text-green-100 leading-8 mb-8 max-w-md">
              From the obelisks of Axum to the sacred churches of
              Lalibela, Ethiopia is a living museum of Africa's
              oldest civilizations.
            </p>

            <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition">
              Browse heritage sites
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-3 gap-4">

            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src={lalibela}
                alt="Lalibela"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-5 left-5">
                <p className="text-sm">Amhara</p>
                <h3 className="text-2xl font-semibold">
                  Rock Churches
                  <br />
                  of Lalibela
                </h3>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src={fasil}
                alt="Fasil Ghebbi"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-5 left-5">
                <p className="text-sm">Amhara</p>
                <h3 className="text-2xl font-semibold">
                  Fasil Ghebbi,
                  <br />
                  Gondar
                </h3>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-80">
              <img
                src={axum}
                alt="Axum"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-5 left-5">
                <p className="text-sm">Tigray</p>
                <h3 className="text-2xl font-semibold">
                  Obelisks
                  <br />
                  of Axum
                </h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HeritageBanner;