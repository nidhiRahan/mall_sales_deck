import sponsor1 from "../assets/images/sponsor1.jpg";
import sponsor2 from "../assets/images/sponsor2.png";
import sponsor3 from "../assets/images/sponsor3.jpg";
import sponsor4 from "../assets/images/sponsor4.jpg";

function SponsorshipOpportunities() {

  const sponsorships = [
    {
      title: "Brand Activations",
      image: sponsor1,
      desc: "Create immersive experiences that engage millions of visitors."
    },
    {
      title: "Digital Media Network",
      image: sponsor2,
      desc: "Reach audiences through premium digital displays across the property."
    },
    {
      title: "Event Sponsorship",
      image: sponsor3,
      desc: "Align your brand with major events, concerts, and destination experiences."
    },
    {
      title: "Experiential Marketing",
      image: sponsor4,
      desc: "Transform visitors into customers through memorable interactions."
    }
  ];

  return (
    <section className="bg-zinc-950 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[6px] text-[#E8DCC6] mb-4">
          Sponsorship Opportunities
        </p>

        <h2 className="text-5xl font-bold text-[#F5EBD7] mb-6">
          Put Your Brand In Front Of Millions
        </h2>

        <p className="text-gray-400 max-w-3xl mb-16">
          From large-scale activations to digital media and event partnerships,
          Mall of America provides unmatched sponsorship opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {sponsorships.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-[400px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/55"></div>

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

export default SponsorshipOpportunities;