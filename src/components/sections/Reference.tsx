export default function References() {
    return (
        <section id="referenzen" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">

                {/* Section title */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-brand-black">Referenzen</h2>
                    <div className="w-16 h-1 mx-auto bg-brand-yellow"></div>
                </div>

                {/* Partner logos grid */}
                <div className="grid items-center max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4 justify-items-center">

                    {/* KombiRail Europe */}
                    <div className="flex items-center justify-center w-full h-24 p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                        <img
                            src="/partners/Kombirail-logo.png"
                            alt="KombiRail Europe"
                            className="object-contain max-w-full max-h-16"
                        />
                    </div>

                    {/* HLG Güterbahn */}
                    <div className="flex items-center justify-center w-full h-24 p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                        <img
                            src="/partners/hlg_logo.png"
                            alt="HLG Güterbahn"
                            className="object-contain max-w-full max-h-16"
                        />
                    </div>

                    <div className="flex items-center justify-center w-full h-24 p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                        <img
                            src="/partners/qasrail.png"
                            alt="Qasrail"
                            className="object-contain max-w-full max-h-16"
                        />
                    </div>

                    <div className="flex items-center justify-center w-full h-24 p-6 transition-shadow bg-white rounded-lg shadow-sm hover:shadow-md">
                        <img
                            src="/partners/rail-flex.png"
                            alt="Railflex"
                            className="object-contain max-w-full max-h-16"
                        />
                    </div>

                </div>

                {/* Trust statement */}
                <div className="mt-16 text-center">
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        Vertrauen Sie auf unsere langjährige Erfahrung und unser starkes Netzwerk in der Bahntransportbranche.
                        Unsere Partner schätzen unsere Zuverlässigkeit und Qualität.
                    </p>
                </div>
            </div>
        </section>
    )
}
