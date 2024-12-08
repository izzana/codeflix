'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  return ( 
    <header className={`${isScrolled ? "bg-black" : ""} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 lg:px-10 transition-all lg:py-8`}>
      <div className="flex items-center space-x-2 md:space-x-4">
        <Image
          src="https://raw.githubusercontent.com/devfullcycle/FC3-codeflix-frontend/a3ef81953e0859149c61364f922d2e6af99b64fa/public/logo.svg"
          alt="netflix"
          width={120}
          height={120}
        />
        <ul className="hidden md:flex md:space-x-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <img
          src="https://github.com/devfullcycle/FC3-codeflix-frontend/blob/master/public/profile.png?raw=true"
          alt="netflix"
          className="cursor-pointer rounded"
        />
        <button>
          Teste
        </button>
        <button>
          Teste
        </button>
      </div>
    </header>
  );
}