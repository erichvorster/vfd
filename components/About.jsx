import React from "react";
import AboutImg from "../public/about.svg";
import Image from "next/image";
import { Check, Sprout } from "lucide-react";
import Chatting from "../public/chatting.jpg";
import Logo from "../public/logo.svg";

export const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="relative w-full   lg:rounded-md bg-">
          <Image
            src={Logo}
            alt="About Us"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <div className="p-1 bg-[#224c3a] rounded-full h-10 w-10">
            <Sprout className="h-8 w-8 text-[#c4b078]" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
              About Our Financial Services Firm
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We are a leading financial services firm in South Africa, focused
              on providing comprehensive investment planning, insurance
              solutions, and personalized strategies to help our clients achieve
              their financial goals.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold ">Why Choose Us?</h3>
            <ul className="grid gap-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[#c4b078]" />
                Expert financial advisors with years of experience
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5  text-[#c4b078]" />
                Personalized approach to meet your unique needs
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5  text-[#c4b078]" />
                Comprehensive suite of financial services
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[#c4b078]" />
                Dedicated customer support and guidance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
