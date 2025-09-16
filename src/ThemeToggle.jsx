import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch (important for next-themes)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Classic
      toggled={currentTheme === "dark"}
      toggle={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="text-4xl"
    />
  );
}
