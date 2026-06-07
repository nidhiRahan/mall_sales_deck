function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 md:px-12 py-5 flex justify-between items-center backdrop-blur-xl bg-black/50 border-b border-white/10">

      {/* Logo */}
      <div>
        <h2 className="font-bold text-xl md:text-2xl tracking-wider text-white">
          MALL OF AMERICA
        </h2>

        <p className="text-[10px] md:text-xs tracking-[4px] text-gray-400 uppercase">
          Interactive Sales Deck
        </p>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-3 rounded-full border border-white/10">

        <a
          href="#why-property"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Overview
        </a>

        <a
          href="#retail"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Retail
        </a>

        <a
          href="#dining"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Dining
        </a>

        <a
          href="#entertainment"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Entertainment
        </a>

        <a
          href="#events"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Events
        </a>

        <a
          href="#sponsorship"
          className="text-gray-300 hover:text-yellow-400 transition duration-300"
        >
          Sponsors
        </a>
      </div>

      {/* CTA Button */}
      <a
        href="#cta"
        className="bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
      >
        Contact Us
      </a>

    </nav>
  );
}

export default Navbar;