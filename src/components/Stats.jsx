function Stats() {
  const stats = [
    { number: "40M+", label: "Annual Visitors" },
    { number: "520+", label: "Retail Stores" },
    { number: "5.6M", label: "Sq Ft Space" },
    { number: "365", label: "Days of Activity" },
  ];

  return (
    <section className="bg-zinc-950 text-white py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-xl p-8 text-center hover:scale-105 transition"
          >
            <h2 className="text-4xl font-bold">{item.number}</h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;