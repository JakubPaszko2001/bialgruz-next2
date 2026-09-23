import Link from "next/link";

// Wizualne okruszki (breadcrumbs) — spójne z JSON-LD BreadcrumbList.
// items: [{ name, path }] — pierwszy element to zwykle strona główna.
export default function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;
  return (
    <nav aria-label="Ścieżka nawigacji" className="px-6 pt-6 sm:px-[60px]">
      <ol className="mx-auto flex w-full max-w-[1300px] flex-wrap items-center gap-2 text-[12px] uppercase tracking-[1.5px] text-white/45">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-brand-yellow">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="transition-colors hover:text-white">
                    {item.name}
                  </Link>
                  <span aria-hidden className="text-white/25">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
