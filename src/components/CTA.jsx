import { Link } from "react-router-dom";
function CTA() {
  return (
    <section className="bg-black text-white py-32">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-6xl font-bold mb-8">
          Become Part Of The Experience
        </h2>

        <p className="text-xl text-gray-400 mb-12">
          Join one of the world's most visited retail and entertainment destinations.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
  to="/leasing"
  className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition-all duration-300"
>
  Lease Space
</Link>

          <Link
  to="/sponsorship"
  className="px-8 py-4 border border-white rounded-full"
>
  Become A Sponsor
</Link>

          <Link
  to="/events"
  className="px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
>
  Book An Event
</Link>
        </div>

      </div>
    </section>
  );
}

export default CTA;