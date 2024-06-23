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
      <div className="container grid items-center justify-center gap-10 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from the people who love using our product.
          </p>
        </div>
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            <CarouselItem>
              <Card className="flex flex-col items-center gap-6 p-6 text-center">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;The customer service I received was exceptional. The
                  support team went above and beyond to address my
                  concerns.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Jules Winnfield</div>
                  <div className="text-sm text-muted-foreground">
                    CEO, Acme Inc
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex flex-col items-center gap-6 p-6 text-center">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;I was hesitant at first, but after using the product, I
                  was blown away by its capabilities. It has transformed the way
                  we work.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Mia Wallace</div>
                  <div className="text-sm text-muted-foreground">
                    Product Manager, Globex Corp
                  </div>
                </div>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex flex-col items-center gap-6 p-6 text-center">
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  &ldquo;I've tried many similar products, but this one stands
                  out. The user experience is top-notch, and the features are
                  exactly what we needed.&rdquo;
                </blockquote>
                <div>
                  <div className="font-semibold">Vincent Vega</div>
                  <div className="text-sm text-muted-foreground">
                    CTO, Acme Inc
                  </div>
                </div>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious>
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext>
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
};
