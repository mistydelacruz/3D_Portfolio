import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { contacts } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

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
    </>
  );
};

export default SectionWrapper(Contact, "contact");

// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact
