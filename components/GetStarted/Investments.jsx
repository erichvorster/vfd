import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const Investments = () => {
  return (
    <Card className="max-w-4xl mx-auto  sm:p-3 md:p-3 bg-muted">
      <CardHeader className="px-3 md:px-6">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Investment Information
        </CardTitle>
        <CardDescription>
          Please fill out the following details to create your investment
          profile.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3 md:px-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="full-name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input id="full-name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="investment-type"
                  className="text-sm font-medium"
                >
                  Investment Type
                </Label>
                <Select id="investment-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select investment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stocks">Stocks</SelectItem>
                    <SelectItem value="bonds">Bonds</SelectItem>
                    <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                    <SelectItem value="etfs">ETFs</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="investment-amount"
                className="text-sm font-medium"
              >
                Investment Amount
              </Label>
              <Input id="investment-amount" type="number" placeholder="10000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="investment-goals" className="text-sm font-medium">
                Investment Goals
              </Label>
              <Textarea
                id="investment-goals"
                rows={3}
                placeholder="Describe your investment goals"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="risk-tolerance" className="text-sm font-medium">
                Risk Tolerance
              </Label>
              <Select id="risk-tolerance">
                <SelectTrigger>
                  <SelectValue placeholder="Select risk tolerance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-2">
              <Label
                htmlFor="current-investments"
                className="text-sm font-medium"
              >
                Current Investments
              </Label>
              <Textarea
                id="current-investments"
                rows={5}
                placeholder="List your current investments"
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="additional-comments"
                className="text-sm font-medium"
              >
                Additional Comments
              </Label>
              <Textarea
                id="additional-comments"
                rows={5}
                placeholder="Enter any additional comments here"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        {/* <div className="flex justify-end">
          <Button>Submit</Button>
        </div> */}
      </CardFooter>
    </Card>
  );
};

export default Investments;
