"use client";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { buttonVariants } from "./ui/button";
import {
  Menu,
  ChevronDown,
  Shield,
  Heart,
  Car,
  TrendingUp,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";
// import { LogoIcon } from "./Icons";

const routeList = [
  {
    href: "/#about",
    label: "About",
  },
  {
    href: "/#testimonials",
    label: "Testimonials",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
  {
    href: "/Contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 w-full border-b-[1px] transition-all duration-500 ${
        isScrolled
          ? "bg-[#224c3a] dark:bg-[#224c3a] dark:border-b-[#224c3a] shadow-md"
          : "bg-white dark:bg-background dark:border-b-slate-700 shadow-none"
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link href="/" className="ml-2 font-bold text-xl flex">
              VFD
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">VFD</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 hover:underline underline-offset-4">
                      Our Services
                      <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link
                          href="/Life"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <Shield className="w-4 h-4" />
                          Life Insurance
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#medical-aid"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <Heart className="w-4 h-4" />
                          Medical Aid
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#car-home-insurance"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <Car className="w-4 h-4" />
                          Car & Home Insurance
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link
                          href="#investment"
                          className="flex items-center gap-2"
                          prefetch={false}
                        >
                          <TrendingUp className="w-4 h-4" />
                          Investment
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="https://github.com/leoMirandaa/shadcn-landing-page.git"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    {/* <GitHubLogoIcon className="mr-2 w-5 h-5" /> */}
                    Github
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.slice(0, 1).map((route, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:underline underline-offset-4">
                Our Services
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link
                    href="/Life"
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <Shield className="w-4 h-4" />
                    Life Insurance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Health"
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <Heart className="w-4 h-4" />
                    Medical Aid
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Insure"
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <Car className="w-4 h-4" />
                    Car & Home Insurance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/Invest"
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <TrendingUp className="w-4 h-4" />
                    Investment
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {routeList.slice(1).map((route, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <Link
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              {/* <GitHubLogoIcon className="mr-2 w-5 h-5" /> */}
              Github
            </Link>
            <ModeToggle />
            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
