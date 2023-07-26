import React, { FormEvent, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import classes from "./contact.module.css";
import { FormProps } from "../../interfaces/formProps";
import { Snackbar, Alert } from "@mui/material";

const Contact = () => {
  const nameInputElement = useRef<HTMLInputElement | null>(null);
  const socialInputElement = useRef<HTMLInputElement | null>(null);
  const emailInputElement = useRef<HTMLInputElement | null>(null);
  const commentInputElement = useRef<HTMLTextAreaElement | null>(null);

  const [open, setOpen] = useState(false);
  const [successSending, setSuccessSending] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: FormProps = {
      name: nameInputElement.current?.value,
      social: socialInputElement.current?.value,
      email: emailInputElement.current?.value,
      comment: commentInputElement.current?.value,
    };

    try {
      await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      setOpen(true);
      setSuccessSending(true);
    } catch (error) {
      console.error(error);
      setSuccessSending(false);
    }

    nameInputElement.current!.value! = "";
    socialInputElement.current!.value! = "";
    emailInputElement.current!.value! = "";
    commentInputElement.current!.value! = "";
  };

  return (
    <section id="contacts" className={`${classes.section}`}>
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
          <form
            onSubmit={(e) => formHandler(e)}
            className={classes.form__section}
          >
            <div className={classes.form__group}>
              <input
                ref={nameInputElement}
                type="text"
                placeholder="Ім’я"
                required
              ></input>
            </div>
            <div className={classes.form__group}>
              <input
                ref={socialInputElement}
                type="text"
                placeholder="Нікнейм у інстаграмі/телеграмі"
                required
              ></input>
            </div>
            <div className={classes.form__group}>
              <input
                ref={emailInputElement}
                type="email"
                placeholder="Email"
              ></input>
            </div>
            <div className={classes.form__group}>
              <textarea
                ref={commentInputElement}
                rows={5}
                placeholder="Коментар"
              ></textarea>
            </div>
            <button type="submit">НАДІСЛАТИ</button>
          </form>
        </Row>
      </Container>
      {successSending && (
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{
              fontWeight: "medium",
              fontFamily: "Montserrat",
              fontSize: "1rem",
            }}
          >
            Електронна пошта успішно надіслана
          </Alert>
        </Snackbar>
      )}
      {!successSending && (
        <Snackbar
          open={open}
          autoHideDuration={1000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{
              fontWeight: "medium",
              fontFamily: "Montserrat",
              fontSize: "1rem",
            }}
          >
            Електронна пошта не була успішно надіслана
          </Alert>
        </Snackbar>
      )}
    </section>
  );
};

export default Contact;
