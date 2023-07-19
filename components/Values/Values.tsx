import Image from "next/image";
import values from "../../public/images/values.jpg";
import { Col, Container, Row } from "reactstrap";
import classes from "./values.module.css";

const Values = () => {
  return (
    <section className={`${classes.section}`}>
      <Container>
        <Row>
          <Col lg="7" md="6" className={`${classes.values__list}`}>
            <div className={`${classes.values__list_title}`}>
              <h1>МОЇ ЦІННОСТІ У РОБОТІ З ВАМИ </h1>
            </div>
            <ol>
              <li>
                <p>
                  я поважаю кожен ваш вибір та смак, навіть, якщо вони не
                  входять у мої вподобання
                </p>
              </li>
              <li>
                <p>
                  я віддаюся роботі на максимум та надаю послугу якнайякісніше,
                  адже це є головним для мене
                </p>
              </li>
              <li>
                <p>
                  я прагну, щоб ви та я, приємно та корисно провели разом час та
                  отримали крутий результат
                </p>
              </li>
              <li>
                <p>я працюю з будь - яким ціновим сегментом</p>
              </li>
              <li>
                <p>я в ніякому разі не буду вас засуджувати</p>
              </li>
            </ol>
          </Col>
          <Col lg="5" md="6" className={classes.values__image}>
            <Image src={values} alt="My values" priority />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Values;
