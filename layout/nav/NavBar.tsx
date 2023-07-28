import Image from "next/image";
import navBurger from "../../public/nav-burger.svg";
import logo2 from "../../public/logo2.png";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import MobileButton from "./MobileButton";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-3 bg-sky-900">
        <Image
          priority
          src={logo2}
          alt="Code Sandbox Logo"
          height={30}
          width={30}
        />
        <ul className="hidden sm:flex gap-4">
          <NavLinks />
        </ul>
        <div className="sm:hidden">
          <MobileButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <MobileMenu isMenuOpen={isMenuOpen} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
