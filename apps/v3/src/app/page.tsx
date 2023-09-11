import { Laila } from "next/font/google";
import Link from "next/link";

const font = Laila({
  subsets: ["latin"],
  weight: "700",
});

export default function Page(): JSX.Element {
  return (
    <main className="w-full">
      <div className="h-screen p-11 grid grid-cols-2">
        <div className="flex flex-col justify-end h-full max-w-lg">
          <div className={`${font.className} text-4xl font-bold pb-9`}>
            Victor Mutai
          </div>
          <div className="flex flex-col space-y-4">
            <p>
              Currently building distributed systems at&nbsp;
              <a
                href="https://iota.org"
                className="border-b border-slate-900 border-dotted"
                rel="noopener noreferrer"
                target="_blank"
              >
                IOTA Foundation
              </a>
              &nbsp; An open-source, scalable, feeless, green & permissionless
              distributed ledger.
            </p>

            <p>
              I am a senior software engineer with expertise in ReactJS, and
              NodeJS. Proven track record of delivering high-quality solutions
              to complex problems across various industries, including finance.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full items-end">
          <a
            className="hover:border-b border-slate-900 border-dotted"
            href="https://github.com/victorjambo/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github
          </a>
          <a
            className="hover:border-b border-slate-900 border-dotted"
            href="https://www.linkedin.com/in/mutaivictor/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="hover:border-b border-slate-900 border-dotted"
            href="mailto:victormutaijambo+dev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Mail
          </a>
        </div>
      </div>
      <div className="h-fit p-11">
        <div className="flex flex-col w-full items-end">
          <div className="flex flex-col space-y-2">
            <div>stepping stones / where i've been </div>
            <div>
              {history.map((h) => (
                <div key={h.noun} className="grid grid-flow-col gap-6">
                  <div>{h.noun}</div>
                  <div className="text-right">{h.verb}</div>
                </div>
              ))}
            </div>

            <div>and sharing what i've learned along the way</div>
            <div>
              {history.map((h) => (
                <div key={h.noun} className="grid grid-flow-col gap-6">
                  <div>{h.noun}</div>
                  <div className="text-right">{h.verb}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-11 py-5 border-t">
        <div>© 2023 Victor Mutai</div>
        <div className="flex space-x-6">
          <Link
            className="hover:border-b border-slate-900 border-dotted"
            href="/colophon"
            rel="noopener noreferrer"
            target="_blank"
          >
            colophon
          </Link>
          <Link
            className="hover:border-b border-slate-900 border-dotted"
            href="/log"
            rel="noopener noreferrer"
            target="_blank"
          >
            log
          </Link>
        </div>
      </div>
    </main>
  );
}

const history = [
  {
    noun: "1. Syndicate",
    verb: "Web3 investing infra & capital allocation",
  }
];
