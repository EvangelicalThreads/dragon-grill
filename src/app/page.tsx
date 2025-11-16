"use client";

import { motion, Variants, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";



// ================== DATA ==================
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
    name: "Boba Drinks",
    img: "/boba-drinks.png",
    description: "Refreshing boba drinks to complete your meal.",
  },
];

const featuredDishes = [
  { name: "Chicken and Steak", img: "/slide-show-plate.png" },
  { name: "Steak Bowl", img: "/slide-show-bowl.png" },
  { name: "Boba Drinks", img: "/boba-drinks.png" },
];

const carouselItems = [...featuredDishes, ...featuredDishes];

const reviews = [
  { name: "Emily R.", review: "Absolutely the best boba and bowls in town!" },
  { name: "Jason M.", review: "The steak plate is a game changer. Highly recommend!" },
  { name: "Sophia K.", review: "Fresh ingredients and amazing flavors every time." },
];

// ================== VARIANTS ==================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.8 } }),
};

const floatY: Variants = {
  animate: { y: [0, -10, 0], transition: { duration: 6, ease: "easeInOut", repeat: Infinity } },
};

// ================== HERO (UNCHANGED) ==================
function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden px-4"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/wok.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      {/* HERO CONTENT */}
      <motion.div className="relative z-10 flex flex-col items-center" initial="hidden" animate="visible">
        <motion.div className="bg-white rounded-full p-4 shadow-xl" variants={floatY} animate="animate">
          <Image src="/dragon-grill-logo.png" alt="Dragon Grill Logo" width={220} height={220} priority />
        </motion.div>
        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-6" variants={fadeInUp}>
          Dragon Grill
        </motion.h1>
        <motion.p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl" custom={0.2} variants={fadeInUp}>
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
  );
}

// ================== CATEGORIES ==================
function Categories() {
  return (
    <section id="favorites" className="relative w-full py-16 md:py-20 bg-gray-50">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 md:mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Our Favorites
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 sm:px-8 md:px-16">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={fadeInUp}
          >
            <Card className="p-6 flex flex-col items-center bg-white shadow-xl rounded-2xl h-full hover:scale-105 transition-transform duration-300 relative cursor-pointer">
              <Image src={cat.img} alt={cat.name} width={160} height={160} className="rounded-2xl mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">{cat.name}</h3>
              <p className="text-gray-700 text-center mb-4">{cat.description}</p>
              <Link href="/menu">
                <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-xl shadow hover:scale-105 transition-all">
                  View {cat.name} Menu
                </button>
              </Link>
              <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
                <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ================== FEATURED CAROUSEL ==================
function FeaturedCarousel() {
  return (
    <section className="relative w-full py-16 bg-gray-50 overflow-hidden">
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
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
      >
        {carouselItems.concat(carouselItems).map((dish, idx) => (
          <motion.div key={idx} className="flex-shrink-0 w-64 flex flex-col items-center p-6 bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform relative">
            <Image src={dish.img} alt={dish.name} width={200} height={200} className="rounded-2xl mb-3" />
            <h3 className="text-lg font-semibold text-center">{dish.name}</h3>
            <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
              <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// ================== TESTIMONIALS ==================
function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">Customer Love</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white shadow-xl rounded-2xl hover:scale-105 transition-transform relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg mb-4">"{r.review}"</p>
            <h4 className="font-bold text-red-600">{r.name}</h4>
            <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
              <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ================== CTA (PROFESSIONAL + GRADIENT + RED ACCENTS) ==================
function CTA() {
  return (
    <>
      <section className="relative w-full pt-32 pb-20 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 flex flex-col items-center justify-center text-white text-center">
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
          className="max-w-xl text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-200"
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
            className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-gray-900 font-bold rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-sm sm:text-base md:text-lg relative overflow-hidden"
            custom={0.4}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="absolute inset-0 bg-white-000 opacity-10 rounded-3xl"></span>
            <span className="relative">View Full Menu</span>
          </motion.button>
        </Link>
      </section>

      {/* Thin red separator */}
      <div className="w-full h-1 bg-red-600"></div>
    </>
  );
}

// ================== FOOTER (MATCHED COLORS) ==================

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // show after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div>
          <h3 className="text-xl font-bold mb-2 text-white">Dragon Grill</h3>
          <p>123 Flavor Street, Food City</p>
          <p>Mon-Sun: 11am - 10pm</p>
          <p>Email: contact@dragongrill.com</p>
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}


// ================== FLOATING ORDER CTA ==================
function FloatingOrderCTA() {
  return (
    <Link href="/order" className="fixed bottom-20 right-6 bg-gray-900 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold z-50">
      Order Now
    </Link>
  );
}

// ================== HOME PAGE ==================
export default function HomePage() {
  return (
    <main className="relative w-full overflow-x-hidden font-sans">
      <Hero />
      <Categories />
      <FeaturedCarousel />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingOrderCTA />
    </main>
  );
}
