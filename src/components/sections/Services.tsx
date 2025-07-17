export default function Services() {
    return (
        <section className="relative py-20 max-md:py-32 bg-gray-50">
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
                            Partner for Top Personnel in Railway Transport? Together We Achieve More!
                        </h2>
                        <p className="mb-8 text-xl animate-on-scroll">
                            With our exclusive selection of experienced train drivers, we enhance your operational quality –
                            contact us now!
                        </p>
                        <a href="#contact" className="inline-flex items-center justify-center w-12 h-12 transition-colors bg-white rounded-full text-brand-yellow hover:bg-gray-100 animate-on-scroll">
                            →
                        </a>
                    </div>
                </div>

                {/* Main services content */}
                <div className="mb-16 text-center">
                    <h2 className="mb-6 text-4xl font-bold md:text-5xl text-brand-black animate-on-scroll">
                        Your Competent Partner for Qualified Railway Personnel
                    </h2>
                    <p className="max-w-4xl mx-auto mb-8 text-lg text-gray-600 animate-on-scroll">
                        For years, we have been passionately committed to providing first-class workforce
                        in the railway industry. As an experienced team, we understand the specific challenges
                        and requirements of the logistics and transport sector precisely. We are not just a
                        personnel service provider – we are your strategic partner for sustainable personnel solutions.
                    </p>
                    <a href="#about" className="transition-all duration-300 ease-in-out outline-none btn-primary animate-on-scroll hover:bg-white hover:text-brand-yellow hover:outline-1 hover:outline-brand-yellow ">
                        READ MORE →
                    </a>
                </div>

                {/* Services grid */}
                <div className="grid gap-8 mb-16 md:grid-cols-2">
                    {/* Left: Mission text */}
                    <div>
                        <div className="mb-8">
                            <div className="w-12 h-1 mb-4 bg-brand-yellow animate-on-scroll"></div>
                            <h3 className="mb-4 text-2xl font-bold text-brand-black animate-on-scroll">Our Mission</h3>
                            <p className="leading-relaxed text-gray-600 animate-on-scroll">
                                We connect top talent with leading companies in the logistics industry. Through our
                                unique combination of industry-specific know-how, digital solutions and
                                personal support, we create sustainable value for all stakeholders.
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
                    <h2 className="mb-4 text-4xl font-bold text-brand-black animate-on-scroll">Our Services</h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 animate-on-scroll">
                        As a specialized personnel service provider in railway transport, we offer comprehensive services for your success.
                    </p>
                    <div className="w-16 h-1 mx-auto mt-6 bg-brand-yellow animate-on-scroll"></div>
                </div>

                {/* Service card */}
                <div className="flex flex-col gap-4 lg:flex-row">
                    <div className="max-w-md mx-auto overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg outline-none hover:shadow-xl hover:outline-2 hover:outline-offset-2 hover:outline-brand-yellow animate-on-scroll">
                        <img
                            src="https://ext.same-assets.com/2095656262/879380484.png"
                            alt="Train Driver in Freight Transport"
                            className="object-cover w-full h-48 animate-on-scroll"
                        />
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-bold text-brand-black animate-on-scroll">
                                Train Driver in Freight Transport
                            </h3>
                            <div className="w-full h-0.5 mb-4 bg-brand-gray/10 animate-on-scroll"><div className="w-12 h-0.5 mb-4 bg-brand-yellow"></div></div>
                            <p className="mb-4 text-gray-600 animate-on-scroll">
                                In dynamic freight transport, experienced train drivers are the decisive success factor.
                                As a specialized personnel service provider, we understand the specific...
                            </p>
                            {/* <a href="#details" className="font-semibold transition-colors text-brand-yellow hover:text-red-700 animate-on-scroll">
                            READ MORE →
                        </a> */}
                        </div>
                    </div>
                    <div className="max-w-md mx-auto overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg outline-none hover:shadow-xl hover:outline-2 hover:outline-offset-2 hover:outline-brand-yellow animate-on-scroll">
                        <img
                            src="https://ext.same-assets.com/2095656262/879380484.png"
                            alt="Train Driver in Freight Transport"
                            className="object-cover w-full h-48 animate-on-scroll"
                        />
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-bold text-brand-black animate-on-scroll">
                                Train Driver in Freight Transport
                            </h3>
                            <div className="w-full h-0.5 mb-4 bg-brand-gray/10 animate-on-scroll"><div className="w-12 h-0.5 mb-4 bg-brand-yellow"></div></div>
                            <p className="mb-4 text-gray-600 animate-on-scroll">
                                In dynamic freight transport, experienced train drivers are the decisive success factor.
                                As a specialized personnel service provider, we understand the specific...
                            </p>
                            {/* <a href="#details" className="font-semibold transition-colors text-brand-yellow hover:text-red-700 animate-on-scroll">
                            READ MORE →
                        </a> */}
                        </div>
                    </div>
                    <div className="max-w-md mx-auto overflow-hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg outline-none hover:shadow-xl hover:outline-2 hover:outline-offset-2 hover:outline-brand-yellow animate-on-scroll">
                        <img
                            src="https://ext.same-assets.com/2095656262/879380484.png"
                            alt="Train Driver in Freight Transport"
                            className="object-cover w-full h-48 animate-on-scroll"
                        />
                        <div className="p-6">
                            <h3 className="mb-3 text-xl font-bold text-brand-black animate-on-scroll">
                                Train Driver in Freight Transport
                            </h3>
                            <div className="w-full h-0.5 mb-4 bg-brand-gray/10 animate-on-scroll"><div className="w-12 h-0.5 mb-4 bg-brand-yellow"></div></div>
                            <p className="mb-4 text-gray-600 animate-on-scroll">
                                In dynamic freight transport, experienced train drivers are the decisive success factor.
                                As a specialized personnel service provider, we understand the specific...
                            </p>
                            {/* <a href="#details" className="font-semibold transition-colors text-brand-yellow hover:text-red-700 animate-on-scroll">
                            READ MORE →
                        </a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[url('/architecture.png')] w-full h-full opacity-50 bg-contain bg-no-repeat bg-bottom absolute bottom-0 left-0"></div>
        </section>
    )
}
