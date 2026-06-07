import luxury from "../assets/images/leasingLuxury.jpeg";
import fashion from "../assets/images/leasingFashion.jpeg";
import food from "../assets/images/leasingFood.webp";
import popup from "../assets/images/leasingPopup.webp";
import { Link } from "react-router-dom";


function LeasingOpportunities() {
const opportunities = [
{
title: "Luxury Retail",
image: luxury,
desc: "Flagship opportunities for premium and luxury brands seeking high-value audiences."
},
{
title: "Fashion Retail",
image: fashion,
desc: "Connect with millions of fashion-conscious shoppers throughout the year."
},
{
title: "Food & Beverage",
image: food,
desc: "Position your brand within a thriving dining and lifestyle destination."
},
{
title: "Pop-Up Experiences",
image: popup,
desc: "Launch products, test concepts, and create buzz in high-traffic environments."
}
];

return ( <section id="leasing" className="bg-black text-white py-24"> <div className="max-w-7xl mx-auto px-6">


    <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
      Leasing Opportunities
    </p>

    <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
      Spaces Designed For Growth
    </h2>

    <p className="text-gray-400 text-lg max-w-4xl mb-16">
      Flexible leasing solutions tailored for global brands, emerging retail
      concepts, restaurants, entertainment operators, and experiential businesses
      looking to thrive in one of North America's most visited destinations.
    </p>

    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-6 mb-16">
      {[
        "500+ Retail Spaces",
        "40M+ Annual Visitors",
        "Premium Locations",
        "Flexible Leasing",
      ].map((item, index) => (
        <div
          key={index}
          className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 text-center hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-bold text-lg">{item}</h3>
        </div>
      ))}
    </div>

    {/* Leasing Cards */}
    <div className="grid md:grid-cols-2 gap-8">
      {opportunities.map((item, index) => (
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
        Find The Perfect Space For Your Brand
      </h3>

      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Whether you're launching a flagship store, testing a new concept,
        or expanding your presence, Mall of America offers the visibility,
        traffic, and audience needed for success.
      </p>

     <Link
  to="/leasing"
  className="px-8 py-4 bg-yellow-500 text-black rounded-full font-semibold hover:scale-105 transition duration-300"
>
  Explore Leasing Opportunities
</Link>
    </div>

  </div>
</section>


);
}

export default LeasingOpportunities;
