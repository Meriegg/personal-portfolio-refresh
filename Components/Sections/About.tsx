import React from "react";
import styles from "../../styles/Sections/About.module.scss";
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
      duration: 1,
      delay: 0.4,
      ease: defaultAnimationEasing,
    },
  },
};

const AboutSection: React.FC = () => {
  return (
    <section data-native-section id="about" className={styles.section}>
      <motion.p
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: defaultAnimationEasing,
          },
        }}
        className={styles.section_subHeader}
      >
        who am I?
      </motion.p>
      <motion.h1
        initial={{
          x: -60,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.2,
            ease: defaultAnimationEasing,
          },
        }}
        className={styles.section_header}
      >
        I am a Full Stack developer based in Romania.
      </motion.h1>

      <div className={styles.section_linkContainer}>
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
        <Link href="#contact">
          <motion.a
            variants={linkVariants}
            initial={"initial"}
            whileInView={"show"}
            className={styles.section_link}
          >
            Learn More
          </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
