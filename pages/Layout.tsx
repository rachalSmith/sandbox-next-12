import NavBar from "../components/layout/nav/NavBar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="bg-neutral-50 h-screen w-screen">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
