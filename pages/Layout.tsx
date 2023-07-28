import NavBar from "../components/layout/nav/NavBar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
