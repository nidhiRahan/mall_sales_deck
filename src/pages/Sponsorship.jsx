import { motion } from "framer-motion";
function Sponsorship() {
  const sponsors = [
    {
      title: "Naming Rights",
      desc: "Associate your brand with one of the world's most visited destinations.",
    },
    {
      title: "Experiential Activations",
      desc: "Create immersive consumer experiences inside high-traffic zones.",
    },
    {
      title: "Digital Media Network",
      desc: "Reach millions through premium on-site digital displays.",
    },
    {
      title: "Event Partnerships",
      desc: "Sponsor concerts, launches, and large-scale public events.",
    },
  ];

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="min-h-screen bg-black text-white"
>

      <section className="py-24 px-10 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Sponsorship Opportunities
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Connect your brand with millions of annual visitors through
          high-impact sponsorships, activations, and strategic partnerships.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-8">

          {sponsors.map((item, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-2xl p-10 hover:bg-zinc-900 transition"
            >
              <h2 className="text-3xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="text-center pb-24">
        <h2 className="text-4xl font-bold mb-6">
          Ready To Partner?
        </h2>

        <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
          Contact Sponsorship Team
        </button>
      </section>

    </motion.div>
  );
}

export default Sponsorship;