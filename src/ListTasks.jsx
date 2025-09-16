import { useContext } from "react";
import { TasksContext } from "./TasksContext";

export default function ListTasks() {
  const { tasks } = useContext(TasksContext);
  return (
    <div>

    </div>
  )
}