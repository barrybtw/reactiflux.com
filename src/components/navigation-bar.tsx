import { cn } from "@/lib/utils";
import Link from "next/link";

type Link = {
  href: string;
  label: string;
};
const links: Link[] = [
  { href: "/", label: "Learn" },
  { href: "/", label: "Tips" },
  { href: "/", label: "Q&A Schedule" },
  { href: "/", label: "Transcripts" },
  { href: "/", label: "Code of Conduct" },
  { href: "/", label: "Jobs" },
  { href: "/", label: "Contact" },
];

export function NavigationBar() {
  return (
    <>
      <nav
        className={cn(
          "flex lg:w-4/5 w-full h-14 mx-auto my-4 justify-between items-center px-8"
        )}
      >
        <Link href={"/"}>
          <img
            src="/reactiflux.svg"
            alt="Reactiflux identity"
            height={32}
            width={32}
            className="animate-spin-slow"
          />
        </Link>
        <ul className="items-center gap-4 lg:gap-8 md:flex hidden">
          {links.map(({ href, label }) => {
            return (
              <Link
                href={href}
                className="hover:text-white text-gray-400 transition-colors duration-300 font-poppins"
              >
                {label}
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
