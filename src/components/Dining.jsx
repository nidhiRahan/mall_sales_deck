import dining1 from "../assets/images/dining1.jpeg";
import dining2 from "../assets/images/dining2.jpg";
import dining3 from "../assets/images/dining3.jpg";
import dining4 from "../assets/images/dining4.jpg";
import { motion } from "framer-motion";

function Dining() {
  const diningPlaces = [
    {
      title: "Fine Dining",
      image: dining1,
      desc: "Elevated culinary experiences designed to attract premium audiences."
    },
    {
      title: "Luxury Cafés",
      image: dining2,
      desc: "Stylish social spaces that encourage repeat visitation and engagement."
    },
    {
      title: "Global Cuisine",
      image: dining3,
      desc: "A diverse collection of international flavors appealing to every visitor."
    },
    {
      title: "Lifestyle Experiences",
      image: dining4,
      desc: "Dining destinations that blend food, entertainment, and community."
    },
  ];

  return (
    <section id="dining" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Dining & Lifestyle
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-[#F5EBD7] mb-6"
        >
          More Than A Meal
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-4xl mb-16">
          Dining experiences drive repeat visitation, social engagement,
          and extended customer dwell time. From luxury cafés to world-class
          restaurants, Mall of America creates destinations that bring people together.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            "50+ Dining Options",
            "Global Cuisine",
            "Premium Experiences",
            "All-Day Engagement",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>

        {/* Dining Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {diningPlaces.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-[420px] border border-zinc-800 hover:border-yellow-500 transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold mb-6">
            Create Memorable Dining Experiences
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Connect with millions of visitors through culinary destinations,
            premium hospitality experiences, and lifestyle-focused dining concepts.
          </p>

          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Dining Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}

export default Dining;