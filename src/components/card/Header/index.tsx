import Card from "../";
import styles from "./header.module.scss";

const index = ({ openDialog }: { openDialog: () => void }) => {
  return (
    <Card>
      <div className={styles.headerContainer}>
        <h1>Task Management</h1>
        <button onClick={openDialog} className={styles.animatedButton}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 12H9M12 15L12 9"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <span>New Task</span>
        </button>
      </div>
    </Card>
  );
};

export default index;
