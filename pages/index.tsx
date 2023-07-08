import type { NextPage } from "next";
import { Fragment } from "react";
import Intro from "../components/Intro/Intro";
import About from "../components/About/About";
import Values from "../components/Values/Values";
import Transition from "../components/Transition/Transition";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Intro />
      <About />
      <Values />
      <Transition />
      <Services />
      <Contact />
    </Fragment>
  );
};

export default Home;
