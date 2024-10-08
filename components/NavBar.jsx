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
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
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
  Languages,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { useLanguage } from "../components/Context/useLangauge"; // Import useLanguage

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
  {
    href: "/GetStarted",
    label: "Get Started",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { language, setLanguage } = useLanguage(); // Get language and setLanguage

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

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000); // Hide tooltip after 3 seconds
      return () => clearTimeout(hideTimer);
    }, 3000); // Show tooltip after 3 seconds

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div
      className={`sticky top-0 z-40 w-full border-b-[1px] transition-all duration-500 bg-[#275f44] ${
        isScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <Link
              href="/"
              className="ml-2 font-bold text-xl flex text-white tracking-widest"
            >
              VBGFIN
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-6 w-6 text-white"
                  onClick={() => setIsOpen(true)}
                />
              </SheetTrigger>

              <SheetContent side={"left"} className="bg-[#275f44] text-white">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl text-white">
                    {" "}
                    VBGFIN
                  </SheetTitle>
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
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex gap-2">
            {routeList.map((route, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[18px] text-white ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex gap-2">
            <TooltipProvider>
              <Tooltip open={showTooltip}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setLanguage(language === "en" ? "af" : "en")} // Language toggle button
                    className={`${buttonVariants({ variant: "primary" })}`}
                  >
                    {language === "en" ? "Afrikaans" : "English"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="flex items-center">
                    <Languages className="h-4 w-4 mr-2" />
                    <p>
                      Switch to {language === "en" ? "Afrikaans" : "English"}
                    </p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
