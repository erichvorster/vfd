import React from "react";
import { ServerIcon, InfinityIcon, InfoIcon } from "lucide-react";

const Mission = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Mission and Values
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Acme Financial Advisors, our mission is to provide
              personalized, ethical financial guidance that helps our clients
              achieve their goals. We are committed to building long-term
              relationships based on trust, transparency, and a deep
              understanding of each client's unique needs and aspirations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-2">
              <InfinityIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Integrity</h3>
              <p className="text-muted-foreground text-sm">
                We uphold the highest standards of ethical conduct, always
                acting in the best interests of our clients.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <InfoIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Transparency</h3>
              <p className="text-muted-foreground text-sm">
                We are committed to open and honest communication, providing
                clear explanations of our recommendations and the rationale
                behind them.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ServerIcon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Client-Centered</h3>
              <p className="text-muted-foreground text-sm">
                Our clients' needs and goals are at the heart of everything we
                do, guiding our approach and decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
