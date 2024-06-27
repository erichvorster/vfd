import React from "react";
import About from "../../public/about_us.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Our Firm
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Acme Financial Advisors, we have been providing personalized
              financial planning and investment management services to
              individuals and families for over 20 years. Our team of
              experienced professionals is dedicated to helping our clients
              achieve their financial goals through a comprehensive and tailored
              approach. We believe in building long-term relationships based on
              trust, integrity, and a deep understanding of our clients' unique
              needs.
            </p>
          </div>
          <div>
            <Image
              src={About}
              width="550"
              height="310"
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-md object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
