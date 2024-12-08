import { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import classNames from "../utils";

const index = ({ children }: PropsWithChildren) => {
  return (
    <div className={classNames(styles.container, styles.mainAppGrid)}>
      {children}
    </div>
  );
};

export default index;
