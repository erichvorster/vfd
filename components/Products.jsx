import React from "react";
import { Bolt, Lock, Users, Rocket } from "lucide-react";

export const Products = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Our Product?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Our product offers unparalleled features and benefits that set us
            apart from the competition. With our cutting-edge technology and
            dedicated support, you'll be able to achieve your goals more
            efficiently than ever before.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Bolt className="h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">10x</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Faster Performance</h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Lock className="h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">100%</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">
              Secure &amp; Reliable
            </h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">24/7</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Expert Support</h3>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <Rocket className="h-8 w-8 text-primary" />
              <div className="text-3xl font-bold">99.9%</div>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Uptime Guarantee</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
