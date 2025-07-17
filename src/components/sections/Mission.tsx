export default function Mission() {
    return (
        <section className="relative py-20 bg-brand-yellow overflow-clip max-md:px-4">
            <div className="bg-[url('/white-wavy-lines.svg')] w-full h-full bg-cover bg-center absolute inset-0"></div>

            <div className="container relative z-20 px-4 mx-auto bg-white max-md:py-4 rounded-2xl ">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left side - Train image */}
                    <div className="order-2 lg:order-1 animate-on-scroll">
                        <img
                            src="https://ext.same-assets.com/2095656262/1691316672.jpeg"
                            alt="Train at Railway Station"
                            className="object-cover w-full rounded-lg shadow-xl h-96"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2">
                        <div className="w-16 h-1 mb-6 bg-brand-yellow"></div>
                        <h2 className="mb-6 text-4xl font-bold text-brand-yellow animate-on-scroll">
                            Our Vision
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-brand-gray animate-on-scroll">
                            Als spezialisierter Personaldienstleister im Schienenverkehr bieten wir umfassende Services für Ihren Erfolg.
                        </p>

                        {/* Service item */}
                        <div className="p-6 mb-8 bg-gray-100 rounded-lg animate-on-scroll">
                            <h3 className="mb-3 text-xl font-bold text-brand-black">
                                Triebfahrzeugführer/in im Güterverkehr
                            </h3>
                            <p className="mb-4 text-gray-600">
                                Im dynamischen Güterverkehr sind erfahrene Triebfahrzeugführer der entscheidende Erfolgsfaktor.
                                Als spezialisierter Personaldienstleister verstehen wir die besonderen...
                            </p>
                            <a href="#details" className="font-semibold transition-colors text-brand-yellow hover:text-red-700">
                                Contact Us →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
