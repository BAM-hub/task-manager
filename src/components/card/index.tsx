import { PropsWithChildren } from "react";
import styles from "./card.module.scss";
import classNames from "../utils";

const index = ({
  children,
  fullHeight,
}: PropsWithChildren<{ fullHeight?: boolean }>) => {
  return (
    <div
      className={classNames(
        styles.cardContainer,
        fullHeight && styles.fullHeight
      )}
    >
      {children}
    </div>
  );
};

export default index;
