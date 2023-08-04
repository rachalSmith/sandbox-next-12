interface IFilledButtonProps {
  children: React.ReactNode | string;
  colour: string;
  disabled: boolean;
  onClick: () => Promise<boolean>;
}

const FilledButton = ({
  children,
  colour,
  disabled,
  onClick,
}: IFilledButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`text-white bg-${colour}-700 hover:bg-${colour}-800 focus:ring-4 focus:ring-${colour}-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-${colour}-600 dark:hover:bg-${colour}-700 focus:outline-none dark:focus:ring-${colour}-800`}
    >
      {children}
    </button>
  );
};

export default FilledButton;
