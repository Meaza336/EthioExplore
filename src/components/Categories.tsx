import {
  Landmark,
  Trees,
  Mountain,
  Waves,
  Church,
  PawPrint,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function Categories() {
  const categories = [
    {
      icon: <Landmark className="w-6 h-6 text-green-700" />,
      title: "Heritage",
      description: "UNESCO sites & ancient wonders",
    },
    {
      icon: <Trees className="w-6 h-6 text-green-700" />,
      title: "National Parks",
      description: "Rift Valley to Afro-alpine",
    },
    {
      icon: <Mountain className="w-6 h-6 text-green-700" />,
      title: "Mountains",
      description: "Trek the roof of Africa",
    },
    {
      icon: <Waves className="w-6 h-6 text-green-700" />,
      title: "Waterfalls",
      description: "Thunder of the Blue Nile",
    },
    {
      icon: <Church className="w-6 h-6 text-green-700" />,
      title: "Churches",
      description: "Rock-hewn & sacred",
    },
    {
      icon: <PawPrint className="w-6 h-6 text-green-700" />,
      title: "Wildlife",
      description: "Endemic species & safaris",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-green-700" />,
      title: "Festivals",
      description: "Colour, chant & celebration",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-green-700 font-semibold mb-2">
            Browse by category
          </p>

          <h2 className="text-5xl font-serif font-semibold text-gray-900">
            What will you explore?
          </h2>
        </div>

        <button className="hidden md:flex items-center gap-2 text-green-700 font-medium hover:gap-3 transition-all">
          See all
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border border-gray-200 rounded-3xl p-6 text-center hover:shadow-lg transition duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              {category.icon}
            </div>

            <h3 className="font-semibold text-lg mb-2">
              {category.title}
            </h3>

            <p className="text-gray-500 text-sm leading-6">
              {category.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;