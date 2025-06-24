"use client";
import { motion } from 'framer-motion';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

// data
const projects = [
  {
    id: 1,
    category: "Logo Design",
    title: "Bandar Condet Seafood",
    description: " A Logo Design for a Local Seafood Restaurant in Jakarta, Indonesia.",
    image: "/assets/work/bandar-condet-seafood.png",
    link: ""
  },
  {
    id: 2,
    category: "Logo Design",
    title: "BaGor",
    description: " BaGor means Bawang Goreng, a fried shallot topping.",
    image: "/assets/work/bagor.png",
    link: ""
  },
  {
    id: 3,
    category: "Logo Design",
    title: "Tomato Tissue",
    description: " A Logo Design for a Local Tissue Brand in Indonesia.",
    image: "/assets/work/tomato-tissue.png",
    link: ""
  },
  {
    id: 4,
    category: "Logo Design",
    title: "BenTech",
    description: " BenTech is an acronym for Benika Technology. Benika Technology is one of the business units of PT. Benika Primatama Appliansi focused on Smartphone and Accessories Products.",
    image: "/assets/work/bentech.png",
    link: ""
  },
  {
    id: 5,
    category: "Logo Design",
    title: "Berbinar",
    description: " Berbinar is a Local Brand based in Jakarta, Indonesia that focuses on selling Baby and Kids Products.",
    image: "/assets/work/berbinar.png",
    link: ""
  },
  {
    id: 6,
    category: "Logo Design",
    title: "Unreason Hunter",
    description: " Unreason Hunter is my personal account for showcasing my miniature photography.",
    image: "/assets/work/unreason-hunter-logo.png",
    link: ""
  },
  {
    id: 7,
    category: "Ecommerce Layout",
    title: "Bentech",
    description: " Bentech Store Layout Design for Tokopedia.",
    image: "/assets/work/bentech-toped-0.png",
    link: ""
  },
  {
    id: 8,
    category: "Miniature Photography",
    title: "RWB Porsche 930 Ducktail Wing",
    description: " An Elegant Blue Porsche 930 with RWB Bodykit and Ducktail Wing Style on 64 Scale.",
    image: "/assets/work/rwb-porsche.JPG",
    link: ""
  },
  {
    id: 9,
    category: "Miniature Photography",
    title: "RWB Porsche 964 Apple Wing",
    description: " A Stunning RWB Porsche 964 with Apple Livery and Big Wing Style on 64 Scale.",
    image: "/assets/work/rwb-apple.JPG",
    link: ""
  },
  {
    id: 10,
    category: "Miniature Photography",
    title: "1:64 Hot Wheels 1985 Honda City Turbo II",
    description: " A Fresh Orange from 1985 Honda City turbo reflected on 64 Scale by Hot Wheels.",
    image: "/assets/work/citbo-orange.PNG",
    link: ""
  }
];

const categories = ["Logo Design", "Ecommerce Layout", "Miniature Photography"];

const Work = () => {
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
          </h2>
          { /* tabs */}
          <Tabs 
            defaultValue="Logo Design" 
            className="w-full flex flex-col gap-6 xl:gap-12"
          >
            {/* tabs list */}
            <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
              {categories.map((category)=> {
                return (
                  <TabsTrigger key={category} value={category} className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state-active]:border-accent h-[48px] px-6 rounded-full cursor-pointer">
                    {category === "Logo Design" ? "Logo Design" : category}
                    </TabsTrigger>
                )
              })}
            </TabsList>
            {/* tabs content */}
            <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
              {categories.map((category) => {
                return (
                  <TabsContent key={category} value={category}>
                    <Swiper 
                      modules={[Pagination]} 
                      pagination={{ clickable: true, dynamicBullets: true }} 
                      className="h-max xl:h-[460px]"
                    >
                      {projects
                      .filter((project) => project.category === category)
                      .map((project)=> {
                        return (
                          <SwiperSlide key={project.id} className="h-full ">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* description */}
                                <p className="text-lg justify text-white/70">{project.description}</p>
                                {/* btns */}
                                <Link href={project.link}>
                                  <button className="btn btn-sm btn-accent flex gap-2">
                                    <MdArrowOutward className="text-xl" />
                                    <span>View Project</span>
                                  </button>
                                </Link>
                              </div>
                              {/* project image */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] aspect-[4/3] relative order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image 
                                   src={project.image} 
                                   alt={project.title} 
                                   fill 
                                   className="object-contain"
                                 />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
