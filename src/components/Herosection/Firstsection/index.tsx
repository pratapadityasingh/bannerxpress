"use client";
import React from "react";
import Link from "next/link";

import { Search, MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/Common-ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Homesection: React.FC = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div className="flex flex-col ">
            <main className="">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 md:px-0 px-5 ">
                <div className="container px-4 md:px-6">
                  <motion.div
                    className="flex flex-col items-center space-y-4 text-center"
                    initial="initial"
                    animate="animate"
                    variants={fadeInUp}
                  >
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#000000]">
                        Welcome to BannerXpress
                      </h1>
                      <p className="mx-auto max-w-[700px]  md:text-xl text-[#03A9AC]">
                        Connect businesses with wall spaces. Advertise smarter,
                        faster, and more efficiently.
                      </p>
                    </div>
                    <div className="space-x-4">
                      <Link href="/find-wall-space">
                        <Button className="border-[1px] rounded-[5px] border-[#03A9AC] p-2 text-[#03A9AC]">Find Wall Space</Button>
                      </Link> 
                      <Link href="/post-wall">
                        <Button variant="outline" className="border-[1px] rounded-[5px] border-[#03A9AC] p-2 text-[#03A9AC]">List Your Wall</Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homesection;
