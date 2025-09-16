import { TasksContext } from "./TasksContext";
import { useContext } from "react";

export default function AddTasks() {
  const { tasks, setTasks } = useContext(TasksContext);
  return (
    <main>
    </main>
  )
}