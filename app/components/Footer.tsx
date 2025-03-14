import { motion } from "framer-motion";
import React from "react";
import Logo from '../../public/assets/Asset 3@72x-8.png'
import Image from "next/image";

const Footer = () => {
    return (
   <div className="w-full flex justify-center bg-black text-white">
     <footer className=" w-[80%] bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <div className="text-10 font-bold flex items-center">
              <span className="text-white">
                <Image src={Logo} alt="Logo" width={50} height={50} />
              </span>
              <span className="bg-white text-black px-2 ml-1 rounded-md text-10">Cyber Safety <br />Alliance</span>
            </div>
            <p className="mt-4 text-[12px] text-gray-400">
            Cyber Safety Alliance (CSA) is a Human Risk Management (HRM) and Cyber Awareness Training Firm that specializes in interactive cybersecurity education, behavioral risk mitigation, and compliance-driven training for individuals and organizations.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold">LINKS</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Solutions</a></li>
              <li><a href="#" className="hover:text-white">Insights</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold">SERVICE</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Ensure your company</li>
              <li>Data is completely</li>
              <li>Secure and that</li>
              <li>You're in compliance</li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold">CONTACT</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>📍 Lorem Ipsum is simply dummy text.</li>
              <li>📞 123-4556 78598</li>
              <li>✉ maximize@logo.agency</li>
            </ul>
            {/* Social Icons */}
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-2xl">🔵</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">⚫</a>
              <a href="#" className="text-gray-400 hover:text-white text-2xl">✖</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          &copy; 2025 cyber safety alliance. All rights reserved.
        </div>
      </footer>
   </div>
    );
  };
  
  export default Footer;
  