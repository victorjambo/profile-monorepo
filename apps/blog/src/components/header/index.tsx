import "./header.css";
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <header className="flex justify-between items-center my-4 h-8 mb-20">
      <div className="flex items-start">
        <Link href="/">
          <span className="logo font-bold">victor</span>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="pr-4">
            <Link className="rounded-md font-bold hover:bg-accent hover:text-accent-foreground py-2 px-4" href="/logs">Log</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
