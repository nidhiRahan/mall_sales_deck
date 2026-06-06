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
      desc: "Create buzz with immersive launch events in front of millions."
    },
    {
      title: "Corporate Events",
      image: corporate,
      desc: "Premium venues for meetings, conferences, and executive gatherings."
    },
    {
      title: "Expos & Conventions",
      image: convention,
      desc: "Large-scale exhibition opportunities for brands and industries."
    }
  ];

  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-[#E8DCC6] mb-4">
          Events & Venue Booking
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Transform Moments Into Experiences
        </h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          From global product launches to concerts and conventions,
          our venues provide unmatched visibility and audience engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {venues.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[420px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/55"></div>

              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-200">
                  {item.desc}
                </p>

                <button className="mt-4 px-5 py-2 bg-[#E8DCC6] text-black rounded-full font-semibold">
                  Book Venue
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default EventBooking;