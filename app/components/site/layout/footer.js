"use client";

import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedinIn,FaInstagram,FaFacebookF,FaTwitter } from "react-icons/fa";

const Footer = () => {
    const pathname=usePathname();
  return (
    <div className="pt-[150px] mt-[120px] pb-[42px] bg-[#0A1019]">
      <div className="container flex flex-col items-center">
        {/* <div className="flex flex-col items-center"> */}
        <input
          placeholder="Your email"
          className="text-[#888AA0] bg-transparent font-normal border-b max-w-[821px] mx-auto w-full focus:border-b focus:outline-none p-2"
        />
        {/* </div> */}
        <div className="max-w-[821px] w-full ">
        <div className="flex md:flex-nowrap flex-wrap gap-x-2 items-center mt-[24px]">
            <div className="md:w-[314px] w-[200px] h-[1px] object-fill bg-white bg-opacity-[20%]"/>
            <button className="px-[28px] py-[12px] text-[18px] font-semibold bg-primary text-[#0A1019] cursor-pointer">Subscribe</button>
        </div>
        </div>

        <div className="mt-[80px] mb-[42px] flex max-w-[821px]  w-full justify-between items-center">
         <Link href="/" className={`${pathname === '/'?"text-primary":"text-white text-opacity-[20%]"} text-[18px] font-semibold`}>Home</Link>
         <Link href="/service" className={`${pathname === '/service'?"text-primary":"text-white text-opacity-[20%]"} text-[18px] font-semibold`}>Service</Link>
         <Link href="/team" className={`${pathname === '/team'?"text-primary":"text-white text-opacity-[20%]"} text-[18px] font-semibold`}>Team</Link>
         <Link href="/help" className={`${pathname === '/help'?"text-primary":"text-white text-opacity-[20%]"} text-[18px] font-semibold`}>Help</Link>
         <Link href="/privacy" className={`${pathname === '/privacy'?"text-primary":"text-white text-opacity-[20%]"} text-[18px] font-semibold`}>Privacy</Link>
        </div>
      </div>
      <div className="md:border-t border-white border-opacity-[30%] pt-[50px]">
       <div className="container grid md:grid-cols-3 grid-cols-2 justify-items-center ">
        <Image src="/images/icon/logo-dark.png" className="w-[168px] h-[44px] object-fill" width={168} height={44}/>
        <div className="flex  gap-x- items-center gap-[13px]">
       <FaLinkedinIn className="text-[18px] text-white text-opacity-[20%] hover:text-primary duration-300 transition-all"/>
       <FaInstagram className="text-[18px] text-white text-opacity-[20%] hover:text-primary duration-300 transition-all"/>
       <FaFacebookF className="text-[18px] text-white text-opacity-[20%] hover:text-primary duration-300 transition-all"/>
       <FaTwitter className="text-[18px] text-white text-opacity-[20%] hover:text-primary duration-300 transition-all"/>
        </div>
        <p className="text-[#888AA0] md:col-span-1 col-span-2 gap-[24px] text-center">Copyright ©_2023 Agency</p>

       </div>
      </div>
    </div>
  );
};

export default Footer;
