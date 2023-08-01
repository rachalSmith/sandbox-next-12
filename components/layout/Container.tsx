import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <main className="container mx-auto px-4 flex justify-center">
      {children}
    </main>
  );
};

export default Container;
