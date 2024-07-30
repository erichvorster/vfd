"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Sprout } from "lucide-react";
import Logo from "../public/Logo.svg";
import { useLanguage } from "../components/Context/useLangauge";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const aboutTranslations = translations[language].homePage.aboutComponent;

  return (
    <motion.section
      className="w-full py-12 md:py-24 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10"
        variants={containerVariants}
      >
        <motion.div
          className="relative w-full lg:rounded-md"
          variants={itemVariants}
        >
          <Image
            src={Logo}
            alt="About Us"
            objectFit="cover"
            className="rounded-xl"
          />
        </motion.div>
        <motion.div className="space-y-4 mb-20" variants={itemVariants}>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#c4b078] md:text-5xl">
              {aboutTranslations.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {aboutTranslations.description}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">
              {aboutTranslations.whyChooseUsTitle}
            </h3>
            <ul className="grid gap-2 text-muted-foreground">
              {aboutTranslations.reasons.map((reason, index) => (
                <li key={index} className="flex items-center text-sm gap-2">
                  <Check className="flex-shrink-0 h-5 w-5 text-[#c4b078]" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
