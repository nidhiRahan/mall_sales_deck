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

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Entertainment & Attractions
        </p>

        <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
        >
        More Than A Shopping Mall
        </motion.h2>


        <p className="text-gray-400 max-w-3xl mb-16">
          Mall of America is a destination experience that attracts millions
          through world-class entertainment, family attractions, and immersive events.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {attractions.map((item, index) => (
           <div
  key={index}
  className="group relative overflow-hidden rounded-2xl h-[400px]"
>
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
  />

  <div className="absolute inset-0 bg-black/50"></div>

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

      </div>
    </section>
  );
}

export default Entertainment;