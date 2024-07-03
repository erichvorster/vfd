"use client";

import React from "react";
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

export const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-14">
          How We Can Help You
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
                <h3 className="text-xl font-bold transition-colors duration-300 ease-in-out ">
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
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Long-term Insurance",
    description:
      "Ensure lifelong coverage with our comprehensive long-term insurance plans.",
    link: "#long-term-insurance",
  },
  {
    icon: <PiggyBankIcon className="h-6 w-6" />,
    title: "Investment Management",
    description:
      "Maximize your returns with our expert investment planning services.",
    link: "#investment-management",
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: "Medical Funds",
    description:
      "Ensure the best medical coverage for you and your family with our plans.",
    link: "/Services#medical-funds",
  },
  {
    icon: <HospitalIcon className="h-6 w-6" />,
    title: "Gap Cover",
    description:
      "Bridge the gap between medical fund payouts and actual healthcare costs.",
    link: "#gap-cover",
  },
  {
    icon: <CarIcon className="h-6 w-6" />,
    title: "Short-term Insurance",
    description:
      "Protect your car and home with our reliable short-term insurance solutions.",
    link: "#short-term-insurance",
  },
  {
    icon: <CastleIcon className="h-6 w-6" />,
    title: "Estate Planning",
    description:
      "Safeguard your assets and ensure your wishes are honored with our estate planning services.",
    link: "#estate-planning",
  },
  {
    icon: <ScrollIcon className="h-6 w-6" />,
    title: "Will",
    description:
      "Draft a clear and legally binding will to ensure your estate is managed according to your wishes.",
    link: "#will",
  },
  {
    icon: <HandCoinsIcon className="h-6 w-6" />,
    title: "Retirement Planning",
    description:
      "Plan a secure and comfortable retirement with our personalized strategies.",
    link: "#retirement-planning",
  },
];
