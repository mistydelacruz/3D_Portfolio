import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { max } from "three/examples/jsm/nodes/Nodes.js";

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
        shadow-card">
          <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="
          bg-tertiary
          rounded-[20px]
          py-5
          px-12
          min-h-[280px]"
          >
            <p>hello</p>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Get To Know Me!</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
      mt-4
      text-secondary
      text-[17px]
      max-w-3xl
      leading-[30px]"
      >
        Lorem ipsum odor amet, consectetuer adipiscing elit. Ultricies orci eget
        accumsan accumsan a nullam adipiscing faucibus. Platea cras proin et ut
        facilisi velit platea adipiscing dignissim. Suscipit cursus vestibulum
        pellentesque adipiscing; senectus inceptos efficitur fringilla quis.
        Orci leo ridiculus risus est quis porta. Urna nec ad platea curabitur id
        venenatis libero potenti fusce. Semper nascetur sodales id taciti
        molestie a sollicitudin.
      </motion.p>

      <div
        className="
      mt-20
      flex
      flex-wrap
      gap-10"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
