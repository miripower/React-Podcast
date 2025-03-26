const Members = () => {

    const teamData = [
        {
            id: 1,
            name: "Pol Miret",
            image: "/images/pol.png",
            description: "Desarrollador Full-Stack con experiencia en la creación de aplicaciones web completas. Apasionado por la innovación, el desarrollo de interfaces atractivas y la integración de tecnologías front-end y back-end."
        },
        {
            id: 2,
            name: "Pau Cano",
            image: "/images/pau.png",
            description: "Desarrollador Back-End con experiencia en la construcción de sistemas robustos y escalables. Especializado en crear la lógica que impulsa aplicaciones web, gestionando bases de datos y optimizando el rendimiento del servidor."
        }
    ]

    return (
        <div className="flex flex-col gap-5 items-center py-10 px-50 text-white">
            <h2 className="text-5xl font-bold text-center">
                ¿Quién está detrás <span className="text-blue-500">de los micrófonos?</span>
            </h2>
            <p className="text-neutral-400 mb-5 text-xl text-center">
                Conoce a las mentes creativas detrás de cada episodio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                {teamData.map((member) => (
                    <div key={member.id} className="bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 hover:scale-103 transition-all">
                        <div className="flex justify-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-80 h-80 object-contain"
                            />
                        </div>
                        <div className="p-5 bg-neutral-700 h-full border-t border-neutral-600 sh">
                            <div className="flex items-center gap-3 mb-2">
                                <img src="/images/sonido.png" alt="" className="w-6 h-6"/>
                                <h3 className="text-2xl font-bold">{member.name}</h3>
                            </div>
                            <p className="text-neutral-400">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Members;