import React from "react";
import styles from "../../styles/Components/SectionManager.module.scss";
import { defaultAnimationEasing } from "../../Animations";
import { motion } from "framer-motion";
import { MyContext } from "../Context/Context";

const SectionManager: React.FC = () => {
  const [currentSectionBg, setCurrentSectionsBg] =
    React.useState<string>("#fff");
  const globalState = React.useContext(MyContext);

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.25) {
        globalState.setActiveSectionId(
          globalState.currentSections.indexOf(entry.target)
        );
      }
    });
  };

  const sectionColorObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.25) {
        const domTarget = document.getElementById(
          entry.target.id
        ) as HTMLElement;
        const sectionBgColor = domTarget.style.backgroundColor;
        domTarget.scrollIntoView();

        setCurrentSectionsBg(sectionBgColor);
      }
    });
  };

  const observerOptions = React.useMemo(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    }),
    []
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    globalState.currentSections.forEach((section: HTMLElement) => {
      observer.observe(section);
    });

    // Detect Section Color Observer
    const allSections = document.querySelectorAll("section");
    if (!allSections) return;

    const sectionColorObserver = new IntersectionObserver(
      sectionColorObserverCallback,
      observerOptions
    );
    allSections.forEach((section, sectionId) => {
      section.id = `SECTION_${sectionId}`;
      section.style.backgroundColor = sectionId % 2 === 0 ? "#fff" : "#000";

      sectionColorObserver.observe(section);
    });
  }, []);

  const sections = [
    {
      text: "Hello!",
      selector: "SECTION_0",
    },
    {
      text: "about me",
      selector: "SECTION_1",
    },
    {
      text: "work i did",
      selector: "SECTION_2",
    },
    {
      text: "contact",
      selector: "SECTION_5",
    },
  ];

  const navigateToSection = (selector: string) => {
    const section = document.getElementById(selector);
    const body = document.body;
    if (!section || !body) return;

    body.style.scrollBehavior = "initial";
    body.scrollTop = section.getBoundingClientRect().top;
    body.style.scrollBehavior = "smooth";
  };

  return (
    <motion.div
      initial={{ x: 150, opacity: 0 }}
      animate={{
        x: 0,
        y: "-50%",
        opacity: 1,
        transition: {
          duration: 1,
          delay: 0.8,
          ease: defaultAnimationEasing,
        },
      }}
      className={styles.sectionManager}
    >
      {sections.map((section, sectionID) => (
        <React.Fragment key={sectionID}>
          {sectionID > 0 && (
            <div className={styles.sectionManager_separator}></div>
          )}
          <div
            onClick={() => navigateToSection(section.selector)}
            data-section-bg={currentSectionBg}
            className={
              sectionID === globalState.activeSectionId
                ? `${styles.sectionManager_item} ${styles.sectionManager_itemActive}`
                : styles.sectionManager_item
            }
          >
            <p>{section.text}</p>
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default SectionManager;
