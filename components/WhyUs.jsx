"use client";

import React from "react";
import { Lightbulb, BarChart, Shield } from "lucide-react";
import { useLanguage } from "../components/Context/useLangauge"; // Import useLanguage

const icons = {
  Lightbulb: <Lightbulb className="h-12 w-12 text-[#c4b078]" />,
  BarChart: <BarChart className="h-12 w-12 text-[#c4b078]" />,
  Shield: <Shield className="h-12 w-12 text-[#c4b078]" />,
};

const WhyUs = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const whyUsTranslations = translations[language].homePage.whyUsComponent;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container pl-4">
        <h1 className="text-3xl font-bold tracking-tighter text-[#c4b078] sm:text-5xl mb-12">
          {whyUsTranslations.title}
        </h1>
      </div>
      <div className="container grid items-start justify-start gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
        {whyUsTranslations.reasons.map((reason, index) => (
          <div key={index} className="space-y-4">
            {icons[reason.icon]}
            <h3 className="text-xl font-bold">{reason.title}</h3>
            <p className="text-muted-foreground">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
