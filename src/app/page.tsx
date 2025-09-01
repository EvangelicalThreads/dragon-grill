"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const categories = [
  {
    name: "Plates",
    img: "/homepage-plate.png",
    description: "Hearty plates with your favorite proteins and sides.",
  },
  {
    name: "Bowls",
    img: "/homepage-bowl.png",
    description: "Fresh bowls with rice, veggies, and protein options.",
  },
  {
    name: "Boba & Drinks",
    img: "/boba-drinks.png",
    description: "Refreshing drinks and boba to complete your meal.",
  },
];

const featuredDishes = [
  {
    name: "Chicken and Steak Plate",
    img: "/slide-show-plate.png",
  },
  {
    name: "Steak Bowl",
    img: "/slide-show-bowl.png",
  },
  {
    name: "Boba Drinks",
    img: "/boba-drinks.png",
  },
];

// Duplicate for seamless scroll
const carouselItems = [...featuredDishes, ...featuredDishes];

// Motion variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const floatY: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};

export default function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"], // scroll half the duplicated width
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <main className="relative w-full overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative w-full h-screen bg-gradient-to-b from-red-600 via-red-500 to-orange-300 flex flex-col items-center justify-center text-white text-center overflow-hidden px-4">
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="bg-white rounded-full p-4 shadow-xl"
            variants={floatY}
            animate="animate"
          >
            <Image
              src="/dragon-grill-logo.png"
              alt="Dragon Grill Logo"
              width={220}
              height={220}
              priority
            />
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6"
            variants={fadeInUp}
          >
            Dragon Grill
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl"
            custom={0.2}
            variants={fadeInUp}
          >
            Bold flavors, fresh ingredients, unforgettable meals
          </motion.p>
          <Link href="/menu">
            <motion.button
              className="mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
              custom={0.4}
              variants={fadeInUp}
            >
              View Menu
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-orange-100 via-orange-50 to-white">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Favorites
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-2 sm:px-8 md:px-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="flex flex-col items-center p-4 sm:p-6 rounded-3xl shadow-2xl bg-white hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeInUp}
            >
              <div className="absolute -inset-2 bg-gradient-to-tr from-red-400 via-orange-300 to-yellow-300 opacity-30 blur-2xl rounded-3xl group-hover:opacity-50 transition-all duration-500"></div>
              <Image
                src={cat.img}
                alt={cat.name}
                width={160}
                height={160}
                className="rounded-2xl relative z-10"
                loading="lazy"
              />
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-2xl font-semibold relative z-10">{cat.name}</h3>
              <p className="mt-1 sm:mt-2 text-center text-gray-700 text-sm sm:text-base md:text-base relative z-10">{cat.description}</p>
              <Link href="/menu">
                <button className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all relative z-10 text-sm sm:text-base">
                  View {cat.name} Menu
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED DISHES CAROUSEL */}
      <section className="relative w-full py-16 bg-gray-100 overflow-hidden">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Featured Dishes
        </motion.h2>

        <motion.div
          className="relative w-full max-w-6xl mx-auto flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {carouselItems.map((dish, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0 w-60 sm:w-64 md:w-72 flex flex-col items-center p-4 sm:p-6 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            >
              <Image
                src={dish.img}
                alt={dish.name}
                width={200}
                height={200}
                className="rounded-2xl"
                loading="lazy"
              />
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-xl font-semibold text-center">
                {dish.name}
              </h3>
              <p className="mt-1 sm:mt-2 text-gray-600 text-center text-sm sm:text-base"></p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative w-full pt-32 pb-20 bg-gradient-to-b from-red-600 to-orange-400 flex flex-col items-center justify-center text-white text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Ready to Taste the Magic?
        </motion.h2>
        <motion.p
          className="max-w-xl text-sm sm:text-base md:text-lg mb-6 md:mb-8"
          custom={0.2}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Order your favorites online or visit us for an unforgettable dining experience.
        </motion.p>
        <Link href="/menu">
          <motion.button
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-red-600 font-bold rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-sm sm:text-base md:text-lg"
            custom={0.4}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            View Full Menu
          </motion.button>
        </Link>
      </section>
    </main>
  );
}
