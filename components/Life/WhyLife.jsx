import React from "react";
import { Wallet, BookOpen, DollarSign } from "lucide-react";

const WhyLife = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Why Many South Africans Lack Life Insurance
          </h1>
          <p className="text-muted-foreground">
            According to a recent study, only 10% of South African consumers
            have life insurance. This is due to the tendency to prioritize daily
            necessities over long-term planning, as well as a general lack of
            knowledge about the benefits of life insurance.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <Wallet className="w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Economic Hardships</h3>
            <p className="text-muted-foreground">
              Difficult to prioritize life insurance over immediate needs during
              times of financial strain.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Lack of Awareness</h3>
            <p className="text-muted-foreground">
              Insufficient understanding about the important role life insurance
              plays in protecting one's family.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <DollarSign className="w-10 h-10 text-primary" />
            <h3 className="text-xl font-semibold">Misconceptions about Cost</h3>
            <p className="text-muted-foreground">
              Many perceive life insurance as unaffordable, leading them to
              dismiss it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyLife;
