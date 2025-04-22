import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase Configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const { data, error } = await supabase.from("mentors").select("*");
      if (error) {
        console.error("Error fetching mentors:", error);
      } else {
        setMentors(data);
      }
    };
    fetchMentors();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900">
      {mentors.length > 0 ? (
        mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Mentor Image */}
            <img
              src={mentor.imagelink} // Fetch image from the database
              alt={mentor.name}
              className="w-full h-48 object-cover"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")} // Fallback image
            />

            {/* Mentor Details */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
              <p className="text-sm text-gray-600">{mentor.company}</p>
              <p className="text-gray-700 font-medium mt-2">
                Experience: {mentor.experience} years
              </p>
              <p className="text-gray-600 mt-2 text-sm">{mentor.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-lg">No mentors found.</p>
      )}
    </div>
  );
};

export default Mentors;
