import React from "react";

const Payments = () => {
  return (
    <form
      action="https://getform.io/f/bpjnxdgb"
      method="POST"
      className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
        Donate Us
      </h2>

      {/* Full Name */}
      <label className="block text-sm font-medium text-gray-600">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your full name"
        required
      />

      {/* Email */}
      <label className="block text-sm font-medium text-gray-600">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your email"
        required
      />

      {/* Phone Number */}
      <label className="block text-sm font-medium text-gray-600">
        Phone Number
      </label>
      <input
        type="tel"
        name="phone"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter your phone number"
        required
      />

      {/* Organisation Name Dropdown */}
      <label className="block text-sm font-medium text-gray-600">
        Organisation Name
      </label>
      <select
        name="organisation"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="" disabled selected>
          Select an organisation
        </option>
        <option value="NGO A">Top Neurons</option>
        <option value="NGO B">Rocket Foundation</option>
        <option value="NGO C">Goonj</option>
        <option value="NGO C">Make-A-Wish Foundation</option>
        <option value="Other">Other</option>
      </select>

      {/* Reason */}
      <label className="block text-sm font-medium text-gray-600">Reason</label>
      <input
        type="text"
        name="reason"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the reason"
        required
      />

      {/* Amount */}
      <label className="block text-sm font-medium text-gray-600">Amount</label>
      <input
        type="number"
        name="amount"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the amount"
        required
      />

      {/* Message */}
      <label className="block text-sm font-medium text-gray-600">Message</label>
      <textarea
        name="message"
        className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message here"
        required
      ></textarea>

      <input type="hidden" name="_gotcha" />

      {/* Gender */}
      <div className="mt-3">
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Gender
        </label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="mr-2"
              defaultChecked
            />{" "}
            Male
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" value="female" className="mr-2" />{" "}
            Female
          </label>
          <label className="flex items-center">
            <input type="radio" name="gender" value="other" className="mr-2" />{" "}
            Other
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={() =>
          (window.location.href =
            "https://www.paypal.com/ncp/payment/GV8MEW7JK7K56")
        }
        className="mt-4 w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Donate Now
      </button>
    </form>
  );
};

export default Payments;
