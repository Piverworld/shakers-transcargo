import React from "react";
import { Globe, Users, Phone, MessageCircleMore } from "lucide-react";

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
                <h2 className="mb-4 text-xl font-semibold text-secondary">
                  About Us
                </h2>
                <p className="text-4xl font-bold lg:text-6xl text-primary">
                  Quick Transport and Logistics Solutions
                </p>
              </div>
              <p className="mb-4 text-gray-700">
                With our management office in Lome, Togo and operations in the
                Port of LOME, OGN Shipping is now established as fully
                accredited Shipping Agents. We have access to international ship
                owners calling regularly to the Port of Lome. OGN operates from
                a bonded warehouse allowing ease of access to the Port for
                faster mobilization of equipment for all underwater services.
              </p>
              <p className="mb-6 text-gray-700">
                Please contact OGN for any marine supplies. Our Agency team will
                be on hand 24/7 to assist.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 animate-on-scroll">
              <div className="p-6 transition duration-300 transform bg-white rounded-lg hover:scale-105">
                <Globe className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Global Network</h3>
                <p className="text-gray-600">
                  Leveraging our extensive network of partners and agents, we
                  ensure efficient and reliable shipping solutions across major
                  ports worldwide.
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
            <div className="mt-24 lg:my-48 animate-on-scroll">
              <h2 className="mb-4 text-xl font-semibold text-secondary">
                About OGN Shipping
              </h2>
              <p className="mb-2 text-4xl font-bold lg:text-5xl text-primary">
                Your Trusted Partner for Global Maritime Solutions
              </p>
              <p className="mb-8 text-gray-700">
                OGN Shipping is a leading provider of comprehensive maritime
                services, dedicated to exceeding client expectations with
                tailored solutions, a global network, and unwavering commitment
                to excellence.
              </p>
              <p className="mb-8 text-gray-700">
                We currently operate in more than 7 African countries; Ghana,
                Togo, Benin, Nigeria, Senegal, Cameroon, Equatorial Guinea and
                Cote D'Ivoire.
              </p>
              <div className="bg-[#000066] text-white px-6 py-4 rounded-lg inline-block">
                <h3 className="mb-2 text-xl font-semibold">
                  Contact Our Experts
                </h3>
                <span className="flex flex-col items-start gap-4">
                  <p>Call us</p>
                  <p className="inline-flex items-center">
                    <Phone className="mr-2" />
                    <p>
                      <a
                        href="tel:+22892774686"
                        className="no-underline">
                        +228 92 77 4686
                      </a>
                      /&nbsp;
                      <a
                        href="tel:+233550945019"
                        className="no-underline">
                        +233 55 094 5019
                      </a>
                    </p>{" "}
                  </p>
                  <p>or Send us a message</p>
                  <p className="inline-flex items-center">
                    <MessageCircleMore className="mr-2" />
                    <a
                      href="https://wa.me/4915731701986"
                      className="text-white hover:cursor-pointer">
                      +49 1573 1701986
                    </a>
                  </p>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mb-24 sm:grid-cols-2">
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
