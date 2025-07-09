import React from "react";
import { Globe, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto max-width-1140">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex h-full overflow-hidden animate-on-scroll">
            <img
              className="object-cover h-100 rounded-xl"
              src='/trins6.jpg'
              alt={"Image of Ship"}
            />
          </div>
          <div>
            <div className="animate-on-scroll">
              <div className="mb-6 ">
                <p className="mb-4 text-xl font-semibold text-secondary">
                  About Us
                </p>
                <h2 className="text-4xl font-bold lg:text-6xl text-primary">
                  Your Competent Partner for Qualified Railway Staff
                </h2>
              </div>
              <p className="mb-4 text-gray-700">
                For years Shakers Transcargo have been passionate about providing a world-class workforce in the rail industry. As an experienced team, Shakers Transcargo understands precisely the specific challenges and requirements of the logistics and transportation industry. We are not just a personnel service provider – we are your strategic partner for sustainable personnel solutions.
              </p>
              <p className="mb-6 text-gray-700">
                Please contact Shakers Transcargo for all railway logistics. Shakers Transcargo team will
                be on hand 24/7 to assist.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-on-scroll">
              <div className="p-6 transition duration-300 transform bg-white rounded-lg hover:scale-105">
                <Globe className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Industry Experts</h3>
                <p className="text-gray-600">
                  Shakers Transcargo understand the challenges of modern supply chains and develop intelligent concepts that optimize time, cost and resources. Our holistic approach guarantees smooth rail processes.
                </p>
              </div>
              <div className="p-6 transition duration-300 transform bg-white rounded-lg hover:scale-105">
                <Users className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">
                  Customer Satisfaction
                </h3>
                <p className="text-gray-600">
                  We prioritize building strong relationships with our clients,
                  understanding their unique requirements, and providing
                  personalized services that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-24 lg:my-24 animate-on-scroll">
              <h2 className="mb-4 text-xl font-semibold text-secondary">
                About Shakers Transcargo
              </h2>
              <p className="mb-2 text-4xl font-bold lg:text-5xl text-primary">
                Providing Innovative Logistics Solutions
              </p>
              <p className="mb-8 text-gray-700">
                Shakers Transcargo have been combining competence with a passion for the transport sector for years. Our company stands for tailor-made solutions that go beyond traditional freight transport, i.e from planning to delivery.
              </p>
              <p className="mb-8 text-gray-700">
                What sets us apart? Our Unique combination of state-of-the-art technology, experienced specialists and a close-knit European partner network that leads even the most complex transport projects to success.
              </p>

            </div>
            <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2">
              <div className="p-8 text-center bg-white rounded-md shadow-md animate-on-scroll">
                <h3 className="text-4xl font-bold text-[#FF6F3D] mb-2">7+</h3>
                <p className="text-gray-600">African Countries</p>
              </div>
              <div className="content-center row-span-2">
                <div className="p-8 text-center bg-white rounded-md shadow-md animate-on-scroll">
                  <h3 className="text-4xl font-bold text-[#FF6F3D] mb-2">
                    50+
                  </h3>
                  <p className="text-gray-600">Clients Served</p>
                </div>
              </div>
              <div className="p-8 text-center bg-white rounded-md shadow-md animate-on-scroll">
                <h3 className="text-4xl font-bold text-[#FF6F3D] mb-2">30+</h3>
                <p className="text-gray-600">Dedicated Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
