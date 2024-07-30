"use client";

import React from "react";
import { ServerIcon, InfinityIcon, InfoIcon } from "lucide-react";
import { useLanguage } from "../../components/Context/useLangauge"; // Import useLanguage

const iconMapping = {
  InfinityIcon: InfinityIcon,
  InfoIcon: InfoIcon,
  ServerIcon: ServerIcon,
};

const Mission = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const missionTranslations = translations[language].aboutPage.missionComponent;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#275f44] ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-800 sm:text-4xl md:text-5xl ">
              {missionTranslations.title}
            </h2>
            <p className="max-w-[800px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {missionTranslations.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {missionTranslations.values.map((value, index) => {
              const IconComponent = iconMapping[value.icon];
              return (
                <div key={index} className="flex flex-col items-center gap-2">
                  <IconComponent className="h-8 w-8 text-[#c4b078]" />
                  <h3 className="text-lg font-semibold text-zinc-800">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
