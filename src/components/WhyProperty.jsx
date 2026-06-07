import { FaUsers, FaStore, FaMapMarkerAlt, FaGlobeAmericas } from "react-icons/fa";

function WhyProperty() {
  const features = [
    {
      icon: <FaUsers size={40} />,
      title: "40M+ Annual Visitors",
      desc: "One of the most visited retail destinations in the world.",
    },
    {
      icon: <FaStore size={40} />,
      title: "520+ Stores",
      desc: "Home to leading global brands, flagships, and retail innovators.",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Prime Location",
      desc: "Strategically located with exceptional accessibility and regional reach.",
    },
    {
      icon: <FaGlobeAmericas size={40} />,
      title: "Global Destination",
      desc: "Attracting visitors, tourists, and business partners from around the world.",
    },
  ];

  return (
    <section id="why-property" className="bg-[#0a0a0a] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
          Why This Property
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
         North America's Premier Retail & Entertainment Destination
        </h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          More than a shopping center, Mall of America is an entertainment,
          retail, dining, and events ecosystem that attracts millions of
          visitors every year.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#E8DCC6] transition"
            >
              <div className="text-[#E8DCC6] mb-4">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyProperty;