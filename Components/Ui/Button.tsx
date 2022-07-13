import React from "react";
import styles from "../../styles/Components/Button.module.scss";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
