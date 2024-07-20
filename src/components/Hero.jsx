import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    /***************************************
     *       BACKGROUND PIC SECTION        *
     ***************************************/
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

        <div>
          <h1
            className={`${styles.heroHeadText}
            text-[#fb923c]`}
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
          mt-2
          text-black`}
          >
            I am a front-end developer
            <br className="sm:block hidden" />
            working with user interfaces,
            <br className="sm:block hidden" />
            web design, and web applications.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
