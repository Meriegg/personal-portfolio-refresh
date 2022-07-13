import React from "react";
import Link from "next/link";
import styles from "../../styles/Components/Nav.module.scss";
import { defaultAnimationEasing } from "../../Animations";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";

const menuNavVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 2,
      ease: defaultAnimationEasing,
    },
  },
};

const contactLinkVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: defaultAnimationEasing,
      delay: 0.5,
    },
  },
  hover: {
    scale: 0.95,
  },
  tap: {
    scale: 0.9,
  },
};

interface Props {
  isOpen: boolean;
  setOpen: Function;
}

const NavMenu: React.FC<Props> = ({ isOpen, setOpen }) => {
  const links = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "https://mariodev-terminal.vercel.app",
      text: "Terminal",
    },
  ];

  const contactOptions = [
    {
      text: "mario.developer.contact@gmail.com",
      label: "email",
    },
    {
      text: "@meriofrog",
      label: "instagram",
    },
    {
      text: "Meriegg",
      label: "github",
    },
  ];

  return (
    <div
      className={isOpen ? `${styles.menu} ${styles.menu_open}` : styles.menu}
      id={"NAV_MENU"}
    >
      <div className={styles.menu_content}>
        <motion.div
          variants={menuNavVariants}
          initial={"initial"}
          whileInView={"show"}
          className={styles.menu_nav}
        >
          {links.map((link, linkIndex) => (
            <Link href={link.href} key={linkIndex}>
              <a
                className={styles.menu_nav_link}
                onClick={() => setOpen(false)}
              >
                {link.text}
              </a>
            </Link>
          ))}
        </motion.div>

        <div>
          <motion.div
            className={styles.menu_contact}
            transition={{
              staggerChildren: 1,
              duration: 1.5,
              ease: defaultAnimationEasing,
            }}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
          >
            <p className={styles.menu_contact_header}>
              contact (press to copy)
            </p>
            {contactOptions.map((contactForm, itemIndex) => (
              <CopyToClipboard text={contactForm.text} key={itemIndex}>
                <motion.p
                  variants={contactLinkVariants}
                  initial={"initial"}
                  whileInView={"show"}
                  whileHover={"hover"}
                  whileTap={"tap"}
                  className={styles.menu_contact_link}
                >
                  {contactForm.label} - {contactForm.text}
                </motion.p>
              </CopyToClipboard>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.p
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
            ease: [0.6, 0.01, -0.05, 0.95],
          },
        }}
        className={styles.menu_copyright}
      >
        © 2022 Site created by Me.
      </motion.p>
    </div>
  );
};

export default NavMenu;
