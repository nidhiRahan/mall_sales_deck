
import heroVideo from "../assets/videos/mall-hero.mp4";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={heroVideo} type="video/mp4" />
</video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">

          <p className="uppercase tracking-[8px] text-sm text-amber-100 mb-6">
            THE WORLD'S MOST VISITED
            <br />
            RETAIL & ENTERTAINMENT DESTINATION
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-6xl md:text-8xl font-bold leading-none"
          >
            MALL OF
            <br />
            AMERICA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-xl text-gray-200"
          >
            40M+ Annual Visitors • 520+ Stores • 5.6M Sq Ft
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-[#E8DCC6] max-w-3xl mx-auto"
          >
            
            Where Global Brands, Sponsors & Event Partners
            Connect With Millions.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-10 px-10 py-4 bg-[#E8DCC6] text-black rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore Opportunities
          </motion.button>

        </div>
      </div>
    </section>
  );
}

export default Hero;