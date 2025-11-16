"use client";

import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative w-full overflow-x-hidden font-sans">
      {/* HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center overflow-hidden px-4 bg-gray-900">
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 shadow-xl mb-6 animate-float">
            <Image
              src="/dragon-grill-logo.png"
              alt="Dragon Grill Logo"
              width={180}
              height={180}
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 animate-fadeIn">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl text-center animate-fadeIn delay-200">
            Questions, feedback, or just want to say hi? We&apos;d love to hear from you.
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

      {/* CONTACT CONTENT */}
      <section className="py-16 md:py-20 bg-gray-50 px-4 sm:px-8 md:px-16 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Get in Touch
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-12">
          Whether you&apos;re placing an order, asking about catering, or want to share feedback,
          our team is ready to help. Reach out via phone or email, or stop by in person!
        </p>

        {/* CONTACT INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-red-600">Phone</h3>
            <a
              href="tel:+19097400740"
              className="text-gray-800 font-semibold text-lg hover:text-red-500 transition-colors"
            >
              📞 (909) 740-0740
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-red-600">Address</h3>
            <p className="text-gray-800 font-semibold text-lg">
              📍 15709 Euclid Avenue, Suite D, CA 91708
            </p>
            <p className="text-gray-700 mt-1 text-sm">Across from Chino Airport & behind Arco</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-red-600">Hours</h3>
            <p className="text-gray-800 font-semibold text-lg">Mon - Sun: 10:00 AM - 9:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
}
