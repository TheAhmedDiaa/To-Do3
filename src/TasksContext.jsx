import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TasksContext  = createContext();

export default function TasksProvider({children}) {
  const [tasks, setTasks] = useState([]);

  return(
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}