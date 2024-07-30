"use client";

import React from "react";
import Logo from "../../public/Logo.svg";
import Image from "next/image";
import { useLanguage } from "../../components/Context/useLangauge"; // Import useLanguage

const Hero = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const heroTranslations = translations[language].aboutPage.heroComponent;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 ">
          <div className="space-y-4 pt-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#c4b078]">
              {heroTranslations.title}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {heroTranslations.description}
            </p>
          </div>
          <div>
            <Image
              src={Logo}
              width="550"
              height="550"
              alt="About Us"
              className="mx-auto  overflow-hidden rounded-md object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
