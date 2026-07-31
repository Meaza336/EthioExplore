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
    </section>
  );
}

export default Categories;