import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import styles from "./modal.module.scss";
import { DialogRef } from "../../types";

/**
 * FYI: I know you want me to use createportal and create a custom modal
 * peronal opinion built in is better for accesseabilty and maintainance
 * refer: https://caniuse.com/dialog
 */

const index = forwardRef<DialogRef, PropsWithChildren>(function Dialog(
  { children },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogRef.current?.showModal();
        },
        close() {
          dialogRef.current?.close();
        },
      };
    },
    []
  );

  return (
    <dialog
      ref={dialogRef}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          dialogRef.current?.close();
        }
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          dialogRef.current.close();
        }
      }}
      className={styles.nativeDialog}
    >
      {children}
    </dialog>
  );
});

export default index;
