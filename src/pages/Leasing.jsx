import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Leasing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Leasing Opportunities
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[#F5EBD7]">
          Grow Your Brand At Mall Of America
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mb-16">
          Join one of North America's most visited destinations and connect
          with millions of annual visitors through premium retail spaces,
          flagship locations, dining concepts, and experiential activations.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            "40M+ Visitors",
            "520+ Stores",
            "5.6M Sq Ft",
            "Premium Locations",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Luxury Retail</h3>
            <p className="text-gray-400">
              Premium spaces designed for luxury and flagship brands.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Fashion & Lifestyle</h3>
            <p className="text-gray-400">
              Reach fashion-conscious consumers in a high-traffic environment.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-4">Pop-Up Concepts</h3>
            <p className="text-gray-400">
              Test products and engage customers through short-term activations.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
         <Link
            to="/"
            className="inline-block px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition"
            >
            Contact Leasing Team
         </Link>
        </div>

      </div>
    </motion.div>
  );
}

export default Leasing;