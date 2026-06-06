import { motion } from "framer-motion";
function Leasing() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="min-h-screen bg-black text-white"
>

      <h1 className="text-6xl font-bold mb-8">
        Retail Leasing
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl">
        Premium retail opportunities for luxury brands,
        flagship stores, emerging concepts, and pop-up experiences.
      </p>

    </motion.div>
  );
}

export default Leasing;