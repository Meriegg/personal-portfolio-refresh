import React from "react";
import styles from "../../styles/Sections/Hello.module.scss";
import { MyContext } from "../Context/Context";
import { defaultAnimationEasing } from "../../Animations";
import { motion } from "framer-motion";

const HelloSection: React.FC = () => {
  const globalState = React.useContext(MyContext);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    let tempSections = globalState.currentSections;
    tempSections.push(sectionRef.current);

    globalState.setCurrentSections(tempSections);
  }, []);

  return (
    <section id="hello" ref={sectionRef} className={styles.section}>
      <motion.h1
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
        className={styles.section_header}
      >
        Hello, I am Mario.
      </motion.h1>
      <motion.p
        initial={{
          x: 40,
          opacity: 0,
        }}
        whileInView={{
          x: "-50%",
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 1,
            ease: defaultAnimationEasing,
          },
        }}
        className={styles.section_scrollDown}
      >
        scroll down to learn more.
      </motion.p>
    </section>
  );
};

export default HelloSection;
