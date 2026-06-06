import { motion } from "framer-motion";

function Retail() {
  const brands = [
    "Apple",
    "Nike",
    "Zara",
    "H&M",
    "Sephora",
    "Lululemon",
  ];

  return (
  <section id="retail" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Retail Excellence
        </p>

        <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
        >
        Home to the World's Leading Brands
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-10 hover:bg-zinc-900 transition duration-300"
            >
              <h3 className="text-3xl font-bold">{brand}</h3>

              <p className="text-gray-400 mt-4">
                Premium retail presence attracting millions of visitors annually.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Retail;