import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { mister } from "../assets";

{
  /****************************************
   *         SERVICE CARD COMPONENT       *
   ****************************************
   * Will elaborate later
   ****************************************/
}
const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt
        className="
    xs:w-[250px]
    w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="
        w-full
        bg-gradient-to-r from-blue-200 to-cyan-200
        p-[1px]
        rounded-[20px]
        shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="
          bg-tertiary
          rounded-[20px]
          py-5
          px-12
          min-h-[280px]
          flex
          justify-even
          items-center
          flex-col"
          >
            <img
              src={icon}
              alt={title}
              className="mt-10 w-16 h-16 object-contain"
            />
            <h3
              className="
            mt-5
            text-white
            text-[20px]
            font-bold
            text-center"
            >
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

{
  /****************************************
   *            ABOUT COMPONENT           *
   ****************************************
   * Will elaborate later
   ****************************************/
}
const About = () => {
  return (
    <>
      {/****************************************
       *         INTRO / SUBHEADER ANIM.       *
       ****************************************/}
      <motion.div variants={textVariant()} className="mt-10 inline-block">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Get To Know Me!</h2>
      </motion.div>

      <motion.div
        variants={textVariant()}
        className="
          float-right
          mr-20
          ml-20
          flex
          flex-wrap"
      >
        <img
          src={mister}
          className="
          w-[200px]
          h-[200px]
          mx-auto
          rounded-full
          object-contain"
        />
      </motion.div>

      {/****************************************
       *         PARAGRAPH CONTENT ANIM.       *
       ****************************************/}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
      mt-4
      text-secondary
      text-[17px]
      max-w-3xl
      leading-[30px]"
      >
        Aloha! My name is Misty Dela Cruz and I am a recent Applied Business
        Information Technolog (ABIT) graduate from UH Maui College with
        experience in robotics, web development, and UX/UI design. I am
        currently interning at ARL on Maui where I had the opportunity to
        research trending design systems, utilized their principles and
        frameworks to a basic support page, and collaborated in designing
        different use case flows for an application.
      </motion.p>

      {/****************************************
       *             SERVICE CARDS             *
       ****************************************/}
      <div
        className="
      mt-20
      flex
      flex-wrap
      gap-10
      justify-center"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
