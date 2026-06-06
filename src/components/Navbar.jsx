function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center
backdrop-blur-md bg-black/30 border-b border-white/10">
        <h2 className="font-bold text-xl">Mall Of America</h2>

      <div className="flex gap-8">
        <a
  href="#retail"
  className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
>
  Retail
</a>

<a
  href="#entertainment"
  className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
>
  Entertainment
</a>

<a
  href="#dining"
 className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
>
  Dining
</a>

<a
  href="#events"
  className="hover:text-yellow-400 hover:scale-105 transition-all duration-300"
>
  Events
</a>
      </div>
    </nav>
  );
}

export default Navbar;