"use client";
import { motion } from "framer-motion";
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper modules
import { Pagination } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from 'next/image';
import { MdOutlineArrowOutward, MdArrowRightAlt } from "react-icons/md";

const services = [
  {
    icon: "/assets/services/logo-design.svg",
    href: "",
    title: "Logo Design"
  },
  {
    icon: "/assets/services/ecommerce-layout.svg",
    href: "",
    title: "E-commerce Layout Design"
  },
  {
    icon: "/assets/services/miniature-photography.svg",
    href: "",
    title: "Miniature Photography"
  }
]

const Services = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
    className="h-screen flex items-center ">
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* headline */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Logo Design</span> to Elevate Your Brand
          </h2>
          {/* btn */}
          <button className="btn btn-lg btn-accent flex gap-2">All services <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-[320px]"
        >
          {services.map((item,index) => {
            return <SwiperSlide key={index}>
              <div className="bg-secondary/10 w-full h-[284px] rounded-[20px] px-[30px] py-[40px] flex flex-col justify-between">
                <div className="flex items-center justify-between mb-12">
                  <Image src={item.icon} width={48} height={48} alt="" />
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                    <MdOutlineArrowOutward />
                  </div>
                </div>
                <h5 className="text-[22px] font-medium max-w-[240px]">
                  {item.title}
                  </h5>
              </div>
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Services;