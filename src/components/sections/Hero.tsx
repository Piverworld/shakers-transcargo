import { useEffect, useState } from "react";

const slides = [
    {
        background: '/train4.jpg',
        heading: 'SHAKERS TRANSCARGO',
        subheading: 'Triebfahrzeugführer/in  werden – mit Jobgarantie!!',
        description: 'Ihr Einstieg in einen zukunftssicheren Beruf beginnt bei uns: Wir bilden Sie zum qualifizierten Triebfahrzeugführer/in aus und vermitteln Sie direkt an enommierte Bahnunternehmen. Unsere Praxisausbildung mit erfahrenen Ex-Lokführern und starken Branchenpartnern macht\'s möglich – für Ihren erfolgreichen Start auf Schienen!'
    },
    {
        background: '/pexels-souvenirpixels-1598075.jpg',
        heading: 'SHAKERS TRANSCARGO',
        subheading: 'Die Besten wählen nur das Beste!',
        description: 'Höchste Effizienz und reibungsloser Betrieb – damit Ihre Transporte pünktlich und profitabel bleiben.'
    }
];


export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="startseite"
            className="relative min-h-screen">
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 hero-overlay"></div> */}

            {/* Content */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${slide.background})` }}
                >
                    <div className="absolute inset-0 z-10 text-white bg-black max-md:px-4 bg-opacity-40 text-start">
                        <div className="max-w-[1200px] absolute inset-0 content-center mx-auto px-4 max-md:text-center">
                            <p className="mb-4 text-sm font-semibold text-brand-yellow md:text-lg ">{slide.heading}</p>
                            <h1 className="max-w-2xl mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                {slide.subheading}
                            </h1>

                            <p className="max-w-4xl mb-12 font-light text-md md:text-2xl">
                                {slide.description}
                            </p>

                            <div className="flex flex-col justify-start gap-4 sm:flex-row">
                                <a
                                    href="#kontakt"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg btn-primary"
                                >
                                    KONTAKTIERE UNS →
                                </a>
                                <a
                                    href="#leistungen"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg btn-secondary"
                                >
                                    LEISTUNGEN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* Bottom section with career info */}
            <div className="absolute bottom-0 left-0 right-0 z-20 py-6 text-white max-md:-bottom-56 bg-brand-black bg-opacity-80 animate-on-scroll" >
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div className="mb-4 md:mb-0 animate-on-scroll">
                            <h3 className="mb-2 text-xl font-semibold">
                                Werden Sie Teil unseres Teams                            </h3>
                            <p className="max-w-2xl text-gray-300">
                                Wir suchen talentierte und motivierte Menschen, die bei uns arbeiten möchten.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row max-md:w-full">
                            <a href="#career" className="btn-primary animate-on-scroll max-md:text-center">
                                JETZT BEWERBEN
                            </a>
                            <a href="#details" className="btn-secondary animate-on-scroll max-md:text-center">
                                MEHR ERFAHREN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
