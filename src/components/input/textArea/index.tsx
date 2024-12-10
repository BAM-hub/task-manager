import styles from "./textInput.module.scss";

import { TextAreaInputProps } from "../../../types";

const index = (props: TextAreaInputProps) => {
  return <textarea className={styles.textInput} {...props} />;
};

export default index;
