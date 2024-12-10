import styles from "./dropDown.module.scss";
import classNames from "../../utils";
import { TaskType } from "../../../types";
import { useState } from "react";
import { createPortal } from "react-dom";

type Props = { task: TaskType; onChange: (task: TaskType) => void };

const STATUSES: { label: string; value: "Complete" | "InComplete" }[] = [
  {
    label: "Completed",
    value: "Complete",
  },
  {
    label: "InCompleted",
    value: "InComplete",
  },
];

const DropDownInput = ({ task, onChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(true)}
      className={classNames(
        styles.statusContainer,
        task.status === "Complete" ? styles.complete : styles.incomplete
      )}
    >
      {task.status}
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66675 7.16666L8.00008 10.5L11.3334 7.16666"
          stroke="#0A7900"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <div className={classNames(styles.dropdown, isOpen && styles.active)}>
        {STATUSES.map((status, index) => (
          <div
            onClick={(e) => {
              e.stopPropagation();
              onChange({
                ...task,
                status: status.value,
              });
              setIsOpen(false);
            }}
            className={styles.statusItem}
            key={index}
          >
            <span
              className={
                status.value === "Complete" ? styles.green : styles.orange
              }
            ></span>
            {status.value}
          </div>
        ))}
      </div>
      {isOpen &&
        createPortal(
          <div
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className={styles.backdrop}
          ></div>,
          document.body
        )}
    </div>
  );
};

export default DropDownInput;
