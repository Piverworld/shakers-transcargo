import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';


const slides = [
  {
    background: '/train4.jpg',
    heading: 'OGN SHIPPING',
    subheading: 'Reliable Global Shipping Solutions',
    description: 'We are the torch bearers in the shipping industry and in a pole position 24/7 providing easy and flexible services.'
  },
  {
    background: '/trains2.jpg',
    heading: 'OGN Shipping',
    subheading: 'Your Trusted Partner in Seamless Logistics',
    description: 'We are committed to maximising Productivity and Efficiency by delivering uniquely design services to our cherished clients globally.'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ backgroundImage: `url(${slide.background})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 content-center mx-auto max-width-1140 animate-on-scroll">
            <div className="max-w-2xl px-4 text-white">
              <p className="mb-4 text-xl font-semibold text-secondary">{slide.heading}</p>
              <h2 className="mb-6 text-5xl lg:text-6xl font-bold">{slide.subheading}</h2>
              <p className="mb-8 text-xl">{slide.description}</p>
              <div className="flex space-x-4">
                <a href="#get-quote" className="bg-[#FF6F3D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FF8F5D] transition duration-300 animate-fade-in-up animation-delay-900 flex items-center">
                  Get a Quote <ChevronRight className="ml-2" />
                </a>
                <a href="#about" className="bg-white text-[#000066] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 animate-fade-in-up animation-delay-900 flex items-center">
                  Read More <ChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;