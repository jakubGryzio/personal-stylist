import React, { Fragment } from "react";
import classes from "./services.module.css";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import subscription from "../../public/images/subscription_1.jpg";
import subscription2 from "../../public/images/subscription_2.jpg";
import Footer from "./Footer";

const Subscription = () => {
  return (
    <Fragment>
      <section className={`${classes.section}`}>
        <Container>
          <h1 className="text-center">АБОНЕМЕНТ НА МІСЯЦЬ</h1>
          <Row>
            <Col className={`${classes.image}`}>
              <Image src={subscription} alt="My values" priority />
              <Image src={subscription2} alt="My values" priority />
            </Col>
            <Col className={`${classes.description}`}>
              <h2>ДЛЯ КОГО ?</h2>
              <ul>
                <li>
                  Для жінок, які не хочуть робити сумнівні купівлі, які бажають
                  створювати цікаві та стильні образи. Ця послуга для вас, якщо
                  у вас багато питань, під час щоденних збирань та у магазині,
                  коли ви обираєте, що найкраще підійде у ваш гардероб.
                </li>
              </ul>
              <h2>ЩО ВИ ОТРИМАЄТЕ ?</h2>
              <ul>
                <li>
                  Зв’язок зі мною 24/7, де ви можете запитувати все, що вас
                  давно турбувало у власному стилі.
                </li>
                <li>
                  Допомогу при створенні гармонійного образу, що значно
                  полегшить ваші щоденні збирання.
                </li>
                <li>
                  Допомогу при купівлі речей, я розкажу наскільки ця річ
                  актуальна для вашого гардеробу та відповідає вашому стилю.
                </li>
                <li>
                  Вміння та навички, які завдяки нашій щоденній взаємодії ви
                  отримаєте від мене.
                </li>
                <li>
                  Дізнаєтеся, який у вас тип фігури, ліній зовнішності та
                  стильовий вектор.
                </li>
                <li>
                  Отримаєте рекомендації для створення гармонійного образу.
                </li>
              </ul>
              <h2>ФОРМАТ РОБОТИ</h2>
              <ul>
                <li>Абонемент на місяць можливий лише онлайн</li>
                <li>Ви проходите анкету та стильовий тест.</li>
                <li>
                  Ми зустрічаємося з вами на 15-ти хвилину онлайн зустріч
                  обговорити головні деталі.
                </li>
                <li>
                  Протягом 3 днів, я надсилаю вам файл, у якому буде вся
                  інформація про ваш тип фігури, пропорції, лінії зовнішності та
                  рекомендації для створення найкращих образів.
                </li>
                <li>
                  Протягом 31 дня з початку нашої співпраці ви можете
                  запитувати, просити допомоги про все, що пов’язано з одягом та
                  стилем.
                </li>
                <li>
                  З моєю допомогою ви будете формувати стильні образи та купляти
                  ті речі, які не просто відповідатимуть вашій фігурі та стилю,
                  а й способу життя та характер.
                </li>
              </ul>
              <h2>ВАРТІСТЬ</h2>
              <ul>
                <li>90 $ - онлайн, термін дії абонементу 31 день.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Subscription;
