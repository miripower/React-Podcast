import { useState } from "react";

const Episodes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEpisode, setCurrentEpisode] = useState<{
        title: string;
        description: string;
        src: string;
    } | null>(null);

    const episodes = [
        { title: "Episodio 1", description: "Descripción del Episodio 1.", src: "episodio_1.mp3" },
        { title: "Episodio 2", description: "Descripción del Episodio 2.", src: "episodio_2.mp3" },
        { title: "Episodio 3", description: "Descripción del Episodio 3.", src: "episodio_3.mp3" },
    ];

    const openModal = (episode: { title: string; description: string; src: string }) => {
        setCurrentEpisode(episode);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentEpisode(null);
    };

    return (
        <div className="flex flex-col gap-5 items-center py-10 px-50 text-white">
            <h2 className="text-5xl font-bold text-center">
                Explora nuestros <span className="text-blue-500">episodios</span>
            </h2>
            <p className="text-neutral-400 mb-5 text-xl text-center">
                Charlas auténticas, debates sin filtros y mucho humor. Descubre cada semana lo que <span className="text-blue-500 font-semibold">Pol</span> y <span className="text-blue-500 font-semibold">Pau</span> tienen preparado para ti.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                {episodes.map((episode, index) => (
                    <div key={index} className="bg-neutral-800 p-5 rounded-xl flex flex-col justify-between h-full">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">{episode.title}</h3>
                            <p className="text-neutral-400">
                                {episode.description}
                            </p>
                        </div>
                        <button
                            className="bg-blue-500 text-white hover:text-blue-500 hover:bg-white px-5 py-2 rounded-xl mt-5 cursor-pointer transition-all"
                            onClick={() => openModal(episode)}
                        >
                            Escuchar episodio
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && currentEpisode && (
                <div
                    className="fixed inset-0 bg-black/80 flex justify-center items-center transition-opacity duration-300 animate-fadeIn"
                    onClick={closeModal}
                >
                    <div
                        className="bg-neutral-800 p-8 rounded-xl text-white w-11/12 max-w-md relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-4">{currentEpisode.title}</h3>
                        <audio controls className="w-full">
                            <source src={`/audio/${currentEpisode.src}`} type="audio/mpeg" />
                            Tu navegador no soporta el elemento de audio.
                        </audio>
                        <button
                            className="mt-5 bg-red-500 text-white hover:bg-white hover:text-red-500 px-5 py-2 rounded-xl cursor-pointer transition-all"
                            onClick={closeModal}
                            aria-label="Cerrar modal"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Episodes;