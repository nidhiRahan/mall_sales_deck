import themepark from "../assets/images/themepark.webp";
import aquarium from "../assets/images/aquarium.jpg";
import eventImg from "../assets/images/event.jpg";
import family from "../assets/images/family.jpg";
import { motion } from "framer-motion";
function Entertainment() {
  const attractions = [
  {
    title: "Nickelodeon Universe",
    description:
      "America's largest indoor theme park featuring thrilling rides and family experiences.",
    image: themepark,
  },
  {
    title: "SEA LIFE Aquarium",
    description:
      "Immersive underwater experiences attracting visitors from around the world.",
    image: aquarium,
  },
  {
    title: "Live Events",
    description:
      "Concerts, celebrity appearances, product launches, and brand activations year-round.",
    image: eventImg,
  },
  {
    title: "Family Entertainment",
    description:
      "Interactive attractions that keep visitors engaged beyond traditional shopping.",
    image: family,
  },
];

  return (
          <section id="entertainment" className="bg-zinc-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Entertainment & Attractions
        </p>

        <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
        >
        America's Ultimate Entertainment Destination
        </motion.h2>


        <p className="text-gray-400 max-w-3xl mb-16">
          Beyond retail, Mall of America delivers unforgettable entertainment experiences through world-class attractions, immersive events, family adventures, and year-round engagement that drive repeat visitation.
        </p>

<div className="grid md:grid-cols-4 gap-6 mb-16">
  {[
    "40M+ Visitors",
    "Nickelodeon Universe",
    "SEA LIFE Aquarium",
    "365 Days of Events",
  ].map((item, index) => (
    <div
      key={index}
      className="bg-black border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
    >
      <h3 className="font-bold text-lg">{item}</h3>
    </div>
  ))}
</div>

        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((item, index) => (
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

  <div className="absolute bottom-0 p-6">
    <h3 className="text-3xl font-bold mb-2">
      {item.title}
    </h3>

    <p className="text-gray-200">
      {item.description}
    </p>
  </div>
</div>
          ))}
        </div>
        <div className="text-center mt-20">
  <h3 className="text-4xl font-bold mb-6">
    Create Experiences That Drive Engagement
  </h3>

  <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition">
    Explore Entertainment Partnerships
  </button>
</div>

      </div>
    </section>
  );
}

export default Entertainment;