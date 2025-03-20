const links = [
  { href: "#newsletter", text: "Newsletter", className: "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500" },
  { href: "#members", text: "Integrantes", className: "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500" },
  { href: "#sponsors", text: "Sponsors", className: "hover:underline hover:text-white hover:-translate-y-4 underline-offset-8 decoration-blue-500" },
  { href: "#episodes", text: "Ver el Podcast", className: "p-3 border-2 border-blue-500 rounded-xl text-blue-500 text-lg font-semibold hover:bg-blue-500 hover:text-white transition-all" }
];

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10 px-50">
        <div>
            <img src="/images/logo.png" alt="" className="w-1/3 h-1/3"/>
        </div>
        <nav>
            <ul className="flex gap-12 text-neutral-400">
                {links.map(({ href, text, className }, index) => (
                    <li key={index}>
                        <a href={href} className={className}>
                            {text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  );
};

export default Header;
