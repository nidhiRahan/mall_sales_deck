import luxury1 from "../assets/images/luxury1.jpeg";
import luxury2 from "../assets/images/luxury2.webp";
import luxury3 from "../assets/images/luxury3.webp";
import luxury4 from "../assets/images/luxury4.webp";

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
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-[#E8DCC6] mb-4">
          Luxury Retail
        </p>

        <h2 className="text-5xl font-bold mb-6 text-[#F5EBD7]">
          Where Premium Brands Thrive
        </h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          A destination for luxury, fashion, and elevated consumer experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {luxuryData.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl h-[400px] group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute bottom-0 p-6">
                <h3 className="text-3xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-200">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Luxury;