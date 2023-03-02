import React from "react";
import { rocket } from "../assets";


const Navbar = () => {
  return (
    <header className="w-full bg-Snow-400 flex flex-col overflow-hidden">
      <nav className="w-[90%] m-auto flex">
        <div className="md:flex block w-full">
          <div className="w-full flex justify-center md:justify-start items-center p-4">
            <img
              src={rocket}
              className="rounded-full bg-midnight w-10 h-10 p-2 cursor-default"
              alt="Rocket icon"
            />
            <span className="mx-2 text-xl cursor-default">VelocityChecker</span>
          </div>

          <div className="md:border-none border-t-2 border-Snow-100 w-full md:w-0 p-1" />

          <div className="md:w-[30%] w-full flex items-center text-xs md:text-sm">
            <ul className="flex w-full justify-evenly">
              <li>
                <a href="/About" className="hover:text-Snow-100">
                  About Us
                </a>
                
              </li>
              <li>
                <a href="/privacy.js" className="hover:text-Snow-100">
                  Privacy
                </a>
                
              </li>
            </ul>
          </div>

          <div className="md:border-none border-b-2 border-Snow-100 w-full md:w-0 p-1" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
