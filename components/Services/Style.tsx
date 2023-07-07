import React, { Fragment } from "react";
import classes from "./services.module.css";
import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import style1 from "../../public/images/style_1.jpg";
import style2 from "../../public/images/style_2.jpg";
import Footer from "./Footer";

const Style = () => {
  return (
    <Fragment>
      <section className={`${classes.section}`}>
        <Container>
          <h1 className="text-center">КАРТА СТИЛЮ</h1>
          <Row>
            <Col className={`${classes.image}`}>
              <Image src={style1} alt="My values" priority />
              <Image src={style2} alt="My values" priority />
            </Col>
            <Col className={`${classes.description}`}>
              <h2>ДЛЯ КОГО ?</h2>
              <ul>
                <li>
                  Для жінок, які хочуть дізнатися, які фасони, комбінації,
                  кольори, поєднання у одязі їм підходять. Ця послуга для вас,
                  якщо ви заблукали у пошуках власного стилю, а кожен ваш похід
                  в магазин засмучує, бо ви не знаєте, що вам підходить.
                </li>
              </ul>
              <h2>ЩО ВИ ОТРИМАЄТЕ ?</h2>
              <ul>
                <li>Опис ваших ліній зовнішності, пропорцій та типу фігури.</li>
                <li>
                  Детальні рекомендації щодо вибору фасону кожного виробу
                  (плечові вироби, поясні вироби, аксесуари, взуття, верхній
                  одяг)
                </li>
                <li>Рекомендації, щодо поєднання кольорів та принту.</li>
                <li>Рекомендації, щодо вибору пропорцій, довжин, поєднань</li>
                <li>
                  Дізнаєтеся, які стилі найбільше виражені у вашому стильовому
                  векторі та які комбінації, фасони, вироби у цих стилях
                  найгармонійніші з вами.
                </li>
                <li>
                  4 сформованих спеціально для вас образів, з активними
                  посиланнями на кожну річ.
                </li>
                <li>Підбірка магазинів, які будуть найкращими для вас.</li>
              </ul>
              <h2>ФОРМАТ РОБОТИ </h2>
              <ul>
                <li>Карта стилю проводиться лише онлайн.</li>
                <li>Ви проходити анкету та стильовий тест.</li>
                <li>
                  Протягом 7 днів, я формую спеціальний для вас файл, який
                  назавжди залишиться з вами, де буде вся інформація, яка
                  перечислена у підпункті ‘ЩО ВИ ОТРИМАЄТЕ ?’.
                </li>
                <li>
                  Через 7 днів або в інший заздалегідь зафіксований день, ми
                  зустрінемося з вами на онлайн зустріч, на якій я детально
                  розказуватиму всю інформацію, яка є у файлі і даватиму
                  відповідь на ваші питання.Тривалість зустрічі : 1 - 1,5
                  години. Також, за вашим бажанням, ми можемо не проводити
                  зустріч.
                </li>
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

export default Style;
