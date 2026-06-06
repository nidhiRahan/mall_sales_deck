import luxury from "../assets/images/leasingLuxury.jpeg";
import fashion from "../assets/images/leasingFashion.jpeg";
import food from "../assets/images/leasingFood.webp";
import popup from "../assets/images/leasingPopup.webp";

function LeasingOpportunities() {

  const opportunities = [
    {
      title: "Luxury Retail",
      image: luxury,
      desc: "Flagship opportunities for premium and luxury brands."
    },
    {
      title: "Fashion Retail",
      image: fashion,
      desc: "Access millions of fashion-conscious shoppers."
    },
    {
      title: "Food & Beverage",
      image: food,
      desc: "Position your brand in a destination dining ecosystem."
    },
    {
      title: "Pop-Up Experiences",
      image: popup,
      desc: "Launch products and test concepts in high-traffic environments."
    }
  ];

  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-[#E8DCC6] mb-4">
          Leasing Opportunities
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Spaces Designed For Growth
        </h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          Flexible leasing solutions tailored for global brands,
          emerging concepts, restaurants, and experiential retail.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {opportunities.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[400px]"
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

export default LeasingOpportunities;