import { useContext } from "react";
import { TasksContext } from "./TasksContext";
import TasksMenu from "./TasksMenu";

export default function ListTasks() {
  const { tasks } = useContext(TasksContext);
  return (
  <div className="TasksList">
    {tasks.map((task) => (
        <div
          key={task.id}
          className="task overflow-hidden transition-all duration-300"
        >
          <div className="p-4 border-b flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">{task.title}</h3>
              <p className="text-sm text-gray-500">
                Due: {task.date.toString().replaceAll("-", "/")} at {task.time.toString()}
              </p>
            </div>
            <TasksMenu taskId={task.id} />
          </div>
        </div>
      ))}
  </div>);
}
