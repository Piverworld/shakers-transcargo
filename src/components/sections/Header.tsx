import { useState } from 'react'
import { Menu, X } from 'lucide-react'


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <header className="relative z-50 bg-white shadow-sm">
            <div className="container px-4 mx-auto">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/shakers-transcargo-logo.png"
                            alt="SM Frachtlogistik"
                            width={200}
                            height={50}
                            className="w-auto h-16"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="items-center hidden space-x-8 lg:flex">
                        <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                            Home
                        </a>
                        <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                            About Us
                        </a>
                        <div className="relative group">
                            <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                                Services
                            </a>
                        </div>
                        <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                            Jobs & Careers
                        </a>
                        <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                            References
                        </a>
                        <a href="#" className="font-medium transition-colors text-brand-black hover:text-brand-yellow">
                            Contact
                        </a>
                    </nav>

                    {/* Contact Button - Desktop */}
                    <div className="hidden lg:block">
                        <a href="#contact" className="btn-primary">
                            Contact Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="p-2 rounded-md lg:hidden text-brand-black hover:text-brand-yellow"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t sm:px-3">
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Home
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                About Us
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Services
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Jobs & Careers
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                References
                            </a>
                            <a href="#" className="block px-3 py-2 font-medium text-brand-black hover:text-brand-yellow">
                                Contact
                            </a>
                            <div className="px-3 py-2">
                                <a href="#contact" className="block w-full text-center btn-primary">
                                    Contact Now
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
