import { useEffect, useState } from 'react';
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTab, setSelected] = useState('');
    const location = useLocation()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        location.hash !== '' ?
            setSelected(location.hash.split('#')[1]) : setSelected(location.pathname.split('/')[1])
    }, [location])
    return (
        <header className="relative z-50 bg-white shadow-sm ">
            {/* Top kontakt bar - Hidden on mobile */}
            <div className="hidden py-2 md:block bg-gray-50">
                <div className="flex flex-wrap items-center justify-between mx-auto text-sm text-gray-600 max-w-[1200px]">
                    <div className="flex items-center justify-end w-full gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="w-6 h-6 text-brand-yellow" />
                            <div className="flex flex-col">
                                <span className="font-normal text-gray-600">Kundendienst</span>
                                <a href="tel:+491605074279" className="font-semibold hover:text-brand-yellow">+49 160 507 4279</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-6 h-6 text-brand-yellow" />
                            <div className="flex flex-col">
                                <span className="font-normal text-gray-600">E-Mail</span>
                                <span className="font-semibold">info@shakerstranscargo.de</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-6 h-6 text-brand-yellow" />
                            <div className="flex flex-col">
                                <span className="font-normal text-gray-600">Adresse</span>
                                <span className="font-semibold">
                                    Weidenstraße 17 45701 Herten, Deutschlan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1200px] py-4 mx-auto">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to={'/startseite'}>
                                <img
                                    src="/shakers-transcargo-logo.png"
                                    alt="Shakers Transcargo"
                                    width={200}
                                    height={50}
                                    className="w-auto h-16"
                                />
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="items-center hidden space-x-8 lg:flex">
                        <div className="relative group">
                            <Link
                                to="/startseite"
                                className={`${selectedTab === 'startseite' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Startseite
                            </Link>
                        </div>
                        <div className="relative group">
                            <a href="/startseite#uber-uns"
                                className={`${selectedTab === 'uber-uns' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Über Uns
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="/startseite#leistungen"
                                className={`${selectedTab === 'leistungen' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Leistungen
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="/startseite#karriere"
                                className={`${selectedTab === 'karriere' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Jobs & Karriere
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="/startseite#referenzen"
                                className={`${selectedTab === 'referenzen' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Referenzen
                            </a>
                        </div>
                        <div className="relative group">
                            <a href="/startseite#kontakt"
                                className={`${selectedTab === 'kontakt' ? 'text-brand-yellow border-b-2 border-brand-yellow' : 'text-gray-700'} transition-colors hover:text-brand-yellow`}>
                                Kontakt
                            </a>
                        </div>
                    </nav>
                    <div className="flex items-center gap-2">
                        {/* CTA Button */}
                        <a href='/startseite#kontakt' className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-brand-yellow md:px-6 hover:bg-brand-yellow/60 md:text-base">
                            <span className="hidden sm:inline">JETZT KONTAKT</span>
                            <span className="sm:hidden">KONTAKT</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="p-2 rounded-md lg:hidden text-brand-black hover:text-brand-yellow"
                            onClick={toggleMenu}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div></div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t sm:px-3">
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Startseite
                            </a>
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Über Uns
                            </a>
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Leistungen
                            </a>
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Jobs & Karriere
                            </a>
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Referenzen
                            </a>
                            <a
                                href="#"
                                onClick={toggleMenu}
                                className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Kontakt
                            </a>
                            <div className="px-3 py-2">
                                <a
                                    href="/#kontakt"
                                    onClick={toggleMenu}
                                    className="block w-full text-center btn-primary">
                                    KONTAKT
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>

        // {/* Header */ }
        // <header className="bg-white border-b border-gray-200">
        //     {/* Top kontakt bar - Hidden on mobile */}
        //     <div className="hidden px-4 py-2 md:block bg-gray-50">
        //         <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto text-sm text-gray-600">
        //             <div className="flex items-center gap-6">
        //                 <div className="flex items-center gap-2">
        //                     <Phone className="w-4 h-4 text-brand-red" />
        //                     <span className="font-medium text-gray-800">Kundendienst</span>
        //                     <span className="font-semibold">+49 160 507 42 79</span>
        //                 </div>
        //                 <div className="flex items-center gap-2">
        //                     <Mail className="w-4 h-4 text-brand-red" />
        //                     <span className="font-medium text-gray-800">E-Mail</span>
        //                     <span className="font-semibold">
        //                         kontakt@smfrachtlogistik.de
        //                     </span>
        //                 </div>
        //                 <div className="flex items-center gap-2">
        //                     <MapPin className="w-4 h-4 text-brand-red" />
        //                     <span className="font-medium text-gray-800">Adresse</span>
        //                     <span className="font-semibold">
        //                         Kaiser-Friedrich-Straße 106 47169 Duisburg
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        //     {/* Main header */}
        //     <div className="max-w-6xl px-4 py-4 mx-auto">
        //         <div className="flex items-center justify-between">
        //             {/* Logo */}
        //             <div className="flex items-center">
        //                 <div className="px-3 py-2 text-white rounded-md bg-brand-red">
        //                     <span className="text-xl font-bold">SM</span>
        //                 </div>
        //                 <div className="ml-2">
        //                     <span className="text-xl font-bold text-gray-800">
        //                         FRACHTLOGISTIK
        //                     </span>
        //                 </div>
        //             </div>

        //             {/* Navigation */}
        //             <nav className="items-center hidden space-x-8 lg:flex">
        //                 <Link
        //                     to="/"
        //                     className="text-gray-700 transition-colors hover:text-brand-red"
        //                 >
        //                     Startseite
        //                 </Link>
        //                 <Link
        //                     to="/about"
        //                     className="text-gray-700 transition-colors hover:text-brand-red"
        //                 >
        //                     Über Uns
        //                 </Link>
        //                 <div className="relative group">
        //                     <Link
        //                         to="/services"
        //                         className="pb-1 font-medium border-b-2 text-brand-red border-brand-red"
        //                     >
        //                         Leistungen
        //                     </Link>
        //                 </div>
        //                 <Link
        //                     to="/careers"
        //                     className="text-gray-700 transition-colors hover:text-brand-red"
        //                 >
        //                     Jobs & Karriere
        //                 </Link>
        //                 <Link
        //                     to="/references"
        //                     className="text-gray-700 transition-colors hover:text-brand-red"
        //                 >
        //                     Referenzen
        //                 </Link>
        //                 <Link
        //                     to="/kontakt"
        //                     className="text-gray-700 transition-colors hover:text-brand-red"
        //                 >
        //                     Kontakt
        //                 </Link>
        //             </nav>

        //             {/* CTA Button */}
        //             <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors bg-brand-red md:px-6 hover:bg-red-600 md:text-base">
        //                 <span className="hidden sm:inline">JETZT KONTAKT</span>
        //                 <span className="sm:hidden">KONTAKT</span>
        //                 <ArrowRight className="w-4 h-4" />
        //             </button>
        //         </div>
        //     </div>
        // </header>
    );
}
