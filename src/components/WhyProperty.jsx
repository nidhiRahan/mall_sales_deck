import {
  FaUsers,
  FaStore,
  FaMapMarkerAlt,
  FaGlobeAmericas,
} from "react-icons/fa";
import { motion } from "framer-motion";

function WhyProperty() {
  const features = [
    {
      icon: <FaUsers size={36} />,
      title: "40M+ Annual Visitors",
      desc: "One of the world's most visited retail and entertainment destinations.",
    },
    {
      icon: <FaStore size={36} />,
      title: "520+ Stores",
      desc: "Home to leading global brands, flagship concepts, and innovators.",
    },
    {
      icon: <FaMapMarkerAlt size={36} />,
      title: "Prime Location",
      desc: "Exceptional accessibility and regional reach across North America.",
    },
    {
      icon: <FaGlobeAmericas size={36} />,
      title: "Global Destination",
      desc: "Attracting visitors, tourists, and business partners worldwide.",
    },
  ];

  return (
    <section
      id="why-property"
      className="bg-gradient-to-b from-black to-zinc-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-yellow-500 mb-4 font-semibold">
          Why This Property
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-[#F5EBD7] mb-6 max-w-5xl"
        >
          North America's Premier Retail & Entertainment Destination
        </motion.h2>

        <p className="text-gray-400 text-lg max-w-4xl mb-16">
          Mall of America is more than a shopping center. It is a dynamic
          ecosystem where retail, entertainment, dining, events, and brand
          experiences come together to attract millions of visitors every year.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="text-yellow-500 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "40M+ Visitors",
            "520+ Stores",
            "5.6M Sq Ft",
            "365 Days",
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 transition"
            >
              <h3 className="text-3xl font-bold text-white">
                {stat.split(" ")[0]}
              </h3>

              <p className="text-gray-400 mt-2">
                {stat.split(" ").slice(1).join(" ")}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyProperty;