import { PropsWithChildren } from "react";
import styles from "../header/index.module.scss";

const index = ({
  children,
}: PropsWithChildren<{
  solt: "header" | "side" | "main";
}>) => {
  return <div className={styles.slot}>{children}</div>;
};

export default index;
