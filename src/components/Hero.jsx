import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { KittenCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      {/****************************************
       *         BACKGROUND PIC SECTION        *
       ****************************************/}
      <section
        className="
      relative 
      w-full 
      h-screen 
      mx-auto"
      >
        {/****************************************
         *              QUOTE DESIGN             *
         ****************************************/}
        <div
          className={`${styles.paddingX} 
        absolute 
        inset-0
        top-[120px]
        max-w-7xl
        mx-auto
        flex
        flex-row
        items-start
        gap-5`}
        >
          <div
            className="
          flex
          flex-col
          justify-center
          items-center
          mt-5"
          >
            {/****************************************
             *                 CIRCLE                *
             ****************************************/}
            <div
              className="
            w-5
            h-5
            rounded-full
            bg-[#FE8251]"
            />
            {/****************************************
             *             LINE GRADIENT             *
             ****************************************/}
            <div
              className="
          w-1
          sm:h-80
          h-40
          bg-custom-gradient"
            />
          </div>

          {/****************************************
           *            SHORT DESCRIPTION          *
           ****************************************/}
          <div>
            <h1
              className={`${styles.heroHeadText}
              text-neutral-900`}
            >
              Hello! I'm
              <span
                className="
            text-[#8d0133]"
              >
                &nbsp; Misty
              </span>
            </h1>
            <p
              className={`${styles.heroSubText}
          mt-2`}
            >
              I am a front-end developer
              <br className="sm:block hidden" />
              working with user interfaces,
              <br className="sm:block hidden" />
              web design, and web applications.
            </p>
          </div>
        </div>

        {/****************************************
         *         COMPUTER CANVAS RENDER        *
         ****************************************/}
        {/* <ComputersCanvas /> */}
        <KittenCanvas />

        {/****************************************
         *         SCROLL INDICATOR ANIM.        *
         ****************************************/}
        <div
          className="
      absolute
      xs: bottom-10
      bottom-5
      w-full
      flex
      justify-center
      items-center"
        >
          <a href="#about">
            <div
              className="
          w-[35px]
          h-[64px]
          rounded-3xl
          border-4
          border-secondary
          flex
          justify-center
          items-start
          p-2"
            >
              {/****************************************
               *  ANIM. CIRCLE THAT INFINITELY TOGGLES *
               ****************************************/}
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="
            w-3
            h-3
            rounded-full
            bg-secondary
            mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
