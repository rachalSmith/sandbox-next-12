import Link from "next/link";

interface INavLinks {
  linkTitle: string;
  linkHref: string;
}

const navLinks: INavLinks[] = [
  { linkTitle: "Home", linkHref: "/" },
  { linkTitle: "A", linkHref: "/a" },
  { linkTitle: "B", linkHref: "/b" },
  { linkTitle: "C", linkHref: "/c" },
];

interface INavLinksProps {}

const NavLinks = ({}: INavLinksProps) => {
  return (
    <>
      {navLinks.map((link) => (
        <li key={link.linkHref} className="text-white font-bold">
          <Link href={link.linkHref}>
            <button>{link.linkTitle}</button>
          </Link>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
