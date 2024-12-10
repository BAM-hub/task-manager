import styles from "./filters.module.scss";
type Props = {
  categories: string[];
  selectedStatus: string;
  selectedCategory: string;
  setSelecteddStatus: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Filters = ({
  categories,
  selectedCategory,
  selectedStatus,
  setSelectedCategory,
  setSelecteddStatus,
}: Props) => {
  function handleStatusChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelecteddStatus(e.target.value);
  }
  function handleCategoryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedCategory(e.target.value);
  }
  return (
    <div>
      <h6 className={styles.header}>Filter</h6>
      <div className={styles.inputGroupContainer}>
        <p className={styles.groupLabel}>Completion Status</p>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="status"
            value={"all"}
            checked={selectedStatus === "all"}
            onChange={handleStatusChange}
          />
          <label>All</label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="status"
            checked={selectedStatus === "Complete"}
            value={"Complete"}
            onChange={handleStatusChange}
          />
          <label>Completed</label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="status"
            value={"InComplete"}
            checked={selectedStatus === "InComplete"}
            onChange={handleStatusChange}
          />
          <label>InComplete</label>
        </div>
      </div>
      <div className={styles.inputGroupContainer}>
        <p className={styles.groupLabel}>Completion Status</p>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="category"
            checked={selectedCategory === "all"}
            value={"all"}
            onChange={handleCategoryChange}
          />
          <label>All</label>
        </div>

        {categories.map((category, index) => (
          <div className={styles.radioContainer} key={index}>
            <input
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
              type="radio"
              name="category"
              value={category}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
