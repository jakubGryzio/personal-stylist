import React from "react";
import { Col, Container, Row } from "reactstrap";
import footer from "../../public/images/wardrobe_1.jpg";
import Image from "next/image";
import classes from "./services.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <h2>КОНСУЛЬТАЦІЯ</h2>
            <ul>
              <li>
                Якщо ви сумніваєтеся, яку послугу краще обрати, ми можемо
                зустрітися з вами на 20-ти хвилину консультацію, де я допоможу
                вам з вибором послуги та дам відповіді на всі цікаві вам
                питання.
              </li>
              <li>
                Консультація є повністю безкоштовною та не зобов’язує вас
                купляти послуги.
              </li>
            </ul>
          </Col>
          <Col lg="6" md="6">
            {/* <Image src={footer} alt="Footer" priority /> */}
          </Col>
        </Row>
      </Container>
      <p>
        для замовлення послуги або консультації пишіть мені в інстаграм або
        телеграм
      </p>
    </footer>
  );
};

export default Footer;
