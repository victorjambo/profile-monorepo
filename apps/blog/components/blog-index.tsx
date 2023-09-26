import { getPagesUnderRoute } from "nextra/context";
import filterRouteLocale from "nextra/filter-route-locale";
import Link from "next/link";
import { useRouter } from "next/router";
import type { PageMapItem } from "nextra";
import type { PageMap } from "models";

export default function BlogIndex(): JSX.Element {
  const { locale, defaultLocale } = useRouter();
  const routes = filterRouteLocale(
    getPagesUnderRoute("/blog"),
    locale ?? "en",
    defaultLocale ?? "en"
  );

  return (
    <div>
      {routes.map((page: PageMap<PageMapItem>) => (
        <div className="mb-10" key={page.route}>
          <h3>
            <Link
              className="block font-semibold mt-8 text-2xl "
              href={page.route}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {page.meta.title || page.frontMatter.title || page.name}
            </Link>
          </h3>
          <p className="opacity-80 mt-6 leading-7 text-red-500">
            {page.frontMatter.description}{" "}
            <span className="inline-block">
              <Link
                className="text-[color:hsl(var(--nextra-primary-hue),100%,50%)] underline underline-offset-2 decoration-from-font"
                href={page.route}
              >
                Read more →
              </Link>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
