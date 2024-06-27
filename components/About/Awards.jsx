import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Awards = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recognized for Excellence
          </h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our financial advisor has been recognized for their exceptional
            service, expertise, and commitment to their clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Certified Financial Planner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor holds the prestigious Certified Financial Planner
                (CFP) designation, demonstrating their comprehensive knowledge
                and commitment to financial planning.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>5-Star Rated Advisor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor has been recognized as a 5-star rated financial
                advisor, reflecting their exceptional client satisfaction and
                service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Industry Award Winner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor has been honored with prestigious industry awards,
                showcasing their leadership and contributions to the financial
                planning profession.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Continuing Education Leader</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor is committed to staying at the forefront of industry
                trends and best practices, regularly completing advanced
                training and education.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fiduciary Commitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor operates as a fiduciary, always putting the client's
                best interests first and providing objective, conflict-free
                advice.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Community Involvement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our advisor is actively involved in the local community,
                volunteering their time and expertise to support important
                causes and initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Awards;
