import { useState } from "react";
import { MapPin, Calendar, Search } from "lucide-react";
import profile from "../assets/hero-simien.jpg";


export function HeroSection() {
  const [destination, setDestination] = useState("");
  const [when, setWhen] = useState("");

  const handleSearch = () => {
    console.log({ destination, when });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
     <img
  src={profile}
  alt="Beautiful Ethiopian landscape"
  className="absolute inset-0 h-full w-full object-cover"/>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 sm:px-12 lg:px-20">
        <div className="max-w-2xl">
          {/* Eyebrow badge */}
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            <span aria-hidden>✨</span>
            The cradle of humankind
          </span>

          {/* Heading */}
          <h1 className="font-serif text-5xl leading-[1.1] text-white sm:text-6xl">
            Discover the wonders
            <br />
            of <span className="text-amber-400 font-extrabold">Ethiopia</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Thirteen months of sunshine. Nine UNESCO sites. A country where
            ancient faith, wild landscapes and vivid culture still shape
            everyday life.
          </p>

          {/* Search bar */}
          <div className="mt-8 flex flex-col gap-2 rounded-2xl bg-white/95 p-2 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:gap-0 sm:rounded-full">
            <div className="flex flex-1 items-center gap-2 px-4 py-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Search Lalibela, Simien, Danakil..."
                className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none"
              />
            </div>

            <div className="hidden h-6 w-px bg-neutral-200 sm:block" />

            <div className="flex items-center gap-2 border-t border-neutral-100 px-4 py-2.5 sm:border-t-0 sm:border-l">
              <Calendar className="h-4 w-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={when}
                onChange={(e) => setWhen(e.target.value)}
                placeholder="When"
                className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none sm:w-24"
              />
            </div>

            <button
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-800 sm:ml-2"
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default HeroSection;