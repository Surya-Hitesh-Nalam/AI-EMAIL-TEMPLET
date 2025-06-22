"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SignInButton from "./SignInButton";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-screen flex flex-col justify-center items-center px-6 md:px-20 pt-24 text-center">
      
      {/* Background gradient shapes */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute w-72 h-72 bg-blue-300 opacity-20 rounded-full top-10 -left-20 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-purple-300 opacity-20 rounded-full bottom-10 -right-20 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow-md">
          AI-Powered <span className="text-blue-600">Email Templates</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-gray-600">
          Generate professional, ready-to-use email templates instantly using the power of AI. Perfect for marketing, outreach, and automation!
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <Button className="px-8 py-3 text-lg bg-blue-600 hover:bg-blue-700 transition-all">
            Try Demo
          </Button>
          <SignInButton />
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-16 z-10"
      >
        <Image
          src={"/landing.png"}
          alt="AI Email Template Builder"
          width={1100}
          height={700}
          className="rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
