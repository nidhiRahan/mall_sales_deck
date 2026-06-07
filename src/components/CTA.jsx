import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-black text-white py-28 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Partnership Opportunities
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Partner With North America's
          <br />
          Most Visited Destination
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Connect your brand with millions of annual visitors through
          retail leasing, sponsorship opportunities, immersive brand
          activations, and world-class events.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <Link
            to="/leasing"
            className="px-9 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Lease Space
          </Link>

          <Link
            to="/sponsorship"
            className="px-9 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Become A Sponsor
          </Link>

          <Link
            to="/events"
            className="px-9 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Book An Event
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTA;