import React from "react";
import { Lightbulb, BarChart, Shield, Users } from "lucide-react";
import Image from "next/image";
import trendLine from "../public/llline.svg";

export const OurApproach = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 relative">
      <div className="container grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        {approachData.map((approach, index) => (
          <div
            key={index}
            className={`space-y-4 rounded-lg border bg-[#275f44] p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg h-96 ${
              index === 0
                ? "relative top-20"
                : index === 1
                ? "relative top-8"
                : index === 2
                ? "relative -top-4"
                : index === 3
                ? "relative -top-16"
                : ""
            }`}
          >
            {approach.icon}
            <h3 className="text-xl font-bold">{approach.title}</h3>
            <p className="text-muted-foreground">{approach.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const approachData = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technology and financial strategies to provide innovative solutions that meet your unique needs.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-primary" />,
    title: "Data-Driven Insights",
    description:
      "Our approach is grounded in data-driven insights, ensuring that our strategies are based on the latest market trends and analysis.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Risk Management",
    description:
      "We prioritize risk management to protect your investments and ensure long-term financial stability and growth.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Client-Centric Focus",
    description:
      "Our clients are at the heart of everything we do. We provide personalized service and tailored strategies to achieve your financial goals.",
  },
];
