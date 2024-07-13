import React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { ChevronRight, ChevronLeft } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our satisfied clients about their experience working with
            our financial advisor.
          </p>
        </div>
        <Carousel className="mt-10">
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full w-full p-6 flex flex-col justify-between">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;Working with the financial advisor has been a
                  game-changer for my financial future. Their expertise and
                  personalized approach have helped me achieve my goals with
                  confidence.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Jane Doe</div>
                  <div className="text-sm text-muted-foreground">
                    Small Business Owner
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full w-full p-6 flex flex-col justify-between">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;I was hesitant to work with a financial advisor, but
                  the team at this firm has exceeded my expectations. They have
                  helped me navigate complex financial decisions with
                  ease.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">John Smith</div>
                  <div className="text-sm text-muted-foreground">Retiree</div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full w-full p-6 flex flex-col justify-between">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;I've been working with this financial advisor for
                  years, and they have consistently provided me with sound
                  financial advice that has helped me grow my wealth. I highly
                  recommend their services.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Sarah Lee</div>
                  <div className="text-sm text-muted-foreground">
                    Entrepreneur
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full w-full p-6 flex flex-col justify-between">
                <blockquote className="text-lg font-semibold leading-snug">
                  &ldquo;The financial advisor has been instrumental in helping
                  me plan for my retirement. Their attention to detail and
                  personalized approach have given me peace of mind about my
                  financial future.&rdquo;
                </blockquote>
                <div className="mt-4">
                  <div className="font-semibold">Michael Johnson</div>
                  <div className="text-sm text-muted-foreground">
                    Retired Executive
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
