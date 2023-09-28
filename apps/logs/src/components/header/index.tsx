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
          <li className="pr-4 text-stone-400 dark:text-gray-500 font-bold">
            <Link href="/logs">Log</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
