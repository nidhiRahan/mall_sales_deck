import sponsor1 from "../assets/images/sponsor1.jpg";
import sponsor2 from "../assets/images/sponsor2.png";
import sponsor3 from "../assets/images/sponsor3.jpg";
import sponsor4 from "../assets/images/sponsor4.jpg";

function SponsorshipOpportunities() {
  const sponsorships = [
    {
      title: "Brand Activations",
      image: sponsor1,
      desc: "Create immersive experiences that engage millions of visitors and build lasting brand connections."
    },
    {
      title: "Digital Media Network",
      image: sponsor2,
      desc: "Reach audiences through premium digital displays strategically positioned across the property."
    },
    {
      title: "Event Sponsorship",
      image: sponsor3,
      desc: "Align your brand with major events, concerts, seasonal celebrations, and destination experiences."
    },
    {
      title: "Experiential Marketing",
      image: sponsor4,
      desc: "Transform visitors into customers through memorable and interactive brand experiences."
    }
  ];

  return (
    <section id="sponsorship" className="bg-zinc-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Sponsorship Opportunities
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Connect Your Brand With Millions Of Consumers
        </h2>

        <p className="text-gray-400 max-w-4xl mb-16 text-lg">
          From immersive brand activations to high-impact digital media and event
          partnerships, Mall of America offers sponsors unparalleled access to
          millions of engaged visitors every year.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            "40M+ Visitors",
            "365 Days of Engagement",
            "Premium Brand Exposure",
            "National Reach",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-bold text-lg">{item}</h3>
            </div>
          ))}
        </div>

        {/* Sponsorship Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {sponsorships.map((item, index) => (
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

                <p className="text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-4xl font-bold mb-6">
            Amplify Your Brand Presence
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Partner with Mall of America to create meaningful connections,
            memorable experiences, and measurable brand impact.
          </p>

          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Sponsorship Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}

export default SponsorshipOpportunities;