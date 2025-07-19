import data from "../../Pages/Services/Services.json"

export default function Services() {

    return (
        <section id="leistungen" className="relative py-20 max-md:py-32 bg-gray-50">
            <div className="container relative z-20 px-4 mx-auto">

                {/* Job opportunities banner */}
                {/* <div className="px-8 py-6 mb-16 text-center text-white bg-gray-800 rounded-lg">
                    <p className="text-lg">
                        <span className="font-semibold">Join Our Team</span> –
                        We are looking for talented and motivated people who want to work with us.
                        <a href="#jobs" className="ml-2 text-blue-400 underline hover:text-blue-300">
                            Available Positions
                        </a>
                    </p>
                </div> */}

                {/* Partner section */}
                <div className="px-8 py-16 mb-16 text-white rounded-lg max-md:mt-32 bg-brand-yellow">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl animate-on-scroll">
                            Partner für Top-Personal in der Bahntransport? Zusammen erreichen wir mehr!
                        </h2>
                        <p className="mb-8 text-xl animate-on-scroll">
                            Mit unserer exklusiven Auswahl erfahrener Triebfahrzeugführer/innen verbessern wir Ihre Betriebsqualität –
                            kontaktieren Sie uns jetzt!
                        </p>
                        <a href="#kontakt" className="inline-flex items-center justify-center w-12 h-12 transition-colors bg-white rounded-full text-brand-yellow hover:bg-gray-100 animate-on-scroll">
                            →
                        </a>
                    </div>
                </div>

                {/* Main services content */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-black animate-on-scroll">
                        Ihr kompetenter Partner für qualifiziertes Personal in der Bahntransport?
                    </h2>
                    <p className="max-w-4xl mx-auto mb-8 text-lg text-gray-600 animate-on-scroll">
                        Seit Jahren sind wir mit Leidenschaft dafür verpflichtet, ein erstklassiges Personal in der Bahntransportbranche zu vermitteln. Als erfahrenes Team verstehen wir die spezifischen Herausforderungen und Anforderungen des Logistik- und Transportsektors genau. Wir sind nicht nur ein Personaldienstleister – wir sind Ihr strategischer Partner für nachhaltige Personal-Lösungen.
                    </p>
                    <a href="#about" className="transition-all duration-300 ease-in-out outline-none btn-primary animate-on-scroll hover:bg-white hover:text-brand-yellow hover:outline-1 hover:outline-brand-yellow ">
                        MEHR ERFAHREN →
                    </a>
                </div>

                {/* Services grid */}
                <div id="uber-uns" className="grid gap-8 mb-16 md:grid-cols-2">
                    {/* Left: Mission text */}
                    <div>
                        <div className="mb-8 max-md:text-center">
                            <div className="w-12 h-1 mx-0 mb-4 bg-brand-yellow animate-on-scroll max-md:mx-auto"></div>
                            <h3 className="mb-4 text-2xl font-bold text-brand-black animate-on-scroll">Unsere Mission</h3>
                            <p className="leading-relaxed text-gray-600 animate-on-scroll">
                                Wir verbinden Top-Talente mit führenden Unternehmen in der Logistikbranche. Durch unsere einzigartige Kombination aus branchenspezifischem Wissen, digitalen Lösungen und persönlicher Unterstützung schaffen wir nachhaltigen Wert für alle Beteiligten.
                            </p>
                        </div>
                    </div>

                    {/* Right: Office image */}
                    <div className="relative z-20">
                        <img
                            src="/shakers-transcargo-logo.png"
                            alt="Shakers Transcargo Logistics"
                            className="relative z-20 object-cover w-full h-64 rounded-lg shadow-lg animate-on-scroll"
                        />
                    </div>
                </div>

                {/* Services section */}
                <div className="mb-12 text-center" id="services">
                    <h2 className="mb-4 text-4xl font-bold text-brand-black animate-on-scroll">Unsere Dienstleistungen</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 animate-on-scroll">
                        Als spezialisiertes Personaldienstleister in der Bahntransportbranche bieten wir Ihnen umfassende Dienstleistungen für Ihren Erfolg.
                    </p>
                    <div className="w-16 h-1 mx-auto mt-6 bg-brand-yellow animate-on-scroll"></div>
                </div>

                {/* Service card */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {data.services.map((service) => (
                        <div key={service.name} className="overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg outline-none hover:shadow-xl hover:outline-2 hover:outline-offset-2 hover:outline-brand-yellow animate-on-scroll">
                            <img
                                src={service.serviceImage}
                                alt={service.serviceImageAlt}
                                className="object-cover w-full h-48 animate-on-scroll"
                            />
                            <div className="p-6">
                                <h3 className="mb-3 text-xl font-bold text-brand-black animate-on-scroll">
                                    {service.title}
                                </h3>
                                <div className="w-full h-0.5 mb-4 bg-brand-gray/10 animate-on-scroll"><div className="w-12 h-0.5 mb-4 bg-brand-yellow"></div></div>
                                <p className="mb-4 text-gray-600 animate-on-scroll">
                                    {service.description}
                                </p>
                                <a href={`/leistungen/${service.name}`} className="font-semibold transition-colors text-brand-yellow hover:text-red-700 animate-on-scroll">
                                    MEHR ERFAHREN →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[url('/architecture.png')] w-full h-full opacity-50 bg-contain bg-no-repeat bg-bottom absolute bottom-0 left-0"></div>
        </section>
    )
}
