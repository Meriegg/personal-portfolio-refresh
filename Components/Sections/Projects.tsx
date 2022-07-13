import React from "react";
import styles from "../../styles/Sections/Projects.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { defaultAnimationEasing } from "../../Animations";

const linkVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: defaultAnimationEasing,
    },
  },
};

const Projects: React.FC = () => {
  const projects = [
    {
      header: "EliFlor Brand",
      description:
        "a simple site for a small business based in Romania. I made the site using React and Next.js.",
      link: "https://eliflorbrand.ro",
    },
    {
      header: "Online Command Line Interface Website",
      description:
        "a simple command line interface for my personal portfolio. Made using React and Next.js.",
      link: "https://mariodev-terminal.vercel.app",
    },
  ];

  return (
    <>
      <section data-native-section id="myprojects" className={styles.section}>
        <motion.h1
          initial={{
            y: -60,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: defaultAnimationEasing,
            },
          }}
          className={styles.section_header}
        >
          Here are some projects I made.
        </motion.h1>
        <motion.p
          initial={{
            x: -60,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: defaultAnimationEasing,
              delay: 0.2,
            },
          }}
          className={styles.section_instruction}
        >
          scroll down
        </motion.p>
      </section>
      {projects.map((project, projectIdx) => (
        <section
          className={`${styles.projectSection} ${
            projectIdx % 2 === 0
              ? styles.projectSection_dark
              : styles.projectSection_light
          }`}
          id={`PROJECT_${projectIdx}`}
          key={projectIdx}
        >
          <motion.h2
            initial={{ opacity: 0, x: 150 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, ease: defaultAnimationEasing },
            }}
          >
            #{projectIdx + 1}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: defaultAnimationEasing },
            }}
          >
            {project.header}
          </motion.h1>
          <motion.p
            initial={{ x: -150, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.4,
                ease: defaultAnimationEasing,
              },
            }}
          >
            {project.description}
          </motion.p>

          <div className={styles.projectSection_links}>
            <motion.a
              variants={linkVariants}
              initial={"initial"}
              whileInView={"show"}
              href={project.link}
              className={styles.section_link}
            >
              Visit Site
            </motion.a>
            <Link href="/contact">
              <motion.a
                variants={linkVariants}
                initial={"initial"}
                whileInView={"show"}
                className={styles.section_link}
              >
                Contact Me
              </motion.a>
            </Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default Projects;
