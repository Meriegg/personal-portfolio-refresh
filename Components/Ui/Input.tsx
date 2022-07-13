import React, { InputHTMLAttributes } from "react";

// Styles
import styles from "../../styles/Components/Input.module.scss";

// Types
interface Props {
  children?: React.ReactNode;
  error: string | undefined;
  isTextArea?: boolean;
}

const Input = ({
  isTextArea,
  ...props
}: Props & InputHTMLAttributes<HTMLElement>) => {
  return (
    <div className={styles.inputContainer}>
      {!isTextArea ? (
        <input
          {...props}
          className={`${styles.input} ${props.error ? styles.input_error : ""}`}
          type="text"
        />
      ) : (
        <textarea
          className={`${styles.input} ${props.error ? styles.input_error : ""}`}
          {...props}
          style={{ minHeight: "200px", resize: "vertical" }}
        />
      )}
      {props.error ? <p className={styles.inputError}>{props.error}</p> : null}
    </div>
  );
};

export default Input;
