import React from "react";
import { Container, Row } from "reactstrap";
import Image from "next/image";
import classes from "./transition.module.css";
import tranistion1 from "../../public/images/transition_1.png";
import tranistion2 from "../../public/images/transition_2.png";
import tranistion3 from "../../public/images/transition_3.png";
import tranistion4 from "../../public/images/transition_4.png";
import arrow from "../../public/images/arrow.svg";

const Transition = () => {
  return (
    <section className={`${classes.section}`}>
      <Container>
        <div className={`${classes.row}`}>
          <h1>ПОСЛУГИ ТА</h1>
          <h1>ВАРТІСТЬ</h1>
          <Image
            className={`${classes.image__nw}`}
            src={tranistion1}
            alt="Transition 1"
          />
          <Image
            className={`${classes.image__ne}`}
            src={tranistion2}
            alt="Transition 2"
          />
          <Image
            className={`${classes.image__sw}`}
            src={tranistion3}
            alt="Transition 3"
          />
          <Image
            className={`${classes.image__se}`}
            src={tranistion4}
            alt="Transition 4"
          />
          <Image
            className={`${classes.image__arrow}`}
            src={arrow}
            alt="Arrow"
          />
        </div>
      </Container>
    </section>
  );
};

export default Transition;
