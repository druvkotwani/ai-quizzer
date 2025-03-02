"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MenuIcon, LogIn } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <header
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-[1px] border-white/10 overflow-hidden"
            : "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-[1px] border-white/10 overflow-hidden"
        } py-4 px-4`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <MenuIcon className="text-white" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="flex flex-col space-y-4 mt-4">
                  <Link href="/features" className="text-lg">
                    Features
                  </Link>
                  <Link href="/pricing" className="text-lg">
                    Pricing
                  </Link>
                </SheetDescription>
              </SheetHeader>

              <SheetFooter className="mt-auto">
                <SheetClose asChild>
                  <Button type="button">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Mobile Logo - Centered */}
          <Link
            href="/"
            className="text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2"
          >
            AI-Quizzer
          </Link>

          {/* Mobile Sign in Button - This creates balance with the menu icon */}
          <div className="ml-auto">
            <Button variant="default">
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Desktop Navbar */}
      <header
        className={`hidden md:block fixed top-4 left-0 right-0 z-50 max-w-6xl mx-auto transition-all duration-300 h-16 ${
          isScrolled
            ? "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-[1px] border-white/10 overflow-hidden"
            : "bg-gradient-to-br from-white/20 to-white/5 backdrop-blur border-[1px] border-white/10 overflow-hidden"
        } rounded-lg px-6`}
      >
        <div className="flex items-center justify-between w-full h-full relative">
          {/* Desktop Navigation */}
          <nav className="flex items-center space-x-2">
            <Link
              href="/features"
              className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Features
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/pricing"
              className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Pricing
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link>
            {/* <Link
              href="/contact"
              className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Contact
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Link> */}
          </nav>

          {/* Center Logo - Using absolute positioning for true center */}
          <Link
            href="/"
            className="text-white text-2xl font-bold absolute left-1/2 transform -translate-x-1/2"
          >
            AI-Quizzer
          </Link>

          {/* Desktop Auth */}
          <div className="flex items-center space-x-4">
            <Button variant="default">
              <Link href="/sign-in">Sign in</Link>
              <LogIn className="ml-[2px]" />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
