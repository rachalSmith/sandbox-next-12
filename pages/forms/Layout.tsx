import Container from "../../components/layout/Container";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <Container>
      <div className="flex flex-col bg-white border rounded m-4 p-4 w-[460px] max-w-[1000px] shadow-lg">
        <h1 className="flex justify-center mb-2 font-bold text-xl">{title}</h1>
        {children}
      </div>
    </Container>
  );
};

export default Layout;
