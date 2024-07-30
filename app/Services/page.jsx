"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  RecycleIcon,
  PiggyBankIcon,
  CastleIcon,
  ScrollIcon,
  ShieldIcon, // Long-term insurance
  HeartIcon, // Medical funds
  HospitalIcon,
  HandCoinsIcon,
  CarIcon,
  CheckIcon,
} from "lucide-react";
import { Partners } from "../../components/Partners";
import CTA from "../../components/CTA";
import {
  motion,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import FAQ from "../../components/FAQ";
import { useLanguage } from "../../components/Context/useLangauge"; // Import useLanguage

const staggerDuration = 0.05;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDuration,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const iconMapping = {
  ShieldIcon: ShieldIcon,
  PiggyBankIcon: PiggyBankIcon,
  HeartIcon: HeartIcon,
  HospitalIcon: HospitalIcon,
  CarIcon: CarIcon,
  CastleIcon: CastleIcon,
  ScrollIcon: ScrollIcon,
  HandCoinsIcon: HandCoinsIcon,
};

const ServiceSection = ({ service, reverse }) => {
  const Icon = iconMapping[service.icon];
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useViewportScroll();
  const subServicesY = useTransform(scrollY, [0, 1000], [100, -50]);

  useEffect(() => {
    if (!isInView) {
      subServicesY.stop();
    }
  }, [isInView, subServicesY]);

  return (
    <section
      id={service.id}
      className={`py-12 md:py-24 lg:py-32 mb-16 md:mb-0 ${
        reverse ? "bg-muted" : ""
      }`}
    >
      <div
        ref={ref}
        className="container grid grid-cols-1 gap-0  px-4 md:grid-cols-3 md:gap-12 md:px-6"
      >
        <div
          className={`flex flex-col gap-4 ${
            reverse ? "md:order-2" : ""
          } md:col-span-2`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#275f44] text-[#c4b078]">
            <Icon />
          </div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-muted-foreground md:text-xl ">
            {service.description}
          </p>
        </div>
        <motion.div
          initial={{ y: 50 }}
          animate={isInView ? { y: subServicesY } : { y: 50 }}
          className="flex flex-col justify-center md:col-span-1 bg-[#19a65b] bg-opacity-20 p-4 rounded-lg"
        >
          <ul className="grid gap-2">
            {service.subServices.map((subService, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <CheckIcon className="h-4 w-4 text-green-500" />
                {subService}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const { language, translations } = useLanguage(); // Get language and translations

  const servicesTranslations = translations[language].servicesPage;

  return (
    <div className="w-full">
      <section className="bg-[#275f44] relative py-12 md:py-24 lg:py-32 hero-hero min-h-screen md:min-h-0 flex items-center">
        <div ref={ref} className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#c4b078]"
              variants={itemVariants}
            >
              {servicesTranslations.title}
            </motion.h1>
            <motion.p
              className="mt-4 text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              {servicesTranslations.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:gap-8"
          >
            {servicesTranslations.services.map((service) => {
              const IconComponent = iconMapping[service.icon];
              return (
                <motion.div
                  key={service.id}
                  variants={buttonVariants}
                  className="h-auto"
                >
                  <Link
                    href={`#${service.id}`}
                    className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    prefetch={false}
                  >
                    <IconComponent className="h-8 w-8 text-[#c4b078]" />
                    <h3 className="mt-2 text-sm font-medium">
                      {service.title}
                    </h3>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Partners />

      {servicesTranslations.services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default ServicesPage;
