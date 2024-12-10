import styles from "./tag.module.scss";
import { TagProps } from "../../types";

const index = ({ name, ...props }: TagProps) => {
  return (
    <div className={styles.resultItem}>
      <span>{name}</span>
      {props.onClick && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4.375 4.375L9.625 9.625M4.375 9.625L9.625 4.375"
            stroke="#A8B1D3"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default index;
