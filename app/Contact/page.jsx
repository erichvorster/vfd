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
import {
  PhoneIcon,
  MailOpenIcon,
  MapPinIcon,
  LocateIcon,
  MailIcon,
  ClockIcon,
} from "lucide-react";
import fam from "../../public/fam.jpg";
import Image from "next/image";
import { CardTitle, CardDescription } from "../../components/ui/card";

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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c4b078] sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of financial advisors is here to help you achieve your
              financial goals. Fill out the form below and we'll be in touch
              shortly.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <MapPinIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Acme Financial Advisors</p>
                <p className="text-muted-foreground">
                  123 Main St, Anytown USA 12345
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">(123) 456-7890</p>
                <p className="text-muted-foreground">
                  Monday - Friday, 9am - 5pm
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MailOpenIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">info@acmefinancial.com</p>
                <p className="text-muted-foreground">
                  We typically respond within 1 business day
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ClockIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Business Hours</p>
                <p className="text-muted-foreground">
                  Monday - Friday, 9am - 5pm
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Card className="p-6 md:p-8">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default page;
