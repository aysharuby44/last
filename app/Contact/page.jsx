import React from 'react';
import Navbara from '@/Components/Navbara';
import Footer from '@/Components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbara />

      {/* Google Maps Embed Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 lg:px-28 py-16 bg-gray-100 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6797535686165!2d54.4009283!3d24.4869067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6764ef9a614f%3A0xe053057e1ea7c558!2sTomahawk%20Reem%20Island%20%D8%AA%D9%88%D9%85%D8%A7%D9%87%D9%88%D9%83%20%D8%AC%D8%B2%D9%8A%D8%B1%D8%A9%20%D8%A7%D9%84%D8%B1%D9%8A%D9%85%20%D8%A3%D8%A8%D9%88%20%D8%B8%D8%A8%D9%8A!5e0!3m2!1sen!2sae!4v1714040004604!5m2!1sen!2sae"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[450px] border-0 rounded-lg shadow-lg"
        ></iframe>
      </div>

      {/* Empty div for spacing */}
      <div className="flex-1 p-4"></div> {/* Adjust the height (h-12) as needed for more or less space */}

      {/* Contact Info Section in Modern Square Cards */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-12 lg:px-28 py-16 space-y-8 md:space-y-0">
  {/* Call Us Box */}
  <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
    <h2 className="text-2xl font-bold text-black">Location</h2>
    <p className="text-[#d3ad3c]">Tomahawk
Reem Island - Al Reem Island - Najmat
Abu Dhabi
United Arab Emirates</p>
  </div>

  {/* Our Location Box */}
  <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
    <h2 className="text-2xl font-bold text-black">Call us</h2>
    <p className="text-[#d3ad3c]">Call us:
    026507070</p>
  </div>

  {/* Write To Us Box */}
  <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
    <h2 className="text-2xl font-bold text-black">Write To Us</h2>
    <p className="text-[#d3ad3c]">info@tomahawkcaffe.ae</p>
  </div>

  {/* Follow Us Box */}
  <div style={{ minHeight: '220px' }} className="w-full md:w-1/4 flex flex-col justify-center items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-gray-200">
    <h2 className="text-2xl font-bold text-black">Follow Us</h2>
    <p className="text-[#d3ad3c]">@tomahawkcaffe</p>
  </div>
</div>

      <div className="flex-1 p-4"></div>
      {/* Contact Form Section */}


{/* Modern Black Contact Section */}
<div className="bg-black text-white px-6 md:px-20 py-24">
  {/* Heading + Subheading */}
  <div className="max-w-xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4">
      Leave Us Your Message
    </h2>
    <p className="text-lg md:text-xl text-gray-400">
      If you would like to leave feedback about our products or services, please fill out the form below to contact our team.
    </p>
  </div>

  {/* Two-column Form */}
  <div className="max-w-6xl mx-auto">
    <form className="flex flex-col md:flex-row gap-12">
      
      {/* Left Side - Name, Email, Subject */}
      <div className="w-full md:w-1/2 space-y-10">
        {/* Name */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">Name</label>
          <input type="text" className="w-full bg-black text-white py-3 focus:outline-none" />
          <hr className="border-t border-white mt-2" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">Email</label>
          <input type="email" className="w-full bg-black text-white py-3 focus:outline-none" />
          <hr className="border-t border-white mt-2" />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">Subject</label>
          <input type="text" className="w-full bg-black text-white py-3 focus:outline-none" />
          <hr className="border-t border-white mt-2" />
        </div>
      </div>

      {/* Right Side - Message */}
      <div className="w-full md:w-1/2">
        <div>
          <label className="block text-sm uppercase tracking-widest mb-2 text-gray-300">Message</label>
          <textarea rows="10" className="w-full bg-black text-white py-3 resize-none focus:outline-none"></textarea>
          <hr className="border-t border-white mt-2" />
        </div>
      </div>
    </form>

    {/* Submit Button */}
    <div className="pt-12 text-center">
      <button
        type="submit"
        className="relative inline-block px-10 py-4 font-semibold tracking-wider text-white uppercase border-2 border-white overflow-hidden group transition-all duration-300 hover:text-black"
      >
        <span className="absolute inset-0 w-full h-full transition-all duration-300 bg-white scale-x-0 origin-left group-hover:scale-x-100"></span>
        <span className="relative z-10">Send Message</span>
      </button>
    </div>
  </div>
</div>




      <Footer />
    </div>
  );
};

export default Contact;
