import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

const page = () => {
  return (
    <div className="w-full">
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            The Latest from Our Blog
          </h1>
          <p className="text-muted-foreground">
            Discover the latest insights, trends, and news from our expert team.
          </p>
        </div>
      </div>
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article className="flex flex-col rounded-lg border bg-card shadow-sm">
          <img
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Blog post image"
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Featured
              </div>
              <h2 className="text-2xl font-bold">
                Unlocking the Power of Automation: How to Streamline Your
                Workflows
              </h2>
              <p className="mt-3 text-muted-foreground">
                Discover how automation can transform your business processes
                and unlock new levels of efficiency and productivity.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
        <article className="flex flex-col rounded-lg border bg-card shadow-sm">
          <img
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Blog post image"
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold">
                Mastering the Art of Effective Communication
              </h2>
              <p className="mt-3 text-muted-foreground">
                Discover the secrets to communicating effectively in the
                workplace and beyond.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
        <article className="flex flex-col rounded-lg border bg-card shadow-sm">
          <img
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Blog post image"
            className="h-48 w-full rounded-t-lg object-cover"
          />
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h2 className="text-2xl font-bold">
                Navigating the Changing Landscape of Digital Marketing
              </h2>
              <p className="mt-3 text-muted-foreground">
                Stay ahead of the curve with the latest trends and strategies in
                digital marketing.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default page;
