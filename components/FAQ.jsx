"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useLanguage } from "../components/Context/useLangauge"; // Import useLanguage

const FAQ = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const faqTranslations = translations[language].homePage.faqComponent;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#c4b078] tracking-tighter sm:text-5xl">
              {faqTranslations.title}
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {faqTranslations.description}
            </p>
          </div>
        </div>
        <Tabs defaultValue="life-insurance" className="w-full md:w-1/2 mx-auto">
          <TabsList className="grid w-full grid-cols-4 gap-2">
            <TabsTrigger value="life-insurance">
              <span className="block md:hidden">
                {faqTranslations.tabs.lifeInsurance.split(" ")[0]}
              </span>
              <span className="hidden md:block">
                {faqTranslations.tabs.lifeInsurance}
              </span>
            </TabsTrigger>
            <TabsTrigger value="medical-aid">
              <span className="block md:hidden">
                {faqTranslations.tabs.medicalAid.split(" ")[0]}
              </span>
              <span className="hidden md:block">
                {faqTranslations.tabs.medicalAid}
              </span>
            </TabsTrigger>
            <TabsTrigger value="car-home-insurance">
              <span className="block md:hidden">
                {faqTranslations.tabs.carHomeInsurance.split(" ")[0]}
              </span>
              <span className="hidden md:block">
                {faqTranslations.tabs.carHomeInsurance}
              </span>
            </TabsTrigger>
            <TabsTrigger value="investment">
              <span className="block md:hidden">
                {faqTranslations.tabs.investment.split(" ")[0]}
              </span>
              <span className="hidden md:block">
                {faqTranslations.tabs.investment}
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="life-insurance">
            <Accordion type="single" collapsible className="w-full">
              {faqTranslations.faqs.lifeInsurance.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`life-insurance-${index + 1}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="medical-aid">
            <Accordion type="single" collapsible className="w-full">
              {faqTranslations.faqs.medicalAid.map((faq, index) => (
                <AccordionItem key={index} value={`medical-aid-${index + 1}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="car-home-insurance">
            <Accordion type="single" collapsible className="w-full">
              {faqTranslations.faqs.carHomeInsurance.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`car-home-insurance-${index + 1}`}
                >
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent value="investment">
            <Accordion type="single" collapsible className="w-full">
              {faqTranslations.faqs.investment.map((faq, index) => (
                <AccordionItem key={index} value={`investment-${index + 1}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-left">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default FAQ;
