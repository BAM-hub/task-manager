import Tag from "../../tag";
import { DialogRef, TaskType } from "../../../types";
import styles from "./task.module.scss";
import Modal from "../../modal";
import Form from "../../forms/task";
import { Dispatch, SetStateAction, useRef } from "react";
import DropDownInput from "../../input/dropDownInput";
import TrashLg from "../../../assets/trash-lg.svg?react";
import TrashIcon from "../../../assets/trash.svg?react";
import ArrowIcon from "../../../assets/arrow.svg?react";
import EditIcon from "../../../assets/edit.svg?react";

const Tasks = ({
  task,
  tasks,
  setTasks,
  categories,
}: {
  categories: string[];
  task: TaskType;
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
}) => {
  const editTaskRef = useRef<DialogRef>(null);
  const removeTaskRef = useRef<DialogRef>(null);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    editedTask: TaskType
  ) {
    e.preventDefault();
    const newTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(newTasks);
    editTaskRef.current?.close();
  }

  function editTaskStatus(editedTask: TaskType) {
    const newTasks = tasks.map((task) => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleDelete(taskToDelete: TaskType) {
    const newTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(newTasks);
    removeTaskRef.current?.close();
  }

  return (
    <>
      <div className={styles.taskContainer}>
        <div className={styles.taskInfoContainer}>
          <p>
            {task.taskName}
            {task.description && (
              <div className={styles.tooltip}>
                <ArrowIcon />
                {task.description}
              </div>
            )}
          </p>
          <div className={styles.tagsContainer}>
            {task.categories.map((category, index) => (
              <Tag key={index} name={category} />
            ))}
          </div>
        </div>
        <div className={styles.actionsContainer}>
          <DropDownInput onChange={editTaskStatus} task={task} />
          <button
            onClick={() => editTaskRef.current?.open()}
            className={styles.actionButton}
          >
            <EditIcon />
          </button>
          <button
            onClick={() => removeTaskRef.current?.open()}
            className={styles.actionButton}
          >
            <TrashIcon />
          </button>
        </div>
      </div>
      <Modal ref={editTaskRef}>
        <Form
          categories={categories}
          close={() => editTaskRef.current?.close()}
          defaultState={task}
          title="Edit Task"
          handleSubmit={handleSubmit}
        />
      </Modal>
      <Modal ref={removeTaskRef}>
        <div className={styles.removeModalContainer}>
          <TrashLg className={styles.image} />
          <div className={styles.contentContainer}>
            <div className={styles.infoContainer}>
              <h4>Delete Task</h4>
              <p>
                Are you sure you want to delete <span>{task.taskName}</span>?
              </p>
            </div>
            <div className={styles.actionsContaienr}>
              <button
                onClick={() => removeTaskRef.current?.close()}
                className={styles.secondary}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(task)}
                className={styles.danger}
              >
                <TrashIcon /> Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Tasks;
