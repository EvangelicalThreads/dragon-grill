"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ================== VARIANTS ==================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

const floatY: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 6, ease: "easeInOut", repeat: Infinity },
  },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

// ================== ORDER LINKS ==================
const deliveryLinks = [
  {
    name: "Grubhub",
    href: "https://www.grubhub.com/",
    subtext: "Order through Grubhub",
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/",
    subtext: "Order through DoorDash",
  },
  {
    name: "Uber Eats",
    href: "https://www.ubereats.com/",
    subtext: "Order through Uber Eats",
  },
];

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
              className="w-full max-w-md overflow-hidden rounded-3xl border border-red-100 bg-white shadow-2xl"
              variants={popIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-gradient-to-r from-red-600 to-orange-500 px-6 py-5 text-white">
                <h3 className="text-2xl font-extrabold">Order Now</h3>
                <p className="mt-1 text-sm text-white/90">
                  Pick your delivery platform.
                </p>
              </div>

              <div className="space-y-3 p-5">
                {deliveryLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-red-300 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-bold text-gray-900">{platform.name}</p>
                        <p className="text-sm text-gray-600">{platform.subtext}</p>
                      </div>
                      <span className="font-bold text-red-600">→</span>
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

// ================== SECTION HEADER ==================
function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-gray-600 sm:text-lg">{description}</p>
      )}
    </div>
  );
}

// ================== MAIN FOOD CARD GRID ==================
function FoodSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="my-16">
      <SectionHeader title={title} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
            variants={fadeVariants}
          >
            <Card className="group h-full overflow-hidden rounded-[28px] border border-red-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              {item.image && (
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-[#fff8f5] to-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-extrabold text-gray-900">{item.name}</h3>
                  {item.price && (
                    <span className="whitespace-nowrap rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-600">
                      {item.price}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ================== FEATURED SALAD PLATE ==================
function SaladPlateSection({
  options,
}: {
  options: { name: string; price: string }[];
}) {
  return (
    <section className="my-16">
      <SectionHeader
        eyebrow="Featured"
        title="Salad Plate"
        description="Fresh, crisp, and stacked with toppings that actually make a salad worth ordering for once."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
      >
        <Card className="overflow-hidden rounded-[32px] border border-red-100 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[320px] bg-gradient-to-b from-[#fff8f5] to-white">
              <Image
                src="/salad-plate.png"
                alt="Salad Plate"
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-black text-gray-900">Build Your Salad Plate</h3>

              <p className="mt-4 text-gray-700">
                Includes: Iceberg Lettuce, Cherry Tomatoes, Cucumber, Carrots,
                Red Cabbage, Egg, Avocado, and Crispy Noodles.
              </p>

              <div className="mt-6 space-y-3">
                {options.map((item, idx) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between rounded-2xl border border-gray-200 bg-[#fffaf8] px-4 py-3"
                  >
                    <span className="font-medium text-gray-900">
                      {idx + 1}. {item.name}
                    </span>
                    <span className="font-bold text-red-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

// ================== COMPACT MENU LIST ==================
function CompactMenuSection({
  title,
  items,
  columns = 2,
}: {
  title: string;
  items: MenuItem[];
  columns?: 1 | 2;
}) {
  return (
    <section className="my-14">
      <SectionHeader title={title} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
      >
        <Card className="rounded-[28px] border border-gray-200 bg-white shadow-lg">
          <div
            className={`grid gap-x-8 gap-y-1 p-5 sm:p-6 ${
              columns === 2 ? "md:grid-cols-2" : "grid-cols-1"
            }`}
          >
            {items.map((item) => (
              <div
                key={`${title}-${item.name}`}
                className="flex items-center justify-between gap-4 border-b border-gray-100 py-4 last:border-b-0"
              >
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  {item.description && (
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  )}
                </div>

                {item.price && (
                  <span className="whitespace-nowrap font-bold text-red-600">
                    {item.price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
}

// ================== PARTY TRAYS ==================
function PartyTraySection({
  items,
  onOpenOrder,
}: {
  items: MenuItem[];
  onOpenOrder: () => void;
}) {
  return (
    <section className="my-16">
      <SectionHeader
        eyebrow="Catering / Large Orders"
        title="Party Trays"
        description="Perfect for family meals, events, team lunches, or feeding people who suddenly appear when food is involved."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeVariants}
      >
        <Card className="overflow-hidden rounded-[32px] bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
                Large Orders
              </p>
              <h3 className="mt-3 text-3xl font-black">Feed the whole crew</h3>
              <p className="mt-4 max-w-md text-white/80">
                Call to order party trays for gatherings, work lunches, celebrations,
                or whatever deeply unnecessary event your group chat invented.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={onOpenOrder}
                  className="rounded-2xl bg-white px-6 py-3 font-bold text-gray-950 transition hover:scale-[1.02]"
                >
                  Order Now
                </button>

                <a
                  href="tel:9517341188"
                  className="rounded-2xl border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Call to Order
                </a>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-gray-200 bg-[#fffaf8] px-4 py-3 font-semibold text-gray-900"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
// ================== ADD-ON BANNER ==================
function AddBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mt-12 max-w-3xl rounded-[24px] border border-red-100 bg-[#fff8f5] px-6 py-4 text-center shadow-md"
    >
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
        Add-ons
      </span>
      <p className="mt-2 text-lg font-semibold text-gray-900 sm:text-xl">
        Add to any bowl or plate:
        <span className="mx-2 text-red-600 font-bold">Veggies $1.00</span>
        <span className="text-gray-400">•</span>
        <span className="mx-2 text-red-600 font-bold">Avocado $1.50</span>
      </p>
    </motion.div>
  );
}


// ================== MENU PAGE ==================
export default function Menu() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  // --- MENU DATA ---
  const bowls: MenuItem[] = [
    {
      name: "Veggie Bowl",
      price: "$6.95",
      description: "Rice - White or Brown, Carrots, Broccoli, Cabbage, Green Onion",
      image: "/1-veggie-bowl.png",
    },
    {
      name: "Tofu Bowl",
      price: "$7.95",
      description: "Tofu and Rice - White or Brown",
      image: "/2-tofu-bowl.png",
    },
    {
      name: "Chicken Bowl",
      price: "$9.95",
      description: "Chicken and Rice - White or Brown (White Meat Add $1.00)",
      image: "/3-chicken-bowl.png",
    },
    {
      name: "Steak Bowl",
      price: "$10.95",
      description: "Steak and Rice - White or Brown",
      image: "/4-steak-bowl.png",
    },
    {
      name: "Steak & Chicken Bowl",
      price: "$10.95",
      description: "Steak & Chicken and Rice - White or Brown (White Meat Add $1.00)",
      image: "/5-steak-chicken-bowl.png",
    },
    {
      name: "Shrimp Bowl",
      price: "$11.95",
      description: "Shrimp and Rice - White or Brown",
      image: "/6-shrimp-bowl.png",
    },
    {
      name: "Salmon Bowl",
      price: "$12.95",
      description: "Salmon and Rice - White or Brown",
      image: "/7-salmon-bowl.png",
    },
  ];

  const plates: MenuItem[] = [
    {
      name: "Chicken Plate",
      price: "$11.95",
      description: "Chicken and Rice - White or Brown (White Meat Add $1.00)",
      image: "/3B-chicken-plate.png",
    },
    {
      name: "Steak Plate",
      price: "$12.95",
      description: "Steak and Rice - White or Brown, Salad and Orange",
      image: "/4B-steak-plate.png",
    },
    {
      name: "Steak & Chicken Plate",
      price: "$12.95",
      description: "Steak & Chicken and Rice - White or Brown, Salad and Orange (White Meat Add $1.00)",
      image: "/5B-steak-chicken-plate.png",
    },
    {
      name: "Shrimp Plate",
      price: "$14.95",
      description: "Shrimp and Rice - White or Brown, Salad and Orange",
      image: "/6B-shrimp-plate.png",
    },
    {
      name: "Salmon Plate",
      price: "$16.95",
      description: "Salmon and Rice - White or Brown, Salad and Orange",
      image: "/7B-salmon-plate.png",
    },
  ];

  const saladPlateOptions = [
    { name: "Tofu", price: "$8.95" },
    { name: "Chicken White Meat", price: "$11.95" },
    { name: "Chicken Dark Meat", price: "$10.95" },
    { name: "Steak", price: "$11.95" },
    { name: "Chicken and Steak", price: "$11.95" },
    { name: "Shrimp", price: "$12.95" },
    { name: "Salmon", price: "$14.95" },
  ];

  const sides: MenuItem[] = [
    { name: "Veggies", price: "$3.25" },
    { name: "Rice (White or Brown)", price: "$3.25" },
    { name: "Chicken", price: "$4.95" },
    { name: "Chicken White Meat", price: "$6.95" },
    { name: "Steak", price: "$6.95" },
    { name: "Steak & Chicken", price: "$6.95" },
    { name: "Shrimp (8 pcs)", price: "$6.00" },
  ];

  const partyTrays: MenuItem[] = [
    { name: "Chicken" },
    { name: "Chicken White Meat" },
    { name: "Steak, Steak and Chicken" },
    { name: "Shrimp (60 Pcs.)" },
    { name: "Steamed Veggies" },
    { name: "Salad" },
    { name: "White Rice" },
    { name: "Brown Rice" },
  ];

  const bottleDrinks: MenuItem[] = [
    { name: "Water", price: "$1.50" },
    { name: "Arizona Tea", price: "$2.00" },
    { name: "Snapple", price: "$2.00" },
    { name: "Gatorade", price: "$2.00" },
    { name: "Monster / Red Bulls", price: "$3.25" },
  ];

  const bobaDrinks: MenuItem[] = [
    { name: "Boba Milk Tea", price: "$4.95" },
    { name: "Boba Thai Tea", price: "$4.95" },
    { name: "Boba Green Tea", price: "$4.95" },
  ];

  const smoothies: MenuItem[] = [
    { name: "Strawberry", price: "$5.50" },
    { name: "Mango", price: "$5.50" },
    { name: "Taro", price: "$5.50" },
    { name: "Honey Dew", price: "$5.50" },
    { name: "Pineapple", price: "$5.50" },
    { name: "Watermelon Kiwi", price: "$5.50" },
    { name: "Green Apple", price: "$5.50" },
    { name: "Peach", price: "$5.50" },
    { name: "Blueberry", price: "$5.50" },
    { name: "Coffee", price: "$5.50" },
    { name: "Mocha Latte", price: "$5.50" },
    { name: "Vanilla Latte", price: "$5.50" },
  ];

  const flavorGreenTea: MenuItem[] = [
    { name: "Peach", price: "$4.95" },
    { name: "Green Apple", price: "$4.95" },
    { name: "Watermelon", price: "$4.95" },
    { name: "Kiwi", price: "$4.95" },
    { name: "Pineapple", price: "$4.95" },
    { name: "Blueberry", price: "$4.95" },
    { name: "Mango", price: "$4.95" },
    { name: "Strawberry", price: "$4.95" },
  ];

  return (
    <>
      {/* HERO - LEFT ALONE */}
      <motion.section
        className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden px-4 bg-gray-900"
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <motion.div className="relative z-10 flex flex-col items-center">
          <motion.div
            className="bg-white rounded-full p-4 shadow-xl mb-6"
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
            custom={0}
            initial="hidden"
            animate="visible"
          >
            Menu
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-gray-200"
            variants={fadeInUp}
            custom={0.2}
            initial="hidden"
            animate="visible"
          >
            Fresh ingredients, bold flavor, and comfort food worth coming back for.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={fadeInUp}
            custom={0.35}
            initial="hidden"
            animate="visible"
          >
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-7 py-3.5 font-bold text-gray-900 shadow-xl transition hover:scale-[1.02]"
            >
              View Full PDF Menu
            </a>

            <button
              onClick={() => setOrderModalOpen(true)}
              className="rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/20"
            >
              Order Now
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CONTENT */}
      <main className="bg-gradient-to-b from-[#fffdfc] via-white to-[#fff8f5]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <AddBanner />

          <FoodSection title="Bowls" items={bowls} />
          <FoodSection title="Plates" items={plates} />
          <SaladPlateSection options={saladPlateOptions} />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CompactMenuSection title="Sides" items={sides} columns={1} />
            <CompactMenuSection title="Bottle Drinks" items={bottleDrinks} columns={1} />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <CompactMenuSection title="Boba Drinks" items={bobaDrinks} columns={1} />
            <CompactMenuSection title="Flavor Green Tea" items={flavorGreenTea} columns={1} />
          </div>

          <CompactMenuSection title="Smoothies" items={smoothies} columns={2} />

          <PartyTraySection
            items={partyTrays}
            onOpenOrder={() => setOrderModalOpen(true)}
          />
        </div>
      </main>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  );
}