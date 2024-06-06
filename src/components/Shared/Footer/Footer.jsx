import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 max-w-[1180px] w-11/12">
        <div className="flex text-center md:text-left flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-semibold mb-2">CareCamp</h5>
            <ul>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#team" className="hover:underline">Our Team</a></li>
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h5 className="text-lg font-semibold mb-2">Resources</h5>
            <ul>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
              <li><a href="#support" className="hover:underline">Support</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3">
            <h5 className="text-lg font-semibold mb-2">Contact</h5>
            <ul>
              <li className="mb-2">Email: info@example.com</li>
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
            <div className="flex mt-4">
              <a href="#facebook" className="mr-4 hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter" className="mr-4 hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#linkedin" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 CareCamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

