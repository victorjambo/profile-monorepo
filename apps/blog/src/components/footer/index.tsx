import { ThemeToggle } from "../theme-toggle";

export default function Footer(): JSX.Element {
  return (
    <footer className="text-center w-full mt-16 mb-4 border-t pt-4 flex justify-between items-center">
      <div className="flex text-sm font-bold">
        <a href="https://mutai.dev">Victor Mutai 🙌</a>
      </div>
      <ThemeToggle />
    </footer>
  );
}
