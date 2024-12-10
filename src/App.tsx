import Layout from "./components/layout/index";
import Slot from "./components/layout/solt";
import Card from "./components/card";
import HeaderCard from "./components/card/Header";
import Modal from "./components/modal";
import { useMemo, useRef, useState } from "react";
import Form from "./components/forms/task";
import { DialogRef, TaskType } from "./types";
import Tasks from "./components/card/tasks";
import Filters from "./components/filters";
import { useDebounce } from "./hooks/useDebounce";

const CATEGORIES = ["Category 1", "Category 2", "Category 3"];

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [selectedStatus, setSelecteddStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const careateTaskRef = useRef<DialogRef>(null);
  const deboucedSelectedStatus = useDebounce(selectedStatus, 400);
  const deboucedSeletedCategory = useDebounce(selectedCategory, 400);

  function openDialog() {
    careateTaskRef.current?.open();
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>, task: TaskType) {
    e.preventDefault();
    setTasks([...tasks, task]);
    careateTaskRef.current?.close();
  }

  const filterdtasks = useMemo(() => {
    let newTasks = tasks;
    if (deboucedSeletedCategory !== "all") {
      newTasks = tasks.filter((task) =>
        task.categories.includes(deboucedSeletedCategory)
      );
    }
    if (deboucedSelectedStatus !== "all") {
      newTasks = newTasks.filter(
        (task) => task.status === deboucedSelectedStatus
      );
    }
    return newTasks;
  }, [tasks, deboucedSeletedCategory, deboucedSelectedStatus]);

  return (
    <Layout>
      <Slot slot="header">
        <HeaderCard openDialog={openDialog} />
      </Slot>
      <Slot slot="side">
        <Card fullHeight>
          <Filters
            selectedStatus={selectedStatus}
            setSelecteddStatus={setSelecteddStatus}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={CATEGORIES}
          />
        </Card>
      </Slot>
      <Slot slot="main">
        {filterdtasks.map((task) => (
          <Card key={task.id}>
            <Tasks task={task} tasks={tasks} setTasks={setTasks} />
          </Card>
        ))}
      </Slot>
      <Modal ref={careateTaskRef}>
        <Form
          close={() => careateTaskRef.current?.close()}
          categories={CATEGORIES}
          title="Create New Task"
          handleSubmit={handleSubmit}
        />
      </Modal>
    </Layout>
  );
}

export default App;
