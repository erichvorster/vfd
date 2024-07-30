import React from "react";
import Link from "next/link";

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

export const Footer = () => {
  return (
    <footer className="bg-[#c4b078] text-white py-8 sm:py-12 mt-24 lg:py-16">
      <div className="container flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-xl font-semibold text-white tracking-widest">
              VBGFIN
            </span>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          {routeList.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-sm font-medium hover:underline"
              prefetch={false}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-white">
        <p> 2024 VBGFIN.</p>
      </div>
    </footer>
  );
};
