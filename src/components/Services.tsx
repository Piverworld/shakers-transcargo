import React from "react";
import {
  Anchor,
  Truck,
  Wrench,
  Package,
  LifeBuoy,
  SatelliteDish,
  Recycle,
  Waves,
  HandPlatter,
} from "lucide-react";
import ship from "/src/images/ship-1.jpg";
import ship2 from "/src/images/ship-2.jpg";
import service11 from "/src/images/service-11.jpg";
import ship4 from "/src/images/ship-4.jpg";
import service8 from "/src/images/service-8.jpeg";
import radio from "/src/images/radio.jpg";
import underwater from "/src/images/service-13.jpg";
import husbandry from "/src/images/service-12.jpg";
import supplies from "/src/images/Packaging_supplies.webp";

const services = [
  {
    img: ship,
    icon: <Anchor className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Ship & Crew Services",
    description:
      "Full ship agency services working closely with shipowners, operators, and charterers, we offer tailor-made solutions to meet the specific vessel related or shipping crew needs of our pool of global clients.",
  },
  {
    img: ship2,
    icon: <Truck className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Freight/Logistics",
    description:
      "OGN prides itself as a fast-growing logistics service provider with global coverage and positioned with the needed expertise.",
  },
  {
    img: service11,
    icon: <Wrench className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Ship Repairs",
    description:
      "OGN offers a full range of ship repairs and construction, using the best materials and most up-to-date systems/equipment. - Welding steel and coatings - Pipe system and pressure test - Prefabrication for shipbuilding.",
  },
  {
    img: ship4,
    icon: <Package className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Marine Supplies",
    description:
      "Engine, Deck, Cabin, Provisions, Ropes [wire & mooring], Nautical Publications, Gasses & Medical supplies.",
  },
  {
    img: service8,
    icon: <LifeBuoy className="w-8 h-8 text-[#FF6F3D]" />,
    title: "LSA & FFA",
    description:
      "Professional underwater diving services for inspections, maintenance, and repairs, ensuring safe and efficient operations.",
  },
  {
    img: radio,
    icon: <SatelliteDish className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Radio & Comms. Equipment Survey",
    description:
      "Comprehensive radio and communication surveys ensuring reliable and compliant maritime communication systems.",
  },
  {
    img: husbandry,
    icon: <Recycle className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Husbandry Matters",
    description:
      "Our comprehensive Husbandry services ensures effective coordination when it comes to crew changes and medical assistance to arranging supplies, repairs, and technical support, our experienced team handles all your vessel's needs with precision and care.",
  },
  {
    img: underwater,
    icon: <Waves className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Underwater Diving Operations",
    description:
      "Our team of certified commercial divers performs thorough hull inspections, cleaning, maintenance and even emergency underwater repairs, while your vessel remains operational, eliminating costly dry-dock time. ",
  },
  {
    img: supplies,
    icon: <HandPlatter className="w-8 h-8 text-[#FF6F3D]" />,
    title: "Store & Provision Supplies",
    description:
      "We ensure your vessel receives all essential provisions and supplies precisely when needed. From fresh provisions and bonded stores to deck supplies, engine parts, and cabin necessities, we source and deliver high-quality materials at competitive prices across our extensive port network.",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 bg-white">
      <div className="container px-4 mx-auto max-width-1140">
        <div className="flex flex-col items-center mb-12 text-center animate-on-scroll">
          <h3 className="mb-4 text-xl font-semibold text-center text-secondary">
            Our Services
          </h3>
          <h2 className="text-4xl font-bold text-center text-primary">
            Solutions Tailored For Your Business Needs
          </h2>
          <p className="max-w-2xl text-xl text-center">
            At OGN Shipping, we provide customized solutions that drive growth,
            streamline operations, and support your long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 transform bg-gray-100 rounded-lg shadow-md hover:scale-105 animate-on-scroll">
              <div className="absolute items-center p-4 m-4 mb-4 bg-white rounded-full shadow-lg">
                {service.icon}
              </div>
              <img
                src={service.img}
                alt="image of service"
                className="services-img"
              />
              <div className="px-8 py-6">
                <h3 className="mb-4 text-2xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
