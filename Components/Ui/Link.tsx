import React from "react";
import Link from "next/link";
import styles from "../../styles/Components/Link.module.scss";

interface Props {
  href: string;
  fontSize: number;
  variant: "dark" | "light";
  children: React.ReactNode;
}

const StyledLink: React.FC<Props> = ({ href, children, fontSize, variant }) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.link} ${styles[`link_${variant}`]}`}
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
