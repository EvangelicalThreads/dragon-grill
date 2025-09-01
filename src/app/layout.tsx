import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dragon Grill",
  description: "Delicious bowls, plates, and boba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}>
        {/* 🔒 Watermark overlay */}
        <div className="watermark"></div>
        {/* NAVBAR */}
        <NavBar />

        {/* PAGE CONTENT */}
        <main className="pt-16">{children}</main>

      {/* FOOTER */}
<footer className="bg-gray-900 text-gray-200 pt-8 pb-16 px-6 sm:px-12 md:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Left Column: Logo, Contact & Hours */}
    <div className="flex flex-col gap-8 justify-start">
      {/* Logo */}
      <div className="flex items-start gap-4 -mt-8">
        <Image
          src="/dragon-grill-logo.png"
          alt="Dragon Grill Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-2 text-sm sm:text-base -mt-10">
        <h4 className="font-semibold mb-2">Contact</h4>
        <p className="text-gray-400">
          <span className="font-medium">Phone:</span> (909) 740-0740
        </p>
      </div>

      {/* Hours */}
      <div className="flex flex-col gap-2 text-sm sm:text-base -mt-4">
        <h4 className="font-semibold mb-2">Hours</h4>
        <p className="text-gray-400">
          <span className="font-medium">Mon-Sat:</span> 10:30am - 8:30pm
        </p>
        <p className="text-gray-400">
          <span className="font-medium">Sun:</span> Closed
        </p>
      </div>
    </div>

    {/* Right Column: Location & Map */}
    <div className="flex flex-col justify-start items-start gap-6">
      {/* Location */}
      <div className="flex flex-col gap-2 text-sm sm:text-base">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          📍 Location
        </h4>
        <p className="text-gray-400 leading-relaxed">
          115709 Euclid Avenue, Suite D<br />
          CA 91708
        </p>
      </div>

      {/* Google Map */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.968359977081!2d-117.65194112488936!3d33.96765272219317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dccdfa299dbb59%3A0x65cd5df585b07eb3!2sDragon%20Grill%20%26%20Boba%20Tea!5e0!3m2!1sen!2sus!4v1755635725481!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  </div>

  {/* Divider & Social */}
  <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm">
    <p>© {new Date().getFullYear()} Dragon Grill. All rights reserved.</p>
  </div>
</footer>


      </body>
    </html>
  );
}
