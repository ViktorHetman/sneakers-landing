import React from "react";

import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/";

const Nav = () => {
  const [hamburgerTrigger, setHamburgerTrigger] = React.useState(false);

  return (
    <header className="padding-x py-9 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray duration-500 hover:text-orange-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block cursor-pointer">
          <img
            src={hamburger}
            alt="hamburger button"
            width={25}
            height={25}
            onClick={() => setHamburgerTrigger(!hamburgerTrigger)}
          />
        </div>
        {hamburgerTrigger && (
          <div className="w-40 h-40 lg:hidden">
            <h1>Future Hamburger Menu</h1>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
