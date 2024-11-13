import Link from "next/link";
import Image from "next/image"
import { useState } from 'react';

export default function Header(){
    const [navbar, setNavbar] = useState(false);
    return(
        <nav className="w-full bg-[#222831] fixed top-0 left-0 right-0 z-10">
  <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    <div>
      <div className="flex items-center justify-between py-3 md:py-5 md:block">
        {/* LOGO */}
        <Link href="/">
          <h2 className="text-4xl text-[#f0f4f8] font-semibold">Portfolio</h2>
        </Link>
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src="/close.svg" width={30} height={30} alt="Close Menu" />
            ) : (
              <Image
                src="/hamburger-menu.svg"
                width={30}
                height={30}
                alt="Open Menu"
              />
            )}
          </button>
        </div>
      </div>
    </div>
    {/* Navigation Links */}
    <div
      className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
        navbar ? 'p-12 md:p-0 block' : 'hidden'
      }`}
    >
      <ul className="h-screen md:h-auto items-center justify-center md:flex flex-col md:flex-row">
        <li className="text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#home" onClick={() => setNavbar(!navbar)}>
            Home
          </Link>
        </li>
        <li className="text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#about" onClick={() => setNavbar(!navbar)}>
            About
          </Link>
        </li>
        <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#education" onClick={() => setNavbar(!navbar)}>
            Education
          </Link>
        </li>
        <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#projects" onClick={() => setNavbar(!navbar)}>
            Projects
          </Link>
        </li>
        <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#skills" onClick={() => setNavbar(!navbar)}>
            Skills
          </Link>
        </li>
        <li className="text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-[#00ADB5]">
          <Link href="#contact" onClick={() => setNavbar(!navbar)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}