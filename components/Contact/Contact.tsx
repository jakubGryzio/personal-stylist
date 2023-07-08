import React from "react";
import { Container, Row } from "reactstrap";
import classes from "./contact.module.css";

const Contact = () => {
  return (
    <section id="контакти" className={`${classes.section}`}>
      <Row className={`${classes.contact}`}>
        <h1>КОНТАКТИ</h1>
        <div className={`${classes.contact__item}`}>
          <div className={`${classes.item__title}`}>ІНСТАГРАМ</div>
          <div className={`${classes.item__description}`}>ustyna.skrypets</div>
        </div>
        <div className={`${classes.contact__item}`}>
          <div className={`${classes.item__title}`}>ПОШТА</div>
          <div className={`${classes.item__description}`}>
            ustyna.sk@gmail.com
          </div>
        </div>
        <div className={`${classes.contact__item}`}>
          <div className={`${classes.item__title}`}>ТЕЛЕГРАМ</div>
          <div className={`${classes.item__description}`}>ustynaskrypets</div>
        </div>
      </Row>
      <Container>
        <Row className={`${classes.form}`}>
          <h4>ЗАЛИШИЛИСЯ ДОДАТКОВІ ПИТАННЯ ?</h4>
          <p>залиште свої дані та коментар і я одразу з вами зв’яжуся.</p>
          <form className={classes.form__section}>
            <div className={classes.form__group}>
              <input type="text" placeholder="Ім’я" required></input>
            </div>
            <div className={classes.form__group}>
              <input type="tel" placeholder="Телефон" required></input>
            </div>
            <div className={classes.form__group}>
              <input type="email" placeholder="Email"></input>
            </div>
            <div className={classes.form__group}>
              <textarea rows={5} placeholder="Коментар"></textarea>
            </div>
          </form>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
