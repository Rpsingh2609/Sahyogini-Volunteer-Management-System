import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Blog from "../components/Blog";

import Img1 from "../assets/images/5.jpg";
import Img2 from "../assets/images/2.webp";
import Img3 from "../assets/images/3.webp";
import Img4 from "../assets/images/4.jpg";

const images = [
  { src: Img1, text: "Empower Communities", subtext: "Your actions create change." },
  { src: Img2, text: "Be the Change", subtext: "Start today, inspire tomorrow." },
  { src: Img3, text: "Support a Cause", subtext: "Small efforts, big impact." },
  { src: Img4, text: "Make an Impact", subtext: "Together, we rise." },
];

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-16 py-12 sm:py-24">
      {/* Swiper Image Slider */}
      <div className="relative w-full max-w-screen-xl mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px]">
                <img
                  src={item.src}
                  alt={item.text}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4 text-center">
                  <p className="text-4xl sm:text-6xl font-extrabold drop-shadow-md">{item.text}</p>
                  <p className="text-lg sm:text-2xl mt-2 italic">{item.subtext}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Section */}
      <section className="text-center px-6 max-w-3xl mx-auto">
        <h1 className="font-extrabold text-5xl sm:text-7xl tracking-tight text-gray-900">
          Make a Difference
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Empower communities by volunteering, donating, and taking action. Your support creates
          opportunities and fosters positive change.
        </p>
      </section>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link to="/jobs">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg shadow-md transition-all">
            Need Volunteers
          </Button>
        </Link>
        <Link to="/post-job">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 text-lg shadow-md transition-all">
            Post an Opportunity
          </Button>
        </Link>
      </div>
      <Blog />
      {/* Contact Us Section */}
      <section id="contact" className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Have questions? Reach out to us, and we'll get back to you soon.
          </p>
          <form action="https://getform.io/f/bmdkjqoa" method="POST" className="bg-white p-8 rounded-lg shadow-xl mt-6 max-w-md mx-auto">
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input type="text" name="name" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Name" required />
            
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" name="email" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Email" required />
            
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea name="message" className="w-full p-3 border rounded-lg mb-3 focus:ring-2 focus:ring-blue-400" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-all mt-4">Send</button>
          </form>

          <div className="mt-6 text-gray-700">
            <p>
              Email: <a href="mailto:contact@yourwebsite.com" className="text-blue-500">contact@sahyogini.com</a>
            </p>
            <p>
              Phone: <a href="tel:+1234567890" className="text-blue-500">+91-9635348621</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;