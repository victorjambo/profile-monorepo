import Lovers from "./lovers.mdx";
import Makers from "./makers.mdx";

export interface LogMeta {
  title: string;
  tags?: string[];
  slug?: string;
  description?: string;
  component: () => JSX.Element;
}

export type LogsMeta = Record<string, LogMeta>;

export const LogPages = {
  0: "lovers-and-friends",
  1: "makers-of-nations",
};

export const logs: LogsMeta = {
  [LogPages[0]]: {
    title: "tell lovers and friends",
    tags: ["react", "ruby"],
    slug: LogPages[0],
    component: () => <Lovers />,
  },
  [LogPages[1]]: {
    title: "makers of nations",
    description: "dummy desc to test",
    tags: ["typescript", "AWS"],
    slug: LogPages[1],
    component: () => <Makers />,
  },
};
