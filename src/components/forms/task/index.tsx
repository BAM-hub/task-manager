import styles from "./task.module.scss";
import TextInput from "../../input/textInput";
import TextArea from "../../input/textArea";
import SelectInput from "../../input/SelectInput";
import InputWrapper from "../../input/inputWrapper";

import { useState } from "react";
import { FromProps, TaskType } from "../../../types";

const EMPTY_TASK: TaskType = {
  id: "",
  taskName: "",
  description: "",
  categories: [],
  status: "InComplete",
};

const Form = ({
  title,
  handleSubmit,
  categories,
  close,
  ...props
}: FromProps) => {
  const [task, setTask] = useState<TaskType>(props.defaultState || EMPTY_TASK);

  const [error, setError] = useState({
    taskName: "",
    description: "",
    categories: "",
  });

  function validate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!task.taskName) {
      setError({
        ...error,
        taskName: "Name is required",
      });
      return;
    } else {
      setError({
        ...error,
        taskName: "",
      });
    }
    handleSubmit(e, { ...task, id: task.id || Date.now().toString() });
    setTask(EMPTY_TASK);
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>{title}</h1>
      <form action="dialog" onSubmit={validate}>
        <InputWrapper
          name="task-name"
          placeholder="Task Name"
          value={task.taskName}
        >
          <TextInput
            error={error.taskName}
            name="task-name"
            onChange={(e) => {
              setTask((prev) => ({
                ...prev,
                taskName: e.target.value,
              }));
            }}
            value={task.taskName}
          />
        </InputWrapper>
        <InputWrapper
          name="description"
          placeholder="Task description (optional)"
          value={task.description}
        >
          <TextArea
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            name="description"
            value={task.description}
          />
        </InputWrapper>
        <InputWrapper
          name="Categories"
          placeholder="Categories"
          value={task.categories}
        >
          <SelectInput
            error={error.categories}
            categories={categories}
            value={task.categories}
            onChange={setTask}
          />
        </InputWrapper>
        <div className={styles.CTAContainer}>
          <input
            onClick={() => close()}
            className={styles.secondary}
            type="button"
            value="cancel"
          />
          <input
            className={styles.primary}
            type="submit"
            value="Save Changes"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
