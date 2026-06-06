function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-4">
          Mall Of America
        </h2>

        <p className="text-gray-400 mb-6">
          The ultimate destination for retail, entertainment,
          dining, sponsorship, and events.
        </p>

        <div className="flex flex-wrap gap-6 text-gray-300">
          <span>Retail Leasing</span>
          <span>Sponsorship</span>
          <span>Events</span>
          <span>Brand Activations</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;