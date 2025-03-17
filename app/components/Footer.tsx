import { motion } from "framer-motion";
import React from "react";
import Logo from '../../public/assets/Asset 3@72x-8.png'
import Image from "next/image";

const Footer = () => {
    return (
   <div className="w-full flex justify-center bg-black text-white">
     <footer className=" w-[80%] bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-8">
          {/* Logo and description */}
          <div>
            <div className="text-10 font-bold flex items-center">
              <span className="text-white">
                <Image src={Logo} alt="Logo" width={50} height={50} className="h-[80px] w-[120px]"/>
              </span>
           
            </div>
      
          </div>
  
          {/* Links */}
          <div>
          <p className="text-[14px] text-gray-400 w-full">
            Cyber Safety Alliance (CSA) is a Human Risk Management (HRM) and Cyber Awareness Training Firm that specializes in interactive cybersecurity education, behavioral risk mitigation, and compliance-driven training for individuals and organizations.
            </p>
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
  