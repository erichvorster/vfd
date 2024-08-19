"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Link from "next/link";
import { Textarea } from "../components/ui/textarea";
import { PhoneIcon, MailOpenIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { CardTitle, CardDescription } from "../components/ui/card";
import { useLanguage } from "../components/Context/useLangauge"; // Import useLanguage

const Contact = () => {
  const { language, translations } = useLanguage(); // Get language and translations

  const contactTranslations = translations[language].contactPage;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c4b078] sm:text-4xl md:text-5xl">
              {contactTranslations.heading}
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {contactTranslations.description}
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">
                  {contactTranslations.addressTitle}
                </p>
                <p className="text-muted-foreground">
                  {contactTranslations.address}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">{contactTranslations.phone}</p>
                <p className="text-muted-foreground">
                  {contactTranslations.phoneAvailability}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MailOpenIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">{contactTranslations.email}</p>
                <p className="text-muted-foreground">
                  {contactTranslations.emailResponse}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ClockIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">
                  {contactTranslations.businessHoursTitle}
                </p>
                <p className="text-muted-foreground">
                  {contactTranslations.businessHours}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card className="p-6 md:p-8">
            <CardHeader>
              <CardTitle>{contactTranslations.formTitle}</CardTitle>
              <CardDescription>
                {contactTranslations.formDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {contactTranslations.formFields.name}
                    </Label>
                    <Input
                      id="name"
                      placeholder={contactTranslations.formPlaceholders.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {contactTranslations.formFields.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={contactTranslations.formPlaceholders.email}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {contactTranslations.formFields.phone}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={contactTranslations.formPlaceholders.phone}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    {contactTranslations.formFields.message}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder={contactTranslations.formPlaceholders.message}
                  />
                </div>
                <Button type="submit">
                  {contactTranslations.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
