import React, { Fragment } from "react";
import classes from "./services.module.css";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import wardrobe1 from "../../public/images/wardrobe_1.jpg";
import wardrobe2 from "../../public/images/wardrobe_2.jpg";
import Footer from "./Footer";

const Wardrobe = () => {
  return (
    <Fragment>
      <section className={`${classes.section}`}>
        <Container>
          <h1 className="text-center">РОЗБІР ГАРДЕРОБУ</h1>
          <Row>
            <Col className={`${classes.image}`}>
              <Image src={wardrobe1} alt="My values" priority />
              <Image src={wardrobe2} alt="My values" priority />
            </Col>
            <Col className={`${classes.description}`}>
              <h2>ДЛЯ КОГО ?</h2>
              <ul>
                <li>
                  Для жінок, чия шафа заповнена багатьма речами, які вас вже не
                  надихають та які ви не носите, Ця послуга для вас, якщо
                  покупки нових речей, ніяк не змінюють ваш гардероб, ви
                  прагнете стильно одягатися та мати гардероб, який
                  використовуватимете на 100 відсотків.
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
                  Розбір вашого гардеробу, на декілька категорій: речі, які не
                  підходять вашому типу фігури, пропорціям, речі, які втратили
                  товарний вигляд, речі, які не підходять вашому способу життя
                  та вподобанням.
                </li>
                <li>
                  Шопінг-лист з речами, які я рекомендую оновити чи докупити,
                  які доповнять ваш гардероб, зроблять його свіжим та
                  актуальним. До кожного виробу буде декілька альтернативних
                  варіантів з посиланнями.
                </li>
                <li>
                  Сформовані образи, які будуть підходити вам по характеру,
                  звичкам, вподобанням та будуть гармонійні з вами. Це допоможе
                  зекономити час на думки ‘що одягнути’, бо ви будете мати
                  одразу актуальні та цікаві комбінації.
                </li>
              </ul>
              <h2>ЩО ВИ ОТРИМАЄТЕ ?</h2>
              <ul>
                <li>
                  Розбір гардеробу проводиться онлайн, також офлайн, але лише у
                  Варшаві.
                </li>
                <li>
                  Ми працюємо над конкретним сезоном (осінь-зима або
                  весна-літо).
                </li>
                <li>Ви проходите анкету та стильовий тест.</li>
                <li>Ми зустрічаємося з вами на 15-ти хвилиній зустрічі</li>
                <li>
                  Протягом 3 годин я розбираю ваш гардероб. (розбір гардеробу
                  офлайн)
                </li>
                <li>
                  Протягом 3 днів ви надсилаєте фото своїх речей. (розбір
                  гардеробу онлайн)
                </li>
                <li>
                  Протягом 7 днів, я створюю та надішлюю файл, який назавжди
                  залишається з вами, де буде розписана вся інформація щодо
                  вибору речей, сформовані образи та шопінг-лист.
                </li>
                <li>
                  Час роботи офлайн - 3 години, якщо у вас великий гардероб,
                  кожна наступна година оплачується додатково : 1 година - 10 $
                </li>
              </ul>
              <h2>ВАРТІСТЬ</h2>
              <ul>
                <li>100 $ - онлайн</li>
                <li>100$ - офлайн за 3 години</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Wardrobe;
