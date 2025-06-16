import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto max-width-1140">
        <h2 className="text-4xl font-bold text-center text-[#000066] mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Get in Touch</h3>
            <p className="mb-6 text-gray-600">
              We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-[#FF6F3D] w-6 h-6 mr-4" />
                <p>123 Shipping Lane, Port City, Country</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#FF6F3D] w-6 h-6 mr-4" />
                <p>+49 1573 1701986</p>
                <p>+228 9277 4686</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#FF6F3D] w-6 h-6 mr-4" />
                <p>info@ognshipping.com</p>
              </div>
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.2059486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1620328991702!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '0.25rem' }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;