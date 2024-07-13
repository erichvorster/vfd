"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  RecycleIcon,
  PiggyBankIcon,
  CastleIcon,
  ScrollIcon,
  ShieldIcon, // Long-term insurance
  HeartIcon, // Medical funds
  HospitalIcon,
  HandCoinsIcon,
  CarIcon,
  CheckIcon,
} from "lucide-react";
import { Partners } from "../../components/Partners";
import CTA from "../../components/CTA";
import {
  motion,
  useInView,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { FAQ } from "../../components/FAQ";

const staggerDuration = 0.05;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDuration,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const services = [
  {
    id: "long-term-insurance",
    icon: ShieldIcon,
    title: "Long-term Insurance",
    description:
      "Our long-term insurance services provide you with the peace of mind that comes from knowing you're covered for the long haul. Whether it's life insurance, disability insurance, or long-term care insurance, we have the solutions to meet your needs. Our experts work with you to ensure you get the right coverage at the right price, providing financial security for you and your family.",
    subServices: [
      "Life Insurance",
      "Disability Insurance",
      "Long-term Care Insurance",
      "Term Life Insurance",
      "Whole Life Insurance",
      "Universal Life Insurance",
      "Critical Illness Insurance",
    ],
  },
  {
    id: "investment-management",
    icon: PiggyBankIcon,
    title: "Investment Management",
    description:
      "Our investment management services are designed to help you achieve your financial goals. We work closely with you to develop a diversified portfolio that aligns with your risk profile and investment objectives. Our team of experienced professionals actively monitors and manages your investments to ensure they continue to meet your needs, adapting to market changes and opportunities.",
    subServices: [
      "Investment Planning",
      "Portfolio Optimization",
      "Risk Management",
      "Wealth Preservation",
      "Asset Allocation",
      "Retirement Accounts Management",
      "Tax-Efficient Investing",
      "Active Portfolio Management",
    ],
  },
  {
    id: "medical-funds",
    icon: HeartIcon,
    title: "Medical Funds",
    description:
      "Our medical funds services ensure that you have the necessary coverage for all your healthcare needs. We help you choose the right medical fund that suits your requirements and budget, providing peace of mind in times of medical need. From routine check-ups to emergency treatments, our plans cover a wide range of medical services.",
    subServices: [
      "Healthcare Coverage",
      "Medical Fund Selection",
      "Budget-Friendly Plans",
      "Hospitalization Coverage",
      "Outpatient Services",
      "Prescription Coverage",
      "Dental and Vision Plans",
      "Preventive Care",
    ],
  },
  {
    id: "gap-cover",
    icon: HospitalIcon,
    title: "Gap Cover",
    description:
      "Our gap cover services bridge the financial gap between what your medical fund pays and the actual cost of healthcare. We ensure you have the necessary cover to handle unexpected medical expenses without financial strain. This includes coverage for specialists, procedures, and treatments that may not be fully covered by your primary medical fund.",
    subServices: [
      "Financial Gap Coverage",
      "Medical Expense Coverage",
      "Unexpected Expense Management",
      "Specialist Coverage",
      "Surgical Procedure Coverage",
      "High-Cost Treatment Coverage",
      "Emergency Medical Expenses",
      "Travel Health Insurance",
    ],
  },
  {
    id: "short-term-insurance",
    icon: CarIcon,
    title: "Short-term Insurance",
    description:
      "Our short-term insurance services provide you with the coverage you need for your home, car, and other personal belongings. We offer a range of policies to protect you against loss, damage, or theft, ensuring you're covered for all eventualities. Our policies are flexible and can be tailored to meet your specific needs, offering comprehensive protection.",
    subServices: [
      "Home Insurance",
      "Car Insurance",
      "Personal Belongings Insurance",
      "Renters Insurance",
      "Travel Insurance",
      "Pet Insurance",
      "Liability Coverage",
      "Accidental Damage Cover",
    ],
  },
  {
    id: "estate-planning",
    icon: CastleIcon,
    title: "Estate Planning",
    description:
      "Our estate planning services help you protect your assets and ensure your wishes are carried out. We work with you to create a comprehensive plan that includes wills, trusts, and other legal documents to safeguard your legacy and provide for your loved ones. Our goal is to ensure that your estate is managed according to your wishes, minimizing taxes and legal complications.",
    subServices: [
      "Wills",
      "Trusts",
      "Asset Protection",
      "Legacy Planning",
      "Estate Tax Planning",
      "Power of Attorney",
      "Healthcare Directives",
      "Probate Assistance",
    ],
  },
  {
    id: "will",
    icon: ScrollIcon,
    title: "Will",
    description:
      "Our will services help you draft a clear and legally binding document that outlines your wishes for your estate. We ensure your will is comprehensive and reflects your desires, providing peace of mind that your loved ones are taken care of according to your intentions. Our experts assist you in navigating the legal requirements and making informed decisions.",
    subServices: [
      "Will Drafting",
      "Legal Document Preparation",
      "Estate Management",
      "Guardianship Provisions",
      "Executor Guidance",
      "Estate Distribution Planning",
      "Legal Advice",
      "Update and Review Services",
    ],
  },
  {
    id: "retirement-planning",
    icon: HandCoinsIcon,
    title: "Retirement Planning",
    description:
      "Our retirement planning services help you create a personalized strategy to ensure a comfortable and secure retirement. We consider your current financial situation, goals, and risk tolerance to develop a plan that maximizes your savings and investments. Our services include retirement income planning, tax optimization, and social security maximization.",
    subServices: [
      "Personalized Strategy",
      "Savings Maximization",
      "Investment Planning",
      "Risk Management",
      "Retirement Income Planning",
      "Tax Optimization",
      "Social Security Maximization",
      "Long-Term Care Planning",
    ],
  },
];

const ServiceSection = ({ service, reverse }) => {
  const Icon = service.icon;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useViewportScroll();
  const subServicesY = useTransform(scrollY, [0, 1000], [100, -50]);

  useEffect(() => {
    if (!isInView) {
      subServicesY.stop();
    }
  }, [isInView, subServicesY]);

  return (
    <section
      id={service.id}
      className={`py-12 md:py-24 lg:py-32 ${reverse ? "bg-muted" : ""}`}
    >
      <div
        ref={ref}
        className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-12 md:px-6"
      >
        <div
          className={`flex flex-col gap-4 ${
            reverse ? "md:order-2" : ""
          } md:col-span-2`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#275f44] text-[#c4b078]">
            <Icon />
          </div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-muted-foreground md:text-xl ">
            {service.description}
          </p>
        </div>
        <motion.div
          initial={{ y: 50 }}
          animate={isInView ? { y: subServicesY } : { y: 50 }}
          className="flex flex-col justify-center md:col-span-1 bg-[#19a65b] bg-opacity-20 p-4 rounded-lg"
        >
          <ul className="grid gap-2">
            {service.subServices.map((subService, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2"
                variants={itemVariants}
              >
                <CheckIcon className="h-4 w-4 text-green-500" />
                {subService}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const page = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="w-full">
      <section className="bg-[#275f44] relative py-12 md:py-24 lg:py-32">
        <div ref={ref} className="container px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
              variants={itemVariants}
            >
              Our Financial Services
            </motion.h1>
            <motion.p
              className="mt-4 text-muted-foreground md:text-xl"
              variants={itemVariants}
            >
              Discover how our comprehensive financial services can help you
              achieve your goals.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6 lg:gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={buttonVariants}>
                <Link
                  href={`#${service.id}`}
                  className="drop-shadow-xl shadow-black/10 dark:shadow-white/10 group flex flex-col items-center justify-center rounded-lg bg-background p-4 text-center transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  prefetch={false}
                >
                  <service.icon className="h-8 w-8 text-[#c4b078]" />
                  <h3 className="mt-2 text-sm font-medium">{service.title}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Partners />

      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reverse={index % 2 !== 0}
        />
      ))}

      <CTA />
      <FAQ />
    </div>
  );
};

export default page;
