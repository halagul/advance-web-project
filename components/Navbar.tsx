"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
      {/* Logo / Brand x*/}
      <Link href="/" className="text-2xl font-bold text-gray-800">
        PublicGoods
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className={`text-sm font-medium ${
            pathname === "/" ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          Home
        </Link>

        <Link
          href="/listing"
          className={`text-sm font-medium ${
            pathname === "/listing" ? "text-black" : "text-gray-500"
          } hover:text-black`}
        >
          Products
        </Link>

        {/* Custom Button */}
        <Link href="/listing">
          <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
