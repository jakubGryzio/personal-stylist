import React from "react";
import { Col, Container, Row } from "reactstrap";
import about from "../../public/images/about.jpg";
import Image from "next/image";
import classes from "./about.module.css";

const About = () => {
  return (
    <section id="про_мене" className={`${classes.section}`}>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.about__image}`}>
            <Image src={about} alt="About me"></Image>
          </Col>
          <Col lg="6" md="6" className={`${classes.about__list}`}>
            <h1>Я ПЕРЕКОНАНА, ЩО</h1>
            <ul>
              <li>
                <span>стиль</span> - це про внутрішню гармонію з собою.
              </li>
              <li>
                <span>стиль</span> - це про любов до себе.
              </li>
              <li>
                <span>стиль</span> - це про пошуки себе.
              </li>
              <li>
                <span>стиль</span> - це про впевненість в собі.
              </li>
              <li>
                <span>стиль</span> - це про мистецтво.
              </li>
              <li>
                <span>стиль</span> - це про відображення внутрішнього стану.
              </li>
              <li>
                <span>стиль</span> - це про комфорт.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
