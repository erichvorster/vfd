import React from "react";
import Awards from "../../components/About/Awards";
import Hero from "../../components/About/Hero";
import Mission from "../../components/About/Mission";
import OurTeam from "../../components/About/OurTeam";

const page = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <Awards />
      <OurTeam />
    </div>
  );
};

export default page;
