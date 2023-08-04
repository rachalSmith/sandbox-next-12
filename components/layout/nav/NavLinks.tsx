import Link from "next/link";
import { useRouter } from "next/router";

interface INavLinks {
  linkTitle: string;
  linkHref: string;
}

const navLinks: INavLinks[] = [
  { linkTitle: "Home", linkHref: "/" },
  { linkTitle: "About", linkHref: "/about" },
  { linkTitle: "Forms", linkHref: "/forms" },
  { linkTitle: "C", linkHref: "/c" },
];

interface INavLinksProps {}

const NavLinks = ({}: INavLinksProps) => {
  const router = useRouter();

  const getClassNamesForCurrentPage = (
    link: string,
    currentPage: string
  ): string => {
    const currentPageClass = "underline underline-offset-4 decoration-2";

    return link === currentPage ? currentPageClass : "";
  };

  return (
    <>
      {navLinks.map((link) => (
        <li
          key={link.linkHref}
          className={`text-white font-semibold hover:underline underline-offset-4 decoration-2 
          ${getClassNamesForCurrentPage(link.linkHref, router.pathname)}`}
        >
          <Link href={link.linkHref}>{link.linkTitle}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
