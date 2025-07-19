import React from "react";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import ognLogoWhite from "/shakers-transcargo-logo white.png";

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      className="bg-[#000066] text-white py-12">
      <div className="container px-4 mx-auto max-width-1140">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <img
              src={ognLogoWhite}
              alt="OGN Shipping"
              className="h-24 mb-4"
            />
            <p className="max-w-xs text-sm">
              Shakers Transcargo, for all your first class train services and specialists. Safe, Smooth and Reliable.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#FF6F3D] transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#FF6F3D] transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#FF6F3D] transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#knowledgebase"
                  className="hover:text-[#FF6F3D] transition duration-300">
                  Knowledgebase
                </a>
              </li>
              <li>
                <a
                  href="#get-quote"
                  className="hover:text-[#FF6F3D] transition duration-300">
                  kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">kontakt Us</h3>
            <p className="mb-6 text-white">
              We're here to answer any questions you may have about our
              services. Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="flex items-center mb-2">
              <MapPin className="text-[#FF6F3D] w-8 h-8 mr-2" />
              <p>Location Goes here....</p>
            </div>
            <div className="mb-2">
              <div className="inline-flex ">
                <MessageCircleMore className="text-[#FF6F3D] w-6 h-6 mr-4" />
                <p>
                  <a
                    href=""
                    className="text-white hover:cursor-pointer">
                    Whatsapp Number goes here....
                  </a>
                  {/* &nbsp;/&nbsp;
                  <a
                    href="https://wa.me/22892774686"
                    className="text-white hover:cursor-pointer">
                    +228 92 77 4686
                  </a> */}
                </p>
              </div>
              <div className="inline-flex gap-2 py-2 mx-0">
                <Phone className="text-[#FF6F3D] w-6 h-6 mr-2" />
                <p>
                  <a
                    href="tel:"
                    className="no-underline">
                    Number goes here
                  </a>
                  {/* /&nbsp;
                  <a
                    href="tel:+233550945019"
                    className="no-underline">
                    +233 55 094 5019
                  </a> */}
                </p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="text-[#FF6F3D] w-6 h-6 mr-4" />
              <p>
                <a href="mailto:info@ognshipping.com">info@shakerstranscargo.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} Shakers Transcargo. All rights reserved.{" "}
            <a
              href="https://piverworld.com"
              className="text-white underline hover:cursor-pointer">
              Powered by <strong>PiverWorld</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
