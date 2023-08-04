import Container from "../../components/layout/Container";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: ILayoutProps) => {
  return (
    <Container>
      <div className="flex flex-col border rounded m-4 p-4 min-w-[400px] max-w-[800px] shadow-lg">
        <h1 className="flex justify-center mb-2 font-bold text-xl">{title}</h1>
        {children}
      </div>
    </Container>
  );
};

export default Layout;
