import { motion } from "framer-motion";
function Events() {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="min-h-screen bg-black text-white"
>

      <h1 className="text-6xl font-bold mb-8">
        Events & Venue Opportunities
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mb-10">
        Host concerts, corporate gatherings, product launches,
        and immersive brand activations at one of the most visited
        destinations in North America.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Concerts
          </h2>
          <p className="text-gray-400">
            Large-scale public entertainment experiences.
          </p>
        </div>

        <div className="border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Brand Activations
          </h2>
          <p className="text-gray-400">
            Interactive experiences for consumer engagement.
          </p>
        </div>

        <div className="border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Corporate Events
          </h2>
          <p className="text-gray-400">
            Conferences, networking, and private functions.
          </p>
        </div>

      </div>

    </motion.div>
  );
}

export default Events;