
import Image from "next/image";
import React from "react";
import pay from "../../../public/Image/pay.svg"


const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
       
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eaque
            nostrum corrupti! Aliquam nesciunt veniam cum accusamus rerum! Modi,
            deleniti!
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+000) 1234 5678 - info@example.com
          </p>
        </div>
        
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">Privacy Police</p>
          <p className="footer_link">Return Police</p>
          <p className="footer_link">Drop Shipping</p>
          <p className="footer_link">Shipping Police</p>
        </div>
        
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Orders</p>
          <p className="footer_link">Account Details</p>
          <p className="footer_link">Track Details</p>
        </div>
       
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Sellers</p>
          <p className="footer_link">Latest Products</p>
          <p className="footer_link">Sale Products</p>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col items-center sm:flex-row  gap-6  w-4/5 mx-auto">
      <p className="text-sm text-black opacity-60">© copyright webdevwarriors 2024</p>
      <Image src={pay} alt="pay" width={230} height={230} className="object-contain sm:ml-auto" />
      </div>
    </div>
  );
};

export default Footer;
