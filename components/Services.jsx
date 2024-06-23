"use client";

import React from "react";
import { PiggyBank, Car, Hospital, LifeBuoy, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container ">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary mb-14">
          How We Help
        </h2>
        <div className="grid gap-8 px-4 md:px-6 lg:grid-cols-4 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group space-y-4 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#19a65b] hover:bg-opacity-20 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#275f44] text-[#c4b078]">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold transition-colors duration-300 ease-in-out group-hover:text-[#19a65b]">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                prefetch={false}
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    icon: <PiggyBank className="h-6 w-6" />,
    title: "Investment Planning",
    description:
      "Maximize your returns with our expert investment planning services. We provide tailored strategies to help you achieve your financial goals.",
    link: "#",
  },
  {
    icon: <Hospital className="h-6 w-6" />,
    title: "Medical Aid Insurance",
    description:
      "Ensure you have the best medical coverage for you and your family with our comprehensive medical aid insurance plans.",
    link: "#",
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: "Short Term Insurance (Car and Home)",
    description:
      "Protect your valuable assets with our reliable short term insurance solutions for your car and home.",
    link: "#",
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: "Life Insurance",
    description:
      "Secure your family's future with our life insurance policies, designed to provide financial stability in times of need.",
    link: "#",
  },
];
