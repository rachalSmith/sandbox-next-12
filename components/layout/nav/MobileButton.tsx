import { useEffect, useRef } from "react";

interface IMobileButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const MobileButton = ({ isMenuOpen, setIsMenuOpen }: IMobileButtonProps) => {
  const button = useRef<HTMLButtonElement | null>(null);

  const closeMenu = (e: Event) => {
    if (
      !!button.current &&
      !button.current.contains(e.target as HTMLButtonElement)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("mousedown", closeMenu);
    };
  });
  return (
    <button
      ref={button}
      type="button"
      className=" text-stone-50 hover:text-white focus:text-white focus:outline-none"
      onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
    >
      <span className="sr-only">
        Navigation Menu {isMenuOpen ? "Open" : "Closed"}
      </span>
      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
        {isMenuOpen ? (
          <path
            fill-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        ) : (
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        )}
      </svg>
    </button>
  );
};

export default MobileButton;
