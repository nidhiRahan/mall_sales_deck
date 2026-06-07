import luxury1 from "../assets/images/luxury1.jpg";
import luxury2 from "../assets/images/luxury2.webp";
import luxury3 from "../assets/images/luxury5.jpg";
import luxury4 from "../assets/images/luxury3.webp";

function Luxury() {
  const luxuryData = [
    {
      title: "Premium Brands",
      image: luxury1,
      desc: "Home to globally recognized luxury and lifestyle brands."
    },
    {
      title: "Exclusive Experiences",
      image: luxury2,
      desc: "Curated shopping experiences designed for affluent consumers."
    },
    {
      title: "High-Value Audience",
      image: luxury3,
      desc: "Reach visitors with significant purchasing power."
    },
    {
      title: "Luxury Retail Growth",
      image: luxury4,
      desc: "An environment built for flagship and premium retail success."
    }
  ];

  return (
    <section id="luxury" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Luxury Retail
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Where Luxury Brands Create Lasting Impressions
        </h2>

        <p className="text-gray-400 text-lg max-w-4xl mb-16">
          Mall of America provides an unparalleled environment where luxury brands
          connect with high-value audiences through immersive experiences,
          premium retail destinations, and world-class engagement.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            "40M+ Annual Visitors",
            "Premium Audience",
            "Global Brand Exposure",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

        {/* Luxury Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {luxuryData.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-[450px] border border-zinc-800 hover:border-yellow-500 transition-all duration-500"
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
            Elevate Your Luxury Presence
          </h3>

          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Position your brand alongside world-class retailers and connect with
            affluent consumers seeking premium experiences and exclusive offerings.
          </p>

          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300">
            Explore Luxury Opportunities
          </button>
        </div>

      </div>
    </section>
  );
}

export default Luxury;