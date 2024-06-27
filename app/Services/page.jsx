import React from "react";
import Link from "next/link";
import {
  RecycleIcon,
  PiggyBankIcon,
  CurrencyIcon,
  CastleIcon,
  RatioIcon,
  InfoIcon,
  BusIcon,
  SchoolIcon,
} from "lucide-react";
import { Partners } from "../../components/Partners";
import CTA from "../../components/CTA";

const page = () => {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Financial Services
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Discover how our comprehensive financial services can help you
              achieve your goals.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:gap-8">
            <Link
              href="#retirement-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <RecycleIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Retirement Planning</h3>
            </Link>
            <Link
              href="#investment-management"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <PiggyBankIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">
                Investment Management
              </h3>
            </Link>
            <Link
              href="#tax-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <CurrencyIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Tax Planning</h3>
            </Link>
            <Link
              href="#estate-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <CastleIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Estate Planning</h3>
            </Link>
            <Link
              href="#risk-management"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <RatioIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Risk Management</h3>
            </Link>
            <Link
              href="#insurance-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <InfoIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Insurance Planning</h3>
            </Link>
            <Link
              href="#business-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <BusIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Business Planning</h3>
            </Link>
            <Link
              href="#education-planning"
              className="group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <SchoolIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-2 text-sm font-medium">Education Planning</h3>
            </Link>
          </div>
        </div>
      </section>
      <Partners />
      <section id="retirement-planning" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <RecycleIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Retirement Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our retirement planning services help you create a personalized
              strategy to ensure a comfortable and secure retirement. We
              consider your current financial situation, goals, and risk
              tolerance to develop a plan that maximizes your savings and
              investments.
            </p>
          </div>
        </div>
      </section>
      <section
        id="investment-management"
        className="py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <PiggyBankIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Investment Management</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our investment management services are designed to help you
              achieve your financial goals. We work closely with you to develop
              a diversified portfolio that aligns with your risk profile and
              investment objectives. Our team of experienced professionals
              actively monitors and manages your investments to ensure they
              continue to meet your needs.
            </p>
          </div>
        </div>
      </section>
      <section id="tax-planning" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <CurrencyIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Tax Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our tax planning services help you minimize your tax liability and
              maximize your savings. We work closely with you to understand your
              unique financial situation and develop strategies to optimize your
              tax position, whether it's minimizing your income tax, capital
              gains tax, or estate tax.
            </p>
          </div>
        </div>
      </section>
      <section
        id="estate-planning"
        className="py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <CastleIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Estate Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our estate planning services help you protect your assets and
              ensure your wishes are carried out. We work with you to create a
              comprehensive plan that includes wills, trusts, and other legal
              documents to safeguard your legacy and provide for your loved
              ones.
            </p>
          </div>
        </div>
      </section>
      <section id="risk-management" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <RatioIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Risk Management</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our risk management services help you identify, assess, and
              mitigate potential risks to your financial well-being. We develop
              customized strategies to protect your assets, income, and family
              from unexpected events, ensuring you're prepared for the
              unexpected.
            </p>
          </div>
        </div>
      </section>
      <section
        id="insurance-planning"
        className="py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <InfoIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Insurance Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our insurance planning services help you protect your family and
              assets with the right insurance coverage. We analyze your unique
              needs and recommend the appropriate life, disability, long-term
              care, and other insurance policies to ensure you're covered in the
              event of unexpected circumstances.
            </p>
          </div>
        </div>
      </section>
      <section id="business-planning" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <BusIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Business Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our business planning services help you navigate the complex
              financial landscape of running a business. We assist with
              strategic planning, financial management, tax optimization, and
              succession planning to ensure the long-term success and
              sustainability of your business.
            </p>
          </div>
        </div>
      </section>
      <section
        id="education-planning"
        className="py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <SchoolIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Education Planning</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our education planning services help you prepare for the financial
              challenges of funding your children's education. We work with you
              to develop a comprehensive strategy that incorporates college
              savings, financial aid, and other educational funding options to
              ensure your family's educational goals are met.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
};

export default page;
