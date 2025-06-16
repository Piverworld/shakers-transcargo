import React from 'react';
import { Globe, Shield, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Globe className="w-12 h-12 lg:w-24 lg:h-24 mb-4 lg:mb-0 text-[#FF6F3D]" />,
    title: 'Global Reach, Local Expertise',
    description: 'With a network spanning continents, we provide seamless shipping and logistics solutions tailored to your specific needs, no matter where your business takes you.'
  },
  {
    icon: <Shield className="w-12 h-12 lg:w-24 lg:h-24 mb-4 lg:mb-0 text-[#FF6F3D]" />,
    title: 'Reliability & Trust',
    description: 'We are committed to delivering on our promises. Our track record of reliability and transparency has earned us the trust of clients worldwide.'
  },
  {
    icon: <Clock className="w-12 h-12 lg:w-24 lg:h-24 mb-4 lg:mb-0 text-[#FF6F3D]" />,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock to assist you with any inquiries or challenges, ensuring your cargo is always in safe hands.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container max-width-1140 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="font-bold text-xl text-secondary animate-on-scroll">Our Strengths</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 animate-on-scroll">Why Choose Us?</h2>
            <div className="grid grid-rows-3 gap-8 m24-w-24">
              {reasons.map((reason, index) => (
                <div key={index}
                  className="grid lg:grid-cols-3 p-4 animate-on-scroll max-w-lg">
                  <div className="flex justify-center col-span-1 items-center">
                    {reason.icon}
                  </div>
                  <div className="col-span-2">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{reason.title}</h3>
                    <p className="text-gray-600 ">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-full animate-on-scroll">
            <img src='/trains7.jpg' alt="image of Vessel" className="h-full object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;