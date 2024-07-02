import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Jane Smith</CardTitle>
            <CardDescription>@jane_smith</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          "The personalized investment strategies have significantly boosted my
          portfolio."
        </CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] -top-5 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Leo Miranda</CardTitle>
          <CardDescription className="font-normal text-primary">
            Senior Financial Advisor
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            "I am dedicated to helping clients achieve their financial goals
            through tailored strategies."
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              href="https://linkedin.com/in/leoMiranda"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[170px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Financial Services
          </CardTitle>

          <CardDescription>
            Tailored services to help you achieve your financial goals.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">View Services</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4 text-sm">
            {[
              "Investments",
              "Long Term Insurance",
              "Car & Home Insurance",
              "Medical Aid",
              "Estate Planning",
            ].map((benefit) => (
              <span key={benefit} className="flex">
                <Check className="text-secondary" />{" "}
                <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Comprehensive Financial Planning</CardTitle>
            <CardDescription className="text-md mt-2">
              We offer holistic financial planning services to ensure your
              long-term financial health and growth.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
