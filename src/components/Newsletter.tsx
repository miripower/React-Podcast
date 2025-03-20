import { useState } from "react";

const Newsletter = () => {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowThankYou(true);
        setTimeout(() => setShowThankYou(false), 3000);
    };

    return (
        <div className="flex justify-center py-10 px-50">
            <div className="bg-neutral-800 p-8 rounded-4xl w-full text-white flex gap-5">
                <div className="flex flex-col gap-8 w-[55%]">
                    <h2 className="text-5xl font-bold">
                        Suscríbete a la <span className="text-blue-500">newsletter</span> más auténtica de todo internet
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Y recibe semanalmente avisos de nuevos episodios, contenido exclusivo, ideas random y algún que otro spoiler antes que nadie.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <input
                                type="email"
                                placeholder="Ingresa tu email"
                                required
                                className="p-3 w-full rounded-lg bg-neutral-600 border border-neutral-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="p-3 bg-blue-500 rounded-lg text-lg text-white font-semibold cursor-pointer hover:text-blue-500 hover:bg-white transition-all"
                                aria-label="Suscribirme a la newsletter"
                            >
                                Suscríbete
                            </button>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="politica"
                                name="politica"
                                required
                                className="w-5 h-5 text-blue-500 bg-neutral-600 border border-neutral-500 rounded focus:ring-2 focus:ring-blue-500"
                            />
                            <label htmlFor="politica" className="text-neutral-400">
                                Acepto las <a href="" className="text-blue-500 font-semibold">Políticas de privacidad</a> y los <a href="" className="text-blue-500 font-semibold">Términos y condiciones</a>.
                            </label>
                        </div>
                        {showThankYou && (
                            <p className="text-green-500 font-semibold">
                                ¡Gracias por suscribirte a nuestra newsletter!
                            </p>
                        )}
                    </form>
                </div>
                <div className="flex justify-center items-center w-[45%]">
                    <img src="/images/headphones.png" alt="Auriculares" className="w-80 h-80" />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;