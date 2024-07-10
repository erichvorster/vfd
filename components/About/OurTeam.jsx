import React from "react";

const OurTeam = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We are a passionate team of designers, developers, and strategists
            dedicated to creating exceptional digital experiences.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={120}
              height={120}
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-muted-foreground">Lead Designer</p>
              <p className="text-sm text-muted-foreground">
                John is our lead designer with over 10 years of experience
                crafting beautiful and user-friendly interfaces.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={120}
              height={120}
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-muted-foreground">Front-end Developer</p>
              <p className="text-sm text-muted-foreground">
                Jane is our front-end wizard, specializing in building
                responsive and accessible web applications.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={120}
              height={120}
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-xl font-bold">Michael Johnson</h3>
              <p className="text-muted-foreground">Back-end Developer</p>
              <p className="text-sm text-muted-foreground">
                Michael is our back-end expert, ensuring our applications are
                secure, scalable, and efficient.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-background p-6 shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={120}
              height={120}
              className="h-30 w-30 rounded-full object-cover"
            />
            <div className="grid gap-1 text-center">
              <h3 className="text-xl font-bold">Emily Davis</h3>
              <p className="text-muted-foreground">Product Manager</p>
              <p className="text-sm text-muted-foreground">
                Emily is our product manager, ensuring our solutions meet the
                needs of our clients and users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
