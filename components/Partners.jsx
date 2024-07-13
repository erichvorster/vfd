"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ins1 from "../public/ins1.jpg";
import ins2 from "../public/ins2.jpg";
import ins3 from "../public/ins3.jpg";
import ins4 from "../public/ins4.jpg";
import ins5 from "../public/ins5.jpg";
import ins6 from "../public/ins6.jpg";
import ins7 from "../public/ins7.jpg";

const logos = [ins1, ins2, ins3, ins4, ins5, ins6, ins7];

export const Partners = () => {
  const doubledLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const duration = isMobile ? 12 : 25; // Faster animation on mobile

  return (
    <section className="w-full py-2 bg-white">
      <div className="mx-auto">
        <div className="overflow-hidden relative">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              duration: duration,
              ease: "linear",
            }}
          >
            {doubledLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Image
                  src={logo}
                  alt={`ins ${index + 1}`}
                  width={150}
                  height={100}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
