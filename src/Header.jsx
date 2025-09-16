import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <ThemeToggle />
    </header>
  )
}