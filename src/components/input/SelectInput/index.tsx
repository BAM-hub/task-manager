import styles from "./select.module.scss";
import Tag from "../../tag";
import { useMemo, useState } from "react";
import fuzzy from "fuzzy";
import classNames from "../../utils";
import { SelectInputProps } from "../../../types";

const SearchInput = ({ categories, value, onChange }: SelectInputProps) => {
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  const filterdResult = useMemo(() => {
    return fuzzy.filter(text, categories).map((value) => value.original);
  }, [text, categories]);
  return (
    <div
      onFocus={() => {
        setActive(true);
      }}
    >
      <div className={styles.resultContainer}>
        {value.map((name, index) => (
          <Tag
            name={name}
            key={index}
            onClick={() => {
              const newValue = value.filter((value) => value !== name);
              onChange((prev) => ({
                ...prev,
                categories: newValue,
              }));
            }}
          />
        ))}
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div
        onBlur={() => {
          setActive(false);
          setText("");
        }}
        className={classNames(styles.dropDown, active && styles.active)}
      >
        {filterdResult.map((category, index) => (
          <div
            tabIndex={1}
            onClick={() => {
              if (!value.includes(category)) {
                onChange((prev) => ({
                  ...prev,
                  categories: [...prev.categories, category],
                }));
              } else {
                const newValue = value.filter((value) => value !== category);
                onChange((prev) => ({
                  ...prev,
                  categories: newValue,
                }));
              }
            }}
            className={styles.selectItem}
          >
            <input
              tabIndex={-1}
              checked={value.includes(category)}
              type="checkbox"
              name={category}
              key={index}
              value={category}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchInput;
