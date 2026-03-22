"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import EmailSignupPopup from "@/app/components/EmailSignupPopup";
import EmailSignup from "@/app/components/EmailSignup";

// ================== DATA ==================
const categories = [
  {
    name: "Plates",
    img: "/homepage-plate.png",
    description: "Hearty plates with bold proteins, fresh sides, and serious flavor.",
  },
  {
    name: "Bowls",
    img: "/homepage-bowl.png",
    description: "Fresh bowls layered with rice, veggies, sauces, and your favorite protein.",
  },
  {
    name: "Boba Drinks",
    img: "/boba-drinks.png",
    description: "Cold, refreshing boba drinks to finish the meal right.",
  },
];

const featuredDishes = [
  { name: "Chicken & Steak Plate", img: "/slide-show-plate.png" },
  { name: "Steak Bowl", img: "/slide-show-bowl.png" },
  { name: "Signature Boba", img: "/boba-drinks.png" },
];

const reviews = [
  { name: "Emily R.", review: "Absolutely the best boba and bowls in town." },
  { name: "Jason M.", review: "The steak plate is unreal. Huge portions and amazing flavor." },
  { name: "Sophia K.", review: "Fresh ingredients every time and the drinks are so good." },
];

const deliveryLinks = [
  {
    name: "Grubhub",
    href: "https://www.grubhub.com/",
    subtext: "Fast delivery through Grubhub",
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/",
    subtext: "Order with DoorDash",
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com/",
    subtext: "Get it with Uber Eats",
  },
];

// ================== VARIANTS ==================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const floatY: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5.5, ease: "easeInOut", repeat: Infinity },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

// ================== ORDER MODAL ==================
function OrderModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center px-4">
            <motion.div
              className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-red-100 overflow-hidden"
              variants={popIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-5 text-white">
                <h3 className="text-2xl font-extrabold">Order Now</h3>
                <p className="mt-1 text-sm text-white/90">
                  Choose your preferred delivery platform.
                </p>
              </div>

              <div className="p-5 space-y-3">
                {deliveryLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-red-300 hover:shadow-md hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{platform.name}</p>
                        <p className="text-sm text-gray-600">{platform.subtext}</p>
                      </div>
                      <span className="text-red-600 font-bold">→</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="px-5 pb-5">
                <button
                  onClick={onClose}
                  className="w-full rounded-2xl bg-gray-100 py-3 font-semibold text-gray-800 transition hover:bg-gray-200"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ================== HERO ==================
function Hero({ onOpenOrder }: { onOpenOrder: () => void }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 text-center text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/wok.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <motion.div
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="rounded-full bg-white/95 p-4 shadow-2xl ring-4 ring-white/20"
          variants={floatY}
          animate="animate"
        >
          <Image
            src="/dragon-grill-logo.png"
            alt="Dragon Grill Logo"
            width={200}
            height={200}
            priority
            className="h-auto w-[140px] sm:w-[170px] md:w-[200px]"
          />
        </motion.div>

        <motion.h1
          className="mt-6 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          variants={fadeInUp}
        >
          Dragon Grill
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg md:text-xl"
          custom={0.2}
          variants={fadeInUp}
        >
          Bold flavors, fresh ingredients, and comfort food worth craving again tomorrow.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          custom={0.35}
          variants={fadeInUp}
        >
          <button
            onClick={onOpenOrder}
            className="rounded-2xl bg-red-600 px-7 py-3.5 font-bold text-white shadow-xl transition hover:scale-[1.02] hover:bg-red-700"
          >
            Order Now
          </button>

          <Link href="/menu">
            <button className="rounded-2xl border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/20">
              View Menu
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

// ================== CATEGORIES ==================
function Categories() {
  return (
    <section
      id="favorites"
      className="relative w-full bg-gradient-to-b from-[#fff8f5] to-white py-20"
    >
      <motion.div
        className="mx-auto mb-12 max-w-3xl px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600"
          variants={fadeInUp}
        >
          Customer Favorites
        </motion.p>
        <motion.h2
          className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl"
          variants={fadeInUp}
        >
          Made to hit every craving
        </motion.h2>
        <motion.p
          className="mt-4 text-base text-gray-600 sm:text-lg"
          custom={0.15}
          variants={fadeInUp}
        >
          Plates, bowls, and drinks built with fresh ingredients and big flavor.
        </motion.p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-8 md:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={fadeInUp}
          >
            <Card className="group h-full overflow-hidden rounded-[28px] border border-red-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  width={700}
                  height={500}
                  className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-extrabold text-gray-900">{cat.name}</h3>
                <p className="mt-3 text-gray-600">{cat.description}</p>

                <div className="mt-5">
                  <Link href="/menu">
                    <button className="rounded-xl bg-red-600 px-4 py-2.5 font-bold text-white transition hover:bg-red-700">
                      Explore {cat.name}
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ================== FEATURED ==================
function FeaturedShowcase({ onOpenOrder }: { onOpenOrder: () => void }) {
  return (
    <section className="w-full bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <motion.p
              className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-400"
              variants={fadeInUp}
            >
              Featured Dishes
            </motion.p>
            <motion.h2
              className="text-3xl font-black sm:text-4xl md:text-5xl"
              variants={fadeInUp}
            >
              Crowd favorites that never miss
            </motion.h2>
          </div>

          <motion.button
            onClick={onOpenOrder}
            className="rounded-2xl bg-white px-6 py-3 font-bold text-gray-950 transition hover:scale-[1.02]"
            custom={0.2}
            variants={fadeInUp}
          >
            Order Now
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredDishes.map((dish, idx) => (
            <motion.div
              key={dish.name}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeInUp}
            >
              <Image
                src={dish.img}
                alt={dish.name}
                width={700}
                height={500}
                className="h-[260px] w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold">{dish.name}</h3>
                <p className="mt-2 text-white/75">
                  Fresh, flavorful, and built to be your next go-to order.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================== TESTIMONIALS ==================
function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600"
            variants={fadeInUp}
          >
            Customer Love
          </motion.p>
          <motion.h2
            className="text-3xl font-black text-gray-900 sm:text-4xl md:text-5xl"
            variants={fadeInUp}
          >
            People are into this. Shocking, I know.
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              className="rounded-[28px] border border-gray-200 bg-[#fffaf8] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="mb-4 text-yellow-500 text-lg">★★★★★</div>
              <p className="text-lg leading-relaxed text-gray-700">&quot;{r.review}&quot;</p>
              <h4 className="mt-5 font-bold text-red-600">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ================== CTA ==================
function CTA({ onOpenOrder }: { onOpenOrder: () => void }) {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-orange-500 py-20 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_35%)]" />

        <motion.div
          className="relative z-10 mx-auto max-w-3xl px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-black sm:text-4xl md:text-5xl"
            variants={fadeInUp}
          >
            Ready to eat?
          </motion.h2>

          <motion.p
            className="mt-4 text-base text-white/90 sm:text-lg"
            custom={0.15}
            variants={fadeInUp}
          >
            Order delivery now or check out the full menu before you commit to greatness.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            custom={0.3}
            variants={fadeInUp}
          >
            <button
              onClick={onOpenOrder}
              className="rounded-2xl bg-white px-7 py-3.5 font-bold text-red-600 transition hover:scale-[1.02]"
            >
              Order Delivery
            </button>

            <Link href="/menu">
              <button className="rounded-2xl border border-white/40 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/20">
                View Full Menu
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <div className="h-1 w-full bg-gray-950" />
    </>
  );
}


// ================== HOME PAGE ==================
export default function HomePage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <main className="relative w-full overflow-x-hidden font-sans">
      <Hero onOpenOrder={() => setOrderModalOpen(true)} />
      <Categories />
      <FeaturedShowcase onOpenOrder={() => setOrderModalOpen(true)} />
      <Testimonials />
      <CTA onOpenOrder={() => setOrderModalOpen(true)} />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />

      <EmailSignupPopup />
    </main>
  );
}