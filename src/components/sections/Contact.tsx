export default function Kontakt() {
    return (
        <section id="kontakt" className="relative py-20 bg-white">
            <div className="w-fit h-fit">
                <img src="/world_snippet.png" alt="World Map Silhouette" width={600} height={800} className="absolute top-72 -left-40" />
            </div>
            <div className="container px-4 mx-auto">

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Left side - kontakt information */}
                    <div className="p-8 text-white rounded-lg bg-brand-yellow">
                        <h2 className="mb-8 text-3xl font-bold">Anschrift</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-4 text-2xl font-bold">Shakers Transcargo</h3>
                                <p className="text-lg">
                                    Kaiser-Friedrich-Straße 106<br />
                                    47169 Duisburg
                                </p>
                            </div>

                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <p className="font-semibold">E-mail:</p>
                                    <a href="mailto:info@shakerstranscargo.de" className="hover:underline">
                                        info@shakerstranscargo.de
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="font-semibold">Telefon:</p>
                                    <a href="tel:+49 1578 3515154" className="hover:underline">
                                        +49 1578 3515154
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <span className="text-2xl">🕒</span>
                                <div>
                                    <p className="mb-2 font-semibold">Öffnungszeiten:</p>
                                    <div className="space-y-1">
                                        <p><strong>Mo-Fr:</strong> 9:00 - 18:00 Uhr</p>
                                        <p><strong>Sa:</strong> 09:00 - 13.00 Uhr</p>
                                        <p className="text-gray-200"><strong>So & Feiertags</strong> GESCHLOSSEN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Map */}
                    <div className="overflow-hidden bg-gray-100 rounded-lg h-96 lg:h-full min-h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.123456789!2d6.751234!3d51.434567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI2JzA0LjQiTiA2wrA0NScwNC40IkU!5e0!3m2!1sde!2sde!4v1234567890123"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SM Frachtlogistik Standort"
                        ></iframe>
                    </div>
                </div>

                {/* Newsletter signup */}
                <div className="p-8 mt-16 bg-gray-100 rounded-lg opacity-85">
                    <h3 className="mb-4 text-2xl font-bold text-brand-black">Newsletter</h3>
                    <p className="mb-6 text-gray-600">
                        Abonnieren Sie jetzt unseren Newsletter, um über aktuelle Informationen und Stellenangebote informiert zu werden.
                    </p>

                    <div className="flex flex-col max-w-md gap-4 sm:flex-row">
                        <input
                            type="email"
                            placeholder="E-Mail-Adresse"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                        />
                        <button className="px-6 py-3 btn-primary">
                            →
                        </button>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                        Haben Sie eine Frage?
                        <a href="#kontakt" className="ml-1 text-brand-yellow hover:underline">
                            Klicken Sie hier
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}
