import { motion } from "framer-motion";

import appleLogo from "../assets/images/brands/apple.jpeg";
import nikeLogo from "../assets/images/brands/nike.jpeg";
import zaraLogo from "../assets/images/brands/zara.jpeg";
import macysLogo from "../assets/images/brands/macys.jpeg";
import legoLogo from "../assets/images/brands/lego.jpeg";
import sephoraLogo from "../assets/images/brands/sephora.jpeg";

function Retail() {
  const brands = [
    {
      name: "Apple",
      image: appleLogo,
      desc: "Innovative technology experiences.",
    },
    {
      name: "Nike",
      image: nikeLogo,
      desc: "Global sports and lifestyle leader.",
    },
    {
      name: "Zara",
      image: zaraLogo,
      desc: "Modern fashion for a global audience.",
    },
    {
      name: "Macy's",
      image: macysLogo,
      desc: "Iconic department store destination.",
    },
    {
      name: "LEGO",
      image: legoLogo,
      desc: "Interactive family entertainment retail.",
    },
    {
      name: "Sephora",
      image: sephoraLogo,
      desc: "Premium beauty and lifestyle experiences.",
    },
  ];

  return (
    <section id="retail" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Retail At Scale
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-8"
        >
          Where Global Brands Meet Millions of Consumers
        </motion.h2>

        <p className="text-gray-400 text-xl max-w-4xl mb-16">
          Mall of America is more than a shopping destination. It is a retail
          ecosystem where global brands connect with millions of visitors
          through flagship experiences, immersive storefronts, and unmatched
          consumer engagement.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            "500+ Stores",
            "5.6M Sq Ft",
            "40M+ Visitors",
            "Global Brands",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-6 text-center border border-transparent hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-3xl p-10 bg-zinc-950 hover:border-yellow-500 hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-20 object-contain transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-bold">{brand.name}</h3>

              <p className="text-gray-400 mt-4">{brand.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-4xl font-bold mb-6">
            Join America's Premier Retail Destination
          </h3>

          <button className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full hover:scale-105 transition duration-300">
            Explore Leasing Opportunities
          </button>
        </div>
      </div>
    </section>
  );
}

export default Retail;