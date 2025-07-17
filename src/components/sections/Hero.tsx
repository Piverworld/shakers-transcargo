export default function Hero() {
    return (
        <section
            className="relative flex items-center justify-start min-h-screen bg-center bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url('https://ext.same-assets.com/2095656262/1925373805.jpeg')`
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 hero-overlay"></div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-white text-start">
                <div className="max-w-4xl">
                    <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                        The Best<br />
                        Choose Only the Best!
                    </h1>

                    <p className="max-w-3xl mb-12 text-xl font-light md:text-2xl">
                        Maximum efficiency and smooth operations – so your transports remain punctual and profitable.
                    </p>

                    <div className="flex flex-col justify-start gap-4 sm:flex-row">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg btn-primary"
                        >
                            CONTACT NOW →
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg btn-secondary"
                        >
                            SERVICES
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom section with career info */}
            <div className="absolute bottom-0 left-0 right-0 z-20 py-6 text-white max-md:-bottom-56 bg-brand-black bg-opacity-80 animate-on-scroll">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 md:mb-0 animate-on-scroll">
                            <h3 className="mb-2 text-xl font-semibold">
                                Become a Train Driver with Job Guarantee!
                            </h3>
                            <p className="max-w-2xl text-gray-300">
                                Your entry into a future-proof career starts with us: We train you to become a qualified
                                train driver and place you directly with renowned railway companies.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row max-md:w-full">
                            <a href="#career" className="btn-primary animate-on-scroll max-md:text-center">
                                APPLY NOW
                            </a>
                            <a href="#details" className="btn-secondary animate-on-scroll max-md:text-center">
                                DISCOVER DETAILS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
