import { useEffect, useState } from "react";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox, Menu } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const { user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-4 flex justify-between items-center text-white px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/Logo.jpg" className="h-12 md:h-16 rounded-lg" alt="Logo" />
          <h2 className="hidden md:block text-2xl font-bold">
            <span className="text-black">Volunteer</span>Hub
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-lg items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-semibold"
                : "text-black transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink to="/about" className="text-black">
            About
          </NavLink>
          <NavLink to="/contact" className="text-black">
            Contact
          </NavLink>
          <NavLink to="/donate" className="text-black">
            Donate Now
          </NavLink>

          {/* PayPal Donate Button */}
          {/* <form
            action="https://www.paypal.com/ncp/payment/GV8MEW7JK7K56"
            method="post"
            target="_blank"
            className="ml-4"
          >
            <input
              type="submit"
              value="Donate Now"
              className="px-5 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200 cursor-pointer"
            />
          </form> */}
        </div>

        {/* User Actions */}
        <div className="flex gap-6 items-center">
          <SignedOut>
            <Button
              variant="outline"
              className="px-4 py-2 text-black bg-green-500"
              onClick={() => setShowSignIn(true)}
            >
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button
                  variant="destructive"
                  className="rounded-full flex items-center px-4 py-2"
                >
                  <PenBox size={20} className="mr-2" />
                  Post an Opportunity
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            />
          </SignedIn>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 px-6 absolute top-16 left-0 w-full shadow-lg z-50">
          <NavLink
            to="/"
            className="block py-2 hover:text-green-300 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 hover:text-green-300 transition duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <button
            className="block py-2 text-white hover:text-green-300 transition duration-200"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false); // Close menu after clicking
              }
            }}
          >
            Contact
          </button>

          {/* PayPal Donate Button in Mobile Menu */}
          <form
            action="https://www.paypal.com/ncp/payment/GV8MEW7JK7K56"
            method="post"
            target="_blank"
            className="block text-center mt-6"
          >
            <input
              type="submit"
              value="Donate Now"
              className="w-full px-5 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200 cursor-pointer"
            />
          </form>
        </div>
      )}

      {/* Sign-in Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
