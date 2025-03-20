const Sponsors = () => {

    const sponsorData = [
        {
            id: 1,
            name: "Monlau",
            description: "Monlau se destaca por sus programas educativos innovadores, que incluyen formación teórica y práctica, así como colaboraciones con empresas para que los estudiantes adquieran experiencia profesional durante su formación.",
            logo: "/images/monlau.png",
            link: "https://www.monlau.com/"
        },
        {
            id: 2,
            name: "React",
            description: "React es una biblioteca de JavaScript desarrollada por Facebook (ahora Meta) que se utiliza para construir interfaces de usuario (UI) interactivas y dinámicas, principalmente en aplicaciones web.",
            logo: "/images/react.png",
            link: "https://reactjs.org/"
        },
        {
            id: 3,
            name: "Tailwind CSS",
            description: "Tailwind CSS es un framework de CSS de utilidad primero (utility-first) que permite crear diseños web de manera rápida y flexible. Se centra en proporcionar clases de utilidad pequeñas y reutilizables.",
            logo: "/images/tailwind.png",
            link: "https://tailwindcss.com/"
        }
    ]

    return (
        <div className="flex flex-col gap-5 items-center py-10 px-50 text-white">
            <h2 className="text-5xl font-bold text-center">
                Conoce a nuestros <span className="text-blue-500">patrocinadores</span>
            </h2>
            <p className="text-neutral-400 mb-5 text-lg text-center">
                Un agradecimiento especial a nuestros patrocinadores, que nos apoyan para que este podcast pueda compartirse todas las semanas.
                Gracias a su colaboración, podemos seguir creando contenido de calidad para ti.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {sponsorData.map((sponsor) => (
                    <div key={sponsor.id} className="bg-neutral-800 rounded-xl p-6 flex flex-col items-center text-center hover:bg-neutral-700 transition-colors">
                        <div className="h-24 flex items-center justify-center mb-4">
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                width={150}
                                height={60}
                                className="max-h-full w-auto"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{sponsor.name}</h3>
                        <p className="text-neutral-400 text mb-4 flex-grow">{sponsor.description}</p>
                        <a
                            href={sponsor.link}
                            className=" bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-4 py-2 rounded-xl transition-all"
                            target="_blank"
                        >
                            Saber más
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsors;