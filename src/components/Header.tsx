import { useState, useEffect } from "react";

const links = [
  {
    href: "#newsletter",
    text: "Newsletter",
    className:
      "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500 transition-transform duration-300",
  },
  {
    href: "#members",
    text: "Integrantes",
    className:
      "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500 transition-transform duration-300",
  },
  {
    href: "#sponsors",
    text: "Sponsors",
    className:
      "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500 transition-transform duration-300",
  },
  {
    href: "#episodes",
    text: "Ver el Podcast",
    className:
      "p-3 border-2 border-blue-500 rounded-xl text-blue-500 text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menú si haces scroll
  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex justify-between items-center py-8 px-5 md:px-10 lg:px-20 transition-colors">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/images/logo.png" alt="Logo" className="w-30 md:w-40" />
      </div>

      {/* Navigation Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-neutral-400">
          {links.map(({ href, text, className }, index) => (
            <li key={index}>
              <a href={href} className={className}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="block md:hidden text-neutral-400 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-900 text-white shadow-lg z-50 md:hidden">
          <ul className="flex flex-col gap-4 p-5">
            {links.map(({ href, text, className }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className={`${className} block`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;