import React from 'react';
import { Users, DollarSignIcon, WalletCards } from 'lucide-react';

const OurStrentgths: React.FC = () => {
  return (
    <section id="ourExperts" className="py-20 bg-white">
      <div className="container mx-auto max-width-1140">
        <div className="grid items-center grid-cols-1 mx-3 lg:grid-cols-3 lg:gap-6">
          <div className="grid col-span-2 lg:grid-rows-2">
            <div>
              <div className="mb-6 animate-on-scroll">
                <p className="mb-4 text-xl font-semibold text-secondary">Trained Experts</p>
                <h2 className="text-3xl font-bold lg:text-5xl text-primary">Crew Change, Visas & CTM Service</h2>
              </div>
              <p className="mb-4 text-gray-700 animate-on-scroll">
                The seamless operation of vessels and their safe navigation across the world’s
                oceans relies heavily on the efficient management of crew changes, visa applications,
                and delivery of Cash to Master (CTM) services. These essential functions are the lifeblood of
                shipping, and at FSS, we specialize in delivering comprehensive solutions for all your crew change,
                visa processing, and CTM needs.
              </p>
            </div>
            <img className="object-cover w-full h-80 rounded-xl" src='/trains5.jpg' alt={"Image of Team"} />
            {/* <div className="flex h-full overflow-hidden animate-on-scroll">
              <img className="object-cover h-60 w-fit rounded-xl" src={teamImg} alt={"Image of Team"} />
            </div> */}
          </div>
          <div>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-6 bg-white animate-on-scroll">
                <Users className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Seamless Crew Change</h3>
                <p className="text-gray-600">Ensuring smooth and timely crew changes to keep your operations running at
                  full efficiency.</p>
              </div>
              <div className="p-6 bg-white animate-on-scroll">
                <DollarSignIcon className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Cash To Master (CTM)</h3>
                <p className="text-gray-600">Providing secure, reliable cash delivery services directly to your vessels
                  across global ports.</p>
              </div>
              <div className="p-6 bg-white animate-on-scroll">
                <WalletCards className="text-[#FF6F3D] w-12 h-12 mb-4" />
                <h3 className="mb-2 text-xl font-semibold">Visa Processing</h3>
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