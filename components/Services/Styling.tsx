import React, { Fragment } from "react";
import classes from "./services.module.css";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import styling1 from "../../public/images/styling_1.jpg";
import styling2 from "../../public/images/styling_2.jpg";
import Footer from "./Footer";

const Styling = () => {
  return (
    <Fragment>
      <section id="stylization_of_shooting" className={`${classes.section}`}>
        <Container>
          <h1 className="text-center">СТИЛІЗАЦІЯ ЗЙОМКИ</h1>
          <Row>
            <Col lg="6" md="6" className={`${classes.image}`}>
              <Image src={styling1} alt="My values" priority />
              <Image src={styling2} alt="My values" priority />
            </Col>
            <Col lg="6" md="6" className={`${classes.description}`}>
              <h2>ДЛЯ КОГО ?</h2>
              <ul>
                <li>
                  Для жінок, які не хочуть витрачати час на пошуки речей та
                  комбінування їх у цікавий, для фотосесії, образ. Ця послуга
                  для вас, якщо ви любити виглядати яскраво та стильно.
                </li>
              </ul>
              <h2>ЩО ВИ ОТРИМАЄТЕ ?</h2>
              <ul>
                <li>
                  Образ,який буде відповідати настрої зйомці, підходити вашому
                  типі фігури та ліній зовнішності та буде гармонійний з вами.
                </li>
              </ul>
              <h2>ФОРМАТ РОБОТИ</h2>
              <ul>
                <li>
                  Стилізація зйомки проводиться онлайн, також офлайн, але лише у
                  Варшаві.
                </li>
                <li>Ви проходите анкету та стильовий тест.</li>
                <li>я створюю настрій образу, формую мудборд.</li>
                <li>
                  Формую 3+ образів на вибір з активним посиланням на кожну річ
                  або з речей, які вже є у вашому гардеробі.(онлайн стилізація
                  зйомки)
                </li>
                <li>
                  Формую 3+ образів з нових речей або які вже є у вашому
                  гардеробі. Ми домовляємося про конкретний образ і я принесу
                  його вам у студію (офлайн стилізація зйомки).
                </li>
              </ul>
              <h2>ВАРТІСТЬ</h2>
              <ul>
                <li>
                  50 $ - 1 образ з яким я приїду до вас у студію і вас не
                  прийдеться турбуватися про доставку виробів та їхнє
                  транспортування (офлайн)
                </li>
                <li>
                  25 $ - 3+ образи з активними посиланннями або з наявними
                  речами з вашого гардеробу (онлайн)
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Styling;
