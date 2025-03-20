import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';

const socialLinks = [
    { href: "https://www.instagram.com/polmiret/", icon: Instagram },
    { href: "https://x.com/polmiret", icon: Twitter },
    { href: "https://github.com/miripower", icon: Github },
    { href: "https://linkedin.com/pol-miret-vidal", icon: Linkedin },
];

const Footer = () => {
    return (
        <div className="bg-black text-white mt-10 pt-10 pb-5 flex flex-col gap-5 justify-center items-center">
            <div>
                <img src="/images/logo.png" alt="" className="w-60" />
            </div>
            <div className="flex gap-5">
                {socialLinks.map(({ href, icon: Icon }, index) => (
                    <a
                        key={index}
                        href={href}
                        className="bg-white p-2 rounded-full hover:bg-blue-500 text-black hover:text-white transition-all"
                        target="_blank"
                    >
                        <Icon className="h-6 w-6" />
                    </a>
                ))}
            </div>
            <div className="w-[75%] flex justify-between border-t-2 border-neutral-700 pt-4">
                <p className="text-neutral-400">
                    © 2025 Creado por <span className='text-blue-500'>Pol Miret</span>
                </p>
                <div className="flex gap-3 text-neutral-400 items-center">
                    <a href="#" className="hover:text-blue-500 transition-all'>Políticas de privacidad"></a>
                <span>|</span>
                <a href="#" className="hover:text-blue-500 transition-all'>Términos y condiciones"></a>
        </div>
            </div >
        </div >
    );
};

export default Footer;
