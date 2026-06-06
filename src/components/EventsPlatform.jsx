import concert from "../assets/images/concert.avif";
import activation from "../assets/images/activation.webp";
import launch from "../assets/images/launch1.jpeg";
import corporate from "../assets/images/corporate.webp";
import { motion } from "framer-motion";

function EventsPlatform(){
  const events = [
    {
      title: "Concerts & Live Shows",
      image: concert,
      description:
        "Host unforgettable performances in front of millions of annual visitors.",
    },
    {
      title: "Brand Activations",
      image: activation,
      description:
        "Create immersive experiences that generate awareness and engagement.",
    },
    {
      title: "Product Launches",
      image: launch,
      description:
        "Launch products in one of the most visited destinations in North America.",
    },
    {
      title: "Corporate Events",
      image: corporate,
      description:
        "Flexible spaces for conferences, networking events, and private gatherings.",
    },
  ];

   return (
          <section id="events" className="bg-zinc-950 text-white py-24">
          <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Events & Platform
        </p>

        <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-12"
        >
        A Global Stage For Brands
        </motion.h2>
        
        <p className="text-gray-400 max-w-3xl mb-16">
          Mall of America is more than a retail destination.
          It is a platform for brands, performers, sponsors,
          and event organizers to connect with massive audiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((item, index) => (
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
                <h3 className="text-3xl font-bold mb-3">
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
export default EventsPlatform;