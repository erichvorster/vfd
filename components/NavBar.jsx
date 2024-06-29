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
import { Button } from "./ui/button";

const routeList = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/About",
    label: "About",
  },
  {
    href: "/Services",
    label: "Services",
  },
  {
    href: "/Blog",
    label: "Blog",
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
      className={`sticky top-0 z-40 w-full border-b-[1px] transition-all duration-500 bg-[#275f44] ${
        isScrolled ? " shadow-md" : "  shadow-none"
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

                  <Link
                    href="/Contact"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
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
            <Button
              href="/Contact"
              className={` ${buttonVariants({ variant: "primary" })}`}
            >
              Contact
            </Button>
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
