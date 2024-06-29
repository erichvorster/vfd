import React from "react";
import { Shield, Heart, Car, TrendingUp } from "lucide-react";

export const Products = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Indipendent Financial Advice
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            As an independent financial advisory firm, we work with a variety of
            service providers to offer you unbiased financial advice that best
            suits your needs. We collaborate with over 6 life insurers, 8
            medical aids, 5 short-term and car insurers, and 12 investment
            houses to ensure you receive the best options available.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm bg-[#19a65b] bg-opacity-20">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-[#c4b078]" />
              <div className="text-3xl font-bold">6+</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-[#19a65b]">
              Life Insurers
            </h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm bg-[#19a65b] bg-opacity-20">
            <div className="flex items-center space-x-4">
              <Heart className="h-8 w-8 text-[#c4b078]" />
              <div className="text-3xl font-bold">8+</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-[#19a65b]">
              Medical Aids
            </h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm bg-[#19a65b] bg-opacity-20">
            <div className="flex items-center space-x-4">
              <Car className="h-8 w-8 text-[#c4b078]" />
              <div className="text-3xl font-bold">5+</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-[#19a65b]">
              Short-term & Car Insurers
            </h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm bg-[#19a65b] bg-opacity-20">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-8 w-8 text-[#c4b078]" />
              <div className="text-3xl font-bold">12+</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-[#19a65b]">
              Investment Houses
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
