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
  ShieldIcon, // Long-term insurance
  BarChartIcon, // Investments
  HeartIcon, // Medical funds
  SlidersIcon, // Gap cover
  FileTextIcon, // Short-term insurance
  GlobeIcon, // Will
  ScrollIcon,
  HandCoins,
  HandCoinsIcon,
  CarIcon,
  HospitalIcon,
} from "lucide-react";
import { Partners } from "../../components/Partners";
import CTA from "../../components/CTA";

const page = () => {
  return (
    <div className="w-full">
      <section className="bg-[#275f44] py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Our Financial Services
            </h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Discover how our comprehensive financial services can help you
              achieve your goals.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:gap-8">
            <Link
              href="#long-term-insurance"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <ShieldIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Long-term Insurance</h3>
            </Link>
            <Link
              href="#investment-management"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <PiggyBankIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">
                Investment Management
              </h3>
            </Link>
            <Link
              href="#medical-funds"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <HeartIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Medical Funds</h3>
            </Link>
            <Link
              href="#gap-cover"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <HospitalIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Gap Cover</h3>
            </Link>
            <Link
              href="#short-term-insurance"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <CarIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Short-term Insurance</h3>
            </Link>
            <Link
              href="#estate-planning"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <CastleIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Estate Planning</h3>
            </Link>
            <Link
              href="#will"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <ScrollIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Will</h3>
            </Link>
            <Link
              href="#retirement-planning"
              className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              prefetch={false}
            >
              <RecycleIcon className="h-8 w-8 text-[#c4b078]" />
              <h3 className="mt-2 text-sm font-medium">Retirement Planning</h3>
            </Link>
          </div>
        </div>
      </section>
      <Partners />
      <section id="long-term-insurance" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <ShieldIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Long-term Insurance</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our long-term insurance services provide you with the peace of
              mind that comes from knowing you're covered for the long haul.
              Whether it's life insurance, disability insurance, or long-term
              care insurance, we have the solutions to meet your needs.
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
      <section id="medical-funds" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <HeartIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Medical Funds</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our medical funds services ensure that you have the necessary
              coverage for all your healthcare needs. We help you choose the
              right medical fund that suits your requirements and budget,
              providing peace of mind in times of medical need.
            </p>
          </div>
        </div>
      </section>
      <section id="gap-cover" className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <HospitalIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Gap Cover</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our gap cover services bridge the financial gap between what your
              medical fund pays and the actual cost of healthcare. We ensure you
              have the necessary cover to handle unexpected medical expenses
              without financial strain.
            </p>
          </div>
        </div>
      </section>
      <section id="short-term-insurance" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <CarIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Short-term Insurance</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our short-term insurance services provide you with the coverage
              you need for your home, car, and other personal belongings. We
              offer a range of policies to protect you against loss, damage, or
              theft, ensuring you're covered for all eventualities.
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
      <section id="will" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <ScrollIcon className="h-10 w-10 text-primary" />
              <h2 className="text-2xl font-bold">Will</h2>
            </div>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Our will services help you draft a clear and legally binding
              document that outlines your wishes for your estate. We ensure your
              will is comprehensive and reflects your desires, providing peace
              of mind that your loved ones are taken care of according to your
              intentions.
            </p>
          </div>
        </div>
      </section>
      <section
        id="retirement-planning"
        className="py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <HandCoinsIcon className="h-10 w-10 text-primary" />
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
      <CTA />
    </div>
  );
};

export default page;
