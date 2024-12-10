import styles from "./inputWrapper.module.scss";
import classNames from "../../utils";
import { InputWrapperProps } from "../../../types";

const index = ({ children, placeholder, name, value }: InputWrapperProps) => {
  const isEmpty = value instanceof Array ? !value.length : !value;
  return (
    <div
      className={classNames(styles.inputContainer, !isEmpty && styles.active)}
    >
      <label htmlFor={name}>{placeholder}</label>
      {children}
    </div>
  );
};

export default index;
