import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Building{" "}
            <span className="inline bg-gradient-to-r from-[#19a65b]  to-[#275f44] text-transparent bg-clip-text">
              Wealth
            </span>
            ,{" "}
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#275f44]  to-[#19a65b] text-transparent bg-clip-text">
              Securing
            </span>{" "}
            Futures
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Expert Financial Advice and Customized Plans to Navigate Your
          Financial Journey
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            {/* <GitHubLogoIcon className="ml-2 w-5 h-5" /> */}
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
