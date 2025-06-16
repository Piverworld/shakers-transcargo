import React from 'react';
import { Users, DollarSignIcon, WalletCards } from 'lucide-react';

const OurStrentgths: React.FC = () => {
  return (
    <section id="ourExperts" className="py-20 bg-white">
      <div className="container max-width-1140 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 items-center mx-3">
          <div className="grid col-span-2 lg:grid-rows-2">
            <div>
              <div className="mb-6 animate-on-scroll">
                <p className="text-xl font-semibold text-secondary mb-4">Our Experts</p>
                <h2 className="text-3xl lg:text-5xl font-bold text-primary">Crew Change, Visas & CTM Service</h2>
              </div>
              <p className="text-gray-700 mb-4 animate-on-scroll">
                The seamless operation of vessels and their safe navigation across the world’s
                oceans relies heavily on the efficient management of crew changes, visa applications,
                and delivery of Cash to Master (CTM) services. These essential functions are the lifeblood of
                shipping, and at FSS, we specialize in delivering comprehensive solutions for all your crew change,
                visa processing, and CTM needs.
              </p>
            </div>
            <img className="h-80 w-full object-cover rounded-xl" src='/trains5.jpg' alt={"Image of Team"} />
            {/* <div className="h-full flex overflow-hidden animate-on-scroll">
              <img className="h-60 w-fit object-cover rounded-xl" src={teamImg} alt={"Image of Team"} />
            </div> */}
          </div>
          <div>
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-white p-6 animate-on-scroll">
                <Users className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seamless Crew Change</h3>
                <p className="text-gray-600">Ensuring smooth and timely crew changes to keep your operations running at
                  full efficiency.</p>
              </div>
              <div className="bg-white p-6 animate-on-scroll">
                <DollarSignIcon className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Cash To Master (CTM)</h3>
                <p className="text-gray-600">Providing secure, reliable cash delivery services directly to your vessels
                  across global ports.</p>
              </div>
              <div className="bg-white p-6 animate-on-scroll">
                <WalletCards className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visa Processing</h3>
                <p className="text-gray-600">Handling all aspects of visa applications with efficiency and expertise,
                  ensuring timely approvals for your crew's smooth transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStrentgths;