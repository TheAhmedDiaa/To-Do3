import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 max-h-16 flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">To-Do List</h1>
      <ThemeToggle />
    </header>
  )
}