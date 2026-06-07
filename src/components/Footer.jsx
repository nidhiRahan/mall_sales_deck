function Footer() {
  return (
    <footer  id ="footer" className="bg-zinc-950 text-white border-t border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[6px] text-yellow-500 mb-4">
              Mall Of America
            </p>

            <h3 className="text-3xl font-bold mb-4">
              America's Premier Retail &
              Entertainment Destination
            </h3>

            <p className="text-gray-400 max-w-md">
              Connecting global brands, sponsors, event organizers,
              and visitors through world-class retail, dining,
              entertainment, and experiential opportunities.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col md:items-end">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Explore
            </h4>

            <div className="flex flex-wrap gap-4 text-gray-400">
              <a
                href="#retail"
                className="hover:text-yellow-500 transition"
              >
                Retail
              </a>

              <a
                href="#dining"
                className="hover:text-yellow-500 transition"
              >
                Dining
              </a>

              <a
                href="#entertainment"
                className="hover:text-yellow-500 transition"
              >
                Entertainment
              </a>

              <a
                href="#leasing"
                className="hover:text-yellow-500 transition"
              >
                Leasing
              </a>

              <a
                href="#sponsorship"
                className="hover:text-yellow-500 transition"
              >
                Sponsorship
              </a>

              <a
                href="#events"
                className="hover:text-yellow-500 transition"
              >
                Events
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © 2026 Mall Of America Interactive Sales Deck
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Retail • Dining • Entertainment • Sponsorship • Events
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;