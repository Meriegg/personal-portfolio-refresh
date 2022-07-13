import React from "react";
import styles from "../../styles/Components/Nav.module.scss";

interface Props {
  isOpen: boolean;
  setOpen: Function;
}

const OpenMenuBtn: React.FC<Props> = ({ setOpen, isOpen }) => {
  const globalClassPrefix = isOpen ? "openMenuBtn_open" : "openMenuBtn";

  return (
    <button
      onClick={() => setOpen(!isOpen)}
      className={styles[globalClassPrefix]}
    >
      <div className={styles[`${globalClassPrefix}_lines`]}>
        <div className={styles[`${globalClassPrefix}_line`]}></div>
      </div>
      <p className={styles[`${globalClassPrefix}_label`]}>
        {isOpen ? "close" : "menu"}
      </p>
    </button>
  );
};

export default OpenMenuBtn;
