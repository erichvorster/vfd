"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Link from "next/link";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";
import { PhoneIcon, MailOpenIcon, MapPinIcon } from "lucide-react";
import fam from "../../public/fam.jpg";
import Image from "next/image";

import {
  Hospital,
  LifeBuoy,
  Shield,
  Briefcase,
  Phone,
  Mail,
  Locate,
} from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-[#275f44] py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
                Trusted Financial Advisors
              </h1>
              <p className="text-lg text-primary-foreground md:text-xl">
                Guiding you towards financial success.
              </p>
            </div>
            <Image
              src={fam}
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-2">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="space-y-2">
                <MailOpenIcon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-muted-foreground">
                  info@financialadvisors.com
                </p>
              </div>
              <div className="space-y-2">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Fill out the form below to send us a message.
                </p>
                <form className="mt-8 grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      type="text"
                      placeholder="Name"
                      className="col-span-1"
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="col-span-1"
                    />
                  </div>
                  <Input type="text" placeholder="Subject" />
                  <Textarea
                    placeholder="Message"
                    className="h-32 resize-none"
                  />
                  <Button type="submit" className="justify-self-end">
                    Submit
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Products
                </h2>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="life-insurance" />
                    <Label htmlFor="life-insurance">Life Insurance</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="investments" />
                    <Label htmlFor="investments">Investments</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="medical-aids" />
                    <Label htmlFor="medical-aids">Medical Aids</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="gap-cover" />
                    <Label htmlFor="gap-cover">Gap Cover</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="card-home-insurance" />
                    <Label htmlFor="card-home-insurance">
                      Card and Home Insurance
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="estate-planning" />
                    <Label htmlFor="estate-planning">Estate Planning</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="wills" />
                    <Label htmlFor="wills">Wills</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="retirement-planning" />
                    <Label htmlFor="retirement-planning">
                      Retirement Planning
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Find Us
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Visit our office or schedule a virtual consultation.
                </p>
                <div className="mt-8 rounded-lg border">
                  <div className="aspect-[4/3] w-full rounded-lg" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Business Hours
                </h2>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Saturday</p>
                    <p>10:00 AM - 2:00 PM</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Twitter
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
