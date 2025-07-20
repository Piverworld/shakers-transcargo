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
                                    className={`block px-6 py-4 font-medium text-brand-gray transition-colors truncate text-nowrap ${service.name === params.name ? 'bg-brand-yellow text-white' : 'hover:bg-gray-100'}`}
                                >
                                    <p className="truncate">{service?.title}</p>
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
                                        `url(${service?.serviceImage})`,
                                }}
                            >
                                <div className="absolute inset-0 flex items-end bg-brand-black" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                    <div className="p-6 text-white">
                                        <h2 className="mb-2 text-2xl font-bold">STARTEN WIR</h2>
                                        <p className="text-lg">GEMEINSAM DURCH!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="prose max-w-none">
                                    <h2 className="mb-6 text-lg font-bold text-gray-800 lg:text-xl">
                                        {service?.title}
                                    </h2>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description1}
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description2}
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description3}
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description4}
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description5}
                                    </p>
                                    <p className="mb-6 leading-relaxed text-gray-700">
                                        {service?.description6}
                                    </p>
                                </div>

                                <div className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                                        Interessiert?
                                    </h3>
                                    <p className="mb-4 text-gray-700">
                                        Werden Sie Teil unseres Teams und gestalten Sie mit uns
                                        die Zukunft des Güterverkehrs. Wir freuen uns auf Ihre
                                        Bewerbung!
                                    </p>
                                    <a href="/startseite#kontakt" className="px-8 py-3 font-medium text-white transition-colors rounded bg-brand-yellow hover:bg-brand-yellow/80">
                                        Jetzt bewerben
                                    </a>
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