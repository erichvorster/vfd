import React from "react";
import { Lightbulb, BarChart, Shield } from "lucide-react";

export const WhyUs = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-4 text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Expert Financial Advisors</h3>
          <p className="text-muted-foreground">
            Our team comprises seasoned professionals with years of experience
            in the financial industry. We leverage our expertise to provide you
            with the best advice and strategies tailored to your unique needs.
            Our advisors are dedicated to helping you navigate the complexities
            of financial planning with confidence.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <BarChart className="mx-auto h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">
            Personalized Service & Comprehensive Solutions
          </h3>
          <p className="text-muted-foreground">
            We understand that every client is different. Our approach is
            client-centric, ensuring personalized solutions that align with your
            financial goals and aspirations. From investment planning and
            medical aid insurance to short-term and life insurance, we offer a
            full spectrum of financial services to cover all aspects of your
            financial well-being.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Integrity, Insights & Support</h3>
          <p className="text-muted-foreground">
            We uphold the highest standards of integrity and transparency in all
            our dealings. Our strategies are grounded in data-driven insights
            and the latest market trends, ensuring informed and effective
            financial advice. Protecting your investments is our priority
            through proactive risk management techniques. Additionally, our
            dedicated support team is always available to assist you with any
            questions.
          </p>
        </div>
      </div>
    </section>
  );
};
