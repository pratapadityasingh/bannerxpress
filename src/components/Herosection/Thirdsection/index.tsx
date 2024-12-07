"use client"
import { motion } from "framer-motion";
import { CheckCircle, MessageSquare, Search, LayoutTemplate  } from "lucide-react";
import React from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const howItWorksItems = [
  {
    icon: Search,
    title: "Search",
    description: "Find the perfect wall space for your advertisement",
  },
  {
    icon: MessageSquare,
    title: "Connect",
    description: "Communicate directly with wall owners",
  },
  {
    icon: CheckCircle,
    title: "Advertise",
    description: "Finalize deals and start your ad campaign",
  },
  {
    icon: LayoutTemplate,
    title: "Templates",
    description: "Finalize deals and start your ad campaign",
  },
];
const Thirdsection = () => {
  return (
    <>
      <section className="py-[100px] md:px-0 px-5">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#000]"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            How It Work
          </motion.h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {howItWorksItems.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex flex-col items-center space-y-2 p-6 bg-white rounded-lg shadow-2xl"
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                <div className="p-2 bg-primary-100 rounded-full">
                  <item.icon className="h-8 w-8 text-primary text-[#03A9AC]" />
                </div>
                <h3 className="text-xl text-[#03A9AC] font-bold">{item.title}</h3>
                <p className="text-sm text-[#6B6B6D] text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Thirdsection;
