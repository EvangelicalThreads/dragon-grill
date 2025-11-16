"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative w-full overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden px-4 bg-gray-900">
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-white rounded-full p-4 shadow-xl mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/dragon-grill-logo.png"
              alt="Dragon Grill Logo"
              width={180}
              height={180}
              priority
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            About Dragon Grill
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Passionate about bold flavors, fresh ingredients, and unforgettable meals.
          </motion.p>

          <Link href="/menu">
            <motion.button
              className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-bold rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Explore Our Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Our Story
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          Dragon Grill started with a simple mission: serve hearty, fresh meals that
          bring joy to every bite. From our bowls and plates to our refreshing boba
          drinks, every dish is crafted with care and passion.
        </p>

       {/* IMAGE GALLERY */}
<div className="grid grid-cols-3 gap-4 mb-12">
  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/chef-cooking1.jpg"
      alt="Chef cooking"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/chef-cooking2.jpg"
      alt="Chef plating food"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
    <Image
      src="/chef-cooking3.jpg"
      alt="Team in kitchen"
      fill
      className="object-cover"
    />
  </div>
</div>
      </section>
    </main>
  );
}
