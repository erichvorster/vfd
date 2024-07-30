"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";
import { Button } from "../../components/ui/button";
import { useMediaQuery } from "../../components/Hooks/useMediaQuery";
import { ScrollArea } from "../../components/ui/scroll-area";
import { ArrowRight } from "lucide-react";

const DrawerDialog = ({ title, description, children }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer group">
            Read More
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-5xl h-[500px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-full p-4">
            <div>{children}</div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="inline-flex ml-auto items-center gap-2 text-sm font-medium text-primary hover:underline cursor-pointer group">
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full h-full">
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="h-full p-4">
          <div>{children}</div>
        </ScrollArea>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="bg-[#275f44] py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
              <div className="flex flex-col items-start justify-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter text-[#c4b078]  sm:text-4xl md:text-5xl lg:text-6xl">
                  Secure Your Financial Future
                </h1>
                <p className="text-lg text-primary-foreground md:text-xl lg:text-2xl">
                  Get personalized financial advice from our team of experts.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
              <div className="hidden md:block">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={300}
                  alt="Hero image"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tighter text-foreground sm:text-3xl md:text-4xl">
                  Latest Blog Posts
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((post) => (
                  <Card key={post} className="h-full w-full">
                    <CardHeader>
                      <img
                        src="/placeholder.svg"
                        width={400}
                        height={200}
                        alt={`Blog post ${post}`}
                        className="rounded-t-lg object-cover"
                      />
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        June 1, 2023
                      </div>
                      <h3 className="text-lg font-bold tracking-tighter text-foreground">
                        Blog Post {post}
                      </h3>
                      <p className="text-muted-foreground line-clamp-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, nisl nec ultricies lacus, nisl nunc
                        sollicitudin nisl, eget aliquam nisl nisl sit amet nisl.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <DrawerDialog
                        title={`Blog Post ${post}`}
                        description="Detailed view of the blog post."
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nunc
                          sollicitudin nisl, eget aliquam nisl nisl sit amet
                          nisl.
                        </p>
                        <br />
                        <p>
                          Proin ac justo et eros bibendum lobortis ut ut sem.
                          Etiam malesuada felis nisi, nec bibendum neque posuere
                          nec. Morbi vitae diam sapien. Praesent ac pharetra
                          massa. Suspendisse potenti. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Sed euismod, nisl
                          nec ultricies lacus, nisl nunc sollicitudin nisl, eget
                          aliquam nisl nisl sit amet nisl. Proin ac justo et
                          eros bibendum lobortis ut ut sem. Etiam malesuada
                          felis nisi, nec bibendum neque posuere nec. Morbi
                          vitae diam sapien. Praesent ac pharetra massa.
                          Suspendisse potenti.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nunc
                          sollicitudin nisl, eget aliquam nisl nisl sit amet
                          nisl.
                        </p>
                        <br />
                        <p>
                          Proin ac justo et eros bibendum lobortis ut ut sem.
                          Etiam malesuada felis nisi, nec bibendum neque posuere
                          nec. Morbi vitae diam sapien. Praesent ac pharetra
                          massa. Suspendisse potenti. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Sed euismod, nisl
                          nec ultricies lacus, nisl nunc sollicitudin nisl, eget
                          aliquam nisl nisl sit amet nisl. Proin ac justo et
                          eros bibendum lobortis ut ut sem. Etiam malesuada
                          felis nisi, nec bibendum neque posuere nec. Morbi
                          vitae diam sapien. Praesent ac pharetra massa.
                          Suspendisse potenti.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nunc
                          sollicitudin nisl, eget aliquam nisl nisl sit amet
                          nisl.
                        </p>
                        <br />
                        <p>
                          Proin ac justo et eros bibendum lobortis ut ut sem.
                          Etiam malesuada felis nisi, nec bibendum neque posuere
                          nec. Morbi vitae diam sapien. Praesent ac pharetra
                          massa. Suspendisse potenti. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Sed euismod, nisl
                          nec ultricies lacus, nisl nunc sollicitudin nisl, eget
                          aliquam nisl nisl sit amet nisl. Proin ac justo et
                          eros bibendum lobortis ut ut sem. Etiam malesuada
                          felis nisi, nec bibendum neque posuere nec. Morbi
                          vitae diam sapien. Praesent ac pharetra massa.
                          Suspendisse potenti.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed euismod, nisl nec ultricies lacus, nisl nunc
                          sollicitudin nisl, eget aliquam nisl nisl sit amet
                          nisl.
                        </p>
                        <br />
                        <p>
                          Proin ac justo et eros bibendum lobortis ut ut sem.
                          Etiam malesuada felis nisi, nec bibendum neque posuere
                          nec. Morbi vitae diam sapien. Praesent ac pharetra
                          massa. Suspendisse potenti. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Sed euismod, nisl
                          nec ultricies lacus, nisl nunc sollicitudin nisl, eget
                          aliquam nisl nisl sit amet nisl. Proin ac justo et
                          eros bibendum lobortis ut ut sem. Etiam malesuada
                          felis nisi, nec bibendum neque posuere nec. Morbi
                          vitae diam sapien. Praesent ac pharetra massa.
                          Suspendisse potenti.
                        </p>
                      </DrawerDialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
