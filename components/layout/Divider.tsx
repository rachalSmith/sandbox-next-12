const Divider = ({
  text,
  className,
}: {
  text: string | React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{text}</span>
      <div className="flex-grow border-t border-gray-400"></div>
    </div>
  );
};

export default Divider;
