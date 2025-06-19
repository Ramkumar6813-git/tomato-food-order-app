const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 border-t border-gray-200" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-orange-600">Tomato</h2>
          <p className="text-sm mt-2">
            Taste meets tech. Order your favorites, fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li className="hover:text-orange-500">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">
                Menu
              </a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">
                Cart
              </a>
            </li>
            <li className="hover:text-orange-500">
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm">Email: support@tomato.io</p>
          <p className="text-sm">Phone: +91 1234567890</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-md font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-orange-500">
              🐦
            </a>
            <a href="#" className="hover:text-orange-500">
              📘
            </a>
            <a href="#" className="hover:text-orange-500">
              📸
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-300">
        &copy; {new Date().getFullYear()} FoodXpress. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
