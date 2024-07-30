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

const LifeInsurance = () => {
  return (
    <Card className="max-w-4xl mx-auto sm:p-3 md:p-3 bg-muted">
      <CardHeader className="px-3 md:px-6">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Life Insurance Information
        </CardTitle>
        <CardDescription>
          Please fill out the following details to apply for life insurance.
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
                <Label htmlFor="id-number" className="text-sm font-medium">
                  South African ID Number
                </Label>
                <Input id="id-number" placeholder="1234567890123" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="life-insurance-plan"
                className="text-sm font-medium"
              >
                Life Insurance Plan
              </Label>
              <Select id="life-insurance-plan">
                <SelectTrigger>
                  <SelectValue placeholder="Select life insurance plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="term-life">Term Life</SelectItem>
                  <SelectItem value="whole-life">Whole Life</SelectItem>
                  <SelectItem value="universal-life">Universal Life</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="coverage-amount" className="text-sm font-medium">
                Coverage Amount (ZAR)
              </Label>
              <Input id="coverage-amount" type="number" placeholder="1000000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dependents" className="text-sm font-medium">
                Number of Dependents
              </Label>
              <Select id="dependents">
                <SelectTrigger>
                  <SelectValue placeholder="Select number of dependents" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="chronic-conditions"
                className="text-sm font-medium"
              >
                Chronic Conditions
              </Label>
              <Input
                id="chronic-conditions"
                placeholder="List any chronic conditions"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="smoking-status" className="text-sm font-medium">
                Smoking Status
              </Label>
              <Select id="smoking-status">
                <SelectTrigger>
                  <SelectValue placeholder="Select smoking status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="non-smoker">Non-Smoker</SelectItem>
                  <SelectItem value="smoker">Smoker</SelectItem>
                  <SelectItem value="occasional-smoker">
                    Occasional Smoker
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="address" className="text-sm font-medium">
                Residential Address
              </Label>
              <Input
                id="address"
                placeholder="123 Main St, Anytown, South Africa"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="occupation" className="text-sm font-medium">
                Occupation
              </Label>
              <Input id="occupation" placeholder="Software Developer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="income" className="text-sm font-medium">
                Monthly Income (ZAR)
              </Label>
              <Input id="income" type="number" placeholder="30000" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget" className="text-sm font-medium">
                Monthly Budget for Premiums (ZAR)
              </Label>
              <Input id="budget" type="number" placeholder="500" />
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
          <Button>Submit Application</Button>
        </div> */}
      </CardFooter>
    </Card>
  );
};

export default LifeInsurance;
