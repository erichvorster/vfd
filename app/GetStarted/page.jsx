"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { motion } from "framer-motion";
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
import ShortTerm from "../../components/GetStarted/ShortTerm";
import Investments from "../../components/GetStarted/Investments";
import MedicalAid from "../../components/GetStarted/MedicalAid";
import LifeInsurance from "../../components/GetStarted/LifeInsurance";
import { Checkbox } from "../../components/ui/checkbox";

const page = () => {
  return (
    <>
      <div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#275f44]">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#c4b078] tracking-tighter sm:text-4xl md:text-5xl">
                  Get Started in 3 Easy Steps
                </h2>
                <p className=" text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to get a quote for your project.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Select a Product</h3>
                  <p className="text-muted-foreground">
                    Fill out our simple form to get started.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Complete the form</h3>
                  <p className="text-muted-foreground">
                    We'll review your request and provide a quote.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Submit</h3>
                  <p className="text-muted-foreground">
                    Once you accept the quote, we'll get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <div className="container px-4  pb-44">
          <Tabs
            defaultValue="short-term-car"
            className="w-full max-w-[800px] mx-auto"
          >
            <div className="space-y-4  py-6 mt-16">
              <h1 className="text-xl md:text-3xl font-bold flex  items-center">
                <div className="flex flex-shrink-0 mr-4 h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
                Select a Product
              </h1>
              <p className="text-muted-foreground flex justify-between items-center">
                Explore our wide range of insurance and investment products to
                find the best fit for your needs.
              </p>
            </div>
            <TabsList className="grid grid-cols-4 w-full border shadow">
              <TabsTrigger
                value="short-term-car"
                className="flex items-center gap-2"
              >
                Short Term Car
              </TabsTrigger>
              <TabsTrigger
                value="investments"
                className="flex items-center gap-2"
              >
                Investments
              </TabsTrigger>
              <TabsTrigger
                value="medical-aid"
                className="flex items-center gap-2"
              >
                Medical Aid
              </TabsTrigger>
              <TabsTrigger
                value="life-insurance"
                className="flex items-center gap-2"
              >
                Life Insurance
              </TabsTrigger>
            </TabsList>
            <div className="space-y-4 py-6 mt-12">
              <h1 className="text-xl md:text-3xl font-bold flex items-center">
                <div className="flex flex-shrink-0 mr-4 h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
                Complete the Relevant Product Form
              </h1>
              <p className="text-muted-foreground flex justify-between items-center">
                Explore our wide range of insurance and investment products to
                find the best fit for your needs.
              </p>
            </div>
            <TabsContent value="short-term-car">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ShortTerm />
              </motion.div>
            </TabsContent>
            <TabsContent value="investments">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Investments />
              </motion.div>
            </TabsContent>
            <TabsContent value="medical-aid">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MedicalAid />
              </motion.div>
            </TabsContent>
            <TabsContent value="life-insurance">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LifeInsurance />
              </motion.div>
            </TabsContent>
          </Tabs>
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-xl md:text-3xl font-bold flex  items-center mt-16 mb-8">
              <div className="flex flex-shrink-0 mr-4 h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                3
              </div>
              Submit your form details for review
            </h1>
            <div className="space-y-4 px-4 py-6  border bg-muted rounded-lg shadow ">
              <div className="flex flex-col items-start gap-4 ">
                <div className="flex items-center space-x-2 mt-8">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">
                    I agree that all the information entered above is factually
                    correct
                  </Label>
                </div>
                <p className="text-muted-foreground">
                  Please review your form details before submitting.
                </p>
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
