import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App.jsx";
import TasksProvider from "./TasksContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <HeroUIProvider>
          <App />
        </HeroUIProvider>
      </ThemeProvider>
    </TasksProvider>
  </StrictMode>
);
