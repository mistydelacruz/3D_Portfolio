import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shin, logo, menu, close } from "../assets";

/***************************************
 *           NAVBAR COMPONENT          *
 * Navbar is centered at the top of the screen
 * One side is for the logo and short descrip.
 * And the otherside is for the page links
 ***************************************/

const Navbar = () => {
  const [active, setActive] = useState("'");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/****************************************
       *              NAVBAR SETUP             *
       ****************************************/}
      <nav
        className={`${styles.paddingX} 
      w-full 
      flex 
      items-center 
      py-5 
      fixed 
      top-0 
      z-20
      bg-primary`}
      >
        {/****************************************
         *              NAVBAR CONTENT           *
         ****************************************/}
        <div
          className="
        w-full 
        flex 
        justify-between 
        items-center 
        max-w-7xl
        mx-auto"
        >
          {/****************************************
           *         LOGO / NAME / DESCRIP.        *
           ****************************************/}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={shin}
              alt="logo"
              className="rounded-full w-9 h-9 object-contain"
            />
            <p
              className="
            text-white 
            text-[18px] 
            font-bold
            cursor-pointer flex"
            >
              Misty Dela Cruz &nbsp;
              <span className="sm:block hidden">| Web Dev. & Designer</span>
            </p>
          </Link>

          {/****************************************
           *             OTHER NAV LINKS           *
           ****************************************/}
          <ul
            className="
          list-none
          hidden
          sm:flex
          flex-row
          gap-10"
          >
            {navLinks.map((Link) => (
              <li
                key={Link.id}
                className={`${
                  active === Link.title ? "text-white" : "text-secondary"
                } hover: 
              text-white 
              text-[18px] 
              font-medium
              cursor-pointer`}
              >
                <a href={`#${Link.id}`}>{Link.title}</a>
              </li>
            ))}
          </ul>

          {/****************************************
           *      MOBILE NAV MENU TOGGLE ICON      *
           ****************************************/}
          <div
            className="
          sm:hidden 
          flex 
          flex-1 
          justify-end
          items-center"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="
            w-[28px]
            h-[28px]
            object-contain
            cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${!toggle ? "hidden" : "flex"} 
            p-6
            bg-gradient-to-r from-violet-950 to-orange-500
            absolute 
            top-20 
            right-0 
            mx-4 
            my-2 
            min-w-[140px] 
            z-10 
            rounded-xl`}
            >
              {/****************************************
               *         MOBILE NAV MENU LINKS         *
               ****************************************/}
              <ul
                className="
              list-none
              flex
              justify-end
              items-start
              flex-col
              gap-4"
              >
                {navLinks.map((Link) => (
                  <li
                    key={Link.id}
                    className={`${
                      active === Link.title ? "text-black" : "text-white"
                    } 
                  font-poppins
                  font-medium
                  cursor-pointer
                  text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(Link.title);
                    }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
