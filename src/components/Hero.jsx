
import heroVideo from "../assets/videos/mall-hero.mp4";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-20">
        <div className="text-center px-6">

          <p className="uppercase tracking-[10px] text-xs md:text-sm text-yellow-400 mb-4 font-semibold">
            THE WORLD'S MOST VISITED
            <br />
            RETAIL & ENTERTAINMENT DESTINATION
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-4xl lg:text-7xl font-extrabold leading-[0.9] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            MALL OF
            <br />
            AMERICA
          </motion.h1>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-10 flex flex-wrap justify-center gap-4"
>
  {["40M+ Visitors", "520+ Stores", "5.6M Sq Ft"].map((item) => (
    <div
      key={item}
      className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full"
    >
      {item}
    </div>
  ))}
</motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-[#E8DCC6] max-w-3xl mx-auto"
          >
            
            Where Global Brands, Sponsors & Event Partners
            Connect With Millions.
          </motion.p>

          

<Link
  to="/leasing"
  className="inline-block mt-10 px-10 py-4 bg-yellow-500 text-black rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl"
>
  Explore Opportunities
</Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;