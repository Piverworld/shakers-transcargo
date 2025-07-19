export default function Footer() {
    return (
        <footer className="text-white bg-brand-black">
            <div className="container px-4 py-16 mx-auto">

                {/* Main footer content */}
                <div className="grid gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Company info */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <img
                                src="/shakers-transcargo-logo white.png"
                                alt="Shakers Transcargo"
                                className="w-auto h-32"
                            />
                        </div>
                        <p className="max-w-md mb-6 text-gray-300">
                            Ihr Partner für erstklassiges Bahnpersonal von Lokführer bis zu Logistikspezialisten, immer passgenau und zuverlässig.
                        </p>

                        {/* Social icons */}
                        {/* <div className="flex space-x-4">
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-700 rounded-full hover:bg-brand-red">
                                <span className="text-sm font-bold">f</span>
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-700 rounded-full hover:bg-brand-red">
                                <span className="text-sm font-bold">t</span>
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-700 rounded-full hover:bg-brand-red">
                                <span className="text-sm font-bold">in</span>
                            </a>
                            <a href="#" className="flex items-center justify-center w-10 h-10 transition-colors bg-gray-700 rounded-full hover:bg-brand-red">
                                <span className="text-sm font-bold">ig</span>
                            </a>
                        </div> */}
                    </div>

                    {/* kontakt info */}
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Firmenkontakt</h3>
                        <div className="space-y-4 text-gray-300">
                            <div className="flex items-center space-x-3">
                                <span>📞</span>
                                <div>
                                    <p>+49 160 507 42 79</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span>📧</span>
                                <a href="mailto:info@shakerstranscargo.de" className="hover:text-white">
                                    info@shakerstranscargo.de
                                </a>
                            </div>

                            <div className="flex items-start space-x-3">
                                <span>📍</span>
                                <div>
                                    <p>Weidenstraße 17,</p>
                                    <p> 45701 Herten,</p>
                                    <p>Deutschland</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <span>🌐</span>
                                <a href="http://www.shakerstranscargo.de" className="hover:text-white">
                                    www.shakerstranscargo.de
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Menu */}
                    <div>
                        <h3 className="mb-6 text-xl font-bold">Menu</h3>
                        <nav className="space-y-3">
                            <a href="/" className="block text-gray-300 transition-colors hover:text-white">
                                Startseite
                            </a>
                            <a href="#ueber-uns" className="block text-gray-300 transition-colors hover:text-white">
                                Über Uns
                            </a>
                            <a href="#leistungen" className="block text-gray-300 transition-colors hover:text-white">
                                Leistungen
                            </a>
                            <a href="#karriere" className="block text-gray-300 transition-colors hover:text-white">
                                Jobs & Karriere
                            </a>
                            <a href="#referenzen" className="block text-gray-300 transition-colors hover:text-white">
                                Referenzen
                            </a>
                            <a href="#kontakt" className="block text-gray-300 transition-colors hover:text-white">
                                Kontakt
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Bottom footer */}
                <div className="pt-8 border-t border-gray-700">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <p className="mb-4 text-sm text-gray-400 md:mb-0">
                            © 2025 Shakers Transcargo | Website entworfen von
                            <a href="https://www.piverworld.com" target="_blank" className="ml-1 text-brand-red hover:text-red-400">Piver World</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
