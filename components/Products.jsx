"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, Car, TrendingUp } from "lucide-react";
import { useLanguage } from "../components/Context/useLangauge"; // Import useLanguage

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Products = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const { language, translations } = useLanguage(); // Get language and translations

  const productsTranslations =
    translations[language].homePage.productsComponent;

  const productsIcons = [
    <Shield className="h-8 w-8 text-[#c4b078]" />,
    <Heart className="h-8 w-8 text-[#c4b078]" />,
    <Car className="h-8 w-8 text-[#c4b078]" />,
    <TrendingUp className="h-8 w-8 text-[#c4b078]" />,
  ];

  return (
    <motion.section
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container grid gap-10 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <motion.div variants={containerVariants} className="space-y-4">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#c4b078]"
          >
            {productsTranslations.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[700px] text-muted-foreground md:text-xl/relaxed"
          >
            {productsTranslations.description}
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {productsTranslations.products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg border bg-card p-6 shadow-sm bg-[#19a65b] bg-opacity-20"
            >
              <div className="flex items-center space-x-4">
                {productsIcons[index]}
                <div className="text-3xl font-bold">{product.count}</div>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-[#19a65b]">
                {product.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Products;
