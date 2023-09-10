"use client";
import { Disclosure } from "@headlessui/react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeDropdown from "./themeDropdown";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { classNames } from "../../utils/classNames";
import { useScrollControl } from "../../context/scrollControl";

interface INav {
  id: string;
  name: string;
  link?: string;
}

const navigation: INav[] = [
  { id: "01", name: "About" },
  { id: "02", name: "Experience" },
  { id: "03", name: "Work" },
  { id: "04", name: "Contact" },
  { id: "05", name: "Blog", link: "/blog" },
];

const defaultCurrentSection = {
  About: false,
  Experience: false,
  Work: false,
  Contact: false,
};

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [scrollTop, setScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState<Record<string, boolean>>(
    defaultCurrentSection
  );

  const navRef = useRef(null);

  const { scrollInto, refs } = useScrollControl();

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleOnClick = (item: INav) => {
    if (item.link) {
      router.push(item.link);
    } else if (pathname === "/blog") {
      router.push("/");
    } else {
      scrollTo(item.name);
    }
  };

  const scrollTo = (name: string) => {
    let currentRef;
    switch (name) {
      case "About":
        currentRef = refs?.About;
        setCurrentSection({ ...defaultCurrentSection, About: true });
        break;
      case "Contact":
        currentRef = refs?.Contact;
        setCurrentSection({ ...defaultCurrentSection, Contact: true });
        break;
      case "Experience":
        currentRef = refs?.Experience;
        setCurrentSection({ ...defaultCurrentSection, Experience: true });
        break;
      case "Work":
        currentRef = refs?.Work;
        setCurrentSection({ ...defaultCurrentSection, Work: true });
        break;
      default:
        break;
    }
    if (scrollInto) {
      scrollInto(currentRef);
    }
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div
            ref={navRef}
            className={classNames(
              "fixed inset-0 z-30  h-16 sm:h-[100px] shadow-sky-100 dark:shadow-slate-700 bg-opacity-95 dark:bg-opacity-95",
              scrollTop === 0
                ? ""
                : "bg-white dark:bg-slate-900 sm:bg-sky-50 sm:dark:bg-slate-800 shadow"
            )}
          >
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16 sm:h-[100px]">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars4Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <Link href="/" passHref>
                      <div className="flex flex-row zoom-hover-center text-3xl text-sky-500 dark:text-green cursor-pointer">
                        <span>&#123;</span>
                        <span className="text-2xl pt-1">VM</span>
                        <span>&#125;</span>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => handleOnClick(item)}
                          className={classNames(
                            currentSection[item.name]
                              ? "text-sky-500 dark:text-green"
                              : "",
                            "zoom-hover-top px-3 py-2 text-xs hover:text-sky-500 dark:hover:text-green cursor-pointer"
                          )}
                        >
                          <span className="text-sky-500 dark:text-green pr-1">
                            {item.id}.
                          </span>
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <ThemeDropdown />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-4 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className={classNames(
                    currentSection[item.name]
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  <span className="text-green pr-1">{item.id}.</span>
                  <span>{item.name}</span>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
