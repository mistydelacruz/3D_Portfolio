import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { contacts } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

{
  /****************************************
   *         CONTACT CARD COMPONENT       *
   ****************************************
   * Will elaborate later
   ****************************************/
}
const ContactCard = ({ index, icon, source_code_link, name }) => {
  return (
    <>
      {/****************************************
       *           CONTACT CARD ANIM.          *
       ****************************************/}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="
        w-[250px]
        p-[1px]"
      >
        {/****************************************
         *           CONTACT CARD ICONS          *
         ****************************************/}
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="
          p-5
          min-h-[150px]
          flex
          justify-even
          items-center
          flex-col"
        >
          <img
            src={icon}
            alt={name}
            className="
            w-[100px]
            h-[100px]
            object-contain
            cursor-pointer"
          />
        </div>
      </motion.div>
    </>
  );
};

{
  /****************************************
   *           CONTACT COMPONENT          *
   ****************************************
   * Will elaborate later
   ****************************************/
}
const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10 inline-block">
        <p className={styles.sectionSubText}>Contact Me</p>
        <h2 className={styles.sectionHeadText}>Reach Out!</h2>
      </motion.div>

      {/****************************************
       *             CONTACT CARDS             *
       ****************************************/}
      <div
        className="
      mt-20
      flex
      flex-wrap
      gap-5
      justify-center"
      >
        {contacts.map((contact, index) => (
          <ContactCard key={contact.name} index={index} {...contact} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
