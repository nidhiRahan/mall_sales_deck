import dining1 from "../assets/images/dining1.jpeg";
import dining2 from "../assets/images/dining2.jpeg";
import dining3 from "../assets/images/dining3.jpeg";
import dining4 from "../assets/images/dining4.jpeg";
import { motion } from "framer-motion";

function Dining() {
  const diningPlaces = [
    {
      title: "Fine Dining",
      image: dining1,
    },
    {
      title: "Luxury Cafés",
      image: dining2,
    },
    {
      title: "Global Cuisine",
      image: dining3,
    },
    {
      title: "Lifestyle Experiences",
      image: dining4,
    },
  ];

  return (
    <section id="dining" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Dining & Lifestyle
        </p>

       <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
        >
        More Than A Meal
        </motion.h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          Dining experiences drive repeat visitation, social engagement,
          and extended customer dwell time across the property.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {diningPlaces.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[400px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Dining;