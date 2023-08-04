interface IOutlineButtonProps {
  children: React.ReactNode | string;
  colour: string;
  disabled: boolean;
  onClick: () => Promise<boolean>;
}

const OutlineButton = ({
  children,
  colour,
  disabled,
  onClick,
}: IOutlineButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-${colour}-700 hover:text-white border border-${colour}-700 hover:bg-${colour}-800 focus:ring-1 focus:outline-none focus:ring-${colour}-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-${colour}-500 dark:text-${colour}-500 dark:hover:text-white dark:hover:bg-${colour}-500 dark:focus:ring-${colour}-800`}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
