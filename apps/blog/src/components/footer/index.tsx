import { ThemeToggle } from "../theme-toggle";

export default function Footer(): JSX.Element {
  const url = `${
    process.env.NEXT_PUBLIC_MAIN_APP_URL ?? "/"
  }?utm_source=blog.mutai.dev`;

  return (
    <footer className="text-center w-full mt-16 mb-4 border-t pt-4 flex justify-between items-center">
      <div className="flex text-sm font-bold">
        <a href={url}>main site 🙌</a>
      </div>
      <ThemeToggle />
    </footer>
  );
}
