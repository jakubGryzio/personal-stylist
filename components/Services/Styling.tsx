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
      <section id="капсульний_гардероб" className={`${classes.section}`}>
        <Container>
          <h1 className="text-center">КАПСУЛЬНИЙ ГАРДЕРОБ</h1>
          <Row>
            <Col className={`${classes.image}`}>
              <Image src={styling1} alt="My values" priority />
              <Image src={styling2} alt="My values" priority />
            </Col>
            <Col className={`${classes.description}`}>
              <h2>ДЛЯ КОГО ?</h2>
              <ul>
                <li>
                  Для жінок, яких взагалі не надихає їхній гардероб і вони б
                  хотіли його оновити. Ця послуга для вас, якщо ви прагнете
                  кардинально змінити свій гардероб та стиль та мати гардероб у
                  якому всі речі поєднуються між собою.
                </li>
              </ul>
              <h2>ЩО ВИ ОТРИМАЄТЕ ?</h2>
              <ul>
                <li>Опис ваших ліній зовнішності, пропорцій та типу фігури.</li>
                <li>
                  Рекомендації, завдяки яким ви зможете створювати як найвдаліші
                  образи.
                </li>
                <li>
                  Шопінг - лист з речами, та різними альтернативними варіантами
                  до кожного виробу.
                </li>
                <li>
                  Капсульний гардероб, який буде охоплювати ваш характер, спосіб
                  життя, та вподобання.
                </li>
                <li>
                  З речей підібраних мною для вас, сформовані 30-50 образів, які
                  будуть гармонійні з вами.
                </li>
              </ul>
              <h2>ФОРМАТ РОБОТИ</h2>
              <ul>
                <li>Капсульний гардероб проводиться лише онлайн.</li>
                <li>
                  Ми працюємо над конкретним сезоном (осінь-зима або
                  весна-літо).
                </li>
                <li>Ви проходити анкету та стильовий тест.</li>
                <li>Ми зустрічаємося з вами на 15-ти хвилиній зустрічі</li>
                <li>
                  Протягом 7 днів, від початку нашої співпраці, я формую для вас
                  файл, де буде розписана інформація щодо вашого типу фігури,
                  ліній зовнішності, рекомендації щодо створення цікавих
                  образів, шопінг - лист та сформовані для вас образи.
                </li>
                <li>Я надсилаю вам файл, який назавжди залишається з вами.</li>
              </ul>
              <h2>ВАРТІСТЬ</h2>
              <ul>
                <li>100 $</li>
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
