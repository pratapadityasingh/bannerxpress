"use client";
import { Button } from "@/components/Common-ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import React from "react";
import Image from "next/image";
import imageurl from "../../../../public/assets/banner.webp";
import Link from "next/link";
import { CircleArrowUpIcon as CircleArrowUpRight } from 'lucide-react'
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Secondsection = () => {
  return (
    <>
      <section className="md:px-0 px-5">
        <div className="container mx-auto">
          <motion.div
            className="grid gap-6 lg:grid-cols-2 items-center"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#000]">
                Advertise Your Business with Impact
              </h2>
              <p className="text-gray-500 dark:text-[#343434] md:text-xl">
                Transform blank walls into powerful marketing tools. Reach your
                target audience with eye-catching banners in prime locations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#03A9AC] mr-2" />
                  <span>High-visibility locations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#03A9AC] mr-2" />
                  <span>Customizable sizes and durations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#03A9AC] mr-2" />
                  <span>Cost-effective advertising solution</span>
                </li>
              </ul>
              <Link href="/create-camp">
                <Button  className="text-[#03A9AC] font-bold my-2 underline"> <CircleArrowUpRight className=" h-6 w-6" />
                  <span className="text-[#000] font-bold text-base ml-2">Your Ad Campaign</span></Button>
              </Link>
            </div>
            <div className="relative h-[355px] w-full rounded overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src={imageurl}
                  alt="imag"
                  className="w-full  object-cover"
                  width={500} // Set appropriate width
                  height={300} 
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-[#fff] text-xl font-bold">Your Ad Here</h3>
                <p className="text-[#fff]">Prime wall space available now</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Secondsection;
