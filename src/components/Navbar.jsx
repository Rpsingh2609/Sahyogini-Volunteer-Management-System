import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black py-4 px-6 flex justify-between items-center shadow-md z-50">
  <Link to="/">
    <img src="/logo.jpg" className="h-16" alt="Hirrd Logo" />
  </Link>
  
  <div className="flex space-x-6 text-lg font-medium">
    <Link to="/" className="hover:text-gray-400">Home</Link>
    <Link to="/about" className="hover:text-gray-400">About</Link>
    <Link to="/contact" className="hover:text-gray-400">Contact</Link>
  </div>
</nav>

  );
};

export default Navbar;
