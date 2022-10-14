import { useState } from "react";
import icons from "../../util/Icons";
import HelpModal from "./modals/HelpModal";
import LoginModal from "./modals/LoginModal";

export default function Header({ shoppingCart, wished }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="hidden md:block bg-slate-200">
        <ul className="flex items-center py-2 pl-10 gap-x-5 font-bold">
          <li>
            <HelpModal />
          </li>
          <li>
            <LoginModal />
          </li>
        </ul>
      </nav>
      <div className="flex justify-end items-center gap-x-4 md:gap-x-7 w-11/12 m-auto py-3">
        <div className="hidden md:block">
          {wished ? icons.header.redHeart : icons.header.heart}
        </div>
        <div className="relative">
          {icons.header.cart}
          <div className="absolute top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full">
            {/* INCREMENTAL PRODUC NUMBER */}
            {shoppingCart}
          </div>
        </div>
        {/* BURGER MENU */}
        <div className="md:hidden">{icons.header.search}</div>
        <div className="md:hidden z-10">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-3 right-3 w-max border border-black">
              <div className="p-5 pt-0 bg-slate-300 w-full">
                <div className="flex items-center justify-between border-b-2 border-slate-100">
                  <div className="flex justify-end w-24 p-2">
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="rounded hover:bg-gray-200 font-bold px-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      X
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="font-bold p-2">
                    <li className="border-b-2 border-black">
                      <HelpModal />
                    </li>
                    <li className="border-b-2 border-black mt-3">
                      <LoginModal />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
