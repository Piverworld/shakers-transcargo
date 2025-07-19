import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import StatusModal from "./QuoteModal";

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: {} as any,
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [recaptchaMessage, setRecaptchaMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      serviceType: e.target.value,
    });
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };

  const form = useRef<HTMLFormElement>({} as HTMLFormElement);
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const recaptchaValue = recaptchaRef.current?.getValue();

    //Check if user has completed recaptcha
    if (!recaptchaValue) {
      setRecaptchaMessage("Please complete the reCAPTCHA.");
      return;
    } else {
      // Handle form submission logic here
      emailjs
        .sendForm("service_crtdtsh", "template_b6j492m", form.current, {
          publicKey: "hslNGNyAY-oebKb2a",
        })
        .then(() => {
          // Display success modal
          setSuccessMessage(
            "Your message has been sent. We will get back to you soon."
          );
        }),
        (error: { text: string }) => {
          // Display failure modal
          setErrorMessage(error.text);
        };

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        serviceType: {} as any,
        message: "",
      });
    }
  };

  return (
    <section
      id="get-quote"
      className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto max-width-1140">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xl font-bold text-secondary animate-on-scroll">
              Best Railway Solutions       </p>
            <h2 className="text-4xl font-bold text-[#000066] mb-2 animate-on-scroll">
              Together We Control The Rails
            </h2>
            <p className="mb-6 text-gray-700 animate-on-scroll">
              Ready to ship? Simply fill out our easy-to-use form with details
              about your shipment. Our expert team will quickly analyse your
              request and provide you with a competitive rate.
            </p>
            {/* <div className="bg-[#000066] text-white p-6 rounded-lg animate-on-scroll lg:inline-block">
              <h3 className="mb-2 text-xl font-semibold">kontakt us Today!</h3>
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
                  </p>
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
            </div> */}
            <div className="pt-4 animate-on-scroll">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9229720379217!2d1.2746250760144073!3d6.1410494938458955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e151dd809f47%3A0x5dd2e020c3068793!2sPort!5e0!3m2!1sen!2sgh!4v1729771667747!5m2!1sen!2sgh"
                width="100%"
                height="230"
                style={{ border: 0, borderRadius: "0.25rem" }}
                allowFullScreen={true}
                loading="lazy"></iframe>
            </div>
          </div>
          {successMessage && (
            <StatusModal
              isOpen={true}
              onClose={() => { }}
              status="success"
              message="Success"
              subtext={successMessage}
            />
          )}
          {errorMessage && (
            <StatusModal
              isOpen={true}
              onClose={() => { }}
              status="failure"
              message="Failed"
              subtext={errorMessage}
            />
          )}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4 animate-on-scroll">
              <label
                htmlFor="name"
                className="block mb-2 font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={handleNameChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3D]"
                required
                autoComplete="on"
              />
            </div>
            <div className="mb-4 animate-on-scroll">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={handleEmailChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3D]"
                required
                autoComplete="on"
              />
            </div>
            <div className="mb-4 animate-on-scroll">
              <label
                htmlFor="serviceType"
                className="block mb-2 font-semibold text-gray-700">
                Type of Service
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleServiceTypeChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3D]"
                required>
                <option value="">Select a service type</option>
                <option value="Freight">Freight/Logistics</option>
                <option value="Repairs">Underwater Repairs</option>
                <option value="Transport">Airport Transport</option>
                <option value="Supplies">Marine Supplies</option>
                <option value="Life">Life Saving Appliances</option>
                <option value="Fire">Fire Fighting Appliances</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-4 animate-on-scroll">
              <label
                htmlFor="message"
                className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="user_message"
                value={formData.message}
                onChange={handleMessageChange}
                rows={9}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF6F3D]"
                required></textarea>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeSJ5oqAAAAAEa-LoboBusDg7oVv_gwcRdnNcYX"
              />
              {recaptchaMessage && (
                <p className="text-red-500">{recaptchaMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF6F3D] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FF8F5D] transition duration-300 animate-on-scroll">
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
