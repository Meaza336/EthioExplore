import {
  Landmark,
  Trees,
  Mountain,
} from "lucide-react";

function Categories() {
  const categories = [
    {
      icon: <Landmark className="w-6 h-6 text-green-700" />,
      title: "Nine UNESCO sites",
      description: "More World Heritage sites than any other African nation.",
    },
    {
      icon: <Trees className="w-6 h-6 text-green-700" />,
      title: "Living culture",
      description: "80+ languages, unique cuisine, and thousand-year traditions.",
    },
    {
      icon: <Mountain className="w-6 h-6 text-green-700" />,
      title: "Trusted local guides",
      description: "Vetted community-led experiences that give back.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-green-700 font-semibold mb-2">
            Why visit Ethiopia?
          </p>

          <h2 className="text-5xl font-serif font-semibold text-gray-900">
            A country unlike anywhere else on Earth
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition duration-300 cursor-pointer"
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
       <div className="mt-24 bg-green-50 rounded-[32px] p-10 lg:p-16">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left Side */}
      <div>
        <h2 className="text-5xl font-serif text-gray-900 leading-tight">
          Stories from the highlands, monthly.
        </h2>

        <p className="mt-6 text-gray-600 max-w-lg">
          Field notes, festival calendars and honest travel guides.
          No spam — ever.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="you@ethiopia.travel"
          className="flex-1 rounded-full border border-gray-300 px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-600"
        />

        <button className="rounded-full bg-green-700 px-8 py-4 text-white font-semibold hover:bg-green-800 transition">
          Subscribe
        </button>
      </div>

    </div>
  </div>

    </section>
  );
}

export default Categories;