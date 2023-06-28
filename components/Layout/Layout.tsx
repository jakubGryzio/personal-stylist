import { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Props } from "../../interfaces/props";

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
