import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

  const stats = [
    "500+ Stores",
    "5.6M Sq Ft",
    "40M+ Visitors",
    "Global Brands",
  ];

  return (
    <section
      id="retail"
      className="bg-gradient-to-b from-black via-[#050505] to-black text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Retail At Scale
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Where Global Brands Meet
          <span className="text-[#E8DCC6]"> Millions of Consumers</span>
        </motion.h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-4xl mb-16 leading-relaxed">
          Mall of America is more than a shopping destination.
          It is a retail ecosystem where global brands connect with
          millions of visitors through flagship experiences,
          immersive storefronts, and unmatched consumer engagement.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 text-center flex flex-col items-center hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.2)] transition-all duration-500"
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-20 object-contain mb-6 transition duration-500 hover:scale-110"
              />

              <h3 className="text-2xl font-bold mb-3">
                {brand.name}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {brand.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center border-t border-zinc-800 pt-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Join America's Premier Retail Destination
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Connect your brand with millions of annual visitors and
            unlock premium retail opportunities.
          </p>

          <Link
            to="/leasing"
            className="inline-block px-10 py-4 bg-yellow-500 text-black rounded-full font-bold hover:scale-105 hover:bg-yellow-400 transition-all duration-300 shadow-lg"
          >
            Explore Leasing Opportunities
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Retail;