import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            One More Bite
          </h3>
          <p className="text-gray-400">
            Tasty, fast, and delivered with love. Your cravings, our command.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-orange-400">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white transition">
                Menu
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            {/* <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li> */}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-orange-400">
            Contact
          </h4>
          <ul className="text-gray-400 space-y-2">
            <li>Email: info@onemorebite.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Hours: 10am – 11pm</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-orange-400">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/"
              className="hover:text-orange-400"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-orange-400"
            >
              <FaInstagram />
            </a>
            <a href="https://x.com/" className="hover:text-orange-400">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} One More Bite. All rights reserved.
        <br />
        For more work, Visit{" "}
        <a href="https://afreedshaik30.netlify.app/" className="text-amber-600">
          AfreedShaik30
        </a>{" "}
      </div>
    </footer>
  );
};

export default Footer;
