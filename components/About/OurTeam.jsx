import React from "react";

const OurTeam = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
        <h2 className="col-span-full text-3xl font-bold text-center">
          Our Team
        </h2>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">John Doe</h3>
            <p className="text-center text-muted-foreground">
              Financial Advisor
            </p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              John has over 15 years of experience in the financial industry,
              specializing in investment planning and wealth management.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">Jane Smith</h3>
            <p className="text-center text-muted-foreground">
              Financial Planner
            </p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Jane has a strong background in financial planning, helping
              clients achieve their long-term financial goals.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">Michael Johnson</h3>
            <p className="text-center text-muted-foreground">Wealth Manager</p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Michael has extensive experience in wealth management, helping
              clients grow and protect their assets.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">Emily Davis</h3>
            <p className="text-center text-muted-foreground">
              Financial Analyst
            </p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Emily's analytical skills and attention to detail make her a
              valuable asset to the team.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">David Lee</h3>
            <p className="text-center text-muted-foreground">
              Portfolio Manager
            </p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              David's expertise in portfolio management helps our clients
              achieve their financial goals.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg group hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Team Member"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full"
            />
            <h3 className="text-xl font-bold text-center">Sarah Chen</h3>
            <p className="text-center text-muted-foreground">
              Financial Advisor
            </p>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Sarah's personalized approach and deep understanding of financial
              planning make her a trusted advisor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
