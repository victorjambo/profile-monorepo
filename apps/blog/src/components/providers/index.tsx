import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "shared-data";
import { ResponsiveImage } from "./image";
import { Callout } from "./callout";

const ProviderComponents = {
  img: ResponsiveImage,
  Image: ResponsiveImage,
  Callout,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className ?? "")} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className ?? "")}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className ?? ""
      )}
      {...props}
    />
  ),
  td: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className ?? ""
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={`mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4 ${
        className ?? ""
      }`}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className ?? "")} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground ${
        className ?? ""
      }`}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXProvider({ code }: MdxProps): JSX.Element {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-xl">
      <Component components={ProviderComponents} />
    </article>
  );
}
