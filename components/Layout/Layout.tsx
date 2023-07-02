import { Fragment, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Props } from "../../interfaces/props";
import Menu from "../Menu/Menu";

const Layout = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Fragment>
      <Menu toggleSlide={setShowMenu} showSlide={showMenu} />
      <Header toggleSlide={setShowMenu} />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
