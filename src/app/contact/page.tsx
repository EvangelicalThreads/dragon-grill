"use client";

import Image from "next/image";

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-xl animate-fadeIn delay-200">
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
      <section className="py-16 md:py-20 bg-orange-50 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re placing an order, asking about catering, or want to share feedback,
          our team is ready to help. Reach out via phone or email, or stop by in person!
        </p>
        <div className="mt-10 space-y-4">
          <a
            href="tel:+19097400740"
            className="text-gray-800 font-semibold flex items-center justify-center gap-2 hover:text-red-600 transition-colors"
          >
            📞 (909) 740-0740
          </a>
          <p className="text-gray-800 font-semibold flex items-center justify-center gap-2">
            📍 15709 Euclid Avenue, Suite D, CA 91708
          </p>
          <p className="text-gray-800 font-semibold flex items-center justify-center gap-2">
            🏢 Across from Chino Airport & behind Arco
          </p>
        </div>
      </section>
    </main>
  );
}
