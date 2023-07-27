interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      Anything that needs to be displayed everywhere, like the navbar or global
      modals {children}
    </>
  );
};

export default Layout;
