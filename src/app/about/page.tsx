"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            About Dragon Grill
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl animate-fadeIn delay-200">
            Passionate about bold flavors, fresh ingredients, and unforgettable meals.
          </p>
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
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-16 md:py-20 bg-orange-50 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Dragon Grill started with a simple mission: serve hearty, fresh meals that
          bring joy to every bite. From our bowls and plates to our refreshing boba
          drinks, every dish is crafted with care and passion.
        </p>
        <div className="mt-10">
          <Link href="/menu">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white font-bold rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all text-sm sm:text-base md:text-lg">
              Explore Our Menu
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
