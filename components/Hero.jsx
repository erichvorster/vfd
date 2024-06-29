import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="bg-[#275f44]">
      <section className="container grid lg:grid-cols-2 place-items-center  py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline text-white">Building Wealth, </h1>{" "}
            <h2 className="inline text-white">Securing Futures</h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Expert Financial Advice and Customized Plans to Navigate Your
            Financial Journey
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/Contact">
              <Button className="w-full md:w-1/3">Get Started</Button>
            </Link>
          </div>
        </div>

        {/* Hero cards sections */}
        <div className="z-10">
          <HeroCards />
        </div>

        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    </div>
  );
};
