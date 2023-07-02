import { NextPage } from "next";
import Image from "next/image";
import intro from "../../public/images/intro.jpg";
import classes from "./intro.module.css";
import { Fragment } from "react";
import { Col, Container, Row } from "reactstrap";

const Intro: NextPage = () => {
  return (
    <Fragment>
      <Image
        className={`${classes.intro__image}`}
        priority
        src={intro}
        alt="Intro"
      />
      <Container>
        <Row>
          <Col className="d-flex align-items-end">
            <div className={`${classes.intro__descritpion}`}>
              <p>
                вирішу всі ваші гардеробні проблеми та допоможу знайти гармонію
                зі своїм одягом
              </p>
            </div>
          </Col>
          <Col>
            <div className={`${classes.intro__title}`}>
              <div className={`${classes.intro__name}`}>
                <h1>УСТИНА</h1>
                <h1>СКРИПЕЦЬ</h1>
              </div>
              <p>ваш персональний стиліст</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Intro;
