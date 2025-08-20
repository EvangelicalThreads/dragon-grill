"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  price?: string;
  description?: string;
  image?: string;
}

const fadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(true);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- MENU DATA ---
  const bowls: MenuItem[] = [
    { name: "Veggie Bowl", price: "$6.95", description: "Rice - White or Brown, Carrots, Broccoli, Cabbage, Green Onion", image: "/1-veggie-bowl.png" },
    { name: "Tofu Bowl", price: "$7.95", description: "Tofu and Rice - White or Brown", image: "/2-tofu-bowl.png" },
    { name: "Chicken Bowl", price: "$9.95", description: "Chicken and Rice - White or Brown (White Meat Add $1.00)", image: "/3-chicken-bowl.png" },
    { name: "Steak Bowl", price: "$10.95", description: "Steak and Rice - White or Brown", image: "/4-steak-bowl.png" },
    { name: "Steak & Chicken Bowl", price: "$10.95", description: "Steak & Chicken and Rice - White or Brown (White Meat Add $1.00)", image: "/5-steak-chicken-bowl.png" },
    { name: "Shrimp Bowl", price: "$11.95", description: "Shrimp and Rice - White or Brown", image: "/6-shrimp-bowl.png" },
    { name: "Salmon Bowl", price: "$12.95", description: "Salmon and Rice - White or Brown", image: "/7-salmon-bowl.png" },
  ];

  const plates: MenuItem[] = [
    { name: "Chicken Plate", price: "$11.95", description: "Chicken and Rice - White or Brown (White Meat Add $1.00)", image: "/3B-chicken-plate.png" },
    { name: "Steak Plate", price: "$12.95", description: "Steak and Rice - White or Brown, Salad and Orange", image: "/4B-steak-plate.png" },
    { name: "Steak & Chicken Plate", price: "$12.95", description: "Steak & Chicken and Rice - White or Brown, Salad and Orange (White Meat Add $1.00)", image: "/5B-steak-chicken-plate.png" },
    { name: "Shrimp Plate", price: "$14.95", description: "Shrimp and Rice - White or Brown, Salad and Orange", image: "/6B-shrimp-plate.png" },
    { name: "Salmon Plate", price: "$16.95", description: "Salmon and Rice - White or Brown, Salad and Orange", image: "/7B-salmon-plate.png" },
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

  // --- RENDER HELPERS ---
  const renderSection = (title: string, items: MenuItem[]) => (
    <section className="my-12 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl font-bold border-b-2 pb-2 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            variants={fadeVariants}
          >
            <Card className="p-4 flex flex-col items-center bg-white shadow-xl rounded-2xl h-full hover:scale-105 transition-transform duration-300 relative">
              {item.image && (
                <div className="relative w-full h-48 mb-4 max-w-full">
                  <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-1 text-center border-b-2 pb-1 w-full">{item.name}</h3>
              {item.description && <p className="text-sm text-center mb-2">{item.description}</p>}
              {item.price && <p className="font-bold text-center text-lg">{item.price}</p>}
              <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
                <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );

  const renderSaladPlateBox = () => (
    <section className="my-12 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl font-bold border-b-2 pb-2 mb-6">Salad Plate</h2>
      <Card className="p-6 bg-white shadow-xl rounded-2xl relative">
        <div className="relative w-full h-64 mb-6 max-w-full">
          <Image src="/salad-plate.png" alt="Salad Plate" fill className="object-contain" />
        </div>
        <p className="mb-4">
          Includes: Iceberg Lettuce, Cherry Tomatoes, Cucumber, Carrots, Red Cabbage, Egg, Avocado, Crispy Noodles
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg font-semibold">
          {saladPlateOptions.map((item, idx) => (
            <li key={idx}>
              {idx + 9}. {item.name} — {item.price}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
          <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
        </div>
      </Card>
    </section>
  );

  const renderDrinkBox = (title: string, items: MenuItem[], image: string) => (
    <section className="my-12 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 p-6 rounded-3xl shadow-inner">
      <h2 className="text-3xl font-bold border-b-2 pb-2 mb-6">{title}</h2>
      <Card className="p-6 bg-white shadow-xl rounded-2xl relative">
        <div className="relative w-full h-64 mb-6 max-w-full">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <ul className="list-disc list-inside space-y-2 text-lg font-semibold">
          {items.map((item, idx) => (
            <li key={idx}>
              {item.name} — {item.price}
            </li>
          ))}
        </ul>
        <div className="absolute bottom-2 right-2 w-10 h-10 opacity-20">
          <Image src="/dragon-grill-logo.png" alt="Logo" fill className="object-contain" />
        </div>
      </Card>
    </section>
  );

  const renderAddBanner = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      className="bg-yellow-100 text-yellow-900 font-bold text-center py-3 px-6 rounded-lg mb-12 shadow-lg text-xl"
    >
      Add to Any Bowl or Plate : Veggies for $1.00 - Avocado for $1.50!
    </motion.div>
  );

  return (

<main className="relative w-full overflow-x-hidden font-sans">
  {/* HERO */}
  <section className="relative w-full h-96 bg-gradient-to-b from-red-600 via-red-500 to-orange-300 flex flex-col items-center justify-center text-white text-center overflow-hidden px-4">
    <div className="relative z-10 flex flex-col items-center">
      <div className="bg-white rounded-full p-4 shadow-xl">
        <Image
          src="/dragon-grill-logo.png"
          alt="Dragon Grill Logo"
          width={150}
          height={150}
          className="animate-float"
      />
    </div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 animate-fadeIn">
      Menu
    </h1>
    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl animate-fadeIn delay-200">
      Explore our delicious options, from Party Trays to daily specials.
    </p>
  </div>
</section>


  {/* CHEF MESSAGE */}
  <div className="flex flex-col items-center my-10 max-w-xl mx-auto text-center px-4">
    <p className="text-gray-700 italic text-sm sm:text-base md:text-lg">
  <strong>A word from our Chef Joel Lim:</strong> <br />
  &quot;Our way is the Best way to enjoy Asian Cuisine Without Sacrificing Taste or Your Health!&quot;
</p>
  </div>

  {/* MENU BUTTON */}
  <div className="text-center my-8">
    <a
      href="/menu.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg text-base sm:text-lg md:text-xl transition-colors duration-300 inline-block"
    >
      Download Full Menu (PDF)
    </a>
  </div>

  {/* OPTIONAL BANNER */}
  <div className="w-full mt-6 px-4">
    {renderAddBanner()}
  </div>

  <style jsx>{`
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    .animate-float { animation: float 6s ease-in-out infinite; }

    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 1s forwards; }
  `}</style>



      {renderSection("Bowls", bowls)}
      {renderSection("Plates", plates)}
      {renderSaladPlateBox()}
      {renderDrinkBox("Boba Drinks", bobaDrinks, "/boba-drinks.png")}
      {renderDrinkBox("Smoothies (24 oz.)", smoothies, "/smoothies.png")}
      {renderDrinkBox("Flavor Green Tea (w/Boba, 24 oz.)", flavorGreenTea, "/flavor-green-tea.png")}
      {renderSection("Bottle Drinks", bottleDrinks)}
      {renderSection("Sides", sides)}

      <section className="my-12 p-6 rounded-3xl bg-gradient-to-r from-yellow-50 via-white to-yellow-50 shadow-inner relative">
  <h2 className="text-3xl font-extrabold text-center mb-8 border-b-2 pb-3 border-yellow-300">
    Party Trays
  </h2>

  <Card className="p-8 bg-white shadow-xl rounded-2xl flex flex-col items-center text-center space-y-6 relative">
    <div>
      <p className="text-lg italic text-gray-600 mb-4">
        Please ask for more details about our Party Trays!
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1 font-medium">
        <li>Chicken</li>
        <li>Chicken White Meat</li>
        <li>Steak</li>
        <li>Steak and Chicken</li>
        <li>Shrimp (60 pcs.)</li>
        <li>Steamed Veggies</li>
        <li>Salad</li>
        <li>White Rice</li>
        <li>Brown Rice</li>
      </ul>
    </div>

    <div className="space-y-2">
      <p className="text-gray-700 font-medium">
        📞 <span className="font-bold text-yellow-700">Phone Orders:</span> 909-740-0740
      </p>
      <p className="text-gray-700 font-medium">
        💻 Online Orders: DoorDash / Uber Eats / Grubhub
      </p>
    </div>

    <a
      href="tel:9097400740"
      className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      Call to Order
    </a>

   <div className="absolute bottom-2 right-2 w-14 h-14 opacity-20">
  <Image
    src="/dragon-grill-logo.png"
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
  </Card>
</section>
</main>
  );
}
