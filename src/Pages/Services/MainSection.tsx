import { Link, useParams } from "react-router"
import data from "./Services.json"


const MainSection = () => {

    const params = useParams();
    const service = data.services.find(service => service.name === params.name);

    return (
        <>
            {/* Main Content */}
            <section className="container px-4 py-4 mx-auto">
                <div className="flex flex-col gap-6 lg:flex-row md:gap-8">
                    {/* Sidebar */}
                    <div className="sm:w-full md:w-[25%]">
                        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                            <div className="px-6 py-4 text-white bg-brand-black">
                                <h3 className="text-lg font-semibold">Leistungen</h3>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {data.services.map(service => <Link key={service.name}
                                    to={`/leistungen/${service.name}`}
                                    className={`block px-6 py-4 font-medium text-brand-gray transition-colors truncate text-nowrap ${service.name === params.name ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                                >
                                    {service?.title}
                                </Link>)}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="md:w-[75%] sm:w-full">
                        <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                            <div
                                className="relative h-64 bg-center bg-cover"
                                style={{
                                    backgroundImage:
                                        `url(${service?.heroImage})`,
                                }}
                            >
                                <div className="absolute inset-0 flex items-end bg-gradient-to-r from-blue-900 to-blue-600">
                                    <div className="p-6 text-white">
                                        <h2 className="mb-2 text-2xl font-bold">STARTEN WIR</h2>
                                        <p className="text-lg">GEMEINSAM DURCH!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="prose max-w-none">
                                    <h2 className="mb-6 font-bold text-gray-800 text-md lg:text-2xl">
                                        {service?.title}
                                    </h2>

                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description}
                                    </p>

                                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                        Ihre Aufgaben:
                                    </h3>

                                    <ul className="mb-6 space-y-2 text-gray-700 list-disc list-inside">
                                        <li>
                                            Führung von Güterzügen im regionalen und überregionalen
                                            Verkehr
                                        </li>
                                        <li>
                                            Durchführung von Fahrzeugkontrollen vor Fahrtantritt
                                        </li>
                                        <li>Beachtung der Signale und Verkehrsvorschriften</li>
                                        <li>
                                            Kommunikation mit der Betriebsleitung und anderen
                                            Beteiligten
                                        </li>
                                        <li>
                                            Dokumentation von Fahrten und besonderen Vorkommnissen
                                        </li>
                                    </ul>

                                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                        Das bringen Sie mit:
                                    </h3>

                                    <ul className="mb-8 space-y-2 text-gray-700 list-disc list-inside">
                                        <li>
                                            Abgeschlossene Ausbildung als Triebfahrzeugführer/in oder
                                            Bereitschaft zur Umschulung
                                        </li>
                                        <li>
                                            Gültige Triebfahrzeugführerscheine für den Güterverkehr
                                        </li>
                                        <li>Verantwortungsbewusstsein und Zuverlässigkeit</li>
                                        <li>Körperliche und psychische Belastbarkeit</li>
                                        <li>Bereitschaft zu Schichtarbeit und Wochenendarbeit</li>
                                    </ul>

                                    <div className="p-6 rounded-lg bg-brand-light-gray">
                                        <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                            Interessiert?
                                        </h3>
                                        <p className="mb-4 text-gray-700">
                                            Werden Sie Teil unseres Teams und gestalten Sie mit uns
                                            die Zukunft des Güterverkehrs. Wir freuen uns auf Ihre
                                            Bewerbung!
                                        </p>
                                        <button className="px-8 py-3 font-medium text-white transition-colors rounded bg-brand-yellow hover:bg-red-600">
                                            Jetzt bewerben
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainSection