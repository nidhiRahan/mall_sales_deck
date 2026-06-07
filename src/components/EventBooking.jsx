import concert from "../assets/images/concert.avif";
import launch from "../assets/images/productLaunch.webp";
import corporate from "../assets/images/conferenceEvent.jpeg";
import convention from "../assets/images/expoConventionHall.jpeg";

function EventBooking() {
  const venues = [
    {
      title: "Concerts & Live Entertainment",
      image: concert,
      desc: "Host unforgettable performances and large-scale audience experiences."
    },
    {
      title: "Product Launches",
      image: launch,
      desc: "Create buzz with immersive launch events in front of millions of visitors."
    },
    {
      title: "Corporate Events",
      image: corporate,
      desc: "Premium venues for meetings, conferences, networking events, and executive gatherings."
    },
    {
      title: "Expos & Conventions",
      image: convention,
      desc: "Large-scale exhibition opportunities designed for brands, industries, and trade events."
    }
  ];

  return (
    <section id="events" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Events & Venue Booking
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Transform Moments Into Experiences
        </h2>

        <p className="text-gray-400 max-w-4xl mb-16 text-lg">
          From global product launches and concerts to corporate gatherings and
          large-scale conventions, Mall of America provides premium venues that
          deliver unmatched visibility, engagement, and audience reach.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            "40M+ Visitors",
            "Year-Round Events",
            "Premium Venues",
            "National Exposure",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>

        {/* Venue Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {venues.map((item, index) => (
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

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200 mb-5">
                  {item.desc}
                </p>

                <button className="px-5 py-2 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300">
                  Book Venue
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold mb-6">
            Bring Your Next Event To Life
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you're launching a product, hosting a conference, or creating
            a large-scale public experience, Mall of America provides the stage
            to maximize visibility and engagement.
          </p>

          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300">
            Request Venue Information
          </button>
        </div>

      </div>
    </section>
  );
}

export default EventBooking;