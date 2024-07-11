import {
  motion,
  useViewportScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
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
import Image from "next/image";
import gp from "../public/gp.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export const HeroCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useViewportScroll();

  // Define transforms for left and right cards
  const leftCardY = useTransform(scrollY, [0, 1000], [0, -100]);
  const rightCardY = useTransform(scrollY, [0, 1000], [0, 100]);

  useEffect(() => {
    if (!isInView) {
      leftCardY.stop();
      rightCardY.stop();
    }
  }, [isInView, leftCardY, rightCardY]);

  return (
    <div
      ref={ref}
      className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]"
    >
      <motion.div
        className="absolute w-[340px] -top-[12px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ y: leftCardY }}
      >
        {/* Testimonial */}
        <Card>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className="flex flex-col">
              <CardTitle className="text-lg">Jane Smith</CardTitle>
              <CardDescription>@jane_smith</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            "The personalized investment strategies have significantly boosted
            my portfolio."
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className="absolute right-[20px] -top-5 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ y: rightCardY }}
      >
        {/* Team */}
        <Card>
          <CardHeader className="mt-8 flex justify-center items-center pb-2">
            <Image
              src={gp}
              alt="user avatar"
              className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover object-top"
            />
            <CardTitle className="text-center">GP Janse van Rensburg</CardTitle>
            <CardDescription className="font-normal text-primary">
              Financial Advisor
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
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <span className="sr-only">Linkedin icon</span>
                <Linkedin size="20" />
              </a>
            </div>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div
        className="absolute top-[170px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ y: leftCardY }}
      >
        {/* Pricing */}
        <Card>
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
      </motion.div>

      <motion.div
        className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        style={{ y: rightCardY }}
      >
        {/* Service */}
        <Card>
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
      </motion.div>
    </div>
  );
};
