import { ArrowRight, MapPin, Star } from "lucide-react";


import lalibela from "../assets/lalibela.jpg";
import simien from "../assets/simien.jpg";
import danakil from "../assets/danakil.jpg";
import bluenile from "../assets/bluenile.jpg";
import gondar from "../assets/gondar.jpg";
import axum from "../assets/axum.jpg";
function FeaturedDestinations() {
  const places = [
    {
      image: lalibela,
      title: "Lalibela",
      location: "Amhara, Ethiopia",
      rating: 4.9,
      description: "Discover the world-famous rock-hewn churches.",
    },
    {
      image: simien,
      title: "Simien Mountains",
      location: "Amhara,  Ethiopia",
      rating: 4.8,
      description: "Hike through Ethiopia's breathtaking mountains.",
    },
    {
      image: danakil,
      title: "Danakil Depression",
      location: "Afar,  Ethiopia",
      rating: 4.7,
      description: "Experience one of Earth's most extraordinary landscapes.",
    },
        {
      image: bluenile,
      title: "Blue Nile Falls",
      location: "Amhara,  Ethiopia",
      rating: 4.9,
      description: "'Tis Issat' — the water that smokes — thunders across a basalt cliff..",
    },
    {
      image: gondar,
      title: "Fasil Ghebbi, Gondar",
      location: "Amhara,  Ethiopia",
      rating: 4.8,
      description: "The 'Camelot of Africa' — a walled royal city of castles and palaces.",
    },
    {
      image: axum,
      title: "Obelisks of Axum",
      location: "Afar,  Ethiopia",
      rating: 4.7,
      description: "Ancient stelae marking the cradle of the Aksumite civilisation..",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-green-700 font-semibold">
            Featured destinations
          </p>

          <h2 className="text-5xl font-serif">
            Explore Ethiopia
          </h2>
        </div>

        <button className="flex items-center gap-2 text-green-700">
          View all
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {places.map((place) => (
          <div
            key={place.title}
            className="rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={place.image}
              alt={place.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">
                  {place.title}
                </h3>

                <div className="flex items-center gap-1">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  {place.rating}
                </div>
              </div>

              <p className="flex items-center gap-2 mt-2 text-gray-500">
                <MapPin size={16} />
                {place.location}
              </p>

              <p className="mt-4 text-gray-600">
                {place.description}
              </p>

              <button className="mt-6 text-green-700 font-semibold">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDestinations;