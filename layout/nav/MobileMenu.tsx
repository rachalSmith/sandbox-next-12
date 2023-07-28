import NavLinks from "./NavLinks";

interface IMobileMenu {
  isMenuOpen: boolean;
}

const MobileMenu = ({ isMenuOpen }: IMobileMenu) => {
  return (
    <div
      className={`fixed right-0 top-12 w-48 h-[calc(100%-theme(space.12))] bg-sky-900 p-4 ${
        isMenuOpen ? "transform-none" : "translate-x-[100%]"
      } ease-in duration-300`}
    >
      <ul className="flex flex-col gap-4 items-center">
        <NavLinks />
      </ul>
    </div>
  );
};

export default MobileMenu;
