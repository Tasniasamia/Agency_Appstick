"use client";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineArrowLongUp, HiOutlineArrowLongDown } from "react-icons/hi2";
import { RiArrowRightUpLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="py-[150px] dark:bg-[#0F172A] bg-white relative">
     <Image src="/images/hero-svg.png" width={405} height={425} alt="hero" className="w-[205px] h-[325px] absolute left-0 top-[-100px] object-fill xl:block dark:hidden hidden" />
      <div className="container relative">
       
        <h1 className="xl:text-[130px] md:text-[84px] text-[50px] lg:text-start text-center !line-height-[130px] font-bold text-black dark:text-white font-[lexend] lg:w-[955px] w-full relative">
         <span>We Are Digital <span className="!text-primary">Agency.</span></span> 
         <Image src="/images/star.png" width={23.51} height={27.11} alt="star" className="w-[23.51px] h-[27.11px] object-fill absolute left-0 top-[-20px] lg:block hidden dark:hidden" />
         <Image src="/images/star.png" width={23.51} height={27.11} alt="star" className="w-[23.51px] h-[27.11px] object-fill absolute right-0 bottom-[20%] lg:block hidden dark:hidden" />
        </h1>
        <div className="mt-[64px] flex lg:flex-nowrap flex-wrap justify-between items-center">

          <button className="text-[18px] font-medium flex items-center gap-[16px] cursor-pointer relative">
            <span className="text-primary relative z-20">Explore More</span>
            <FaArrowRightLong className="dark:text-white text-black" />
            <Image src="/images/glass1.png"width={56} height={56} className="h-[56px] w-[56px] object-fill absolute left-[-25px] dark:block bottom-[-15px]  hidden z-10"alt="glass" />
            <Image src="/images/glass2.png"width={56} height={56} className="h-[56px] w-[56px] object-fill absolute left-[-25px] z-10 bottom-[-15px]  dark:hidden lg:block hidden"alt="glass" />
          </button>
          <p className="text-primarytextColor font-normal line-height-[25.6px] w-[513px]">
            Creative agencies are businesses that specialize in creating and
            with on a executing marketing and creative agencies businesses that
            specialize creating and executing marketing and{" "}
          </p>
        </div>
        <div className="mt-[89px] relative grid lg:grid-cols-3 grid-cols-1 gap-[30px] lg:h-[528px]">
        <Image src="/images/star desgin2 (5).png"alt="image" width={64.15} height={80.15} className="w-[64.15px] h-[80.15px] object-fill absolute left-[-100px] bottom-[100px] dark:hidden 2xl:block hidden"/>
        <Image src="/images/ring-star.png" alt="ring" width={42.93} height={42.93} className="w-[42.93px] h-[42.93px] object-fill absolute dark:hidden  right-[-100px]   2xl:block hidden" />
          <div>
            <Image
              src="/images/hero3.png"
              height={439}
              width={404}
              className="lg:w-[404px] w-full h-[439px] object-fill"
            />
          </div>
          <div className="mx-auto w-full flex justify-center ">
           
            <Image
              src="/images/hero2.png"
              height={276}
              width={242}
              className="lg:w-[242px] w-full h-[276px] object-fill"
            />
          </div>
          <div className="flex items-end justify-end h-full relative">
            <Image
              src="/images/hero1.png"
              height={431}
              width={404}
              className="lg:w-[404px] h-[431px] w-full object-fill relative z-20"
            />
            <Image src="/images/ring.png" alt="ring"width={333} height={349} className="w-[333px] h-[349px] object-fill absolute dark:hidden right-[-100px] z-10 top-[-97px] 2xl:block hidden overflow-hidden"/>
          </div>
        </div>
        <div className="flex justify-center w-full absolute bottom-0 -translate-x-1/2 left-1/2 ">
          <div className="flex flex-col items-center justify-center w-[60px] h-[162px] rounded-full dark:border-white border-black border-opacity-[30%] gap-[35px] border">
            <HiOutlineArrowLongUp className="!text-[35px] cursor-pointer dark:text-white" />
            <HiOutlineArrowLongDown className="!text-[35px] cursor-pointer dark:text-white" />
          </div>
        </div>
        <ul className="absolute right-0 list-none lg:top-0 top-[-140px]  flex flex-col space-y-[12px]">
          <li className="flex gap-[8px] items-center text-[16px] font-medium cursor-pointer text-primarytextColor hover:!text-primary duration-300 transition-all ease-in-out">
            <span>Facebook</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex gap-[8px] items-center text-[16px] font-medium cursor-pointer text-primarytextColor hover:!text-primary duration-300 transition-all ease-in-out">
            <span>Twitter</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex gap-[8px] items-center text-[16px] font-medium cursor-pointer text-primarytextColor hover:!text-primary duration-300 transition-all ease-in-out">
            <span>Linkedin</span>
            <RiArrowRightUpLine />
          </li>
          <li className="flex gap-[8px] items-center text-[16px] font-medium cursor-pointer text-primarytextColor hover:!text-primary duration-300 transition-all ease-in-out">
            <span>Instagram</span>
            <RiArrowRightUpLine />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
