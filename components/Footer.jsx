import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted py-8 sm:py-12 lg:py-16">
      <div className="container flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-semibold">FVD</span>
          </Link>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </div>
      <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Acme Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
