import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

const index = ({
  children,
  slot,
}: PropsWithChildren<{
  slot: "header" | "side" | "main";
}>) => {
  return <div className={styles[slot]}>{children}</div>;
};

export default index;
