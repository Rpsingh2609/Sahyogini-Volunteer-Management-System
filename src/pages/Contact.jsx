import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-3xl">
        Have questions or want to collaborate? We’d love to hear from you!  
        Whether you're an **NGO** looking for volunteers or a **volunteer** looking to help,  
        reach out and let's make an impact together.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500">For NGOs</h2>
          <p className="text-gray-600 mt-2">
            Need volunteers for your projects? Connect with passionate individuals  
            ready to support your cause.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">For Volunteers</h2>
          <p className="text-gray-600 mt-2">
            Looking for opportunities to make a difference? Find NGOs that  
            need your skills and enthusiasm.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 w-full max-w-2xl bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-black mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 text-lg w-full rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
