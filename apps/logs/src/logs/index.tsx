import Lovers from "./lovers.mdx";
import Makers from "./makers.mdx";

export const logs: Record<string, () => JSX.Element> = {
  lovers: () => <Lovers />,
  makers: () => <Makers />,
};
