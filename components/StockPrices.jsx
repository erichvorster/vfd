"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const STOCK_SYMBOLS = ["AAPL", "GOOGL", "MSFT", "AMZN", "FB", "TSLA", "NFLX"];
const API_KEY = "V32OPUX55R2J424R";

const fetchStockPrices = async () => {
  const prices = [];
  for (let symbol of STOCK_SYMBOLS) {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    // const price = response.data["Global Quote"]["05. price"];
    console.log(response);
    // prices.push({ symbol, price });
  }
  return prices;
};

export const StockPrices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const getPrices = async () => {
      const stockPrices = await fetchStockPrices();
      setPrices(stockPrices);
    };
    getPrices();
  }, []);

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Stock Prices</h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {prices.concat(prices).map((stock, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 flex flex-col items-center"
              >
                <span className="text-lg font-bold">{stock.symbol}</span>
                <span className="text-md">${stock.price}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
