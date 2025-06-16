import React from "react";
import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import ognLogoWhite from "/src/images/Logo-OGN-white.png";

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
              OGN Shipping is your trusted partner for global maritime
              solutions, providing reliable and efficient shipping services
              worldwide.
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
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <p className="mb-6 text-white">
              We're here to answer any questions you may have about our
              services. Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="flex items-center mb-2">
              <MapPin className="text-[#FF6F3D] w-8 h-8 mr-2" />
              <p>Zone Portuaire, 06BP 62215 Lome Togo, derrière ECOBANK ATI</p>
            </div>
            <div className="mb-2">
              <div className="inline-flex ">
                <MessageCircleMore className="text-[#FF6F3D] w-6 h-6 mr-4" />
                <p>
                  <a
                    href="https://wa.me/4915731701986"
                    className="text-white hover:cursor-pointer">
                    +49 1573 1701986
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
                </p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="text-[#FF6F3D] w-6 h-6 mr-4" />
              <p>
                <a href="mailto:info@ognshipping.com">info@ognshipping.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p>
            &copy; {new Date().getFullYear()} OGN Shipping. All rights reserved.{" "}
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
