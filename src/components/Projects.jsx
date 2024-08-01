import { Tilt } from "react-tilt";
import { motion, MotionValue } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.75, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="
        bg-tertiary
        p-5
        rounded-2xl
        sm:w-[360px]
        w-full"
        >
          <div
            className="
          relative
          w-full
          h-[230px]"
          >
            <img
              src={image}
              alt={name}
              className="
            w-full
            h-full
            object-cover
            rounded-2xl"
            />
          </div>
        </Tilt>
      </motion.div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-10 inline-block">
        <p className={styles.sectionSubText}>
          Some projects I've been working on
        </p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>

      <div
        className="
      w-full
      flex"
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="
        mt-3
        text-secondary
        text-[17px]
        max-w-3xl
        leading-[30px]"
        >
          These projects illustrate my skills and experience through practical
          examples. Each one features a brief description, along with links to
          GitHub repositories and live demos. They showcase my ability to
          address complex challenges, work with diverse technologies and
          resources, and manage projects effectively.
        </motion.p>
      </div>

      <div
        className="
        mt-20
        flex
        flex-wrap
        gap-7"
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
