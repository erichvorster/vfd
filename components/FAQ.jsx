import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export const FAQ = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to your most common questions about our financial
              advisory services.
            </p>
          </div>
        </div>
        <Tabs defaultValue="life-insurance" className="w-full md:w-1/2 mx-auto">
          <TabsList className="grid w-full grid-cols-4 gap-2">
            <TabsTrigger value="life-insurance">Life Insurance</TabsTrigger>
            <TabsTrigger value="medical-aid">Medical Aid</TabsTrigger>
            <TabsTrigger value="car-home-insurance">
              Car & Home Insurance
            </TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
          </TabsList>
          <TabsContent value="life-insurance">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="life-insurance-1">
                <AccordionTrigger>
                  What is life insurance and why do I need it?
                </AccordionTrigger>
                <AccordionContent>
                  Life insurance is a contract between you and an insurance
                  company that provides financial protection for your loved ones
                  in the event of your death. It can help cover expenses like
                  funeral costs, outstanding debts, and provide income
                  replacement for your family.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="life-insurance-2">
                <AccordionTrigger>
                  How much life insurance coverage do I need?
                </AccordionTrigger>
                <AccordionContent>
                  The amount of life insurance coverage you need depends on
                  factors like your age, income, debts, and the number of
                  dependents you have. As a general rule, you should aim for
                  coverage that's 10-15 times your annual income.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="life-insurance-3">
                <AccordionTrigger>
                  What are the different types of life insurance?
                </AccordionTrigger>
                <AccordionContent>
                  The main types of life insurance are term life, whole life,
                  and universal life. Term life provides coverage for a specific
                  period of time, while whole life and universal life provide
                  lifelong coverage with an investment component.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="life-insurance-4">
                <AccordionTrigger>
                  How does the cost of life insurance vary?
                </AccordionTrigger>
                <AccordionContent>
                  The cost of life insurance can vary based on factors like your
                  age, health, lifestyle, and the amount of coverage you need.
                  Younger, healthier individuals typically pay lower premiums,
                  while older or less healthy individuals may pay higher rates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="life-insurance-5">
                <AccordionTrigger>
                  Can I change my life insurance policy later on?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can usually make changes to your life insurance
                  policy, such as increasing or decreasing your coverage amount,
                  adding or removing beneficiaries, or switching between term
                  and permanent life insurance. However, these changes may
                  affect your premium costs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="medical-aid">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="medical-aid-1">
                <AccordionTrigger>
                  What is medical aid and how does it work?
                </AccordionTrigger>
                <AccordionContent>
                  Medical aid is a form of health insurance that covers the cost
                  of medical expenses, such as doctor visits, hospital stays,
                  and prescription drugs. Members pay a monthly premium, and the
                  medical aid plan covers a portion of the costs, depending on
                  the plan's benefits.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="medical-aid-2">
                <AccordionTrigger>
                  What are the different types of medical aid plans?
                </AccordionTrigger>
                <AccordionContent>
                  The main types of medical aid plans are hospital plans,
                  comprehensive plans, and savings plans. Hospital plans cover
                  only hospital-related expenses, while comprehensive plans
                  cover a wider range of medical services. Savings plans combine
                  medical coverage with a savings component.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="medical-aid-3">
                <AccordionTrigger>
                  How do I choose the right medical aid plan for me?
                </AccordionTrigger>
                <AccordionContent>
                  When choosing a medical aid plan, consider factors like your
                  age, health status, family size, and budget. It's also
                  important to understand the plan's benefits, exclusions, and
                  any waiting periods or pre-existing condition clauses.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="medical-aid-4">
                <AccordionTrigger>
                  What are the benefits of having medical aid?
                </AccordionTrigger>
                <AccordionContent>
                  The main benefits of having medical aid include access to
                  quality healthcare, protection from high medical costs, and
                  the ability to manage your health more proactively. Medical
                  aid can also provide tax benefits and cover preventive care
                  services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="medical-aid-5">
                <AccordionTrigger>
                  How do I file a claim with my medical aid?
                </AccordionTrigger>
                <AccordionContent>
                  The process for filing a claim with your medical aid will
                  depend on the specific plan, but typically you'll need to
                  submit the necessary documentation, such as invoices and
                  receipts, to the plan administrator. Many medical aid
                  providers also offer online or mobile claim submission
                  options.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="car-home-insurance">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="car-home-insurance-1">
                <AccordionTrigger>
                  What is car and home insurance, and why do I need it?
                </AccordionTrigger>
                <AccordionContent>
                  Car and home insurance are types of property insurance that
                  protect you financially in the event of accidents, theft, or
                  damage to your vehicle or home. Car insurance is required by
                  law in most places, while home insurance is typically required
                  by mortgage lenders.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="car-home-insurance-2">
                <AccordionTrigger>
                  What does car and home insurance cover?
                </AccordionTrigger>
                <AccordionContent>
                  Car insurance typically covers liability, collision, and
                  comprehensive coverage. Liability covers damage you cause to
                  others, collision covers damage to your vehicle, and
                  comprehensive covers non-collision events like theft or
                  natural disasters. Home insurance covers the structure of your
                  home, your personal belongings, and liability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="car-home-insurance-3">
                <AccordionTrigger>
                  How can I save on car and home insurance premiums?
                </AccordionTrigger>
                <AccordionContent>
                  You can save on insurance premiums by raising your deductible,
                  bundling your car and home insurance, maintaining a good
                  driving record, and taking advantage of discounts like
                  multi-policy, good driver, and home security discounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="car-home-insurance-4">
                <AccordionTrigger>
                  What factors affect the cost of car and home insurance?
                </AccordionTrigger>
                <AccordionContent>
                  The cost of car and home insurance can be influenced by
                  factors such as your age, driving record, credit score, the
                  make and model of your vehicle, the age and condition of your
                  home, and the location of your home or vehicle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="car-home-insurance-5">
                <AccordionTrigger>
                  How do I file a claim for car or home insurance?
                </AccordionTrigger>
                <AccordionContent>
                  To file a claim, you'll typically need to contact your
                  insurance provider, provide details about the incident, and
                  submit any necessary documentation. The process may vary
                  depending on the type of claim and your insurance provider's
                  specific requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value="investment">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="investment-1">
                <AccordionTrigger>
                  What is investment and why is it important?
                </AccordionTrigger>
                <AccordionContent>
                  Investment is the act of putting money into financial
                  instruments, such as stocks, bonds, or real estate, with the
                  goal of generating a return. It's important because it can
                  help you grow your wealth, save for long-term goals like
                  retirement, and protect your money from the effects of
                  inflation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="investment-2">
                <AccordionTrigger>
                  What are the different types of investment products?
                </AccordionTrigger>
                <AccordionContent>
                  The main types of investment products include stocks, bonds,
                  mutual funds, exchange-traded funds (ETFs), real estate, and
                  alternative investments like cryptocurrency or commodities.
                  Each type has its own risk and return characteristics, so it's
                  important to diversify your portfolio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="investment-3">
                <AccordionTrigger>How do I start investing?</AccordionTrigger>
                <AccordionContent>
                  To start investing, you'll need to open an investment account,
                  such as a brokerage account or retirement account. Then, you
                  can research and select the investment products that align
                  with your financial goals, risk tolerance, and investment
                  timeline. It's also a good idea to consult a financial advisor
                  for guidance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="investment-4">
                <AccordionTrigger>
                  What is the difference between active and passive investing?
                </AccordionTrigger>
                <AccordionContent>
                  Active investing involves actively managing a portfolio to try
                  to outperform the market, while passive investing involves
                  tracking a market index, often through index funds or ETFs.
                  Active investing typically has higher fees and requires more
                  research, while passive investing is generally lower-cost and
                  simpler.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="investment-5">
                <AccordionTrigger>
                  How do I diversify my investment portfolio?
                </AccordionTrigger>
                <AccordionContent>
                  Diversifying your investment portfolio means spreading your
                  investments across different asset classes, industries, and
                  geographic regions. This can help reduce your overall risk and
                  potentially improve your long-term returns. A financial
                  advisor can help you create a diversified portfolio based on
                  your goals and risk tolerance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
