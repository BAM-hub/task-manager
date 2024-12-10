import styles from "./textInput.module.scss";
import { InputProps } from "../../../types";
import classNames from "../../utils";

const index = ({ error, ...props }: InputProps) => {
  return (
    <>
      <input
        className={classNames(styles.textInput, !!error && styles.invalid)}
        type="text"
        {...props}
      />
      {error && <span className={styles.danger}>{error}</span>}
    </>
  );
};

export default index;
