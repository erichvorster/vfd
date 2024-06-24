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
  Hospital,
  LifeBuoy,
  Shield,
  Briefcase,
  Phone,
  Mail,
  Locate,
} from "lucide-react";
import { Navbar } from "../../components/NavBar";

const page = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl space-y-8 py-12 md:py-16 lg:py-20">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in touch
          </h2>
          <p className="text-muted-foreground">
            Have a question about our insurance or investment products? Fill out
            the form and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 555-5555"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="font-semibold">
                  What are you interested in?
                </Label>
                <div className="grid gap-4 justify-between">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <Hospital className="h-6 w-6" />
                      <span>Health Insurance</span>
                    </div>
                    <Checkbox name="products" id="health-insurance" />
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <LifeBuoy className="h-6 w-6" />
                      <span>Life Insurance</span>
                    </div>
                    <Checkbox name="products" id="life-insurance" />
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-6 w-6" />
                      <span>Short-Term Insurance</span>
                    </div>
                    <Checkbox name="products" id="short-term-insurance" />
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-6 w-6" />
                      <span>Investment</span>
                    </div>
                    <Checkbox name="products" id="investment" />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="text-muted-foreground">
                Get in touch with our team for more information.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-primary" />
                <a href="#" className="text-primary">
                  +1 (555) 555-5555
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-6 w-6 text-primary" />
                <a href="#" className="text-primary">
                  info@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Locate className="h-6 w-6 text-primary" />
                <span>123 Main St, Anytown USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
