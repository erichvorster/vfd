import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { CarIcon } from "lucide-react";

const ShortTerm = () => {
  return (
    <Card className="max-w-4xl mx-auto  sm:p-3 md:p-3 bg-muted">
      <CardHeader className="px-3 md:px-6">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Short term insurance
            </CardTitle>
            <CardDescription>
              Please fill out the following details to get a quote.
            </CardDescription>
          </div>
        </div>
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
                <Label htmlFor="consent" className="text-sm font-medium">
                  Consent
                </Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="consent" />
                  <Label htmlFor="consent">
                    I consent to receive communications
                  </Label>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="vehicle-make" className="text-sm font-medium">
                  Vehicle Make
                </Label>
                <Input id="vehicle-make" placeholder="Toyota" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="vehicle-model"
                    className="text-sm font-medium"
                  >
                    Vehicle Model
                  </Label>
                  <Input id="vehicle-model" placeholder="Camry" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="vehicle-year" className="text-sm font-medium">
                    Vehicle Year
                  </Label>
                  <Input id="vehicle-year" type="number" placeholder="2020" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="vehicle-mileage"
                    className="text-sm font-medium"
                  >
                    Vehicle Mileage
                  </Label>
                  <Input
                    id="vehicle-mileage"
                    type="number"
                    placeholder="50,000"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="license-number"
                    className="text-sm font-medium"
                  >
                    Driver's License Number
                  </Label>
                  <Input id="license-number" placeholder="ABC123456" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="driving-history"
                  className="text-sm font-medium"
                >
                  Driving History
                </Label>
                <Textarea
                  id="driving-history"
                  rows={3}
                  placeholder="List any accidents, tickets, or other driving-related incidents."
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
                  rows={3}
                  placeholder="Enter any additional comments here."
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="home-address" className="text-sm font-medium">
                Home Address
              </Label>
              <Input id="home-address" placeholder="123 Main St, Anytown USA" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="home-type" className="text-sm font-medium">
                  Home Type
                </Label>
                <Select id="home-type">
                  <SelectTrigger>
                    <SelectValue placeholder="Select home type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condominium</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="home-size" className="text-sm font-medium">
                  Home Size (sq ft)
                </Label>
                <Input id="home-size" type="number" placeholder="2,000" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="bedrooms" className="text-sm font-medium">
                  Bedrooms
                </Label>
                <Select id="bedrooms">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bathrooms" className="text-sm font-medium">
                  Bathrooms
                </Label>
                <Select id="bathrooms">
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="home-age" className="text-sm font-medium">
                  Home Age
                </Label>
                <Input id="home-age" type="number" placeholder="10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="home-value" className="text-sm font-medium">
                  Home Value
                </Label>
                <Input id="home-value" type="number" placeholder="$500,000" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        {/* <div className="flex justify-end">
          <Button>Get Quote</Button>
        </div> */}
      </CardFooter>
    </Card>
  );
};

export default ShortTerm;
