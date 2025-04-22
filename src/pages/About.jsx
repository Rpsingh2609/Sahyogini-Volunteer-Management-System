import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-black mb-4">About Us</h1>
      <p className="text-gray-600 max-w-3xl">
        We are dedicated to bridging the gap between **NGOs** and passionate **volunteers**.  
        Our platform provides opportunities to support various causes, engage in meaningful work,  
        and create a positive impact on communities in need.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-red-500">For NGOs</h2>
          <p className="text-gray-600 mt-2">
            Easily find dedicated volunteers for your projects and expand your reach  
            to make a bigger impact.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">For Volunteers</h2>
          <p className="text-gray-600 mt-2">
            Discover meaningful opportunities to contribute to society,  
            develop new skills, and support causes you care about.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-3xl font-bold text-black">Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mt-4">
          We aim to **connect, empower, and transform**.  
          By fostering collaboration between NGOs and volunteers, we strive to create  
          a **better world together**.
        </p>
      </div>
    </div>
  );
};

export default About;
