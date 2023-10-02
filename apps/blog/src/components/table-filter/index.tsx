import { Menu } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";

export default function TableFilter(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter");
  const isUnpublished = filter === "unpublished";
  const tags = searchParams.get("tags");
  const isFilteredByTags = Boolean(tags);

  return (
    <Menu as="div" className="relative inline-block text-right">
      <Menu.Button className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md h-8 w-8 px-0">
        <EllipsisHorizontalIcon className="w-5 h-5 bg-slate-100 dark:bg-slate-900 rounded" />
      </Menu.Button>
      <Menu.Items className="absolute top-5 right-1.5 mt-2 min-w-[8rem] divide-y rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-popover text-on-popover border">
        {isUnpublished || isFilteredByTags ? (
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "font-semibold" : "font-normal"
                } group flex w-full items-center px-2 py-2 text-sm`}
                onClick={() => {
                  router.push("/logs");
                }}
                type="button"
              >
                published
              </button>
            )}
          </Menu.Item>
        ) : (
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "font-semibold" : "font-normal"
                } group flex w-full items-center px-2 py-2 text-sm`}
                onClick={() => {
                  router.push("/logs?filter=unpublished");
                }}
                type="button"
              >
                unpublished
              </button>
            )}
          </Menu.Item>
        )}
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "font-semibold" : "font-normal"
              } group flex w-full items-center px-2 py-2 text-sm`}
              onClick={() => {
                router.push("/logs?filter=external");
              }}
              type="button"
            >
              external
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
