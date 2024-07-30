"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PiggyBankIcon,
  CarIcon,
  HospitalIcon,
  ShieldIcon,
  ScrollIcon,
  HandCoinsIcon,
  CastleIcon,
  HeartIcon,
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../components/Context/useLangauge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Services = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const servicesTranslations =
    translations[language].homePage.servicesComponent;

  const servicesIcons = [
    <ShieldIcon className="h-6 w-6" />,
    <PiggyBankIcon className="h-6 w-6" />,
    <HeartIcon className="h-6 w-6" />,
    <HospitalIcon className="h-6 w-6" />,
    <CarIcon className="h-6 w-6" />,
    <CastleIcon className="h-6 w-6" />,
    <ScrollIcon className="h-6 w-6" />,
    <HandCoinsIcon className="h-6 w-6" />,
  ];

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container px-4 ">
        <motion.h2
          className="text-3xl font-bold text-[#c4b078] tracking-tighter sm:text-4xl md:text-5xl mb-14"
          variants={itemVariants}
        >
          {servicesTranslations.title}
        </motion.h2>
        <motion.div
          className="grid gap-8 px-0  md:px-6 lg:grid-cols-4 lg:gap-12"
          variants={containerVariants}
        >
          {servicesTranslations.services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={service.link}
                className="group space-y-4 p-1  md:p-4  rounded-lg transition-all duration-300 ease-in-out hover:bg-[#19a65b] hover:bg-opacity-20 cursor-pointer block md:hover:bg-[#19a65b] md:hover:bg-opacity-20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#275f44] text-[#c4b078]">
                  {servicesIcons[index]}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold transition-colors duration-300 ease-in-out">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                  {servicesTranslations.learnMore}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1 md:group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
