import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
